import { Link } from "@tanstack/react-router";
import { COMPANY, CONTACT_LOCATIONS, NAV } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="bg-navy-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <Link to="/" className="inline-block">
            <img
              src="/media/logo-on-dark.png"
              alt={COMPANY.name}
              className="h-16 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            Asset-based dry van transportation across the United States, Mexico
            and Canada.
          </p>
          <a
            href={COMPANY.emailHref}
            className="mt-4 block text-sm text-cream hover:underline"
          >
            {COMPANY.email}
          </a>
        </div>

        {CONTACT_LOCATIONS.map((loc) => (
          <div key={loc.id}>
            <h2 className="font-display text-lg tracking-widest text-cream uppercase">
              {loc.city}
            </h2>
            <div className="mt-4 flex flex-col gap-1 text-sm text-cream/70">
              {loc.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <a href={loc.phoneHref} className="pt-2 font-medium text-cream hover:underline">
                {loc.phone}
              </a>
              <a href={loc.map} target="_blank" rel="noreferrer" className="hover:text-cream">
                Map
              </a>
            </div>
          </div>
        ))}

        <div>
          <h2 className="font-display text-lg tracking-widest text-cream uppercase">
            Site
          </h2>
          <div className="mt-4 flex flex-col gap-2 text-sm text-cream/70">
            {NAV.filter((n) => n.to !== "/").map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-cream">
                {item.label}
              </Link>
            ))}
            <Link to="/privacy" className="hover:text-cream">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-cream/50 sm:px-6">
          © {new Date().getFullYear()} Trans 99 Logistics USA
        </div>
      </div>
    </footer>
  );
}
