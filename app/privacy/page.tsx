import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Bloom & Budget collects, uses, and protects your personal information.",
};

const sections = [
  { title: "Information We Collect", content: `When you subscribe to our newsletter, we collect your email address. When you fill out our contact form, we collect your name, email address, and any information you include in your message. We may also collect non-personally identifiable information through cookies and analytics tools, including browser type, pages visited, time spent on site, and referring URLs.` },
  { title: "How We Use Your Information", content: `We use your email address to send our weekly newsletter, which includes personal finance tips, new blog posts, and occasional promotional content. We use contact form information solely to respond to your message. We use analytics data to understand how visitors use our site and to improve our content.` },
  { title: "Cookies & Analytics", content: `Bloom & Budget uses Google Analytics to understand site traffic and reader behavior. Google Analytics uses cookies — small text files stored in your browser — to collect this information. You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on. We also use functional cookies to remember your preferences on our site.` },
  { title: "Affiliate Disclosure", content: `Some posts on Bloom & Budget contain affiliate links, meaning we earn a small commission if you make a purchase through our link — at no extra cost to you. We only recommend products and services we genuinely use or believe in. All affiliate relationships are disclosed within the relevant posts.` },
  { title: "Email Newsletter", content: `Our newsletter is managed through a third-party email service provider. By subscribing, you consent to receiving weekly emails from Bloom & Budget. You can unsubscribe at any time using the "Unsubscribe" link at the bottom of any email. We will process your unsubscribe request within 10 business days.` },
  { title: "Third-Party Services", content: `We use the following third-party services that may collect information: Google Analytics (site analytics), Google Fonts (typography loading), and our email service provider (newsletter management). These services have their own privacy policies and data practices. We encourage you to review them directly.` },
  { title: "Data Retention & Security", content: `We retain your email address as long as you remain subscribed to our newsletter. Contact form submissions are retained for up to 12 months. We implement reasonable security measures to protect your information, but no internet transmission is 100% secure. We cannot guarantee the absolute security of your data.` },
  { title: "Your Rights", content: `You have the right to access, correct, or delete the personal information we hold about you. To make a request, contact us at hello@bloomandbudget.com. If you are located in the European Economic Area, you have additional rights under GDPR, including the right to data portability and the right to object to processing.` },
  { title: "Children's Privacy", content: `Bloom & Budget is intended for adults. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected information from a child, please contact us immediately and we will delete it promptly.` },
  { title: "Changes to This Policy", content: `We may update this Privacy Policy from time to time. When we do, we will update the "Last Updated" date at the top of this page. Continued use of our site after changes constitutes acceptance of the updated policy. We encourage you to review this page periodically.` },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-sage-50 border-b border-sage-100 pt-16 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-dm text-sage-400 text-sm mb-3">Last updated: May 1, 2025</p>
          <h1 className="font-cormorant text-5xl font-semibold text-sage-900 mb-4">Privacy Policy</h1>
          <p className="font-dm text-sage-500 leading-relaxed">
            At Bloom & Budget, your privacy matters. This policy explains clearly and plainly what information we collect, why we collect it, and how we use it. No legalese maze — just honest answers.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-10">
        <div className="bg-cream-100 rounded-2xl p-6 mb-12">
          <h2 className="font-cormorant text-xl font-semibold text-sage-800 mb-4">In this policy</h2>
          <ol className="space-y-1.5">
            {sections.map((s, i) => (
              <li key={s.title}>
                <a href={`#section-${i}`} className="font-dm text-sm text-sage-600 hover:text-sage-800 transition-colors link-underline">
                  {i + 1}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={section.title} id={`section-${i}`} className="scroll-mt-24">
              <h2 className="font-cormorant text-2xl font-semibold text-sage-800 mb-3">
                {i + 1}. {section.title}
              </h2>
              <p className="font-dm text-sage-600 leading-relaxed text-sm md:text-base">{section.content}</p>
              {i < sections.length - 1 && <div className="mt-10 border-b border-sage-100" />}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-sage-50 rounded-2xl p-8 text-center">
          <h3 className="font-cormorant text-2xl font-semibold text-sage-800 mb-3">Questions about this policy?</h3>
          <p className="font-dm text-sm text-sage-500 mb-4">
            Reach out at{" "}
            <a href="mailto:hello@bloomandbudget.com" className="text-sage-600 underline hover:text-sage-800 transition-colors">
              hello@bloomandbudget.com
            </a>{" "}
            and I&apos;ll respond personally.
          </p>
        </div>
      </section>
    </>
  );
}
