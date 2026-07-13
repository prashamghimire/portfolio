import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function JourneyPage() {
  return (
    <>
      <Navbar />

      <main className="bg-stone-100 min-h-screen">

        <section className="max-w-6xl mx-auto px-8 pt-20 text-center">

          <p className="uppercase tracking-[0.4em] text-yellow-600 text-sm font-semibold">
            My Journey
          </p>

          <h1 className="text-5xl font-bold text-slate-900 mt-5">
            Education & Leadership
          </h1>

          <p className="mt-5 text-xl text-slate-600">
            The institutions, experiences and responsibilities that have shaped my journey.
          </p>

        </section>

        {/* Academic Journey */}

        <section className="max-w-6xl mx-auto px-8 py-20">

          <h2 className="text-3xl font-bold text-slate-900 mb-10">
            Academic Journey
          </h2>

<div className="grid md:grid-cols-2 gap-8">

                      {/* Lunar */}

            <div className="bg-white rounded-3xl shadow-md p-8 text-center">

              <Image
                src="/journey/lunarr.png"
                alt="Lunar English Boarding School"
                width={200}
                height={200}
                className="mx-auto h-auto"
              />

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Lunar English Boarding School
              </h3>

              <p className="mt-3 text-slate-600">
                2067 – 2078 B.S.
              </p>

              <p className="mt-1 text-slate-600">
                Basic Level Education (BLE)
              </p>

              <Link
                href="/journey/lunar"
                className="inline-block mt-8 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl transition"
              >
                View Memories →
              </Link>
            </div>

            {/* Navajeewan */}

            <div className="bg-white rounded-3xl shadow-md p-8 text-center">

              <Image
                src="/journey/navajeewan.png"
                alt="
                
                Navajeewan School & College"
                width={1500}
                height={900}
                className="mx-auto h-auto"
              />

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Navajeewan School & College
              </h3>

              <p className="mt-3 text-slate-600">
                2079 – 2080/81 B.S.
              </p>

              <p className="mt-1 text-slate-600">
                Secondary Education Examination (SEE)
              </p>

              <Link
                href="/journey/navajeewan"
                className="inline-block mt-8 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl transition"
              >
                View Memories →
              </Link>

            </div>

            {/* Southwestern Secondary */}

            <div className="bg-white rounded-3xl shadow-md p-8 text-center">

              <Image
                src="/journey/swsss.png"
                alt="Southwestern State Secondary School"
                width={1300}
                height={900}
                className="mx-auto h-auto"
              />

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Southwestern State Secondary School
              </h3>

              <p className="mt-3 text-slate-600">
                2081 – 2083 B.S.
              </p>

              <p className="mt-1 text-slate-600">
                +2 Management
              </p>

              <Link
  href="/journey/swsss"
  className="inline-block mt-8 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl transition"
>
  View Memories →
</Link>

            </div>

            {/* Southwestern College */}

            <div className="bg-white rounded-3xl shadow-md p-8 text-center">

              <Image
                src="/journey/swsc.jpg"
                alt="Southwestern State College"
                width={300}
                height={300}
                className="mx-auto h-auto"
              />

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Southwestern State College
              </h3>

              <p className="mt-3 text-slate-600">
                2083 B.S. – Present
              </p>

              <p className="mt-1 text-slate-600">
                Bachelor of Business Management (TU)
              </p>

              <Link
                href="/journey/swsc"
                className="inline-block mt-8 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl transition"
              >
                View Memories →
              </Link>

            </div>
</div>
          

        </section>

        {/* Leadership */}

        <section className="max-w-6xl mx-auto px-8 pb-24">

          <h2 className="text-3xl font-bold text-slate-900 mb-10">
            Leadership and Service Journey
          </h2>

          <div className="bg-white rounded-3xl shadow-md p-10">

            <p className="text-lg leading-8 text-slate-700">
              This section will document my leadership roles, seminars,
              volunteering experiences, event management, public speaking,
              organisational responsibilities, and other contributions.
            </p>

            <Link
              href="/journey/leaderships"
              className="inline-block mt-8 bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-xl transition"
            >
              Explore More →
            </Link>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}