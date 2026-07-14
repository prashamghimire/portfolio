import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { documents } from "@/data/secretariat";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function SecretariatPage() {
  const sortedDocuments = [...documents].sort(
    (a, b) =>
      new Date(b.published).getTime() -
      new Date(a.published).getTime()
  );

  return (
    <>
      <Navbar />

      <main className="bg-stone-100 min-h-screen">

        <section className="max-w-5xl mx-auto px-8 pt-20 text-center">

          <p className="uppercase tracking-[0.4em] text-yellow-600 text-sm font-semibold">
            The Secretariat
          </p>

          <h1 className="text-5xl font-bold text-slate-900 mt-5">
            The Secretariat of Prasham Ghimire
          </h1>

          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            A chronological archive of public statements, open letters,
            official messages, notices and other documents issued under
            The Secretariat of Prasham Ghimire.
          </p>

        </section>

        <section className="max-w-6xl mx-auto px-8 py-20">

          <div className="space-y-8">

            {sortedDocuments.map((document) => (

              <Link
                key={document.id}
                href={`/secretariat/${document.slug}`}
                className="block bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition"
              >

                <div className="grid md:grid-cols-[320px_1fr] gap-8 items-center">

                  <Image
                    src={document.cover}
                    alt={document.title}
                    width={320}
                    height={450}
                    className="rounded-xl border border-slate-200 shadow-md object-cover"
                  />

                  <div>

                    <p className="text-sm uppercase tracking-[0.25em] text-yellow-600 font-semibold">
                      {formatDate(document.published)}
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-slate-900">
                      {document.title}
                    </h2>

                    <p className="mt-5 text-slate-700 leading-8">
                      {document.summary}
                    </p>

                    <span className="inline-block mt-8 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl transition">
                      Read Document →
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}