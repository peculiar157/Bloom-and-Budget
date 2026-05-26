import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p className="font-cormorant text-9xl font-semibold text-sage-200 mb-4">404</p>
      <h2 className="font-cormorant text-4xl font-semibold text-sage-800 mb-3">
        Page not found
      </h2>
      <p className="font-dm text-sage-400 mb-8 max-w-sm">
        This page wandered off budget. Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-sage-600 text-cream-50 font-dm text-sm px-6 py-3.5 rounded-full hover:bg-sage-700 transition-colors"
      >
        Back Home <ArrowRight className="w-4 h-4" />
      </Link>
    </section>
  );
}
