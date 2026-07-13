import Link from "next/link";
import { writings } from "@/data/writings";
import WritingCard from "./WritingCard";

export default function EditorsPicks() {

  const featuredWritings = writings
    .filter((writing) => writing.featured)
    .slice(0, 5);


  return (
    <section className="max-w-7xl mx-auto px-8 mt-20 pb-10">


      <div className="flex items-center justify-between">

        <h2 className="text-3xl font-bold text-slate-900">
          ⭐ Editor's Picks
        </h2>


        <p className="text-slate-500">
          Handpicked featured works
        </p>

      </div>



      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10">


        {featuredWritings.map((writing) => (

          <WritingCard
            key={writing.id}
            writing={writing}
            variant="featured"
          />

        ))}



        <Link
          href="/writings/archive"
          className="
            bg-slate-900
            text-white
            rounded-2xl
            flex
            flex-col
            items-center
            justify-center
            text-center
            p-10
            hover:bg-slate-800
            transition
            min-h-[420px]
          "
        >

          <div className="text-6xl">
            📚
          </div>


          <h3 className="text-3xl font-bold mt-6">
            View More
          </h3>


          <p className="mt-4 text-slate-300 leading-7">
            Browse the complete collection of writings.
          </p>


        </Link>



      </div>


    </section>
  );
}