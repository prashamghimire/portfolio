import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AchievementCard from "@/components/journey/AchievementCard";
import { navajeewanAchievements } from "@/data/journey/navajeewan";

export default function NavajeewanPage() {
  return (
    <>
      <Navbar />

      <main className="bg-stone-100 min-h-screen">

        <section className="max-w-6xl mx-auto px-8 pt-20 text-center">

          <Image
            src="/journey/navajeewan.png"
            alt="Navajeewan School & College"
            width={100}
            height={100}
            className="mx-auto h-24 w-auto"
          />

          <p className="uppercase tracking-[0.4em] text-yellow-600 text-sm font-semibold mt-8">
            Academic Journey
          </p>

          <h1 className="text-5xl font-bold text-slate-900 mt-5">
            Navajeewan School & College
          </h1>

          <p className="mt-5 text-xl text-slate-600">
            2079 – 2080/81 B.S.
          </p>

        </section>

        <section className="max-w-5xl mx-auto px-8 mt-16">

          <div className="bg-white rounded-3xl shadow-md p-10">

            <p className="text-lg leading-8 text-slate-700">
              Navajeewan School & College transformed me from an active participant into a student leader. During my SEE years, I served as School Headboy, Secretary General of the Children's Club, and later President of the School. These experiences strengthened my leadership, responsibility, and confidence while continuing my pursuit of academic and co-curricular excellence.
            </p>

          </div>

        </section>

        <section className="max-w-5xl mx-auto px-8 py-20 space-y-10">

          {navajeewanAchievements.map((achievement) => (

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
    href="/journey/lunar"
    className="mt-2 inline-block text-lg font-semibold text-slate-900 hover:text-yellow-600 transition"
  >
    ← Lunar English Boarding School
  </Link>

</div>

<div className="text-right">

  <p className="text-sm text-slate-500">
    Next Institution
  </p>

  <Link
    href="/journey/swsss"
    className="mt-2 inline-block text-lg font-semibold text-slate-900 hover:text-yellow-600 transition"
  >
    Southwestern State Secondary School →
  </Link>

</div>

</section>

      </main>

      <Footer />
    </>
  );
}