import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function EducationPage() {
  return (
    <>
      <Navbar />

      <main className="bg-stone-100 min-h-screen">

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-8 pt-20 pb-12 text-center">

          <p className="uppercase tracking-[0.4em] text-yellow-600 text-sm font-semibold">
            Education
          </p>

          <h1 className="text-5xl font-bold text-slate-900 mt-5">
            Every classroom shaped my journey.
          </h1>

          <p className="mt-5 text-xl text-slate-600 max-w-3xl mx-auto">
            From my first day in Play Group to my current studies in
            Management, each institution has contributed to my growth,
            learning, and experiences.
          </p>

        </section>

        {/* Schools */}
        <section className="max-w-6xl mx-auto px-8 pb-20 grid md:grid-cols-2 gap-8">

          {/* Navajeewan */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

            <p className="text-yellow-600 font-semibold uppercase text-sm">
              2067 BS – 2081 BS
            </p>

            <h2 className="text-3xl font-bold mt-3 text-slate-900">
              Navajeewan School & College
            </h2>

            <p className="mt-5 text-slate-700 leading-8">
              My educational journey began at Lunar English Boarding School,
              which later became part of Navajeewan School & College through
              institutional mergers. I completed my SEE here before the
              institution was renamed Aarambha Academy.
            </p>

            <Link
              href="/education/navajeewan"
              className="inline-block mt-8 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition"
            >
              Read More
            </Link>

          </div>

          {/* Southwestern */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

            <p className="text-yellow-600 font-semibold uppercase text-sm">
              2081 BS – 2083 BS
            </p>

            <h2 className="text-3xl font-bold mt-3 text-slate-900">
              Southwestern State Secondary School
            </h2>
            <p className="mt-2 text-lg text-slate-600">
    Management Stream (Business Studies)
  </p>

            <p className="mt-5 text-slate-700 leading-8">
              I pursued my higher secondary education (+2)
              in the Management stream. This chapter includes leadership,
              learning, tour, seminars, MUN, competitions, and many unforgettable
              experiences.
            </p>

            <Link
              href="/education/swsc"
              className="inline-block mt-8 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition"
            >
              Read More
            </Link>

          </div>
{/* Southwestern State College */}
<div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

  <p className="text-yellow-600 font-semibold uppercase text-sm">
    2083 BS – Present
  </p>

  <h2 className="text-3xl font-bold mt-3 text-slate-900">
    Southwestern State College
  </h2>

  <p className="mt-2 text-lg text-slate-600">
    Bachelor of Business Management (BBM)
  </p>

  <p className="mt-5 text-slate-500 italic leading-8">
    This chapter of my academic journey is yet to begin.
  </p>

  <Link
    href="/education/bbm"
    className="inline-block mt-8 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition"
  >
    Read More
  </Link>

</div>
        </section>

      </main>

      <Footer />
    </>
  );
}