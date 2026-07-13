import { notFound } from "next/navigation";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { writings } from "@/data/writings";
import { getMarkdownContent } from "@/lib/markdown";

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

export default async function WritingPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const writing = writings.find(
    (item) => item.slug === slug
  );

  if (!writing) {
    notFound();
  }

  const sortedWritings = [...writings].sort(
    (a, b) =>
      new Date(a.published).getTime() -
      new Date(b.published).getTime()
  );

  const currentIndex = sortedWritings.findIndex(
    (item) => item.slug === slug
  );

  const previousWriting =
    currentIndex > 0
      ? sortedWritings[currentIndex - 1]
      : null;

  const nextWriting =
    currentIndex < sortedWritings.length - 1
      ? sortedWritings[currentIndex + 1]
      : null;

  const relatedWritings = writings
    .filter(
      (item) =>
        item.slug !== writing.slug &&
        item.topics.some((topic) =>
          writing.topics.includes(topic)
        )
    )
    .slice(0, 3);

  const {
    htmlContent,
    readingTime,
  } = await getMarkdownContent(
    writing.content
  );

  const isPoem =
    writing.category === "Poem";

  return (
    <>
      <Navbar />

      <main className="bg-stone-100 min-h-screen">

        <section className="max-w-5xl mx-auto px-8 pt-20">

          <Link
            href="/writings"
            className="text-yellow-600 hover:text-yellow-700 font-medium"
          >
            ← Back to Writings
          </Link>

          <p className="uppercase tracking-[0.3em] text-yellow-600 text-sm font-semibold mt-10">
            {writing.category}
          </p>

          <h1 className="text-5xl font-bold text-slate-900 mt-4 leading-tight">
            {writing.title}
          </h1>

          <div className="flex flex-wrap gap-6 mt-8 text-slate-600">

            <span>
              📅 {formatDate(writing.published)}
            </span>

            <span>
              ⏱ {readingTime} min read
            </span>

            <span>
              🌐 {writing.language}
            </span>

          </div>

        </section>

        {writing.cover && (

          <section className="max-w-5xl mx-auto px-8 mt-12">

            <img
              src={writing.cover}
              alt={writing.title}
              className="w-full h-105 object-cover rounded-3xl"
            />

          </section>

        )}

        <section className="max-w-5xl mx-auto px-8 mt-10">

          <div className="flex flex-wrap gap-3">

            {writing.topics.map((topic) => (

              <span
                key={topic}
                className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm"
              >
                #{topic}
              </span>

            ))}

          </div>

        </section>

        {(writing.background || writing.dedication) && (

          <section className="max-w-4xl mx-auto px-8 mt-12">

            <div className="bg-white rounded-3xl shadow-md p-8">

              {writing.background && (

                <>

                  <h2 className="text-xl font-bold text-slate-900">
                    Background
                  </h2>

                  <p className="mt-3 text-slate-700 leading-8">
                    {writing.background}
                  </p>

                </>

              )}

              {writing.dedication && (

                <div className="mt-8">

                  <h2 className="text-xl font-bold text-slate-900">
                    Dedication
                  </h2>

                  <p className="mt-3 text-slate-700">
                    {writing.dedication}
                  </p>

                </div>

              )}

            </div>

          </section>

        )}

          <section className="max-w-4xl mx-auto px-8 mt-16 pb-24">

  <article
    className={
      isPoem
        ? "bg-white rounded-3xl shadow-md p-12 text-slate-800"
        : "bg-white rounded-3xl shadow-md p-10"
    }
  >

    <div
      className={
        isPoem
          ? "whitespace-pre-line [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-center [&_h1]:mb-10 [&_p]:text-lg [&_p]:leading-8 [&_p]:mb-6"
          : "prose prose-lg max-w-none text-slate-900 prose-headings:text-slate-900 prose-headings:text-center prose-headings:text-5xl prose-headings:font-bold prose-headings:mb-10 prose-p:text-slate-900 prose-p:leading-8 prose-p:mb-4 prose-strong:text-slate-900 prose-li:text-slate-900 prose-a:text-yellow-700"
      }
      dangerouslySetInnerHTML={{
        __html: htmlContent,
      }}
    />

  </article>

</section>


        <section className="max-w-5xl mx-auto px-8 pb-24">

          <div className="flex justify-between gap-8">

            <div>

              {previousWriting && (

                <>

                  <p className="text-sm text-slate-500">
                    Previous Writing
                  </p>

                  <Link
                    href={`/writings/${previousWriting.slug}`}
                    className="mt-2 inline-block text-lg font-semibold text-slate-900 hover:text-yellow-600 transition"
                  >
                    ← {previousWriting.title}
                  </Link>

                </>

              )}

            </div>

            <div className="text-right">

              {nextWriting && (

                <>

                  <p className="text-sm text-slate-500">
                    Next Writing
                  </p>

                  <Link
                    href={`/writings/${nextWriting.slug}`}
                    className="mt-2 inline-block text-lg font-semibold text-slate-900 hover:text-yellow-600 transition"
                  >
                    {nextWriting.title} →
                  </Link>

                </>

              )}

            </div>

          </div>

        </section>

        {relatedWritings.length > 0 && (

          <section className="max-w-5xl mx-auto px-8 pb-24">

            <div className="bg-white rounded-3xl shadow-md p-10">

              <h2 className="text-2xl font-bold text-slate-900">
                You may also enjoy
              </h2>

              <div className="mt-8 space-y-8">

                {relatedWritings.map((item) => (

                  <Link
                    key={item.slug}
                    href={`/writings/${item.slug}`}
                    className="block group"
                  >

                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-yellow-600 transition">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-slate-600">
                      {item.summary}
                    </p>

                  </Link>

                ))}

              </div>

            </div>

          </section>

        )}

      </main>

      <Footer />

    </>

  );
}