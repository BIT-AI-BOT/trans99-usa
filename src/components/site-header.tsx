import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { COMPANY, NAV } from "@/data/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream text-ink">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" className="flex min-w-0 shrink items-center py-2" aria-label={`${COMPANY.short} home`}>
          <img
            src="/media/logo.png"
            alt={COMPANY.name}
            className="h-14 w-auto max-w-64 object-contain object-left sm:h-16"
          />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "px-3.5 py-3 text-lg font-semibold tracking-wide transition-colors",
                  active ? "text-signal" : "text-navy/80 hover:text-signal",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="navy" size="sm" className="hidden sm:inline-flex">
            <a href={COMPANY.homeApplyUrl} target="_blank" rel="noopener noreferrer">
              Driving Careers
            </a>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Contact Us</Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center text-navy lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="flex flex-col border-t border-line bg-cream px-4 py-3 lg:hidden"
          aria-label="Mobile"
        >
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="py-3 text-lg text-navy"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="navy" className="mt-2 w-full">
            <a
              href={COMPANY.homeApplyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Driving Careers
            </a>
          </Button>
          <Button asChild className="mt-2 mb-2 w-full">
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact Us
            </Link>
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
