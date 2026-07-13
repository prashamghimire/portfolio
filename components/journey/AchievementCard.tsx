"use client";

import { useState } from "react";
import Image from "next/image";

interface Achievement {
  title: string;
  category: string;
  date: string;

  result?: string;
  organizer?: string;
  location?: string;

  summary: string;
  description: string;

  images: string[];
}

interface Props {
  achievement: Achievement;
}

export default function AchievementCard({
  achievement,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const hasImages = achievement.images.length > 0;

  function nextImage() {
    setCurrentImage(
      (currentImage + 1) % achievement.images.length
    );
  }

  function previousImage() {
    setCurrentImage(
      (currentImage - 1 + achievement.images.length) %
        achievement.images.length
    );
  }

  return (
    <article className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden">

      <div className="p-8 flex flex-col md:flex-row gap-8">

        {/* LEFT */}

        <div className="w-full md:w-72 shrink-0">

          {hasImages ? (

            <div className="relative">

              <Image
                src={achievement.images[currentImage]}
                alt={achievement.title}
                width={500}
                height={500}
                className="w-full aspect-square rounded-2xl object-cover"
              />

              {achievement.images.length > 1 && (

                <>

                  <button
                    onClick={previousImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 hover:bg-white"
                  >
                    ◀
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 hover:bg-white"
                  >
                    ▶
                  </button>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">

                    {achievement.images.map((_, index) => (

                      <span
                        key={index}
                        className={`h-2 w-2 rounded-full ${
                          currentImage === index
                            ? "bg-white"
                            : "bg-white/40"
                        }`}
                      />

                    ))}

                  </div>

                </>

              )}

            </div>

          ) : (

            <div className="aspect-square rounded-2xl bg-slate-200 flex items-center justify-center text-slate-500">

              No Image

            </div>

          )}

        </div>

        {/* RIGHT */}

        <div className="flex-1">

          <div className="flex justify-between items-center">

            <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-semibold">

              {achievement.category}

            </span>

            <span className="text-slate-500">

              {achievement.date}

            </span>

          </div>

          <h2 className="mt-5 text-3xl font-bold text-slate-900">

            {achievement.title}

          </h2>

          <div className="mt-6 grid grid-cols-[120px_1fr] gap-y-3 text-slate-700">

            {achievement.result && (
              <>
                <span className="font-semibold">Result</span>
                <span>{achievement.result}</span>
              </>
            )}

            {achievement.organizer && (
              <>
                <span className="font-semibold">Organizer</span>
                <span>{achievement.organizer}</span>
              </>
            )}

            {achievement.location && (
              <>
                <span className="font-semibold">Location</span>
                <span>{achievement.location}</span>
              </>
            )}

          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-8 text-yellow-700 font-semibold hover:text-yellow-800"
          >
            {expanded ? "Read Less ↑" : "Read More →"}
          </button>

        </div>

      </div>

      <div
  className={`overflow-hidden transition-all duration-500 ${
    expanded
      ? "max-h-300 opacity-100 border-t border-slate-200 px-8 pt-6 pb-8"
      : "max-h-0 opacity-0 px-8"
  }`}
>

  <p className="leading-8 text-slate-700 whitespace-pre-line">

    {achievement.description}

  </p>

</div>

    </article>
  );
}