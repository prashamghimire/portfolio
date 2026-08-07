import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AchievementCard from "@/components/journey/AchievementCard";
import { swscAchievements } from "@/data/journey/swsc";

export default function SWSCPage() {
  return (
    <>
      <Navbar />

      <main className="bg-stone-100 min-h-screen">

        <section className="max-w-6xl mx-auto px-8 pt-20 text-center">

          <Image
            src="/journey/swsc.jpg"
            alt="Southwestern State College"
            width={1500}
            height={150}
            className="mx-auto h-50 w-auto"
          />

          <p className="uppercase tracking-[0.4em] text-yellow-600 text-sm font-semibold mt-8">
            Academic Journey
          </p>

          <h1 className="text-5xl font-bold text-slate-900 mt-5">
            Southwestern State College
          </h1>

          <p className="mt-5 text-xl text-slate-600">
            2083 B.S. - Present
          </p>

        </section>

        <section className="max-w-5xl mx-auto px-8 mt-16">

          <div className="bg-white rounded-3xl shadow-md p-10">

            <p className="text-lg leading-8 text-slate-700">
              I hope my time at Southwestern State College will be a transformative experience, further developing my academic and leadership skills. I hope to take on increasing responsibilities, contribute to various academic initiatives, and continue to grow as a student and future professional.
            </p>

          </div>

        </section>

        <section className="max-w-5xl mx-auto px-8 py-20 space-y-10">

          {swscAchievements.map((achievement) => (

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
      href="/journey/swsss"
      className="mt-2 inline-block text-lg font-semibold text-slate-900 hover:text-yellow-600 transition"
    >
      ← Southwestern State Secondary School
    </Link>
</div>
</section>

</main>
      <Footer />
    </>
  );
}