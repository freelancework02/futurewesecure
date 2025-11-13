import React, { useState } from "react";
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

const FoundationalCommitments = () => {
  const [openItem, setOpenItem] = useState(null);
  const toggleItem = (index) => setOpenItem(openItem === index ? null : index);

  const orange = "#f37021";
  const orangeDark = "#d95800";
  const black = "#0f0f0f";

  return (
    <section
      id="faq"
      className="py-16 px-6 md:px-10"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #fff5ed 50%, #ffffff 100%)",
      }}
    >
      {/* Header */}
      <div className="text-center mb-14">
        <h2
          className="text-sm uppercase tracking-[0.20em] font-semibold mb-3"
          style={{ color: orange }}
        >
          Frequently Asked Questions
        </h2>

        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold"
          style={{ color: black }}
        >
          Everything You Want to Know
        </h1>

        <p className="text-black/70 mt-3 text-lg max-w-2xl mx-auto">
          Here’s what people commonly ask before working with us.
        </p>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT — Accordion */}
        <div className="w-full">
          {commitmentsData.map((item, index) => {
            const isOpen = openItem === index;

            return (
              <div
                key={index}
                className={`mb-3 rounded-2xl border transition-all overflow-hidden shadow-sm ${
                  isOpen
                    ? `border-[${orange}] shadow-[0_8px_24px_-10px_rgba(243,112,33,0.35)] bg-white`
                    : "border-black/10 bg-white/80 hover:bg-white"
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span
                    className="text-base md:text-lg font-semibold pr-4"
                    style={{ color: black }}
                  >
                    {item.title}
                  </span>

                  <ChevronDown
                    className={`h-6 w-6 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    style={{ color: orange }}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-5">
                    <p className="text-black/70 leading-relaxed text-[16px]">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT — Image Block */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full h-[380px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src={faqimg}
              alt="Client consulting financial expert"
              className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
            />

            {/* Orange Gradient Overlay */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(to top, rgba(15,15,15,0.55), transparent)",
              }}
            />

            {/* Floating Badge */}
            <div
              className="absolute bottom-5 left-5 px-5 py-4 rounded-xl shadow-lg backdrop-blur-md border"
              style={{
                background: "rgba(255,255,255,0.95)",
                borderColor: "rgba(0,0,0,0.1)",
              }}
            >
              <p
                className="font-semibold text-base flex items-center gap-2"
                style={{ color: black }}
              >
                <HelpCircle className="w-5 h-5" style={{ color: orange }} />
                Trusted by 1,200+ families
              </p>
              <p className="text-sm text-black/60">
                Real guidance. Real clarity. Real results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-14">
        <div
          className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl shadow-sm hover:shadow-md transition-all border"
          style={{
            background: "white",
            borderColor: "rgba(0,0,0,0.1)",
          }}
        >
          <Mail className="w-5 h-5" style={{ color: orange }} />
          <span className="text-lg text-black/80">
            Still have questions? Email us at{" "}
            <a
              href="mailto:Jack@weplanfuture.com"
              className="font-semibold hover:underline"
              style={{ color: orange }}
            >
              Jack@weplanfuture.com
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default FoundationalCommitments;
