import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AchievementCard from "@/components/journey/AchievementCard";
import { innovationAchievements } from "@/data/leadership/innovation";
export default function InnovationPage() {
  return (
    <>
      <Navbar />

      <main className="bg-stone-100 min-h-screen">

        <section className="max-w-6xl mx-auto px-8 pt-20 text-center">

          <Image
            src="/journey/leadership/innovation-cover.jpg"
            alt="Innovation & Entrepreneurship"
            width={100}
            height={100}
            className="mx-auto h-24 w-auto"
          />

          <p className="uppercase tracking-[0.4em] text-yellow-600 text-sm font-semibold mt-8">
            Leadership, Service & Volunteering
          </p>

          <h1 className="text-5xl font-bold text-slate-900 mt-5">
            Innovation & Entrepreneurship
          </h1>

          <p className="mt-5 text-xl text-slate-600">
            Seminars, Events, Presentations, Teaching & Hosting
          </p>

        </section>

        <section className="max-w-5xl mx-auto px-8 mt-16">

          <div className="bg-white rounded-3xl shadow-md p-10">

            <p className="text-lg leading-8 text-slate-700">
              Innovation and entrepreneurship have been central to my growth and development.
              Through various projects, competitions, and initiatives, I have learned to think creatively,
              identify opportunities, and turn ideas into actionable plans. These experiences have equipped me
              with the skills and mindset necessary for driving innovation in any environment.
            </p>

          </div>

        </section>

        <section className="max-w-5xl mx-auto px-8 py-20 space-y-10">

          {innovationAchievements.map((achievement) => (

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
      href="/journey/leaderships/public-speaking"
      className="mt-2 inline-block text-lg font-semibold text-slate-900 hover:text-yellow-600 transition"
    >
      ← Public Speaking & Events
    </Link>

  </div>

  <div className="text-right">

    <p className="text-sm text-slate-500">
      Next Category
    </p>

    <Link
      href="/journey/leaderships/community-service"
      className="mt-2 inline-block text-lg font-semibold text-slate-900 hover:text-yellow-600 transition"
    >
      Community Service & Volunteering →
    </Link>

  </div>

</section>

      </main>

      <Footer />
    </>
  );
}