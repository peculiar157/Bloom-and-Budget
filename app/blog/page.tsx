import { posts, type Category } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Newsletter from "@/components/Newsletter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore all posts on budgeting, saving, side hustles, and making money online.",
};

const allCategories: Category[] = [
  "Budgeting",
  "Saving",
  "Side Hustle",
  "Make Money Online",
  "Investing",
  "Debt Free",
];

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const activeCategory = params.category as Category | undefined;

  const filtered = activeCategory
    ? posts.filter((p) => p.category === activeCategory)
    : posts;

  return (
    <div>
      <section className="bg-sage-800 text-cream-50 pt-20 pb-16 px-6 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto text-center">
          <p className="font-dm text-sage-300 text-sm tracking-widest uppercase mb-4">The Blog</p>
          <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-cream-50 mb-4">
            Money Wisdom, Practically Served
          </h1>
          <p className="font-dm text-sage-300 max-w-xl mx-auto">
            Guides, strategies, and real talk on building a financial life you are proud of.
            No jargon, no judgment.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex gap-2 py-4 overflow-x-auto">
          
            href="/blog"
            className="category-pill flex-shrink-0 bg-sage-600 text-white"
          >
            All Posts
          </a>
          {allCategories.map((cat) => (
            
              key={cat}
              href={"/blog?category=" + encodeURIComponent(cat)}
              className="category-pill flex-shrink-0 bg-sage-100 text-sage-700"
            >
              {cat}
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {activeCategory && (
          <div className="mb-8">
            <h2 className="font-cormorant text-3xl font-semibold text-sage-800">
              {activeCategory}
            </h2>
            <p className="font-dm text-sm text-sage-400 mt-1">
              {filtered.length} post{filtered.length !== 1 ? "s" : ""}
            </p>
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-cormorant text-4xl text-sage-300 mb-4">Coming soon</p>
            <p className="font-dm text-sm text-sage-400">No posts in this category yet.</p>
          </div>
        ) : (
          <div className="masonry-grid">
            {filtered.map((post, i) => (
              <div key={post.slug} className="masonry-item">
                <PostCard post={post} priority={i < 3} />
              </div>
            ))}
          </div>
        )}
      </section>

      <Newsletter />
    </div>
  );
}
