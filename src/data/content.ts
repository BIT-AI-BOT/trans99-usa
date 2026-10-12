export const COMPANY = {
  name: "Trans 99 Logistics USA",
  short: "Trans 99",
  tagline: "Driven to Deliver. Powered by Trust.",
  email: "usateam@trans99.net",
  emailHref: "mailto:usateam@trans99.net",
  careersEmail: "careers@trans99.net",
  careersEmailHref: "mailto:careers@trans99.net",
  applyUrl: "https://app.getdoublenickel.com/short-form/74zocmxq2",
  homeApplyUrl: "https://app.getdoublenickel.com/short-form/brklnc84p",
  applyOwnerUrl: "https://app.getdoublenickel.com/short-form/4m2k1y7sr",
  privacyUrl: "/privacy",
};

export const CONTACT_LOCATIONS = [
  {
    id: "laredo",
    city: "Laredo",
    phone: "1-956-869-5161",
    phoneHref: "tel:+19568695161",
    lines: ["1191 Reuthinger Pkwy.", "Suite 100", "Laredo, TX 78045"],
    map: "https://maps.google.com/?q=1191+Reuthinger+Pkwy+Suite+100+Laredo+TX+78045",
  },
  {
    id: "detroit",
    city: "Detroit",
    phone: "1-313-698-5161",
    phoneHref: "tel:+13136985161",
    lines: ["15515 Wayne Rd.", "Romulus, MI 48174"],
    map: "https://maps.google.com/?q=15515+Wayne+Rd+Romulus+MI+48174",
  },
] as const;

export const FACILITY_LOCATIONS = [
  ...CONTACT_LOCATIONS,
  {
    id: "westchester",
    city: "West Chester",
    phone: "",
    phoneHref: "",
    // City only, at the client's request (23 Sep): the street address is a private home, not an office.
    lines: ["West Chester, OH"],
    map: "",
  },
] as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/safety", label: "Safety" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    title: "Asset-Based Truckload",
    body: "Full truckload transportation utilizing Trans 99 equipment and professional CDL-A drivers.",
    image: "/images/services/asset-based-truckload.jpg",
  },
  {
    title: "Dry Van Transportation",
    body: "53-foot dry van transportation throughout our operating network.",
    image: "/images/services/dry-van-transportation.jpg",
  },
  {
    title: "Dedicated Transportation",
    body: "Dedicated capacity supporting recurring customer freight and consistent lanes.",
    image: "/images/services/dedicated-transportation.jpg",
  },
  {
    title: "Cross-Border Transportation",
    body: "Truckload transportation connecting the United States, Mexico and Canada.",
    image: "/media/yard-aerial.jpg",
  },
  {
    title: "Expedited & Team Transportation",
    body: "Team-driver transportation supporting time-sensitive freight requiring accelerated transit.",
    image: "/images/services/expedited-team-transportation.jpg",
  },
  {
    title: "Automotive & Just-in-Time Transportation",
    body: "Time-sensitive transportation supporting automotive and manufacturing supply chains.",
    image: "/images/services/automotive-just-in-time.jpg",
  },
] as const;

export const SAFETY_INTRO = [
  "At Trans 99 Logistics USA, safety is more than a requirement — it is a responsibility to our professional drivers, the motoring public, our customers and the communities we serve.",
  "We invest in professional drivers, modern equipment, technology, preventative maintenance, inspection readiness and ongoing coaching to support safe, compliant and accountable transportation.",
  "Our approach is built around continuous improvement: identifying risk, reinforcing safe behaviors, maintaining our equipment and giving our drivers and operations teams the tools and support they need to make safe decisions every day.",
] as const;

export const SAFETY = [
  {
    title: "Professional CDL-A Drivers",
    body: [
      "Our operation is built around qualified professional CDL-A drivers supported by clear expectations, ongoing communication, coaching and a commitment to safe driving behaviors.",
    ],
  },
  {
    title: "Modern Equipment",
    body: [
      "We continue to invest in modern equipment designed to support reliability, driver comfort and safe execution throughout our dry van truckload network.",
    ],
  },
  {
    title: "Technology-Enabled Fleet",
    body: [
      "Fleet technology provides greater visibility into our operation and supports driver communication, compliance, coaching and proactive identification of potential safety risks.",
    ],
  },
  {
    title: "Preventative Maintenance & Inspection Programs",
    body: [
      "Preventative maintenance and inspection readiness are fundamental to how we operate our fleet, helping identify concerns proactively and keep our equipment prepared for the road.",
    ],
  },
  {
    title: "Safety Through Accountability",
    body: [
      "Safe operations require more than equipment and technology. They require people who take ownership.",
      "We expect our drivers, operations teams and leadership to communicate concerns, address risk proactively and continuously look for opportunities to improve. When something can be done safer or better, we want our people empowered to speak up and act.",
    ],
  },
] as const;

export const SAFETY_CLOSING = "SAFE DRIVERS. SAFE EQUIPMENT. ACCOUNTABLE OPERATIONS.";

export const GALLERY = [
  { src: "/media/yard-aerial.jpg", alt: "Trans 99 yard from the air" },
  { src: "/media/yard-fleet.jpg", alt: "Trans 99 fleet in the yard" },
  { src: "/media/office-team.jpg", alt: "Trans 99 operations team" },
  { src: "/media/trailer-logo.jpg", alt: "Trans 99 trailer" },
  { src: "/media/truck-dusk.jpg", alt: "Trans 99 tractor at dusk" },
  { src: "/media/yard-sunset.jpg", alt: "Trailers staged at sunset" },
] as const;

export const TESTIMONIALS = [
  {
    id: "solo",
    title: "Solo driver",
    src: "/videos/solo-driver-testimonial.mp4",
    poster: "/videos/solo-driver-testimonial-poster.jpg",
  },
  {
    id: "team",
    title: "Team drivers",
    src: "/videos/team-driver-testimonial.mp4",
    poster: "/videos/team-driver-testimonial-poster.jpg",
  },
] as const;
