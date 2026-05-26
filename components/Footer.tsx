import Link from "next/link";
import { Leaf, Camera, Pin, Music2, Mail } from "lucide-react";

const footerLinks = {
  Explore: [
    { href: "/blog", label: "All Posts" },
    { href: "/blog?category=Budgeting", label: "Budgeting" },
    { href: "/blog?category=Saving", label: "Saving" },
    { href: "/blog?category=Side+Hustle", label: "Side Hustle" },
    { href: "/blog?category=Make+Money+Online", label: "Make Money Online" },
  ],
  Connect: [
    { href: "/about", label: "About Me" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
};

const socials = [
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: Pin, href: "#", label: "Pinterest" },
  { icon: Music2, href: "#", label: "YouTube" },
  { icon: Mail, href: "/contact", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-sage-100 mt-24">
      <div className="overflow-hidden">
        <svg viewBox="0 0 1440 60" className="w-full -mb-1 fill-cream-50 block">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-sage-500 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-cream-50" />
              </div>
              <span className="font-cormorant text-2xl font-semibold text-cream-50">
                Bloom <span className="text-sage-400">&</span> Budget
              </span>
            </Link>
            <p className="font-dm text-sm text-sage-300 leading-relaxed max-w-xs mb-6">
              Practical money tips for real life — budgeting, saving, side hustles, and building the financial freedom you actually want.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link key={label} href={href} aria-label={label} className="w-9 h-9 rounded-full bg-sage-700 flex items-center justify-center hover:bg-sage-500 transition-colors">
                  <Icon className="w-4 h-4 text-sage-200" />
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-cormorant text-lg font-semibold text-cream-100 mb-4">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-dm text-sm text-sage-300 hover:text-sage-100 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-sage-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-dm text-xs text-sage-400">© {new Date().getFullYear()} Bloom & Budget. All rights reserved.</p>
          <p className="font-dm text-xs text-sage-500 text-center max-w-sm">
            Disclaimer: Content is for informational purposes only and does not constitute financial advice. Always consult a qualified professional.
          </p>
        </div>
      </div>
    </footer>
  );
}
