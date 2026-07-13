import { writings } from "@/data/writings";
import WritingCard from "./WritingCard";

export default function WritingsList() {

  return (
    <section className="max-w-7xl mx-auto px-8 mt-20 pb-24">


      <div className="flex items-center justify-between mb-8">

        <h2 className="text-3xl font-bold text-slate-900">
          All Writings
        </h2>


        <p className="text-slate-500">
          Complete chronological archive
        </p>

      </div>



      <div className="space-y-8">

        {writings.map((writing) => (

          <WritingCard
            key={writing.id}
            writing={writing}
          />

        ))}

      </div>


    </section>
  );
}