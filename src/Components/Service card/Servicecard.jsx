// Servicecard.VariantA.jsx
import React from "react";

const services = [
  { title: "Retirement Planning", description: "Plan your retirement so your lifestyle is shaped by choice, not just assets at retirement.", image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img1.jpg" },
  { title: "Estate Planning", description: "Protect what you’ve built from probate, litigation, and unfavorable taxation.", image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img2.jpg" },
  { title: "Kids Education Planning", description: "Choose a smart, disciplined path to fund your children’s education.", image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img3.jpg" },
  { title: "Lifetime Income Planning", description: "No pension? Create one—and secure predictable, lifetime income streams.", image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img4.jpg" },
  { title: "Life Insurance Planning", description: "Right-sized coverage with living benefits and quotes that fit your budget.", image: "https://s3.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/files/images/240314022303_Life%20Insurance%20at%20Various%20Life%20Stages.jpeg" },
  { title: "Investments Planning", description: "Grow capital the smart way. Know the difference between nominal and real returns.", image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img6.jpg" },
];

export default function ServicecardVariantA() {
  const orange = "#f37021";
  const orangeDark = "#d95800";

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-white border shadow-sm">
            <span className="px-2 py-1 rounded-full" style={{ background: `linear-gradient(90deg, ${orange}, ${orangeDark})` }} />
            <span className="text-sm font-medium text-black/70">OUR SERVICES</span>
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-black">Professional Services</h2>
          <p className="mt-3 text-black/60 max-w-2xl mx-auto">Expert guidance and tailored solutions to help you secure a better financial future.</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {services.map((s, i) => (
            <article key={i} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* IMAGE */}
              <div className="md:col-span-5 relative overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-500 group hover:scale-[1.01]">
                <img src={s.image} alt={s.title} className="w-full h-64 md:h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute left-4 bottom-4 rounded-xl px-3 py-2 bg-white/90 backdrop-blur text-sm font-semibold">
                  <span className="text-black">Trusted</span>
                </div>

                {/* floating stat pill */}
                <div className="absolute right-4 top-4 rounded-full px-3 py-1 text-white font-semibold" style={{ background: `linear-gradient(90deg, ${orange}, ${orangeDark})` }}>
                  Popular
                </div>
              </div>

              {/* CONTENT */}
              <div className="md:col-span-7 bg-white rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-black/6 shadow-sm">
                <div>
                  <h3 className="text-xl font-bold text-black">{s.title}</h3>
                  <p className="mt-3 text-black/70 leading-relaxed">{s.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    <li className="text-xs px-3 py-1 rounded-full bg-black/5 text-black/70">Clarity</li>
                    <li className="text-xs px-3 py-1 rounded-full bg-black/5 text-black/70">Tailored</li>
                    <li className="text-xs px-3 py-1 rounded-full bg-black/5 text-black/70">Ongoing</li>
                  </ul>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <a
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-semibold"
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
                    style={{ background: `linear-gradient(90deg, ${orange}, ${orangeDark})` }}
                  >
                    Book a review
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h12M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>

                  <a className="text-sm text-black/70 hover:text-black" href="#"  onClick={(e) => { e.preventDefault(); window.Calendly?.initPopupWidget?.({ url: "https://calendly.com/futurewesecure-info/30min" }) }}>Learn more →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
