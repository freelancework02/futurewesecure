import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, Phone, Calendar, ShieldCheck, MapPin } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import faqimg from "../../assets/faqimg.jpg"; // optional, referenced if needed
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",

    message: "",
    company: "", // honeypot
  });

  const RECEIVER_EMAIL = "info@futurewesecure.com"; // <-- Receiver email

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const orange = "#f37021";
  const orangeDark = "#d95800";
  const black = "#0f0f0f";

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name (at least 2 characters).";
    }

    const email = String(formData.email || "").trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    if (!emailOk) newErrors.email = "Please enter a valid email address.";

    if (!formData.phone || formData.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Please enter a valid phone number.";
    }


    if (!formData.message || formData.message.trim().length < 12) {
      newErrors.message = "Tell us a bit more (at least 12 characters).";
    }

    if (formData.company && formData.company.trim().length > 0) {
      newErrors.company = "Spam detected.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) =>
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  // UPDATED — Uses your backend API instead of EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,   // 👈 added

      msg: formData.message,
      receiver: RECEIVER_EMAIL, // <-- included
    };

    try {
      const res = await fetch("https://futurewesecure.com/api/contact/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        toast.success("🎉 Thanks! Your message has been sent.");

        setFormData({
          name: "",
          email: "",
          message: "",
          company: "",
        });
        setErrors({});
      } else {
        toast.error(result.message || "❌ Could not send your message.");
      }
    } catch (error) {
      console.error(error);
      toast.error("❌ Server error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          `radial-gradient(1200px 380px at 15% -10%, rgba(243,112,33,0.12), transparent 55%), linear-gradient(135deg, ${black}, #111211 55%, #0b0b0b)`,
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} />

      {/* subtle texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1.5px), radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1.5px)",
          backgroundSize: "26px 26px",
          backgroundPosition: "0 0, 13px 13px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,.7), rgba(0,0,0,.15), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-16">
        {/* Heading */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <ShieldCheck size={16} className="text-white" />
            <span className="text-sm font-medium tracking-wide text-white/90">
              We reply within 24 hours
            </span>
          </div>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Let’s talk about your goals
          </h2>

          <p className="mt-2 text-white/80 max-w-2xl mx-auto">
            Send a message, chat on WhatsApp, or book a quick call—whatever works best for you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Form card */}
          <div className="bg-white rounded-2xl shadow-[0_18px_40px_-18px_rgba(0,0,0,.45)] border border-white/80 p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-black text-center mb-1">
              Contact Us
            </h3>
            <p className="text-center text-black/60 mb-6">
              We'll get back to you quickly with clear next steps.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              noValidate
              aria-describedby="form-errors"
            >
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* NAME */}
              <div>
                <label className="block text-sm font-semibold text-black mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border outline-none focus:ring-2 transition ${errors.name
                    ? "border-red-300 focus:ring-red-400"
                    : "border-black/10 focus:ring-[rgba(243,112,33,0.18)]"
                    }`}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-semibold text-black mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border outline-none focus:ring-2 transition ${errors.email
                    ? "border-red-300 focus:ring-red-400"
                    : "border-black/10 focus:ring-[rgba(243,112,33,0.18)]"
                    }`}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-slate-800 mb-1.5"
                >
                  Phone Number
                </label>

                <PhoneInput
                  country={"in"}                 // default INDIA
                  onlyCountries={["in", "us", "ca"]}
                  preferredCountries={["in", "us", "ca"]}
                  value={formData.phone}
                  onChange={(phone) =>
                    setFormData((s) => ({ ...s, phone }))
                  }
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                  inputStyle={{
                    width: "100%",
                    height: "48px",
                    borderRadius: "0.5rem",
                    borderColor: errors.phone ? "#fca5a5" : "#cbd5e1",
                  }}
                  buttonStyle={{
                    borderRadius: "0.5rem 0 0 0.5rem",
                  }}
                  containerClass="react-tel-input"
                />

                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                )}
              </div>


              {/* MESSAGE */}
              <div>
                <label className="block text-sm font-semibold text-black mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg min-h-[140px] border outline-none focus:ring-2 resize-y transition ${errors.message
                    ? "border-red-300 focus:ring-red-400"
                    : "border-black/10 focus:ring-[rgba(243,112,33,0.18)]"
                    }`}
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${isSubmitting
                  ? "bg-orange-300 cursor-not-allowed"
                  : "bg-gradient-to-br from-[#f37021] to-[#d95800] hover:-translate-y-0.5"
                  }`}
                style={{
                  boxShadow: isSubmitting
                    ? "none"
                    : "0 12px 34px rgba(217,88,0,0.16)",
                }}
              >
                {isSubmitting ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/60 border-t-white" />
                    Sending…
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              <p className="text-xs text-black/50 text-center">
                We respect your privacy. We’ll never share your details.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 text-center md:text-left">
            {/* Contact methods */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(6px)",
              }}
            >
              <p className="text-lg font-medium mb-3 text-white">
                Prefer a quick conversation?
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href="mailto:Info@futurewesecure.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/6 px-4 py-3 hover:bg-white/12 transition text-white"
                >
                  <Mail size={18} />
                  Email Us
                </a>

                <a
                  href="tel:+1516-917-0756"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/6 px-4 py-3 hover:bg-white/12 transition text-white"
                >
                  <Phone size={18} />
                  Call Us
                </a>
              </div>

              <a
                href="https://api.whatsapp.com/send?phone=15165818909&text=Hello!"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full inline-flex items-center justify-center gap-3 rounded-xl px-4 py-3 text-white font-semibold"
                style={{
                  background: `linear-gradient(135deg, ${orange}, ${orangeDark})`,
                  boxShadow: "0 10px 30px rgba(243,112,33,0.14)",
                }}
              >
                <FaWhatsapp className="w-5 h-5" />
                Message us on WhatsApp
              </a>

              <button
                onClick={() =>
                  window.Calendly?.initPopupWidget?.({
                    url: "https://calendly.com/futurewesecure-info/30min",
                  })
                }
                className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold border border-white/50 text-black bg-white"
              >
                <Calendar size={18} />
                Book a Call
              </button>
            </div>

            {/* Business Info */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(6px)",
              }}
            >
              <h4 className="text-xl font-semibold mb-1 text-white">
                Future We Secure
              </h4>
              <p className="text-white/90">📞 516-917-0756</p>
              <p className="text-white/90">📧 Info@futurewesecure.com</p>

              <div className="flex items-center gap-2 mt-2 text-white/80">
                <MapPin size={18} />
                <span>Mount Airy, MD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-14 text-center text-white/80 text-sm border-t border-white/10 pt-6">
          © {new Date().getFullYear()} Future We Secure. All Rights Reserved.
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
