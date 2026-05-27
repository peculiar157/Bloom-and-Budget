import { Suspense } from "react";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div className="min-h-screen bg-cream-50" />}>{children}</Suspense>;
}
