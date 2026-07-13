import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-stone-100 px-8 text-center">

      <h1 className="text-8xl font-bold text-yellow-500">
        404
      </h1>

      <h2 className="mt-6 text-3xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-xl text-slate-600">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        href="/"
        className="mt-10 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-xl transition"
      >
        Return Home
      </Link>

    </main>
  );
}