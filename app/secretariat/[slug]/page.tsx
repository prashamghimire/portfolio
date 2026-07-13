import { notFound } from "next/navigation";
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

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DocumentPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const document = documents.find(
    (item) => item.slug === slug
  );

  if (!document) {
    notFound();
  }

  const sortedDocuments = [...documents].sort(
    (a, b) =>
      new Date(b.published).getTime() -
      new Date(a.published).getTime()
  );

  const currentIndex = sortedDocuments.findIndex(
    (item) => item.slug === slug
  );

  const previousDocument =
    currentIndex < sortedDocuments.length - 1
      ? sortedDocuments[currentIndex + 1]
      : null;

  const nextDocument =
    currentIndex > 0
      ? sortedDocuments[currentIndex - 1]
      : null;

  return (
    <>
      <Navbar />

      <main className="bg-stone-100 min-h-screen">

        <section className="max-w-5xl mx-auto px-8 pt-20">

          <Link
            href="/secretariat"
            className="text-yellow-600 hover:text-yellow-700 font-medium"
          >
            ← Back to The Secretariat
          </Link>

          <p className="uppercase tracking-[0.3em] text-yellow-600 text-sm font-semibold mt-10">
            Official Document
          </p>

          <h1 className="text-5xl font-bold text-slate-900 mt-5">
            {document.title}
          </h1>

          <p className="mt-6 text-slate-600">
            {formatDate(document.published)}
          </p>

        </section>

        <section className="max-w-5xl mx-auto px-8 mt-14">

          <div className="bg-white rounded-3xl shadow-md p-10">

            <p className="text-lg leading-8 text-slate-700">
              {document.summary}
            </p>

            <a
              href={document.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 bg-slate-900 hover:bg-black text-white px-7 py-3 rounded-xl transition"
            >
              Read PDF →
            </a>

          </div>

        </section>

        <section className="max-w-5xl mx-auto px-8 py-20">

          <div className="flex justify-between">

            <div>
              {previousDocument && (
                <>
                  <p className="text-sm text-slate-500">
                    Previous
                  </p>

                  <Link
                    href={`/secretariat/${previousDocument.slug}`}
                    className="text-lg font-semibold text-slate-900 hover:text-yellow-600"
                  >
                    ← {previousDocument.title}
                  </Link>
                </>
              )}
            </div>

            <div className="text-right">
              {nextDocument && (
                <>
                  <p className="text-sm text-slate-500">
                    Next
                  </p>

                  <Link
                    href={`/secretariat/${nextDocument.slug}`}
                    className="text-lg font-semibold text-slate-900 hover:text-yellow-600"
                  >
                    {nextDocument.title} →
                  </Link>
                </>
              )}
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}