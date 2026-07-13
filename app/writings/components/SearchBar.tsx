"use client";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({
  search,
  setSearch,
}: SearchBarProps) {
  return (
    <div className="relative w-full">

      <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 text-xl">
      </span>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by title, topic, category, language..."
        className="
          w-full
          rounded-2xl
          border
          border-slate-300
          bg-white
          pl-14
          pr-6
          py-4
          text-lg
          text-slate-900
          placeholder:text-slate-500
          shadow-sm
          transition
          focus:border-yellow-500
          focus:ring-2
          focus:ring-yellow-500
          focus:outline-none
        "
      />

    </div>
  );
}