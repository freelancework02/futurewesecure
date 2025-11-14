// Valueprop.VariantA.jsx
import React from "react";

const orange = "#f37021";
const orangeDark = "#d95800";
const black = "#0f0f0f";

const services = [
  {
    title: "Planning for the Future",
    description: (
      <>
        <p className="text-black/75 leading-relaxed">
          We’ve helped clients prepare for the unknown while staying aligned with their financial goals. Ask us about:
        </p>
        <ul className="list-disc list-outside mt-3 text-black/70 pl-5 space-y-1">
          <li>Financial planning</li>
          <li>Tax optimization</li>
          <li>Education funding</li>
          <li>Estate planning</li>
        </ul>
        <p className="mt-3 text-black/75 leading-relaxed">
          As an independent firm, we source across providers to tailor solutions that fit your exact needs.
        </p>
      </>
    ),
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img7.jpg",
  },
  {
    title: "Comprehensive End-to-End Approach",
    description:
      "We start with a deep needs analysis, clarify goals, and review your full portfolio. Then we tailor strategies to your risk tolerance and market realities—expect unbiased recommendations built around you.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img8.jpg",
  },
  {
    title: "Committed to Service",
    description:
      "Great strategies begin with great relationships. Our mission is to exceed expectations—on day one and year ten. Let’s map short- and long-term moves that bring your goals within reach.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img9.jpg",
  },
];

export default function ValuepropVariantA() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 justify-center">
            <span
              className="inline-grid place-items-center w-12 h-12 rounded-xl shadow-md"
              style={{
                background: `linear-gradient(135deg, ${orange}, ${orangeDark})`,
                clipPath:
                  "polygon(25% 6%, 75% 6%, 94% 50%, 75% 94%, 25% 94%, 6% 50%)",
              }}
              aria-hidden="true"
            >
              <ArrowUpRight className="text-white" />
            </span>

            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: black }}>
              Our Value Proposition
            </h2>
          </div>
          <p className="mt-3 text-black/65">Clear guidance. Disciplined strategy. A better future ahead.</p>
        </div>

        {/* showcase list */}
        <div className="space-y-10">
          {services.map((s, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <article
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch ${reverse ? "md:grid-flow-dense" : ""}`}
              >
                {/* image */}
                <div
                  className={`md:col-span-6 rounded-2xl overflow-hidden shadow-lg relative transform transition-transform duration-500 hover:scale-[1.01]`}
                  style={{ gridColumn: reverse ? "7 / span 6" : "1 / span 6" }}
                >
                  <img src={s.image} alt={s.title} className="w-full h-72 md:h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div
                    className="absolute left-4 top-4 rounded-full px-3 py-1 text-sm font-semibold text-white"
                    style={{ background: `linear-gradient(90deg, ${orange}, ${orangeDark})` }}
                  >
                    {idx === 0 ? "Flagship" : "Featured"}
                  </div>
                </div>

                {/* content */}
                <div
                  className="md:col-span-6 bg-white rounded-2xl p-6 md:p-10 flex flex-col justify-between border border-black/5 shadow-sm"
                  style={{ gridColumn: reverse ? "1 / span 6" : "7 / span 6" }}
                >
                  <div>
                    <h3 className="text-2xl font-bold text-black">{s.title}</h3>
                    <div className="mt-4 text-black/70">{s.description}</div>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      <li className="text-xs px-3 py-1 rounded-full bg-black/5 text-black/70">Clarity</li>
                      <li className="text-xs px-3 py-1 rounded-full bg-black/5 text-black/70">Tailored</li>
                      <li className="text-xs px-3 py-1 rounded-full bg-black/5 text-black/70">Ongoing</li>
                    </ul>
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.Calendly?.initPopupWidget?.({ url: "https://calendly.com/futurewesecure-info/30min" });
                      }}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white font-semibold"
                      style={{ background: `linear-gradient(90deg, ${orange}, ${orangeDark})` }}
                    >
                      Talk to an advisor
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h12M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </a>

                    <a className="text-sm text-black/70 underline" href="#learn"  onClick={(e) => {
                e.preventDefault();
                // if you use Calendly or similar, call popup here
                if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
                  window.Calendly.initPopupWidget({ url: "https://calendly.com/futurewesecure-info/30min" });
                } else {
                  // fallback to a route or external link — adjust as needed
                  window.open("https://calendly.com/futurewesecure-info/30min", "_blank", "noopener,noreferrer");
                }
              }}>Learn more</a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* small inline arrow icon */
function ArrowUpRight({ className = "", size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 7H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
