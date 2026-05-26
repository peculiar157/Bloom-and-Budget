import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { getPostBySlug, getRelatedPosts, posts, categoryColors } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Newsletter from "@/components/Newsletter";
import type { Metadata } from "next";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) {
      elements.push(<div key={i} className="h-2" />);
    } else if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-cormorant text-3xl font-semibold text-sage-800 mt-10 mb-4">
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="font-cormorant text-2xl font-semibold text-sage-700 mt-8 mb-3">
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      elements.push(
        <p key={i} className="font-dm font-semibold text-sage-800 mt-4">
          {trimmed.slice(2, -2)}
        </p>
      );
    } else if (trimmed.startsWith("- ")) {
      elements.push(
        <li key={i} className="font-dm text-sage-600 leading-relaxed ml-4 list-disc">
          {trimmed.slice(2)}
        </li>
      );
    } else if (/^\d+\./.test(trimmed)) {
      elements.push(
        <li key={i} className="font-dm text-sage-600 leading-relaxed ml-4 list-decimal">
          {trimmed.replace(/^\d+\.\s*/, "")}
        </li>
      );
    } else {
      elements.push(
        <p key={i} className="font-dm text-sage-600 leading-relaxed">
          {trimmed}
        </p>
      );
    }
  });

  return elements;
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, post.category, 3);
  const colors = categoryColors[post.category];

  return (
    <>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-dm text-sm text-sage-500 hover:text-sage-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-6 lg:px-8 py-8">
        <header className="mb-10">
          <span className={`category-pill ${colors.bg} ${colors.text} mb-4 inline-block`}>
            {post.category}
          </span>
          <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-sage-900 leading-tight mb-6">
            {post.title}
          </h1>
          <p className="font-dm text-lg text-sage-500 leading-relaxed mb-6">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-4 pb-8 border-b border-sage-100">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-sage-200 flex items-center justify-center text-sage-700 font-semibold font-cormorant">
                A
              </div>
              <div>
                <p className="font-dm text-sm font-medium text-sage-800">Amara Wells</p>
                <p className="font-dm text-xs text-sage-400">Bloom & Budget</p>
              </div>
            </div>
            <div className="flex items-center gap-1 font-dm text-xs text-sage-400">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </div>
            <div className="flex items-center gap-1 font-dm text-xs text-sage-400">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </div>
          </div>
        </header>

        <div className="relative h-[320px] md:h-[440px] rounded-3xl overflow-hidden mb-12">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {renderContent(post.content)}
        </div>

        <div className="max-w-2xl mx-auto mt-12 p-8 bg-sage-50 rounded-2xl border border-sage-100 text-center">
          <p className="font-cormorant text-2xl font-semibold text-sage-800 mb-2">
            Found this helpful?
          </p>
          <p className="font-dm text-sm text-sage-500 mb-4">
            Share it with a friend who&apos;s working on their finances too.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-sage-600 text-cream-50 font-dm text-sm px-6 py-3 rounded-full hover:bg-sage-700 transition-colors"
          >
            Read More Posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="floral-divider mb-6">
            <span className="font-cormorant text-sage-400 italic text-lg">you might also like</span>
          </div>
          <h2 className="font-cormorant text-4xl font-semibold text-sage-800 mb-8">
            More in {post.category}
          </h2>
          <div className="masonry-grid">
            {related.map((p) => (
              <div key={p.slug} className="masonry-item">
                <PostCard post={p} />
              </div>
            ))}
          </div>
        </section>
      )}

      <Newsletter />
    </>
  );
}
