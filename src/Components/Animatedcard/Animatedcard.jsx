import React from "react";
import {
  Presentation,
  FileText,
  ShieldCheck,
  Briefcase,
  Calculator,
  CheckCircle,
  TrendingUp,
  Users,
} from "lucide-react";

export default function Home() {
  // theme colors
  const orange = "#f37021";
  const orangeDark = "#d95800";
  const black = "#0f0f0f";

  const cards = [
    {
      title: "We Help You Plan For Future Needs",
      description:
        "Enjoy today while preparing for tomorrow. Gain clarity on your finances and build a roadmap toward a secure future.",
      Icon: Presentation,
    },
    {
      title: "Educate People On Securing Their Future",
      description:
        "We break down financial concepts into simple, actionable insights so you can make informed wealth decisions.",
      Icon: FileText,
    },
    {
      title: "Protect Your Assets & Loved Ones",
      description:
        "Minimize taxes, reduce risks, and create protections that secure your assets for the next generation.",
      Icon: ShieldCheck,
    },
    {
      title: "Build & Diversify Your Income",
      description:
        "Explore structured and strategic income streams tailored to your goals and lifestyle aspirations.",
      Icon: Briefcase,
    },
  ];

  return (
    <main
      className="min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      style={{
        background: `linear-gradient(180deg, #ffffff 0%, #fef7f2 40%, #ffffff 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* ---------- Section Header ---------- */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center justify-center px-5 py-2 mb-5 rounded-full text-sm font-medium border border-black/10 shadow-sm"
            style={{ background: "white" }}
          >
            <CheckCircle className="w-4 h-4 mr-2" style={{ color: orange }} />
            What We Do
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug tracking-tight mb-4"
            style={{ color: black }}
          >
            Empowering You With{" "}
            <span style={{ color: orange }}>Clarity, Confidence,</span>
            <br className="hidden sm:block" />
            and a Strong Financial Path Forward.
          </h1>

          <p className="max-w-3xl mx-auto text-black/60 text-base md:text-lg">
            We simplify your path to financial security through strategic planning,
            smart protection, and guided wealth-building.
          </p>
        </div>

        {/* ---------- Cards Grid ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <article
              key={i}
              className="relative flex flex-col rounded-2xl p-8 bg-white backdrop-blur border border-black/10 shadow-[0_6px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition-all"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 mb-5 rounded-2xl flex items-center justify-center shadow-md"
                style={{
                  background: `linear-gradient(135deg, ${orange}, ${orangeDark})`,
                }}
              >
                <card.Icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3
                className="text-xl font-bold mb-3 leading-snug"
                style={{ color: black }}
              >
                {card.title}
              </h3>
              <p className="text-black/60 leading-relaxed text-sm sm:text-base">
                {card.description}
              </p>

              {/* Hover indicator line */}
              <div
                className="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${orange}, ${orangeDark})` }}
              />
            </article>
          ))}
        </div>

        {/* ---------- Feature Strip ---------- */}
        <section
          className="mt-20 md:mt-28 rounded-2xl px-6 md:px-10 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-[0_6px_30px_rgba(0,0,0,0.08)] border border-black/10"
          style={{
            background:
              "radial-gradient(800px 400px at 10% -10%, rgba(243,112,33,.09), transparent), white",
          }}
        >
          <div className="flex items-start md:items-center gap-4">
            <div
              className="p-3 rounded-2xl shadow-md"
              style={{
                background: `linear-gradient(135deg, ${orange}, ${orangeDark})`,
              }}
            >
              <TrendingUp className="w-8 h-8 text-white" />
            </div>

            <div>
              <h2
                className="text-xl md:text-2xl font-bold mb-2"
                style={{ color: black }}
              >
                Let’s Analyze Your Financial Game Plan
              </h2>
              <p className="text-black/60 text-sm md:text-base leading-relaxed">
                Get a personalized evaluation of your financial strategy — and unlock
                insights that bring long-term clarity.
              </p>
            </div>
          </div>

          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              window.Calendly?.initPopupWidget?.({
                url: "https://calendly.com/futurewesecure-info/30min",
              });
            }}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-transform text-white"
            style={{
              background: `linear-gradient(135deg, ${orange}, ${orangeDark})`,
            }}
          >
            <Calculator className="w-5 h-5 mr-2" />
            Book a Consultation
          </a>
        </section>

        {/* ---------- Mini Feature Row ---------- */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            {
              title: "Trusted Advisors",
              desc: "Decades of experience guiding individuals and families with honesty and precision.",
              icon: (
                <Users
                  className="w-8 h-8 mx-auto mb-3"
                  style={{ color: orange }}
                />
              ),
            },
            {
              title: "Tailored Solutions",
              desc: "Every plan is built uniquely around your long-term personal goals.",
              icon: (
                <CheckCircle
                  className="w-8 h-8 mx-auto mb-3"
                  style={{ color: orangeDark }}
                />
              ),
            },
            {
              title: "Data-Driven Approach",
              desc: "We look at real numbers, real projections, and real-life variables.",
              icon: (
                <Presentation
                  className="w-8 h-8 mx-auto mb-3"
                  style={{ color: black }}
                />
              ),
            },
            {
              title: "Transparent Guidance",
              desc: "No hidden agendas—just clear, actionable, and trustworthy advice.",
              icon: (
                <FileText
                  className="w-8 h-8 mx-auto mb-3"
                  style={{ color: orange }}
                />
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white border border-black/10 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              {item.icon}
              <h3
                className="font-bold mb-2"
                style={{ color: black }}
              >
                {item.title}
              </h3>
              <p className="text-black/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
