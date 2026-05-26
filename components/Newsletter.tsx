"use client";

import { useState } from "react";
import { Send, Check, Leaf } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section className="my-20">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-sage-800 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-sage-700/50" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-sage-600/40" />

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-sage-500/30 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-sage-300" />
              </div>
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-cream-50 mb-4">
              Money tips in your inbox,
              <br />
              <span className="italic text-sage-300">every Sunday.</span>
            </h2>
            <p className="font-dm text-sage-300 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
              Join 12,000+ readers getting weekly budgeting wins, saving strategies, and side hustle ideas. No spam. Unsubscribe anytime.
            </p>

            {submitted ? (
              <div className="flex items-center justify-center gap-2 bg-sage-600/40 rounded-full px-8 py-4">
                <Check className="w-5 h-5 text-sage-300" />
                <span className="font-dm text-sage-200 font-medium">You&apos;re in! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3 max-w-sm mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="newsletter-input flex-1 bg-sage-700/60 border border-sage-600 text-cream-100 placeholder:text-sage-400 rounded-full px-5 py-3 font-dm text-sm transition-all"
                />
                <button type="submit" disabled={loading} className="bg-sage-400 hover:bg-sage-300 text-sage-900 rounded-full px-5 py-3 transition-colors disabled:opacity-70 flex items-center gap-2">
                  {loading ? <div className="w-4 h-4 border-2 border-sage-700 border-t-transparent rounded-full animate-spin" /> : <Send className="w-4 h-4" />}
                  <span className="font-dm text-sm font-semibold">Subscribe</span>
                </button>
              </form>
            )}

            <p className="font-dm text-xs text-sage-500 mt-4">
              By subscribing, you agree to our{" "}
              <a href="/privacy" className="underline hover:text-sage-400 transition-colors">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
