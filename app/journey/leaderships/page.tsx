import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sections = [
  {
    title: "Leadership",
    description:
      "Leadership positions and responsibilities that shaped my character.",
    image: "/journey/leadership-cover.jpg",
    href: "/journey/leaderships/leadership",
  },
  {
    title: "Public Speaking & Events",
    description:
      "Seminars, quizzes, presentations, teaching and hosting.",
    image: "/journey/public-speaking-cover.jpg",
    href: "/journey/leaderships/public-speaking",
  },
  {
    title: "Innovation & Entrepreneurship",
    description:
      "Business ideas, entrepreneurship and innovation experiences.",
    image: "/journey/innovation-cover.png",
    href: "/journey/leaderships/innovation",
  },
  {
    title: "Community Service",
    description:
      "Volunteering, blood donation and community engagement.",
    image: "/journey/community-service.jpg",
    href: "/journey/leaderships/community-service",
  },
];

export default function LeadershipsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-stone-100 min-h-screen">

        <section className="max-w-6xl mx-auto px-8 pt-20 text-center">

          <p className="uppercase tracking-[0.4em] text-yellow-600 text-sm font-semibold">
            Leadership, Service & Volunteering
          </p>

          <h1 className="text-5xl font-bold text-slate-900 mt-5">
            Beyond Academics
          </h1>

          <p className="mt-5 text-xl text-slate-600 max-w-3xl mx-auto">
            A collection of leadership roles, public speaking, innovation,
            entrepreneurship and community service experiences that have shaped
            my journey beyond academics.
          </p>

        </section>

        <section className="max-w-6xl mx-auto px-8 py-20">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {sections.map((section) => (

              <Link
                key={section.title}
                href={section.href}
                className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition group"
              >

                <div className="relative h-56">

                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />

                </div>

                <div className="p-7">

                  <h2 className="text-2xl font-bold text-slate-900">
                    {section.title}
                  </h2>

                  <p className="mt-3 text-slate-600 leading-7">
                    {section.description}
                  </p>

                  <p className="mt-6 font-semibold text-yellow-600">
                    Explore →
                  </p>

                </div>

              </Link>

            ))}

            <Link
              href="/journey"
              className="bg-slate-900 text-white rounded-3xl p-10 flex flex-col justify-center hover:bg-black transition"
            >

              <h2 className="text-2xl font-bold">
                Back to Academic Journey
              </h2>

              <p className="mt-3 text-slate-300">
                Continue exploring my educational journey and achievements.
              </p>

              <p className="mt-8 font-semibold">
                ← Back to Journey
              </p>

            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}