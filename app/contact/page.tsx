"use client";

import { useState } from "react";
import { Mail, Camera, Music2, Send, Check, MessageSquare } from "lucide-react";

const socials = [
  { icon: Camera, label: "Instagram", handle: "@bloomandbudget", href: "#", color: "bg-pink-50 border-pink-100 text-pink-600" },
  { icon: Music2, label: "YouTube", handle: "Bloom & Budget", href: "#", color: "bg-red-50 border-red-100 text-red-600" },
  { icon: Mail, label: "Email", handle: "hello@bloomandbudget.com", href: "mailto:hello@bloomandbudget.com", color: "bg-sage-50 border-sage-100 text-sage-600" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      <section className="bg-sage-800 text-cream-50 pt-20 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 rounded-full bg-sage-600/50 flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-7 h-7 text-sage-300" />
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-cream-50 mb-4">Say Hello</h1>
          <p className="font-dm text-sage-300 max-w-md mx-auto">
            Questions, collaborations, or just want to share a budgeting win — my inbox is open. I read every message personally.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <h2 className="font-cormorant text-2xl font-semibold text-sage-800 mb-6">Other Ways to Connect</h2>
            <div className="space-y-3 mb-10">
              {socials.map(({ icon: Icon, label, handle, href, color }) => (
                <a key={label} href={href} className={`flex items-center gap-3 p-4 rounded-xl border ${color} hover:shadow-sm transition-shadow`}>
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-dm text-xs font-medium">{label}</p>
                    <p className="font-dm text-xs opacity-70">{handle}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="bg-cream-100 rounded-2xl p-6">
              <h3 className="font-cormorant text-xl font-semibold text-sage-800 mb-2">Response time</h3>
              <p className="font-dm text-sm text-sage-500">
                I reply to all emails within 2–3 business days. For collaborations and brand partnerships, please allow up to 5 days.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-sage-600" />
                </div>
                <h3 className="font-cormorant text-4xl font-semibold text-sage-800 mb-3">Message sent!</h3>
                <p className="font-dm text-sage-500">Thank you for reaching out. I&apos;ll be in touch within a few days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-dm text-sm font-medium text-sage-700 mb-1.5">Your Name</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" className="w-full border border-sage-200 rounded-xl px-4 py-3 font-dm text-sm text-sage-800 placeholder:text-sage-300 focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-200 transition-all bg-white" />
                  </div>
                  <div>
                    <label className="block font-dm text-sm font-medium text-sage-700 mb-1.5">Email Address</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@example.com" className="w-full border border-sage-200 rounded-xl px-4 py-3 font-dm text-sm text-sage-800 placeholder:text-sage-300 focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-200 transition-all bg-white" />
                  </div>
                </div>
                <div>
                  <label className="block font-dm text-sm font-medium text-sage-700 mb-1.5">Subject</label>
                  <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required className="w-full border border-sage-200 rounded-xl px-4 py-3 font-dm text-sm text-sage-800 focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-200 transition-all bg-white">
                    <option value="">Select a topic…</option>
                    <option>General question</option>
                    <option>Blog collaboration / guest post</option>
                    <option>Brand partnership</option>
                    <option>Media inquiry</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div>
                  <label className="block font-dm text-sm font-medium text-sage-700 mb-1.5">Message</label>
                  <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me what's on your mind…" className="w-full border border-sage-200 rounded-xl px-4 py-3 font-dm text-sm text-sage-800 placeholder:text-sage-300 focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-200 transition-all bg-white resize-none" />
                </div>
                <button type="submit" disabled={loading} className="inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-cream-50 font-dm text-sm font-medium px-7 py-3.5 rounded-full transition-colors disabled:opacity-70">
                  {loading ? <div className="w-4 h-4 border-2 border-cream-200 border-t-transparent rounded-full animate-spin" /> : <Send className="w-4 h-4" />}
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
