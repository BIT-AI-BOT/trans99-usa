import { createFileRoute } from "@tanstack/react-router";
import { SAFETY, SAFETY_CLOSING, SAFETY_INTRO } from "@/data/content";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/safety")({
  component: SafetyPage,
  head: () => ({
    meta: [{ title: "Safety — Trans 99 Logistics USA" }],
  }),
});

function SafetyPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Safety"
        title="Safety is fundamental to our operation."
        image="/media/truck-close.jpg"
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            {SAFETY_INTRO.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {SAFETY.map((item, i) => (
              <article
                key={item.title}
                className={`bg-cream p-6 shadow-(--shadow-border)${
                  i === SAFETY.length - 1 && SAFETY.length % 2 === 1 ? " sm:col-span-2" : ""
                }`}
              >
                <h2 className="font-display text-2xl tracking-wide text-navy">{item.title}</h2>
                {item.body.map((para) => (
                  <p key={para} className="mt-2 text-sm leading-relaxed text-muted">
                    {para}
                  </p>
                ))}
              </article>
            ))}
          </div>
          <p className="mt-12 text-center font-semibold tracking-wide text-navy uppercase">
            {SAFETY_CLOSING}
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
