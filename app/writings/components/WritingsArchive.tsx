"use client";

import { useMemo, useState } from "react";

import { writings } from "@/data/writings";

import Filters from "./Filters";
import SearchBar from "./SearchBar";
import WritingCard from "./WritingCard";

export default function WritingsArchive() {
  const [search, setSearch] = useState("");

  const [topic, setTopic] = useState("All Topics");
  const [category, setCategory] = useState("All Categories");
  const [language, setLanguage] = useState("All Languages");

  const filteredWritings = useMemo(() => {
    return writings
      .filter((writing) => {
        const matchesSearch =
          search.trim() === "" ||
          writing.title.toLowerCase().includes(search.toLowerCase()) ||
          writing.category.toLowerCase().includes(search.toLowerCase()) ||
          writing.language.toLowerCase().includes(search.toLowerCase()) ||
          writing.topics.some((topic) =>
            topic.toLowerCase().includes(search.toLowerCase())
          );

        const matchesTopic =
          topic === "All Topics" ||
          writing.topics.includes(topic);

        const matchesCategory =
          category === "All Categories" ||
          writing.category === category;

        const matchesLanguage =
          language === "All Languages" ||
          (language === "नेपाली"
            ? writing.language === "Nepali"
            : writing.language === language);

        return (
          matchesSearch &&
          matchesTopic &&
          matchesCategory &&
          matchesLanguage
        );
      })
      .sort(
        (a, b) =>
          new Date(b.published).getTime() -
          new Date(a.published).getTime()
      );
  }, [search, topic, category, language]);

  return (
    <section className="max-w-7xl mx-auto px-8 mt-20 pb-24">

      <h2 className="text-4xl font-bold text-slate-900">
        All Writings
      </h2>

      <p className="mt-2 text-slate-600">
        Complete chronological archive
      </p>

      {/* Search */}
      <div className="mt-8">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>

      {/* Filters */}
      <div className="mt-6 flex justify-end">
        <Filters
          topic={topic}
          setTopic={setTopic}
          category={category}
          setCategory={setCategory}
          language={language}
          setLanguage={setLanguage}
        />
      </div>

      {/* Results Count */}
      <p className="mt-6 text-slate-500">
        {filteredWritings.length} writing
        {filteredWritings.length !== 1 && "s"} found
      </p>

      {/* Writing Cards */}
      <div className="space-y-8 mt-6">
        {filteredWritings.map((writing) => (
          <WritingCard
            key={writing.id}
            writing={writing}
          />
        ))}
      </div>

    </section>
  );
}