"use client";

import { writings } from "@/data/writings";

interface FiltersProps {
  topic: string;
  setTopic: (value: string) => void;

  category: string;
  setCategory: (value: string) => void;

  language: string;
  setLanguage: (value: string) => void;
}

export default function Filters({
  topic,
  setTopic,
  category,
  setCategory,
  language,
  setLanguage,
}: FiltersProps) {

  const categories = Array.from(
    new Set(writings.map((writing) => writing.category))
  ).sort();

  const topics = Array.from(
    new Set(
      writings.flatMap((writing) => writing.topics)
    )
  ).sort();

  return (
    <div className="flex flex-wrap gap-4">

      {/* Topic */}

      <select
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 shadow-sm hover:border-yellow-500 focus:border-yellow-500 focus:outline-none"
      >

        <option value="All Topics">
          All Topics
        </option>

        {topics.map((topic) => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}

      </select>


      {/* Category */}

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 shadow-sm hover:border-yellow-500 focus:border-yellow-500 focus:outline-none"
      >

        <option value="All Categories">
          All Categories
        </option>

        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}

      </select>


      {/* Language */}

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 shadow-sm hover:border-yellow-500 focus:border-yellow-500 focus:outline-none"
      >

        <option value="All Languages">
          All Languages
        </option>

        <option value="English">
          English
        </option>

        <option value="नेपाली">
          नेपाली
        </option>

      </select>

    </div>
  );
}