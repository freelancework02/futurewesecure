import React from "react";
import image from "../../assets/ashesh.jpeg";

export default function AboutUs() {
  const orange = "#f37021";
  const orangeDark = "#d95800";
  const black = "#0f0f0f";

  // lightweight SVG placeholder (keeps layout if image fails to load)
  const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'><rect width='100%' height='100%' fill='%23ffffff'/><g fill='%23f37021' opacity='0.12'><circle cx='400' cy='400' r='250'/></g><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='28' fill='%23000000' opacity='0.25'>Image unavailable</text></svg>`
  )}`;

  return (
    <section
      className="relative"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #fff4ec 40%, #ffffff 100%)",
      }}
    >
      {/* Soft grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[.06]"
        style={{
          backgroundImage:
            "radial-gradient(#0f0f0f 1px, transparent 1.5px), radial-gradient(#0f0f0f 1px, transparent 1.5px)",
          backgroundSize: "26px 26px",
          backgroundPosition: "0 0, 13px 13px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.1), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto mt-16 px-6 py-16 md:py-20 lg:py-24 text-black">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border"
            style={{ borderColor: "rgba(0,0,0,0.1)" }}
          >
            <span
              className="text-[13px] font-semibold tracking-widest"
              style={{ color: orange }}
            >
              ABOUT US
            </span>
          </div>

          <h1
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
            style={{ color: black }}
          >
            ABOUT US
          </h1>
        </div>

        {/* Card */}
        <div
          className="rounded-3xl bg-white/90 backdrop-blur shadow-xl border p-6 md:p-10"
          style={{
            borderColor: "rgba(0,0,0,0.1)",
            boxShadow: "0 14px 44px -12px rgba(0,0,0,0.22)",
          }}
        >
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-14">
            {/* LEFT: Text */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-2xl font-semibold" style={{ color: black }}>
                Our Mission
              </h2>

              <p className="text-black/70 leading-relaxed">
                At Future We Secure,  we understand that personal finances can be
                overwhelming—especially when most people never receive formal
                education on the subject. Our mission is to empower you with the
                knowledge and tools needed to take control of your financial
                future.
              </p>

              <p className="text-black/70 leading-relaxed">
                We begin by teaching the fundamentals of budgeting, saving,
                investing, and debt management. From there, we help you build
                personalized financial strategies that match your goals—whether
                that's saving for education, growing tax-deferred wealth,
                preparing for retirement, or handling day-to-day financial
                challenges.
              </p>

              <p className="text-black/70 leading-relaxed">
                Through ongoing support, workshops, tools, and one-on-one
                guidance, we help you build long-term clarity and confidence.
                Our purpose is simple: demystify personal finance and help your
                family build a secure future—step by step.
              </p>

              {/* Badges */}
              <div className="pt-2">
                <div
                  className="h-[1px] w-full mb-4"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, rgba(243,112,33,0.4), transparent)",
                  }}
                />
                <div className="flex flex-wrap gap-2">
                  {[
                    "Education First",
                    "Personalized Planning",
                    "Ongoing Support",
                  ].map((badge, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 rounded-full border bg-white"
                      style={{
                        borderColor: "rgba(0,0,0,0.15)",
                        color: black,
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Founder */}
            <div className="md:w-1/2 flex flex-col items-center text-center">
              {/* Orange halo glow around portrait */}
              <div className="relative mb-5 md:mb-6">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 left-1/2 top-1/2 w-[15.5rem] h-[15.5rem] md:w-[19rem] md:h-[19rem] rounded-full -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background: `conic-gradient(from 180deg, ${orange}aa, ${orangeDark}aa, ${orange}aa)`,
                    filter: "blur(26px)",
                    opacity: 0.45,
                  }}
                />

                {/* Portrait Ring */}
                <div
                  className="relative w-60 h-60 md:w-72 md:h-72 rounded-full p-[6px]"
                  style={{
                    background: `linear-gradient(135deg, ${orange}, ${orangeDark})`,
                    boxShadow: "0 22px 44px rgba(0,0,0,0.35)",
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden border bg-white">
                    {/*
                      Image adjustments:
                      - object-cover to preserve aspect and fill the circle
                      - loading="lazy" + decoding for better perf
                      - onError fallback to placeholder if import fails
                    */}
                    <img
                      src={image}
                      alt="Ashish Patel — Founder"
                      loading="lazy"
                      decoding="async"
                      role="img"
                      onError={(e) => {
                        // show placeholder SVG data URI if the imported image can't be loaded
                        // @ts-ignore
                        e.currentTarget.onerror = null;
                        // @ts-ignore
                        e.currentTarget.src = placeholder;
                      }}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              {/* Founder text */}
              <h2
                className="text-sm md:text-base font-bold tracking-widest uppercase"
                style={{ color: orange }}
              >
                Founder
              </h2>
              <h3 className="text-2xl md:text-3xl font-extrabold" style={{ color: black }}>
                Ashish Patel
              </h3>
              <p className="text-black/60 text-sm md:text-base">(License Number – 21322826)</p>

              {/* Accent line */}
              <div
                className="mt-4 h-[2px] w-32"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(243,112,33,0.6), transparent)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
