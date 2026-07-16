"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

  function closePopup() {
    localStorage.setItem("welcome-popup", "true");
    setOpen(false);
  }

  useEffect(() => {
    const seen = localStorage.getItem("welcome-popup");

    let timer: NodeJS.Timeout;

    if (!seen) {
      timer = setTimeout(() => {
        setOpen(true);
      }, 700);
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closePopup();
      }
    }

    window.addEventListener("keydown", handleKey);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 bg-black/70 backdrop-blur-md flex items-center justify-center px-6"
      onClick={closePopup}
    >
      <div
  onClick={(e) => e.stopPropagation()}
  className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 relative animate-in fade-in zoom-in duration-300"
>
        <button
          onClick={closePopup}
          className="absolute top-5 right-6 text-3xl text-slate-400 hover:text-slate-700 transition"
        >
          ×
        </button>

        <p className="uppercase tracking-[0.35em] text-yellow-600 text-sm font-semibold text-center">
          Official Website
        </p>

        <h2 className="text-4xl font-bold text-center text-slate-900 mt-3">
          Welcome to
        </h2>

        <h3 className="text-3xl font-semibold text-center text-yellow-600 mt-2">
          prashamghimire.com.np
        </h3>

        <p className="text-center text-slate-600 mt-6 max-w-xl mx-auto leading-8">
          Welcome to the official website of Prasham Ghimire.
          This platform serves as a permanent archive of my academic journey,
          writings, public notices, official communications, and personal
          milestones.
        </p>

        <div className="mt-10 flex justify-center">
          <Link href="/secretariat/welcome-message">
            <Image
              src="/secretariat(files)/welcome-notice.png"
              alt="Welcome Message"
              width={220}
              height={311}
              className="rounded-xl shadow-xl border border-slate-200 hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer"
            />
          </Link>
        </div>

        <p className="mt-4 text-center text-sm text-slate-500">
          Click the document preview to read the full Welcome Message.
        </p>

        <p className="mt-8 text-center text-sm italic text-slate-500">
          Issued by The Secretariat of Prasham Ghimire
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/secretariat/welcome-message"
            className="border-2 border-slate-300 hover:border-yellow-500 hover:text-yellow-600 text-slate-700 px-7 py-3 rounded-xl transition text-center"
          >
            Read Welcome Message
          </Link>

          <button
            onClick={closePopup}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-7 py-3 rounded-xl transition font-semibold shadow-md hover:shadow-lg"
          >
            Proceed →
          </button>
        </div>
      </div>
    </div>
  );
}