import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, TrendingUp, PiggyBank, Laptop, Clock, ArrowUpRight } from "lucide-react";
import { posts, getFeaturedPosts, categoryColors } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Newsletter from "@/components/Newsletter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bloom & Budget — Grow Your Money, Grow Your Life",
};

const categories = [
  {
    label: "Budgeting",
    icon: PiggyBank,
    description: "Zero-based, envelope, cash stuffing — find what clicks",
    color: "bg-sage-100 border-sage-200",
    iconColor: "text-sage-600",
    href: "/blog?category=Budgeting",
  },
  {
    label: "Saving",
    icon: Sparkles,
    description: "Emergency funds, savings challenges & HYSA strategies",
    color: "bg-cream-200 border-cream-300",
    iconColor: "text-gold-500",
    href: "/blog?category=Saving",
  },
  {
    label: "Side Hustle",
    icon: TrendingUp,
    description: "Income ideas that actually work in the real world",
    color: "bg-blush-100 border-blush-200",
    iconColor: "text-rose-500",
    href: "/blog?category=Side+Hustle",
  },
  {
    label: "Make Money Online",
    icon: Laptop,
    description: "Digital products, freelancing, and online income streams",
    color: "bg-sage-200/60 border-sage-200",
    iconColor: "text-sage-700",
    href: "/blog?category=Make+Money+Online",
  },
];

export default function HomePage() {
  const featured = getFeaturedPosts().slice(0, 1)[0];
  const recentPosts = posts.slice(0, 8);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream-50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sage-100/60 blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cream-200/80 blur-3xl translate-y-1/4 -translate-x-1/4" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#5a8260" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-700 rounded-full px-4 py-1.5 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-dm text-xs font-medium tracking-wide uppercase">
                  Personal Finance for Real Life
                </span>
              </div>

              <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-semibold text-sage-900 leading-[1.05] mb-6">
                Grow your money.
                <br />
                <span className="italic text-sage-500">Grow your life.</span>
              </h1>

              <p className="font-dm text-lg text-sage-600 leading-relaxed mb-8 max-w-md">
                Practical budgeting, saving strategies, and real income ideas for women
                building financial freedom — one intentional decision at a time.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 bg-sage-600 text-cream-50 font-dm text-sm font-medium px-6 py-3.5 rounded-full hover:bg-sage-700 transition-colors"
                >
                  Explore the Blog
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border border-sage-300 text-sage-700 font-dm text-sm px-6 py-3.5 rounded-full hover:bg-sage-50 transition-colors"
                >
                  About Amara
                </Link>
              </div>

              <div className="flex flex-wrap gap-8 mt-10 pt-10 border-t border-sage-200">
                {[
                  { num: "12K+", label: "Weekly Readers" },
                  { num: "50+", label: "In-Depth Guides" },
                  { num: "$514", label: "Avg Monthly Saved" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-cormorant text-3xl font-semibold text-sage-700">
                      {stat.num}
                    </div>
                    <div className="font-dm text-xs text-sage-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {featured && (
              <div className="lg:block">
                <Link href={`/blog/${featured.slug}`} className="block group">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <div className="relative h-[480px]">
                      <Image
                        src={featured.image}
                        alt={featured.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-sage-900/80 via-transparent to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className={`category-pill ${categoryColors[featured.category].bg} ${categoryColors[featured.category].text} mb-3 inline-block`}>
                        {featured.category}
                      </span>
                      <h2 className="font-cormorant text-2xl md:text-3xl font-semibold text-cream-50 leading-tight mb-3">
                        {featured.title}
                      </h2>
                      <div className="flex items-center gap-3">
                        <span className="font-dm text-xs text-cream-200">{featured.date}</span>
                        <span className="flex items-center gap-1 font-dm text-xs text-cream-200">
                          <Clock className="w-3 h-3" />
                          {featured.readTime}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-cream-100 ml-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <div className="floral-divider mb-6">
            <span className="font-cormorant text-sage-400 italic text-lg">explore by topic</span>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.label}
                href={cat.href}
                className={`${cat.color} border rounded-2xl p-6 group card-hover`}
              >
                <div className={`${cat.iconColor} mb-4`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-cormorant text-xl font-semibold text-sage-800 mb-1">
                  {cat.label}
                </h3>
                <p className="font-dm text-xs text-sage-500 leading-relaxed">
                  {cat.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Posts grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="floral-divider mb-4">
              <span className="font-cormorant text-sage-400 italic text-lg">latest posts</span>
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-sage-900">
              From the Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 font-dm text-sm text-sage-600 hover:text-sage-800 transition-colors border border-sage-200 rounded-full px-4 py-2 hover:border-sage-400"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="masonry-grid">
          {recentPosts.map((post, i) => (
            <div key={post.slug} className="masonry-item">
              <PostCard post={post} priority={i < 3} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-dm text-sm text-sage-600 border border-sage-200 rounded-full px-6 py-3"
          >
            View all posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Resources banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 my-12">
        <div className="bg-cream-200 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "📊",
                title: "Free Budget Template",
                desc: "A Google Sheets template that takes 10 minutes to set up",
                href: "/blog/zero-based-budgeting-beginners-guide",
              },
              {
                emoji: "💰",
                title: "52-Week Challenge",
                desc: "Save $1,378 this year with 5 flexible variations",
                href: "/blog/52-week-savings-challenge-variations",
              },
              {
                emoji: "🌱",
                title: "Start Investing",
                desc: "Index funds explained simply for complete beginners",
                href: "/blog/index-funds-beginners",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex gap-4 items-start p-5 bg-white/60 rounded-2xl hover:bg-white/90 transition-colors"
              >
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <h3 className="font-cormorant text-xl font-semibold text-sage-800 mb-1 group-hover:text-sage-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-dm text-xs text-sage-500">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
