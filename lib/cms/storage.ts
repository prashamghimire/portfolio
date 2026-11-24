import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const REPO = process.env.CMS_GITHUB_REPO || "prashamghimire/portfolio";
const BRANCH = process.env.CMS_GITHUB_BRANCH || "main";
const API_ROOT = "https://api.github.com";

type ContentFile = {
  content: string;
  sha?: string;
};

function githubHeaders() {
  const token = process.env.CMS_GITHUB_TOKEN;
  if (!token) {
    throw new Error(
      "CMS_GITHUB_TOKEN is not configured. Set it to enable saving in production."
    );
  }
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "prasham-cms",
  };
}

function contentUrl(filePath: string) {
  const encoded = filePath
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");
  return `${API_ROOT}/repos/${REPO}/contents/${encoded}?ref=${encodeURIComponent(
    BRANCH
  )}`;
}

async function readFromGithub(filePath: string): Promise<ContentFile> {
  const response = await fetch(contentUrl(filePath), {
    headers: githubHeaders(),
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(
      `GitHub read failed for ${filePath}: ${response.status} ${await response.text()}`
    );
  }
  const data = (await response.json()) as {
    content?: string;
    sha?: string;
  };
  if (typeof data.content !== "string") {
    throw new Error(`GitHub file ${filePath} has no content.`);
  }
  return {
    content: Buffer.from(data.content, "base64").toString("utf8"),
    sha: data.sha,
  };
}

async function localPath(filePath: string) {
  const [root, ...rest] = filePath.split("/");
  if (root === "data") return path.join(process.cwd(), "data", ...rest);
  if (root === "public") return path.join(process.cwd(), "public", ...rest);
  throw new Error(`Unsupported CMS file path: ${filePath}`);
}

export async function readTextFile(filePath: string) {
  if (process.env.CMS_GITHUB_TOKEN) {
    return (await readFromGithub(filePath)).content;
  }
  return readFile(await localPath(filePath), "utf8");
}

export async function readJsonFile<T>(filePath: string): Promise<T> {
  const content = await readTextFile(filePath);
  return JSON.parse(content) as T;
}

export async function writeTextFile(
  filePath: string,
  content: string,
  message: string
) {
  if (process.env.CMS_GITHUB_TOKEN) {
    let sha: string | undefined;
    try {
      sha = (await readFromGithub(filePath)).sha;
    } catch {
      // File may not exist yet; create it without sha.
    }

    const response = await fetch(
      `${API_ROOT}/repos/${REPO}/contents/${filePath
        .split("/")
        .map((part) => encodeURIComponent(part))
        .join("/")}`,
      {
        method: "PUT",
        headers: {
          ...githubHeaders(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          content: Buffer.from(content, "utf8").toString("base64"),
          branch: BRANCH,
          ...(sha ? { sha } : {}),
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `GitHub write failed for ${filePath}: ${response.status} ${await response.text()}`
      );
    }
    return;
  }

  const target = await localPath(filePath);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, content, "utf8");
}

export async function writeJsonFile<T>(
  filePath: string,
  data: T,
  message: string
) {
  await writeTextFile(filePath, JSON.stringify(data, null, 2) + "\n", message);
}

export async function writeBinaryFile(
  filePath: string,
  buffer: Buffer,
  message: string
) {
  if (process.env.CMS_GITHUB_TOKEN) {
    let sha: string | undefined;
    try {
      sha = (await readFromGithub(filePath)).sha;
    } catch {
      // New file.
    }

    const response = await fetch(
      `${API_ROOT}/repos/${REPO}/contents/${filePath
        .split("/")
        .map((part) => encodeURIComponent(part))
        .join("/")}`,
      {
        method: "PUT",
        headers: {
          ...githubHeaders(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          content: buffer.toString("base64"),
          branch: BRANCH,
          ...(sha ? { sha } : {}),
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `GitHub upload failed for ${filePath}: ${response.status} ${await response.text()}`
      );
    }
    return;
  }

  const target = await localPath(filePath);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, buffer);
}

export function isGithubConfigured() {
  return Boolean(process.env.CMS_GITHUB_TOKEN);
}
