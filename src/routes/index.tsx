import { Link, createFileRoute } from "@tanstack/react-router";
import { CONTACT_LOCATIONS, GALLERY, SERVICES } from "@/data/content";
import { SiteLayout } from "@/components/site-layout";
import { NetworkMap } from "@/components/network-map";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Trans 99 Logistics USA" }],
  }),
});

function Home() {
  return (
    <SiteLayout>
      <section className="relative isolate min-h-screen overflow-hidden bg-navy-ink text-cream">
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/hero-poster.jpg"
        >
          <source src="/media/hero-web.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy-ink/55" />
        <div className="absolute inset-0 bg-linear-to-r from-navy-ink via-navy-ink/70 to-transparent" />
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-4 py-20 sm:px-6 md:justify-center">
          <p className="text-xs font-semibold tracking-widest text-cream/70 uppercase">
            Trans 99 Logistics USA
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-6xl leading-none font-semibold tracking-tight text-balance sm:text-7xl md:text-8xl">
            Driven to Deliver.
            <span className="mt-2 block text-cream/85">Powered by Trust.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
            Asset-based dry van transportation across the United States, Mexico
            and Canada.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <NetworkMap />

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest text-signal uppercase">
              Who we are
            </p>
            <h2 className="mt-3 font-display text-4xl leading-none text-navy sm:text-5xl">
              A professionally operated North American motor carrier.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Trans 99 Logistics USA is an asset-based motor carrier providing
              truckload transportation throughout the United States with
              cross-border service connecting Mexico and Canada.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Our operation is built around professional drivers, modern
              equipment, experienced transportation professionals,
              technology-enabled visibility, and safe, reliable execution.
            </p>
            <Button asChild variant="navy" className="mt-8">
              <Link to="/about">About Trans 99 USA</Link>
            </Button>
          </div>
          <img
            src="/media/truck-close.jpg"
            alt="Trans 99 USA tractor"
            className="h-full w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
          />
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold tracking-widest text-signal uppercase">
            Core capabilities
          </p>
          <h2 className="mt-3 font-display text-4xl leading-none text-navy sm:text-5xl">
            What we run.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="bg-cream p-6 shadow-(--shadow-border) transition-[box-shadow] duration-150 hover:shadow-(--shadow-border-hover)"
              >
                <h3 className="font-display text-2xl tracking-wide text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </article>
            ))}
          </div>
          <Button asChild className="mt-8">
            <Link to="/services">All services</Link>
          </Button>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold tracking-widest text-signal uppercase">
            Operations
          </p>
          <h2 className="mt-3 font-display text-4xl text-navy">
            Built to Support a North American Network.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            Our U.S. operations support customers throughout the country while
            connecting critical cross-border freight between the United States,
            Mexico and Canada. With an expanding asset-based fleet, experienced
            operations teams and a growing network, we are built to provide
            reliable capacity, proactive communication and accountable
            execution across the supply chain.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {GALLERY.map((shot) => (
              <img
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                className="h-40 w-full object-cover sm:h-52 md:h-56"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-4xl text-navy">Talk to the USA team.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {CONTACT_LOCATIONS.map((loc) => (
              <article
                key={loc.id}
                className="bg-cream p-6 shadow-(--shadow-border)"
              >
                <h3 className="font-display text-3xl text-navy">{loc.city}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {loc.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <a
                  href={loc.phoneHref}
                  className="mt-4 inline-block text-lg font-semibold text-navy hover:text-signal"
                >
                  {loc.phone}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-navy-ink text-cream">
        <img
          src="/media/yard-sunset.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-navy-ink/70" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-20 sm:px-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl font-display text-4xl leading-none sm:text-5xl">
            Start with a conversation.
          </h2>
          <Button asChild variant="light" size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
