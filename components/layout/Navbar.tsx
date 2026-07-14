"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks =
    pathname === "/"
      ? [
          { name: "About Me", href: "/about" },
          { name: "Education", href: "/education" },
          { name: "Writings", href: "/writings" },
          { name: "The Secretariat", href: "/secretariat" },
        ]
      : [
          { name: "Welcome", href: "/" },
          { name: "About Me", href: "/about" },
          { name: "My Journey", href: "/journey" },
          { name: "Writings", href: "/writings" },
          { name: "The Secretariat", href: "/secretariat" },
        ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/icon.png"
              alt="Prasham Ghimire"
              width={44}
              height={44}
              className="rounded-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition duration-200 ${
                    pathname === link.href
                      ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                      : "text-slate-200 hover:text-yellow-400"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl"
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-6 border-t border-slate-800 pt-5">

            <ul className="flex flex-col gap-5 text-lg">

              {navLinks.map((link) => (

                <li key={link.href}>

                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block transition ${
                      pathname === link.href
                        ? "text-yellow-400 font-semibold"
                        : "text-slate-200 hover:text-yellow-400"
                    }`}
                  >
                    {link.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>
        )}

      </nav>
    </header>
  );
}