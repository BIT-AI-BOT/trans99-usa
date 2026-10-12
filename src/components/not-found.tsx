import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-xs font-semibold tracking-widest text-signal uppercase">
          404
        </p>
        <h1 className="mt-3 font-display text-5xl">Page not found</h1>
        <p className="mt-4 max-w-md text-muted">
          That page is not part of the Trans 99 Logistics USA site.
        </p>
        <Button asChild className="mt-8">
          <Link to="/">Back to home</Link>
        </Button>
      </section>
    </SiteLayout>
  );
}
