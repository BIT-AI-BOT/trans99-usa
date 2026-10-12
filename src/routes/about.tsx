import { createFileRoute } from "@tanstack/react-router";
import { FACILITY_LOCATIONS } from "@/data/content";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: "About — Trans 99 Logistics USA" }],
  }),
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="About"
        title="Built around safety, reliability and accountability."
        image="/media/yard-aerial.jpg"
      />
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4 text-base leading-relaxed text-muted">
            <h2 className="font-display text-4xl text-navy">Who we are</h2>
            <p>
              Trans 99 Logistics USA is a growing, asset-based North American
              motor carrier built around a straightforward commitment: deliver
              for our customers, support our people and execute with
              accountability.
            </p>
            <p>
              From our U.S. operations in Laredo and Metro Detroit, we provide
              dry van truckload transportation throughout the United States with
              cross-border service connecting Mexico and Canada.
            </p>
            <p>
              Our business is built on professional drivers, experienced
              transportation professionals, modern equipment and proactive
              communication. As we grow, our objective remains the same — to
              build an organization our customers, drivers, employees and
              partners can rely on.
            </p>
            <p>
              Transportation is ultimately a people business. We believe strong
              organizations are built by developing great people, creating
              opportunities for them to grow and giving them the tools and
              support necessary to perform at a high level.
            </p>
            <p className="font-semibold tracking-wide text-navy uppercase">
              Safety. Service. Communication. Accountability. Execution.
            </p>
            <p>
              Our objective is not simply to become a larger transportation
              company. It is to build a better one — an organization customers
              want to work with, professional drivers want to drive for and
              talented people want to build their careers with.
            </p>
          </div>
          <img
            src="/media/office-wide.jpg"
            alt="Trans 99 operations office"
            className="h-full max-h-[28rem] w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
          />
        </div>
      </section>
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 py-16 sm:px-6 md:grid-cols-3">
          {FACILITY_LOCATIONS.map((loc) => (
            <article key={loc.id} className="bg-cream p-6 shadow-(--shadow-border)">
              <h3 className="font-display text-3xl text-navy">{loc.city}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {loc.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              {loc.phone ? (
                <a
                  href={loc.phoneHref}
                  className="mt-4 inline-block font-semibold text-navy hover:text-signal"
                >
                  {loc.phone}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
