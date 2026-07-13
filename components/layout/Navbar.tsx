"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

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
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <Link
          href="/"
          className="group flex items-center"
        >
          <Image
  src="/icon.png"
  alt="Prasham Ghimire"
  width={44}
  height={44}
  className="rounded-full"
 />
        </Link>

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

      </nav>
    </header>
  );
}