import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function getMarkdownContent(
  filePath: string
) {
  const fullPath = path.join(
    process.cwd(),
    "content",
    filePath
  );

  const file = fs.readFileSync(
    fullPath,
    "utf8"
  );

  const { content } = matter(file);

  const processed = await remark()
    .use(html)
    .process(content);

  const htmlContent = processed.toString();
  console.log(htmlContent);

  // Reading Time
  const words = content
    .replace(/[#>*`\-\n]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const readingTime = Math.max(
    1,
    Math.ceil(words / 200)
  );

  return {
    
    htmlContent: processed.toString(),
    readingTime,
  };
}
