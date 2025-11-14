// Productcard.VariantB.jsx (Improved & Bug-fixed)
import React, { useEffect, useRef } from "react";

export default function ProductcardVariantB() {
  const orange = "#f37021";
  const orangeDark = "#d95800";
  const black = "#0f0f0f";

  // Calendly loader
  const calendlyReadyRef = useRef(false);

  const openCalendly = () => {
    const openPopup = () =>
      window.Calendly?.initPopupWidget?.({
        url: "https://calendly.com/futurewesecure-info/30min",
      });

    if (calendlyReadyRef.current && window.Calendly) {
      openPopup();
      return;
    }

    let script = document.getElementById("calendly-script");
    if (!script) {
      script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        calendlyReadyRef.current = true;
        openPopup();
      };
      document.body.appendChild(script);
    } else {
      const wait = setInterval(() => {
        if (window.Calendly) {
          clearInterval(wait);
          calendlyReadyRef.current = true;
          openPopup();
        }
      }, 50);

      setTimeout(() => clearInterval(wait), 5000);
    }
  };

  useEffect(() => {
    if (!document.getElementById("calendly-script")) {
      const s = document.createElement("script");
      s.id = "calendly-script";
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      s.onload = () => (calendlyReadyRef.current = true);
      document.body.appendChild(s);
    } else {
      calendlyReadyRef.current = !!window.Calendly;
    }
  }, []);

  const services = [
    {
      title: "Fixed & Indexed Annuities",
      description:
        "A contract with an insurer that can guarantee principal and interest while offering potential lifelong income withdrawals.",
      image:
        "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/product-img4.jpg",
    },
    {
      title: "Indexed Universal Life",
      description:
        "Death benefit protection plus portfolio diversification with the potential for tax-advantaged growth.",
      image:
        "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/product-img3.jpg",
    },
    {
      title: "Term Life",
      description:
        "Straightforward coverage for the years you need it most—protect temporary responsibilities with confidence.",
      image:
        "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/product-img2.jpg",
    },
    {
      title: "Traditional IRA / Roth IRA",
      description:
        "Tax-deferred growth with Traditional IRAs or tax-free qualified withdrawals with Roth IRAs—plan an efficient retirement.",
      image: "https://wesecurefuture.com/wp-content/uploads/2024/12/2148793763.jpg",
    },
    {
      title: "Whole Life Insurance",
      description:
        "Lifetime coverage with guaranteed benefits and cash value that can grow over time.",
      image: "https://wesecurefuture.com/wp-content/uploads/2024/12/2163.jpg",
    },
    {
      title: "Will & Trust",
      description:
        "Establish your Will & Trust plus four other core estate documents to protect wishes and heirs.",
      image:
        "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/product-img1.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">
              Products
            </h2>
            <p className="text-sm text-black/60 mt-1">
              Scan the range — quick CTAs let customers act fast.
            </p>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              openCalendly();
            }}
            className="mt-4 sm:mt-0 text-sm font-semibold px-4 py-2 rounded-md shadow-sm"
            style={{
              background: `linear-gradient(90deg, ${orange}, ${orangeDark})`,
              color: "#fff",
            }}
          >
            Book an appointment
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <article
              key={i}
              className="relative bg-white rounded-2xl overflow-hidden border border-black/10 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Orange angled stripe - fixed alignment */}
              <div
                className="absolute -left-14 top-4 w-44 h-8 -skew-x-12 opacity-90"
                style={{
                  background: `linear-gradient(90deg, ${orange}, ${orangeDark})`,
                }}
              />

              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Body */}
              <div className="p-5 pb-16">
                <h3 className="text-lg font-semibold text-black leading-snug">
                  {s.title}
                </h3>

                <p className="mt-3 text-sm text-black/70 leading-relaxed line-clamp-3">
                  {s.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <button
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
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold shadow-sm transition-all"
                    style={{
                      background: `linear-gradient(90deg, ${orange}, ${orangeDark})`,
                      color: "#fff",
                    }}
                  >
                    Get details
                  </button>

                  <span className="text-xs text-black/60">
                    Quick call • 15m
                  </span>
                </div>
              </div>

              {/* Floating Badge (fixed positioning) */}
              <span
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
                className="cursor-pointer absolute right-4 bottom-4 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-md"
                style={{
                  background: `linear-gradient(90deg, ${orange}, ${orangeDark})`,
                }}
              >
                Start
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
