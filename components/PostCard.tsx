import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowUpRight } from "lucide-react";
import type { Post } from "@/lib/posts";
import { categoryColors } from "@/lib/posts";

interface PostCardProps {
  post: Post;
  priority?: boolean;
}

export default function PostCard({ post, priority = false }: PostCardProps) {
  const colors = categoryColors[post.category];
  const imgHeight = post.height === "tall" ? 320 : post.height === "short" ? 180 : 240;

  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="bg-white rounded-2xl overflow-hidden card-hover border border-sage-100/60">
        <div className="relative overflow-hidden" style={{ height: imgHeight }}>
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute top-3 left-3">
            <span className={`category-pill ${colors.bg} ${colors.text}`}>{post.category}</span>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-dm text-xs text-sage-400">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-sage-300" />
            <span className="font-dm text-xs text-sage-400 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <h3 className="font-cormorant text-xl font-semibold text-sage-900 leading-tight mb-2 group-hover:text-sage-600 transition-colors">
            {post.title}
          </h3>
          <p className="font-dm text-sm text-sage-600 leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
          <div className="flex items-center gap-1 text-sage-500 group-hover:text-sage-700 transition-colors">
            <span className="font-dm text-sm font-medium">Read post</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
}
