import { createFileRoute } from "@tanstack/react-router";
import { COMPANY, TESTIMONIALS } from "@/data/content";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [{ title: "Careers — Trans 99 Logistics USA" }],
  }),
});

function CareersPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Careers"
        title="Build with us."
        lede="Trans 99 Logistics USA is growing. We are looking for professional drivers, owner-operators and transportation professionals who want to grow with us."
        image="/media/office-team.jpg"
      />

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-4xl text-navy">A performance-driven culture.</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We are building a culture centered around accountability,
              development, respect and opportunity.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We expect our people to care about what they do, communicate
              openly, take ownership and continuously improve. In return, we
              want Trans 99 to be an organization where people are challenged,
              supported, developed and given meaningful opportunities to build
              their future.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Our goal is to create an environment where people become more
              capable, more knowledgeable and better prepared for what comes
              next because of the time they spend with Trans 99.
            </p>
          </div>
          <img
            src="/media/office-floor.jpg"
            alt="Trans 99 office"
            className="h-full max-h-96 w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
          />
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 py-16 sm:px-6 lg:grid-cols-3">
          <article className="flex flex-col bg-cream p-6 shadow-(--shadow-border)">
            <p className="text-xs font-semibold tracking-widest text-signal uppercase">
              Corporate careers
            </p>
            <h2 className="mt-3 font-display text-3xl text-navy">Grow with Trans 99.</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Our growth creates opportunities beyond the driver's seat.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We are building teams across operations, customer service, safety,
              fleet, administration, sales and other areas of our organization.
              We are looking for people who bring accountability, initiative,
              curiosity and a desire to grow with the company.
            </p>
            <Button asChild className="mt-8">
              <a href={COMPANY.careersEmailHref}>Corporate Careers</a>
            </Button>
            <p className="mt-4 text-sm text-muted">
              Inquire at{" "}
              <a href={COMPANY.careersEmailHref} className="font-medium text-navy hover:text-signal">
                {COMPANY.careersEmail}
              </a>
            </p>
          </article>

          <article className="flex flex-col bg-cream p-6 shadow-(--shadow-border)">
            <p className="text-xs font-semibold tracking-widest text-signal uppercase">
              Company drivers
            </p>
            <h2 className="mt-3 font-display text-3xl text-navy">Drive with Trans 99.</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Join a growing asset-based carrier offering professional driving
              opportunities supported by modern equipment, consistent freight,
              experienced operations teams and a company focused on building
              long-term relationships with its drivers.
            </p>
            <Button asChild className="mt-8">
              <a href={COMPANY.applyUrl} target="_blank" rel="noopener noreferrer">
                Driving Careers
              </a>
            </Button>
          </article>

          <article className="flex flex-col bg-cream p-6 shadow-(--shadow-border)">
            <p className="text-xs font-semibold tracking-widest text-signal uppercase">
              Owner-operators
            </p>
            <h2 className="mt-3 font-display text-3xl text-navy">
              Build your business with our network.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Trans 99 Logistics USA works with professional owner-operators
              looking for consistent freight, operational support and
              opportunities within our growing North American transportation
              network.
            </p>
            <Button asChild variant="navy" className="mt-8">
              <a href={COMPANY.applyOwnerUrl} target="_blank" rel="noopener noreferrer">
                Owner-operator application
              </a>
            </Button>
          </article>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold tracking-widest text-signal uppercase">
            From the fleet
          </p>
          <h2 className="mt-3 font-display text-4xl text-navy">Driver testimonials.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {TESTIMONIALS.map((clip) => (
              <article key={clip.id} className="overflow-hidden bg-cream shadow-(--shadow-border)">
                <video
                  className="aspect-video w-full bg-navy-ink"
                  controls
                  playsInline
                  preload="metadata"
                  poster={clip.poster}
                >
                  <source src={clip.src} type="video/mp4" />
                </video>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-navy">{clip.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
