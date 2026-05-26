"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-sage-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-sage-500 flex items-center justify-center group-hover:bg-sage-600 transition-colors">
              <Leaf className="w-4 h-4 text-cream-50" />
            </div>
            <span className="font-cormorant text-xl md:text-2xl font-semibold text-sage-800 tracking-tight">
              Bloom <span className="text-sage-500">&</span> Budget
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="font-dm text-sm text-sage-700 hover:text-sage-500 transition-colors link-underline">
                {link.label}
              </Link>
            ))}
            <Link href="/blog" className="font-dm text-sm bg-sage-500 text-cream-50 px-5 py-2.5 rounded-full hover:bg-sage-600 transition-colors">
              Start Reading
            </Link>
          </div>

          <button className="md:hidden p-2 text-sage-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-cream-50 border-t border-sage-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-dm text-sage-700 hover:text-sage-500 py-1 transition-colors" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/blog" className="font-dm text-sm bg-sage-500 text-cream-50 px-5 py-2.5 rounded-full text-center hover:bg-sage-600 transition-colors mt-2" onClick={() => setOpen(false)}>
            Start Reading
          </Link>
        </div>
      </div>
    </header>
  );
}
