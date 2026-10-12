export function PageHero({
  kicker,
  title,
  lede,
  image,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-ink text-cream">
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-linear-to-r from-navy-ink via-navy-ink/80 to-navy-ink/40" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {kicker ? (
          <p className="text-xs font-semibold tracking-widest text-cream/70 uppercase">
            {kicker}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-none font-semibold tracking-tight text-balance sm:text-6xl">
          {title}
        </h1>
        {lede ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg">
            {lede}
          </p>
        ) : null}
      </div>
    </section>
  );
}
