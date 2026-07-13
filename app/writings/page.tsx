import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import EditorsPicks from "./components/EditorsPicks";
import WritingsArchive from "./components/WritingsArchive";

export default function WritingsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-stone-100 min-h-screen">

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-8 pt-20 text-center">

          <p className="uppercase tracking-[0.4em] text-yellow-600 text-sm font-semibold">
            Writings
          </p>

          <h1 className="text-5xl font-bold text-slate-900 mt-5">
            Words that reflect my thoughts.
          </h1>

          <p className="mt-6 text-xl text-slate-600 leading-8 max-w-3xl mx-auto">
            This archive brings together my speeches, debates, essays,
            reflections, poems, articles, journals, and other written works.
          </p>
          
        </section>

        {/* Editor's Picks */}
        <EditorsPicks />

        {/* All Writings */}
        <WritingsArchive />

      </main>

      <Footer />
    </>
  );
}