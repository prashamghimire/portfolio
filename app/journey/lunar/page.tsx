import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import AchievementCard from "@/components/journey/AchievementCard";

import { lunarAchievements } from "@/data/journey/lunar";

export default function LunarJourneyPage() {
  return (
    <>
      <Navbar />

      <main className="bg-stone-100 min-h-screen">

        <section className="max-w-6xl mx-auto px-8 pt-20 text-center">

  <Image
    src="/journey/lunarr.png"
    alt="Lunar English Boarding School"
    width={200}
    height={200}
    className="mx-auto h-50 w-auto"
  />

  <p className="uppercase tracking-[0.4em] text-yellow-600 text-sm font-semibold mt-8">
    Academic Journey
  </p>

<h1 className="text-5xl font-bold text-slate-900 mt-4">
  Lunar English Boarding School
</h1>

<p className="mt-4 text-xl text-slate-700 font-medium">
  Achievements & Milestones
</p>

<p className="mt-3 text-slate-600">
  2067 – 2078 B.S.
</p>

<div className="mt-10 bg-white rounded-3xl shadow-md p-8">

  <p className="text-lg leading-8 text-slate-700">

    Lunar English Boarding School laid the foundation of my academic
    journey. I spent eleven formative years here, where I received my
    first certificate, discovered my passion for quiz competitions,
    and gradually developed the confidence to participate beyond the
    classroom. Many of the values, discipline, and curiosity that
    continue to guide me today began during my years at Lunar.

  </p>

</div>

<div className="mt-10 h-px bg-slate-300"></div>

        </section>

        <section className="max-w-5xl mx-auto px-8 py-12">
          <div className="space-y-10">

            {lunarAchievements.map((achievement) => (

              <AchievementCard
                key={achievement.title}
                achievement={achievement}
              />

            ))}

          </div>

        </section>

<section className="max-w-5xl mx-auto px-8 pb-24">

  <div className="text-right">

    <p className="text-sm text-slate-500">
      Next Institution
    </p>

    <Link
      href="/journey/navajeewan"
      className="mt-2 inline-block text-lg font-semibold text-slate-900 hover:text-yellow-600 transition"
    >
      Navajeewan School & College →
    </Link>

  </div>

</section>
      </main>

      <Footer />
    </>
  );
}