import Image from "next/image";
import Link from "next/link";
import { Heart, BookOpen, TrendingUp, Coffee, ArrowRight } from "lucide-react";
import Newsletter from "@/components/Newsletter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Meet Amara — the woman behind Bloom & Budget.",
};

const values = [
  { icon: Heart, title: "Judgment-Free Zone", desc: "Money is emotional. We don't shame here — we problem-solve." },
  { icon: BookOpen, title: "Real, Tested Advice", desc: "Everything I share, I've tried myself first. No theory without practice." },
  { icon: TrendingUp, title: "Progress Over Perfection", desc: "One small financial win this week beats a perfect plan you never start." },
  { icon: Coffee, title: "Actually Readable", desc: "No 4,000-word walls of text. Clear, specific, and to the point." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-sage-50 overflow-hidden py-20 px-6">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sage-100 blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden h-[480px] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80"
                  alt="Amara Wells, founder of Bloom & Budget"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-xl p-5 max-w-[200px]">
                <p className="font-cormorant text-2xl font-semibold text-sage-700 mb-1">$38K</p>
                <p className="font-dm text-xs text-sage-400">debt paid off in 2.5 years</p>
                <div className="mt-2 h-1.5 rounded-full bg-sage-100 overflow-hidden">
                  <div className="h-full w-full bg-sage-500 rounded-full" />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="floral-divider mb-6">
                <span className="font-cormorant text-sage-400 italic text-lg">meet the founder</span>
              </div>
              <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-sage-900 mb-6">
                Hi, I&apos;m Amara.
              </h1>
              <div className="space-y-4 font-dm text-sage-600 leading-relaxed">
                <p>A few years ago, I was drowning in $38,000 of debt — credit cards, a car loan, and some deeply regrettable &quot;investment&quot; decisions I&apos;d made in my mid-twenties. I made a decent income. I had nothing to show for it.</p>
                <p>The turning point wasn&apos;t a magical moment. It was a very boring Sunday afternoon when I finally sat down with a spreadsheet and looked at every number honestly for the first time.</p>
                <p>I started Bloom & Budget to be the resource I needed back then: honest, practical, and written by someone who&apos;s actually lived it — not a finance professional looking down from a corner office.</p>
                <p>I paid off all my debt in 2.5 years. I now have a 6-month emergency fund, a growing investment portfolio, and three income streams. I&apos;m not wealthy — but I&apos;m free. And that&apos;s what I want to help you build.</p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-sage-600 text-cream-50 font-dm text-sm px-6 py-3.5 rounded-full hover:bg-sage-700 transition-colors mt-8"
              >
                Read My Latest Posts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-sage-900 mb-4">
            What Bloom & Budget Stands For
          </h2>
          <p className="font-dm text-sage-500 max-w-xl mx-auto">
            Finance content has a reputation for being either condescending or oversimplified. I&apos;m trying to build something different.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="bg-white border border-sage-100 rounded-2xl p-6 card-hover">
                <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-sage-600" />
                </div>
                <h3 className="font-cormorant text-xl font-semibold text-sage-800 mb-2">{value.title}</h3>
                <p className="font-dm text-sm text-sage-500 leading-relaxed">{value.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-cream-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl font-semibold text-sage-800 text-center mb-10">
            A Few Things About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "☕ I do my best thinking with a large oat milk latte",
              "📚 Currently reading: The Psychology of Money by Morgan Housel (again)",
              "🌿 I keep a very enthusiastic herb garden that partially offsets my grocery bill",
              "💻 My side hustles include freelance writing and digital products on Etsy",
              "🎯 2025 goal: max out my Roth IRA for the third year in a row",
              "🌍 Dream once debt was paid: a month-long trip to Portugal — done in 2024",
            ].map((fact) => (
              <div key={fact} className="bg-white rounded-xl p-4 font-dm text-sm text-sage-600 leading-relaxed">
                {fact}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="font-cormorant text-4xl font-semibold text-sage-800 mb-4">Work With Me</h2>
        <p className="font-dm text-sage-500 mb-6 max-w-xl mx-auto">
          I work with brands aligned with financial wellness and intentional living. If you&apos;d like to collaborate on sponsored content, product reviews, or partnerships, let&apos;s talk.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border-2 border-sage-500 text-sage-700 font-dm text-sm px-8 py-3.5 rounded-full hover:bg-sage-50 transition-colors"
        >
          Get in Touch
        </Link>
      </section>

      <Newsletter />
    </>
  );
}
