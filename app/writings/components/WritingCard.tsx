import Link from "next/link";

import { Writing } from "@/data/writings";


interface WritingCardProps {
  writing: Writing;
  variant?: "featured" | "list";
}


const categoryIcons: Record<string, string> = {
  "Speech": "🎤",
  "Debate Script": "⚖️",
  "Essay": "📄",
  "Article": "📰",
  "Poem": "📜",
  "Reflection": "💭",
  "Journal": "📖",
  "Book Review": "📚",
};


export default function WritingCard({
  writing,
  variant = "list",
}: WritingCardProps) {


  const icon =
    categoryIcons[writing.category] || "✒️";


  const Cover = () => (

    writing.cover ? (

      <img
        src={writing.cover}
        alt={writing.title}
        className="w-full h-full object-cover"
      />

    ) : (

      <div className="w-full h-full flex items-center justify-center text-5xl bg-slate-200">

        {icon}

      </div>

    )

  );


  if (variant === "featured") {

    return (

      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">


        <div className="h-48">

          <Cover />

        </div>


        <div className="p-6">


          <p className="text-yellow-600 text-sm font-semibold uppercase">

            {writing.category}

          </p>


          <h3 className="text-xl font-bold mt-2 text-slate-900">

            {writing.title}

          </h3>


          <div className="mt-3 text-sm text-slate-600">

            🌐 {writing.language}
            {" • "}
            {writing.published}

          </div>


          <Link
  href={`/writings/${writing.slug}`}
  className="inline-block mt-5 font-semibold text-slate-900 hover:text-yellow-600 transition"
>
  Read →
</Link>


        </div>


      </div>

    );
  }



  return (

    <div className="bg-white rounded-2xl shadow-md p-6 flex gap-8 hover:shadow-xl transition">


      <div className="w-48 h-36 rounded-xl overflow-hidden shrink-0">

        <Cover />

      </div>



      <div className="flex-1">


        <h3 className="text-2xl font-bold text-slate-900">

          {writing.title}

        </h3>


        <p className="text-yellow-600 font-semibold mt-2">

          {writing.category}

        </p>


        <div className="mt-3 text-sm text-slate-600">

          🌐 {writing.language}
          {" • "}
          📅 {writing.published}

        </div>


        <div className="flex flex-wrap gap-2 mt-4">

          {writing.topics.map((topic) => (

            <span
              key={topic}
              className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs"
            >

              #{topic}

            </span>

          ))}

        </div>



        <p className="mt-4 text-slate-600 leading-7">

          {writing.summary}

        </p>



        <Link
          href={`/writings/${writing.slug}`}
          className="inline-block mt-5 font-semibold text-slate-900 hover:text-yellow-600 transition"
        >

          Read →

        </Link>


      </div>


    </div>

  );
}