import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AchievementCard from "@/components/journey/AchievementCard";
import { publicSpeakingAchievements } from "@/data/leadership/public-speaking";

export default function PublicSpeakingPage() {
  return (
    <>
      <Navbar />

      <main className="bg-stone-100 min-h-screen">

        <section className="max-w-6xl mx-auto px-8 pt-20 text-center">

          <Image
            src="/journey/leadership/public-speaking-cover.jpg"
            alt="Public Speaking"
            width={100}
            height={100}
            className="mx-auto h-24 w-auto"
          />

          <p className="uppercase tracking-[0.4em] text-yellow-600 text-sm font-semibold mt-8">
            Leadership, Service & Volunteering
          </p>

          <h1 className="text-5xl font-bold text-slate-900 mt-5">
            Public Speaking & Events
          </h1>

          <p className="mt-5 text-xl text-slate-600">
            Seminars, Events, Presentations, Teaching & Hosting
          </p>

        </section>

        <section className="max-w-5xl mx-auto px-8 mt-16">

          <div className="bg-white rounded-3xl shadow-md p-10">

            <p className="text-lg leading-8 text-slate-700">
              Leadership has been one of the most defining aspects of my journey.
              From serving as School Head Boy and School President to leading the
              SWSC Management Club, every responsibility taught me to communicate
              effectively, work with people, make decisions under pressure and
              serve with integrity. These experiences continue to shape both my
              personal growth and professional aspirations.
            </p>

          </div>

        </section>

        <section className="max-w-5xl mx-auto px-8 py-20 space-y-10">

          {publicSpeakingAchievements.map((achievement) => (

            <AchievementCard
              key={achievement.title}
              achievement={achievement}
            />

          ))}

        </section>

        <section className="max-w-5xl mx-auto px-8 pb-24">

  <div>

    <p className="text-sm text-slate-500">
      Previous Category
    </p>

    <Link
      href="/journey/leaderships/leadership"
      className="mt-2 inline-block text-lg font-semibold text-slate-900 hover:text-yellow-600 transition"
    >
      ← Leadership
    </Link>

  </div>

  <div className="text-right">

    <p className="text-sm text-slate-500">
      Next Category
    </p>

    <Link
      href="/journey/leaderships/innovation"
      className="mt-2 inline-block text-lg font-semibold text-slate-900 hover:text-yellow-600 transition"
    >
      Innovation & Entrepreneurship →
    </Link>

  </div>

</section>

      </main>

      <Footer />
    </>
  );
}