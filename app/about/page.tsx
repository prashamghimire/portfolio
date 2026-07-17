import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-stone-100 min-h-screen">

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-8 pt-20 pb-14 text-center">

          <p className="uppercase tracking-[0.4em] text-yellow-600 text-sm font-semibold">
            About Me
          </p>

          <h1 className="text-5xl font-bold text-slate-900 mt-5">
            Every person has a story.
          </h1>

          <p className="mt-5 text-xl text-slate-600">
            This page shares mine.
          </p>

        </section>

        {/* Biography */}
        <section className="max-w-6xl mx-auto px-8 py-10 grid md:grid-cols-2 gap-16 items-center">

          <div className="flex justify-center">
  <div className="rounded-3xl border-4 border-yellow-400 p-2 bg-white shadow-2xl hover:scale-105 transition duration-300">
    <Image 
      src="/images/profile/about.png"
      alt="Portrait of Prasham Ghimire"
      width={340}
      height={430}
      priority
      className="rounded-2xl object-cover"
    />
      </div>
</div> 

          {/* Bio */}
          <div>

            <h2 className="text-3xl font-bold text-slate-900">
              Biography
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              Welcome! My name is <strong>Prasham Ghimire</strong>.
              I was born in Kathmandu, Nepal, and I am currently pursuing
              my higher secondary education in Management.
            </p>

            <p className="mt-5 leading-8 text-slate-700">
              This website serves as a personal archive where I document
              my journey, experiences, achievements, writings, photographs,
              and the people who have been part of my life.
            </p>

          </div>

        </section>

        {/* Personal Information */}
        <section className="max-w-6xl mx-auto px-8 py-16">

          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

  <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
    <p className="text-sm font-semibold text-slate-500">Birth Date</p>
    <p className="mt-2 text-lg font-medium text-slate-900">9 January 2008</p>
  </div>

  <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
    <p className="text-sm font-semibold text-slate-500">Birth Place</p>
    <p className="mt-2 text-lg font-medium text-slate-900">Kathmandu, Nepal</p>
  </div>

  <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
    <p className="text-sm font-semibold text-slate-500">Nationality</p>
    <p className="mt-2 text-lg font-medium text-slate-900">Nepalese</p>
  </div>

  <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
    <p className="text-sm font-semibold text-slate-500">Languages</p>
    <p className="mt-2 text-lg font-medium text-slate-900">
      Nepali, English, Hindi, Urdu
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
    <p className="text-sm font-semibold text-slate-500">Current Address</p>
    <p className="mt-2 text-lg font-medium text-slate-900">
      Tokha Road, Samakhushi
    </p>
  </div>

</div>
        </section>
        {/* Current Life */}
<section className="max-w-6xl mx-auto px-8 py-16">

  <h2 className="text-3xl font-bold text-slate-900 mb-8">
    Current Life
  </h2>

  <div className="bg-white rounded-2xl shadow-md p-8">

    <p className="text-lg leading-8 text-slate-700">
      Currently, I am pursuing my Bachelor's education (BBM) at Southwestern State College, Basundhara, Kathmandu.
    </p>

    <p className="mt-5 text-lg leading-8 text-slate-700">
      Alongside my studies, I continue exploring learning various ideas and lessons from multiple disciplines, creativity,
      communication, and personal growth through different experiences.
    </p>

    <p className="mt-5 text-lg leading-8 text-slate-700">
      This website is a personal archive where I document my journey,
      memories, writings, achievements, and the people who have been
      part of my life.
    </p>

  </div>

</section>
{/* Areas of Interest */}

<section className="max-w-6xl mx-auto px-8 py-16">

  <h2 className="text-3xl font-bold text-slate-900 mb-8">
    Areas of Interest
  </h2>

  <div className="flex flex-wrap gap-4">

    {[
      "Leadership",
      "Economics",
      "Management",
      "Education",
      "Public Speaking",

      "Psychology",
      "History",
      "Quiz",
      "Literature",
      "Philosophy",

      "Music",
      "Fantasy Cinema"
    ].map((item) => (

      <span
        key={item}
        className="bg-white rounded-full px-6 py-3 shadow-md text-slate-800 font-medium hover:shadow-xl transition"
      >
        {item}
      </span>

    ))}

  </div>

</section>


{/* My Journey */}

<section className="max-w-6xl mx-auto px-8 py-16">

  <h2 className="text-3xl font-bold text-slate-900 mb-10">
    My Journey
  </h2>

  <div className="space-y-8">

    <div className="bg-white rounded-2xl shadow-md p-8">
      <h3 className="text-xl font-bold text-slate-900">
        Navajeewan School & College
      </h3>

      <p className="mt-4 leading-8 text-slate-700">
        Completed my Secondary Education Examination (SEE). During these years, I actively participated in academic, literary and co-curricular activities, laying the foundation for my interest in public speaking, writing and leadership.
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-md p-8">
      <h3 className="text-xl font-bold text-slate-900">
        Southwestern State College
      </h3>

      <p className="mt-4 leading-8 text-slate-700">
        Pursued Management studies while serving as President of the SWSC Management Club. Organised seminars, represented the college in debates, continued literary writing, and expanded my interests in management, economics and public affairs.
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-md p-8">
      <h3 className="text-xl font-bold text-slate-900">
        Looking Ahead
      </h3>

      <p className="mt-4 leading-8 text-slate-700">
        I aspire to contribute meaningfully through writing, research, public service and leadership while continuing to preserve my work through this digital archive.
      </p>
    </div>

  </div>

</section>


        </main>
        <Footer />
    </>
  )
}