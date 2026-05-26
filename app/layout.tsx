import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Bloom & Budget",
    default: "Bloom & Budget — Grow Your Money, Grow Your Life",
  },
  description:
    "Practical money tips for real life. Budgeting strategies, saving hacks, side hustles, and financial freedom for women who want more.",
  keywords: ["personal finance", "budgeting", "saving money", "side hustle", "make money online", "financial freedom"],
  authors: [{ name: "Amara Wells" }],
  openGraph: {
    type: "website",
    siteName: "Bloom & Budget",
    title: "Bloom & Budget — Grow Your Money, Grow Your Life",
    description:
      "Practical money tips for real life. Budgeting strategies, saving hacks, side hustles, and financial freedom.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
