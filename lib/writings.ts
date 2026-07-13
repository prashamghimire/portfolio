import fs from "fs/promises";
import path from "path";

import matter from "gray-matter";

import { remark } from "remark";
import html from "remark-html";

export async function getWritingContent(contentPath: string) {
  const fullPath = path.join(
    process.cwd(),
    "data",
    "content",
    contentPath
  );

  const file = await fs.readFile(fullPath, "utf8");

  const { content } = matter(file);

  const processed = await remark()
    .use(html)
    .process(content);

  return processed.toString();
}