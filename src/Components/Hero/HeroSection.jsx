// src/components/HeroSection.jsx
import React, { useEffect } from "react";
import {
  Mail,
  Phone,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Calendar,
} from "lucide-react";
import img from "../../assets/Herosection.png";

/* Calendly loader (idempotent) */
function useCalendlyLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.Calendly) return;
    const existing = document.getElementById("calendly-script");
    if (existing) return;
    const s = document.createElement("script");
    s.id = "calendly-script";
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);
}

/**
 * HeroSection - Tailwind-only UI (orange / black / white theme)
 *
 * - Uses Tailwind utility classes and arbitrary color values where needed.
 * - Accessible: focus-visible rings, semantic elements, aria-labels.
 * - Responsive and punchy micro-interactions (lift on hover).
 */
const HeroSection = ({ topOffset = 88 }) => {
  useCalendlyLoader();

  const openCalendly = (e) => {
    e?.preventDefault();
    try {
      if (window.Calendly?.initPopupWidget) {
        window.Calendly.initPopupWidget({
          url: "https://calendly.com/futurewesecure-info/30min",
        });
      } else {
        window.open(
          "https://calendly.com/futurewesecure-info/30min",
          "_blank",
          "noopener,noreferrer"
        );
      }
    } catch {
      window.open(
        "https://calendly.com/futurewesecure-info/30min",
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  const benefits = [
    "Personalized retirement & income plans",
    "Asset protection & legacy strategies",
    "Evidence-based investing discipline",
    "Plain-English education & reviews",
  ];

  const stats = [
    { k: "99%", v: "Client Satisfaction" },
    { k: "26+ yrs", v: "Combined Expertise" },
    { k: "1,200+", v: "Plans Reviewed" },
  ];

  // precise orange tones from your logo
  const accentFrom = "#f37021";
  const accentTo = "#d95800";

  return (
    <section
      aria-label="Hero — Future we Secure"
      className="relative overflow-visible"
      style={{ paddingTop: `${topOffset}px` }}
    >
      {/* Background: deep black -> very dark slate with subtle radial accent */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            `radial-gradient(900px 300px at 10% 0%, rgba(255, 255, 255, 0.08), transparent 40%), ` +
            `linear-gradient(180deg,#050505,#0b0b0b 40%, #a1a1a1ff)`,
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
          {/* LEFT: copy */}
          <div className="space-y-6">
            <div
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(6px)",
              }}
              aria-label="Trust-first financial guidance"
            >
              <ShieldCheck className="w-4 h-4 text-white" aria-hidden="true" />
              <span className="text-sm font-semibold text-white/90">
                Fiduciary-minded guidance
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
              Build a{" "}
              <span
                className="inline-block"
                style={{
                  background: `linear-gradient(90deg, ${accentFrom}, ${accentTo})`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Stronger Financial Future
              </span>{" "}
              — Starting Now.
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Clear plans. Smart protection. Disciplined growth. We combine education
              and strategy to help you reach—and keep—your goals with clarity and
              confidence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-3 justify-center text-lg font-semibold py-3 px-6 rounded-xl shadow-[0_14px_40px_-12px_rgba(243,112,33,0.16)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(243,112,33,0.18)] transform transition-transform duration-150 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(90deg, ${accentFrom}, ${accentTo})`,
                  color: "#111827",
                }}
                aria-label="Book a free 60 minute consultation on Calendly"
              >
                <Calendar className="w-5 h-5 text-white" aria-hidden="true" />
                <span className="text-white">Book a Consultation</span>
              </button>

              <a
                href="/service"
                className="inline-flex items-center gap-3 justify-center text-lg font-semibold py-3 px-6 rounded-xl border border-white/20 bg-white/6 backdrop-blur text-white hover:bg-white/10 transition"
                aria-label="Explore our services"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 text-white/90" aria-hidden="true" />
              </a>
            </div>

            {/* Benefits */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {benefits.map((t) => (
                <li key={t} className="flex items-center gap-3 text-white/95">
                  <CheckCircle2
                    className="w-5 h-5"
                    style={{ color: accentFrom }}
                    aria-hidden="true"
                  />
                  <span className="text-base font-medium">{t}</span>
                </li>
              ))}
            </ul>

            {/* Contact */}
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" style={{ color: accentFrom }} aria-hidden="true" />
                <a
                  href="mailto:Info@futurewesecure.com"
                  className="text-white/90 font-medium hover:underline"
                >
                  Info@futurewesecure.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" style={{ color: accentFrom }} aria-hidden="true" />
                <a href="tel:+1516-917-0756" className="text-white/90 font-medium">
                  516-917-0756
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="pt-6 grid grid-cols-3 gap-3 max-w-xl">
              {stats.map((s) => (
                <div
                  key={s.k}
                  className="rounded-xl px-4 py-3 text-center"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  aria-label={`${s.v}: ${s.k}`}
                >
                  <div className="text-xl md:text-2xl font-extrabold text-white">{s.k}</div>
                  <div className="text-xs text-white/70">{s.v}</div>
                </div>
              ))}
            </div>

            <p className="text-xs text-white/60 mt-4 max-w-2xl">
              Educational content. Not an offer to buy or sell securities. Decisions
              should consider your unique situation and objectives.
            </p>
          </div>

          {/* RIGHT: visual/art */}
          <div className="relative flex justify-center md:justify-end">
            <figure className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
              <div
                className="relative rounded-2xl overflow-hidden shadow-xl"
                style={{
                  border: "1px solid rgba(255,255,255,0.06)",
                  boxShadow: "0 24px 60px -24px rgba(0,0,0,0.65)",
                }}
              >
                <picture>
                  {/* add a webp source manually to public/ and change path if you have one */}
                  <img
                    src={img}
                    alt="Financial advisors reviewing growth charts and plans at a desk"
                    className="w-full h-[320px] md:h-[420px] lg:h-[480px] object-cover object-center bg-white"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>

                {/* subtle top gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating stat pill */}
              <figcaption className="absolute -bottom-6 left-3 sm:left-0">
                <div
                  className="rounded-2xl px-4 py-3"
                  style={{
                    background: "rgba(255,255,255,0.96)",
                    color: "#0b1724",
                    boxShadow: "0 18px 40px -18px rgba(0,0,0,0.45)",
                    border: "1px solid rgba(255,255,255,0.9)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" style={{ color: accentFrom }} aria-hidden="true" />
                    <div className="text-sm font-semibold tracking-wide">On-track Projection</div>
                  </div>
                  <div className="mt-1 text-2xl font-extrabold">+12.4%</div>
                  <div className="text-xs text-slate-600">12-mo rolling</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.18))",
        }}
      />
    </section>
  );
};

export default HeroSection;
