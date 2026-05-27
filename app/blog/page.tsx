"use client";
import { posts, type Category } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Newsletter from "@/components/Newsletter";

export default function BlogPage() {
  return (
    <div>
      <section className="bg-sage-800 text-cream-50 pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-cormorant text-5xl font-semibold text-cream-50 mb-4">
            Money Wisdom, Practically Served
          </h1>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="masonry-grid">
          {posts.map((post, i) => (
            <div key={post.slug} className="masonry-item">
              <PostCard post={post} priority={i < 3} />
            </div>
          ))}
        </div>
      </section>
      <Newsletter />
    </div>
  );
}
