import React from "react";

/**
 * ProfessionalServices (upgraded UI)
 * - Brand colors: orange (#f37021 / #d95800), black (#0f0f0f), white
 * - Tailwind-only (no external CSS). Improved spacing, visual hierarchy,
 *   stronger CTAs, accessible image handling, subtle motion & depth.
 * - Keeps original images and text; purely visual/code upgrades.
 */

export default function ProfessionalServices() {
  const orange = "#f37021";
  const orangeDark = "#d95800";
  const black = "#0f0f0f";

  const services = [
    {
      title: "Expertise",
      description:
        "Over ten years of experience. Clear insights, strategic roadmaps, and ongoing reviews that keep your goals on track.",
      image:
        "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img1.jpg",
    },
    {
      title: "Discretion",
      description:
        "Your privacy matters. We handle sensitive information with full confidentiality and secure data processes.",
      image:
        "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img2.jpg",
    },
    {
      title: "Dependability",
      description:
        "Consistent support, transparent updates, and a results-driven approach to your long-term well-being.",
      image:
        "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img3.jpg",
    },
    {
      title: "Consulting",
      description:
        "Cut through complexity. Focused strategy sessions that help you clarify goals and close financial gaps.",
      image:
        "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img4.jpg",
    },
    {
      title: "Sales",
      description:
        "Curated financial solutions that prioritize suitability, cost-efficiency, and long-term value.",
      image:
        "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img5.jpg",
    },
    {
      title: "Partnership",
      description:
        "If our philosophy aligns, we grow together—built on trust, shared standards, and mutual integrity.",
      image:
        "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img6.jpg",
    },
  ];

  return (
    <section
      className="py-16 px-4 md:px-6 lg:px-12"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #fff7f0 45%, #ffffff 100%)",
      }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Tagline */}
        <div className="flex justify-center mb-6">
          <div className="px-5 py-2 rounded-full text-sm font-medium border border-black/10 bg-white shadow-sm flex items-center gap-3">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="flex-shrink-0"
            >
              <circle cx="12" cy="12" r="10" fill={orange} opacity="0.95" />
              <path d="M8 12l2.5 2.5L16 9" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="tracking-wide text-black/70">
              WHAT CAN YOU EXPECT FROM US
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
            style={{ color: black }}
          >
            Our Skills & Offers
          </h2>
          <p className="mt-3 text-black/70 max-w-3xl mx-auto">
            Expertise you can trust — delivered with clarity, transparency, and long-term vision.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <article
              key={i}
              className="group bg-white rounded-3xl overflow-hidden border border-black/8 shadow-[0_12px_30px_rgba(15,15,15,0.06)] transition-transform hover:-translate-y-2 hover:shadow-[0_22px_60px_rgba(15,15,15,0.10)]"
            >
              {/* Media / image */}
              <div className="relative h-56 md:h-60 w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-[1.06]"
                  loading="lazy"
                  decoding="async"
                />

                {/* subtle dark overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                {/* top-left badge */}
                <span
                  className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow"
                  style={{ background: `linear-gradient(90deg, ${orange}, ${orangeDark})` }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12l4 4L19 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Featured
                </span>

                {/* decorative orange glow (bottom-right) */}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-6 -right-6 w-36 h-36 rounded-full opacity-60 pointer-events-none"
                  style={{
                    background: `radial-gradient(60% 60% at 50% 50%, ${orange} 0%, rgba(243,112,33,0.12) 40%, transparent 60%)`,
                    filter: "blur(18px)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <h3 className="text-xl md:text-[1.125rem] font-semibold text-black mb-2">
                  {s.title}
                </h3>

                <p className="text-sm md:text-base text-black/70 leading-relaxed">
                  {s.description}
                </p>

                {/* chips & stats row */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium px-3 py-1 rounded-full border border-black/8 bg-black/5 text-black/70">
                    Clarity
                  </span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full border border-black/8 bg-black/5 text-black/70">
                    Consistency
                  </span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full border border-black/8 bg-black/5 text-black/70">
                    Accountability
                  </span>
                </div>

                {/* CTA + micro link row */}
                <div className="mt-6 flex items-center justify-between gap-3">
                  <a
                    href="#"
                     onClick={(e) => {
                e.preventDefault();
                // if you use Calendly or similar, call popup here
                if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
                  window.Calendly.initPopupWidget({ url: "https://calendly.com/futurewesecure-info/30min" });
                } else {
                  // fallback to a route or external link — adjust as needed
                  window.open("https://calendly.com/futurewesecure-info/30min", "_blank", "noopener,noreferrer");
                }
              }}
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-shadow shadow-sm"
                    style={{
                      background: `linear-gradient(90deg, ${orange}, ${orangeDark})`,
                      color: "#fff",
                      boxShadow: "0 8px 26px rgba(217,88,0,0.14)",
                    }}
                    aria-label={`Get started with ${s.title}`}
                  >
                    Get Started
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h12M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>

                  <a
                    href="#"
                     onClick={(e) => {
                e.preventDefault();
                // if you use Calendly or similar, call popup here
                if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
                  window.Calendly.initPopupWidget({ url: "https://calendly.com/futurewesecure-info/30min" });
                } else {
                  // fallback to a route or external link — adjust as needed
                  window.open("https://calendly.com/futurewesecure-info/30min", "_blank", "noopener,noreferrer");
                }
              }}
                    className="text-sm text-black/70 hover:text-black/90 transition"
                    aria-label={`Learn more about ${s.title}`}
                  >
                    Learn more →
                  </a>
                </div>

                {/* hover underline accent — appears on group hover */}
                <div
                  className="mt-5 h-[3px] w-0 group-hover:w-full transition-[width] duration-400 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${orange}, ${orangeDark})`,
                  }}
                />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA strip - subtle, optional */}
        <div className="mt-12 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-gradient-to-r from-white to-white border border-black/6 shadow-sm">
          <div>
            <h3 className="text-lg md:text-xl font-bold" style={{ color: black }}>
              Want a quick, no-pressure review?
            </h3>
            <p className="text-sm text-black/70 mt-1">
              Schedule a brief call — we’ll listen, assess, and suggest next steps.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                // if you use Calendly or similar, call popup here
                if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
                  window.Calendly.initPopupWidget({ url: "https://calendly.com/futurewesecure-info/30min" });
                } else {
                  // fallback to a route or external link — adjust as needed
                  window.open("https://calendly.com/futurewesecure-info/30min", "_blank", "noopener,noreferrer");
                }
              }}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold"
              style={{
                background: `linear-gradient(90deg, ${orange}, ${orangeDark})`,
                color: "#fff",
                boxShadow: "0 12px 36px rgba(217,88,0,0.14)",
              }}
            >
              Book a Review
            </a>

            <a
              href="#"
               onClick={(e) => {
                e.preventDefault();
                // if you use Calendly or similar, call popup here
                if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
                  window.Calendly.initPopupWidget({ url: "https://calendly.com/futurewesecure-info/30min" });
                } else {
                  // fallback to a route or external link — adjust as needed
                  window.open("https://calendly.com/futurewesecure-info/30min", "_blank", "noopener,noreferrer");
                }
              }}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 border border-black/8 text-sm font-semibold text-black/80 bg-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
