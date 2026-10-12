import { createFileRoute } from "@tanstack/react-router";
import { COMPANY, CONTACT_LOCATIONS } from "@/data/content";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: "Contact — Trans 99 Logistics USA" }],
  }),
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Contact"
        title="Let's move forward."
        lede="Whether you are looking for transportation capacity, interested in working with Trans 99 or simply want to learn more about our organization, connect with our team."
        image="/media/office-wide.jpg"
      />
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 py-16 sm:px-6 md:grid-cols-2">
          {CONTACT_LOCATIONS.map((loc) => (
            <article key={loc.id} className="bg-cream p-6 shadow-(--shadow-border)">
              <h2 className="font-display text-3xl text-navy">{loc.city}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {loc.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <a
                href={loc.phoneHref}
                className="mt-4 block text-lg font-semibold text-navy hover:text-signal"
              >
                {loc.phone}
              </a>
              <a
                href={loc.map}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm text-muted hover:text-navy"
              >
                Open map
              </a>
            </article>
          ))}
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <article className="bg-cream p-6 shadow-(--shadow-border)">
            <h2 className="font-display text-3xl text-navy">Email</h2>
            <p className="mt-3">
              <a
                href={COMPANY.emailHref}
                className="text-lg font-semibold text-navy hover:text-signal"
              >
                {COMPANY.email}
              </a>
            </p>
            <Button asChild className="mt-6">
              <a href={COMPANY.emailHref}>Email the team</a>
            </Button>
          </article>
        </div>
      </section>
    </SiteLayout>
  );
}
