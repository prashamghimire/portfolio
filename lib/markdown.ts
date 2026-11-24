import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

function calculateReadingTime(content: string) {
  const words = content
    .replace(/[#>*`\-\n]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 200));
}

export async function renderMarkdown(markdown: string) {
  const { content } = matter(markdown);
  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();

  return {
    htmlContent,
    readingTime: calculateReadingTime(content),
  };
}

export async function getMarkdownContent(filePath: string) {
  const fullPath = path.join(process.cwd(), "content", filePath);
  const file = fs.readFileSync(fullPath, "utf8");
  return renderMarkdown(file);
}
