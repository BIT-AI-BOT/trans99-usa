import { Link, createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/data/content";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [{ title: "Services — Trans 99 Logistics USA" }],
  }),
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Services"
        title="Asset-based dry van truckload."
        lede="Reliable capacity. Proactive communication. Accountable execution across our North American network."
        image="/media/truck-dusk.jpg"
      />
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 py-16 sm:px-6 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <article key={s.title} className="overflow-hidden bg-cream shadow-(--shadow-border)">
              <img
                src={s.image}
                alt=""
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="font-display text-2xl tracking-wide text-navy">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-navy-ink text-cream">
        <img
          src="/media/yard-line.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy-ink/70" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl font-display text-4xl">
            Need capacity on a U.S. or cross-border lane?
          </h2>
          <Button asChild variant="light" size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
