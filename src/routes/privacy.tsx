import { createFileRoute } from "@tanstack/react-router";
import { COMPANY } from "@/data/content";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [{ title: "Privacy Policy — Trans 99 Logistics USA" }],
  }),
});

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: "Who we are",
    body: [
      "This policy explains how Trans 99 Logistics USA (\"Trans 99\", \"we\", \"us\") collects, uses and protects personal information when you visit this website, contact us, apply to drive with us or receive text messages from us.",
    ],
  },
  {
    title: "Information we collect",
    body: [
      "Information you give us: your name, phone number, email address, the city or state you are in, and the details you include when you contact us or apply for a driving position (for example your CDL class and driving experience).",
      "Information collected automatically: basic technical data such as your browser type, device, pages visited and the date and time of your visit, used to keep the site working and to understand how it is used.",
      "Driver applications submitted through our application partner are handled under that partner's terms as well as this policy.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      "To respond to your enquiries and provide transportation services.",
      "To review and process driver and employment applications, and to contact you about recruiting opportunities you have expressed interest in.",
      "To send text messages you have agreed to receive, as described below.",
      "To operate, maintain and improve this website, and to meet our legal and regulatory obligations.",
    ],
  },
  {
    title: "Text messages (SMS) and recruiting outreach",
    body: [
      "If you provide your mobile number and agree to receive text messages, Trans 99 may send you messages about your application, driving opportunities, onboarding and related recruiting updates. Consent to receive text messages is not a condition of employment or of any purchase.",
      "Message frequency varies. Message and data rates may apply.",
      "You can opt out at any time by replying STOP to any message. Reply HELP for help, or contact us using the details below.",
      "We do not sell, rent or share your mobile number or text-message consent with third parties or affiliates for their marketing purposes. Information may be shared with service providers who help us deliver messages, only for that purpose.",
    ],
  },
  {
    title: "How we share information",
    body: [
      "We do not sell your personal information.",
      "We share information only with service providers who work on our behalf (for example application, messaging and website hosting providers), when required by law or regulation, or to protect the rights, safety and property of Trans 99, our drivers and the public.",
    ],
  },
  {
    title: "How long we keep information",
    body: [
      "We keep personal information only as long as needed for the purposes above, including to meet legal, safety and recordkeeping requirements that apply to motor carriers.",
    ],
  },
  {
    title: "How we protect information",
    body: [
      "We use reasonable administrative, technical and physical safeguards to protect personal information. No method of transmission or storage is completely secure, but we work to protect the information you share with us.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can ask us to access, correct or delete personal information we hold about you, subject to legal requirements, and you can stop recruiting text messages at any time by replying STOP.",
      "To make a request, contact us using the details below.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this policy from time to time. The effective date below shows when it was last changed.",
    ],
  },
];

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero kicker="Privacy" title="Privacy Policy" image="/media/office-wide.jpg" />
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl space-y-10 px-4 py-16 sm:px-6">
          {SECTIONS.map((section) => (
            <div key={section.title} className="space-y-3">
              <h2 className="font-display text-2xl tracking-wide text-navy">{section.title}</h2>
              {section.body.map((para) => (
                <p key={para} className="text-base leading-relaxed text-muted">
                  {para}
                </p>
              ))}
            </div>
          ))}
          <div className="space-y-3">
            <h2 className="font-display text-2xl tracking-wide text-navy">Contact us</h2>
            <p className="text-base leading-relaxed text-muted">
              Questions about this policy or your information:{" "}
              <a href={COMPANY.emailHref} className="font-semibold text-navy hover:text-signal">
                {COMPANY.email}
              </a>
            </p>
          </div>
          <p className="text-sm text-muted">Effective September 22, 2026.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
