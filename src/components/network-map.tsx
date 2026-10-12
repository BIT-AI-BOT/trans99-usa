import { useEffect, useRef } from "react";

export function NetworkMap() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const ctrl = new AbortController();

    fetch("/maps/network.svg", { signal: ctrl.signal })
      .then((res) => {
        if (!res.ok) throw new Error("map missing");
        return res.text();
      })
      .then((svg) => {
        host.innerHTML = svg;
        bindNetworkMap(host);
      })
      .catch(() => {
        if (ctrl.signal.aborted) return;
        host.innerHTML =
          '<p class="px-6 py-20 text-center text-muted">Network map could not load.</p>';
      });

    return () => ctrl.abort();
  }, []);

  return (
    <section className="bg-paper" aria-labelledby="network-heading">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-6 sm:px-6">
        <p className="text-xs font-semibold tracking-widest text-signal uppercase">
          Network
        </p>
        <h2
          id="network-heading"
          className="mt-3 max-w-3xl font-display text-4xl leading-none text-navy sm:text-5xl"
        >
          Facilities and service locations.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Facilities and service locations across the United States, Mexico and
          Canada. Hover a marker for the location name.
        </p>
      </div>
      <div
        ref={hostRef}
        className="network-map-host aspect-[3/2] w-full bg-paper-2"
      >
        <p className="px-6 py-20 text-center text-muted">Loading network map…</p>
      </div>
    </section>
  );
}

function bindNetworkMap(host: HTMLElement) {
  const svg = host.querySelector<SVGSVGElement>("svg");
  const overlay = host.querySelector<SVGElement>("#location-pointer-overlay");
  if (!svg || !overlay) return;

  const markers = Array.from(
    host.querySelectorAll<SVGElement>(".marker[data-location-id]"),
  );
  const radiusSquared = 15 * 15;
  let pointerMarker: SVGElement | null = null;
  let focusMarker: SVGElement | null = null;

  const tooltipFor = (marker: SVGElement) =>
    host.querySelector(`#tooltip-${marker.dataset.locationId}`);

  const syncTooltips = () => {
    const active = pointerMarker ?? focusMarker;
    for (const marker of markers) {
      const tooltip = tooltipFor(marker);
      if (!tooltip) continue;
      const visible = marker === active;
      tooltip.classList.toggle("is-visible", visible);
      tooltip.setAttribute("aria-hidden", visible ? "false" : "true");
    }
  };

  const nearest = (event: PointerEvent) => {
    const matrix = svg.getScreenCTM();
    if (!matrix) return null;
    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const local = point.matrixTransform(matrix.inverse());
    let found: SVGElement | null = null;
    let best = radiusSquared;
    for (const marker of markers) {
      const dx = local.x - Number(marker.dataset.x);
      const dy = local.y - Number(marker.dataset.y);
      const dist = dx * dx + dy * dy;
      if (dist <= best) {
        found = marker;
        best = dist;
      }
    }
    return found;
  };

  overlay.addEventListener("pointermove", (event) => {
    const next = nearest(event);
    if (next === pointerMarker) return;
    pointerMarker = next;
    syncTooltips();
  });
  overlay.addEventListener("pointerleave", () => {
    pointerMarker = null;
    syncTooltips();
  });

  for (const marker of markers) {
    marker.addEventListener("focus", () => {
      focusMarker = marker;
      syncTooltips();
    });
    marker.addEventListener("blur", () => {
      if (focusMarker === marker) focusMarker = null;
      syncTooltips();
    });
  }
}
