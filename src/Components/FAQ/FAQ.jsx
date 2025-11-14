// FoundationalCommitments.VariantA.jsx
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Mail, HelpCircle } from "lucide-react";
import faqimg from "../../assets/faqimg.jpg";

const commitmentsData = [
  {
    title:
      "Is it possible to engage a financial advisor if I don't have a substantial amount of disposable income?",
    content:
      "Yes, everyone can benefit from financial advising. We help you make confident financial decisions — regardless of your income level.",
  },
  {
    title: "Can you help make my investments more secure?",
    content:
      "We work with you to balance risk and reward, ensuring your investments support your long-term goals.",
  },
  {
    title: "Could you please review my portfolio?",
    content:
      "Regular portfolio reviews keep your financial direction aligned. We conduct a full Financial Needs Analysis for your entire portfolio.",
  },
  {
    title: "What kind of kids' education plans do you offer?",
    content:
      "We estimate future education costs and recommend personalized financial products to match your family's goals.",
  },
  {
    title: "Do you provide assistance with life insurance?",
    content:
      "Life insurance is essential for long-term family security, asset protection, and estate planning — and we guide you through it all.",
  },
];

export default function FoundationalCommitmentsVariantA() {
  const [open, setOpen] = useState(null);
  const orange = "#f37021";
  const orangeSoft = "rgba(243,112,33,0.08)";
  const black = "#0f0f0f";

  // for accessible height animation
  const contentRefs = useRef({});

  useEffect(() => {
    // set maxHeight for open panel
    Object.keys(contentRefs.current).forEach((k) => {
      const el = contentRefs.current[k];
      if (!el) return;
      if (Number(k) === open) {
        el.style.maxHeight = el.scrollHeight + "px";
      } else {
        el.style.maxHeight = "0px";
      }
    });
  }, [open]);

  return (
    <section
      id="faq"
      className="py-16 px-6 md:px-10 bg-gradient-to-b from-white via-[#fff5ed] to-white"
    >
      {/* Header */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest font-semibold mb-2" style={{ color: orange }}>
          Frequently Asked Questions
        </h2>
        <h1 className="text-3xl md:text-4xl font-extrabold" style={{ color: black }}>
          Everything you want to know
        </h1>
        <p className="text-black/70 mt-3 text-base md:text-lg">Here’s what people commonly ask before working with us.</p>
      </div>

      {/* Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Accordion column */}
        <div>
          {commitmentsData.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`mb-4 rounded-2xl overflow-hidden transition-shadow ${isOpen ? "shadow-lg" : "shadow-sm"}`}
                style={{
                  border: isOpen ? `1px solid ${orange}` : "1px solid rgba(0,0,0,0.08)",
                  background: isOpen ? "white" : "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.9))",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full flex items-start gap-4 px-5 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-200"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-base md:text-lg" style={{ color: black }}>
                        {item.title}
                      </h3>
                    </div>
                    {/* <div className="mt-2 text-sm text-black/70 line-clamp-3">{item.content}</div> */}
                  </div>

                  <ChevronDown
                    className={`w-6 h-6 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
                    style={{ color: orange }}
                    aria-hidden="true"
                  />
                </button>

                {/* animated content */}
                <div
                  id={`faq-panel-${i}`}
                  ref={(el) => (contentRefs.current[i] = el)}
                  className="px-5 overflow-hidden transition-max-h duration-300 ease-in-out"
                  style={{ maxHeight: 0 }}
                >
                  <div className="py-4 pb-6 text-sm text-black/75">{item.content}</div>
                </div>
              </div>
            );
          })}

          {/* CTA */}
          <div className="mt-6">
            <div className="inline-flex items-center gap-4 px-5 py-4 rounded-2xl shadow-sm border bg-white">
              <Mail className="w-5 h-5" style={{ color: orange }} />
              <div className="text-sm text-black/85">
                Still have questions? Email{" "}
                <a href="mailto:Info@futurewesecure.com" className="font-semibold" style={{ color: orange }}>
                 Info@futurewesecure.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Image column */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full h-[380px] md:h-[520px] rounded-xl overflow-hidden shadow-xl">
            <img
              src={faqimg}
              alt="Client consulting financial expert"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />

            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(15,15,15,0.45), transparent)" }}
            />

            <div
              className="absolute bottom-6 left-6 rounded-xl px-4 py-3 shadow-lg bg-white border"
              style={{ borderColor: "rgba(0,0,0,0.06)" }}
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5" style={{ color: orange }} />
                <div>
                  <div className="font-semibold text-sm">Trusted by 1,200+ families</div>
                  <div className="text-xs text-black/60">Real guidance. Real clarity. Real results.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
