import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AchievementCard from "@/components/journey/AchievementCard";
import { swsssAchievements } from "@/data/journey/swsss";

export default function SWSSSPage() {
  return (
    <>
      <Navbar />

      <main className="bg-stone-100 min-h-screen">

        <section className="max-w-6xl mx-auto px-8 pt-20 text-center">

          <Image
            src="/journey/swsss.png"
            alt="Southwestern State Secondary School"
            width={1500}
            height={150}
            className="mx-auto h-50 w-auto"
          />

          <p className="uppercase tracking-[0.4em] text-yellow-600 text-sm font-semibold mt-8">
            Academic Journey
          </p>

          <h1 className="text-5xl font-bold text-slate-900 mt-5">
            Southwestern State Secondary School
          </h1>

          <p className="mt-5 text-xl text-slate-600">
            2081 – 2083 B.S.
          </p>

        </section>

        <section className="max-w-5xl mx-auto px-8 mt-16">

          <div className="bg-white rounded-3xl shadow-md p-10">

            <p className="text-lg leading-8 text-slate-700">
              My +2 years at Southwestern State Secondary School marked a major turning point in my personal and leadership journey. I stepped into larger responsibilities, served as President of the SWSC Management Club, organized major academic events, delivered seminars, participated in Model United Nations, and developed confidence in leadership, communication, and management while pursuing higher secondary education in the Management stream.
            </p>

          </div>

        </section>

        <section className="max-w-5xl mx-auto px-8 py-20 space-y-10">

          {swsssAchievements.map((achievement) => (

            <AchievementCard
              key={achievement.title}
              achievement={achievement}
            />

          ))}

        </section>

      

<section className="max-w-5xl mx-auto px-8 pb-24">

  <div>

    <p className="text-sm text-slate-500">
      Previous Institution
    </p>

    <Link
      href="/journey/navajeewan"
      className="mt-2 inline-block text-lg font-semibold text-slate-900 hover:text-yellow-600 transition"
    >
      ← Navajeewan School & College
    </Link>

  </div>

  <div className="text-right">

    <p className="text-sm text-slate-500">
      Next Institution
    </p>

    <Link
      href="/journey/swsc"
      className="mt-2 inline-block text-lg font-semibold text-slate-900 hover:text-yellow-600 transition"
    >
      Southwestern State College →
    </Link>

  </div>

</section>

</main>
      <Footer />
    </>
  );
}