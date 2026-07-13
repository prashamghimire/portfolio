import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="bg-stone-100 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Photo */}
        {/* Photo */}
<div className="flex justify-center">
  <div className="relative w-80 h-80 rounded-full border-8 border-yellow-400 shadow-2xl overflow-hidden bg-white">

    <Image
      src="/images/profile/portrait.png"
      alt="Portrait of Prasham Ghimire"
      fill
      priority
      className="object-cover"
    />

  </div>
</div>

        {/* Text */}
        <div>

          <p className="uppercase tracking-[0.35em] text-yellow-600 text-sm font-semibold">
            Welcome
          </p>

          <h1 className="text-6xl font-bold text-slate-900 mt-4 leading-tight">
            Prasham Ghimire
          </h1>

          <h2 className="mt-4 text-2xl text-slate-600">
            A digital archive of learning, experiences, achievements,
            writings, and memories.
          </h2>

          <p className="mt-8 text-lg text-slate-600 leading-8 max-w-xl">
            This website documents my journey through school, college,
            volunteering, work, leadership experiences, writings,
            and the people who have been part of my life.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
  href="/about"
  className="bg-slate-900 hover:bg-slate-800 text-white px-7 py-3 rounded-lg transition font-semibold"
>
  Explore My Journey
</Link>

            <Link
  href="/writings"
  className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-7 py-3 rounded-lg transition font-semibold"
>
  Browse My Writings
</Link>

          </div>

        </div>

      </div>
    </section>
    
  );
}