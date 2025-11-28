// EventsDetail.VariantA.Enhanced.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import {
  FiCalendar,
  FiUser,
  FiImage,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export default function EventsDetailVariantA() {
  const API_BASE = "https://futurewesecure.com/api/events";

  const [event, setEvent] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [previous, setPrevious] = useState([]);
  const [loading, setLoading] = useState(true);

  // Lightbox
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const lightboxRef = useRef(null);

  // Navbar offset handling
  const [topOffset, setTopOffset] = useState(64);
  const heroRef = useRef(null);

  const gradient = "linear-gradient(135deg,#f37021,#d95800)";

  /** Load the first event as Main + others as Previous */
  useEffect(() => {
    async function loadEvents() {
      try {
        const res = await axios.get(API_BASE);
        const events = res.data.data || [];

        if (!events.length) {
          setLoading(false);
          return;
        }

        const firstEvent = events[0];
        const cover =
          firstEvent.cover_image_id &&
          `${API_BASE}/image/${firstEvent.cover_image_id}/blob`;

        setEvent({
          ...firstEvent,
          cover,
        });
        setPrevious(events.slice(1));

        // fetch gallery for the first event
        const galleryRes = await axios.get(`${API_BASE}/${firstEvent.id}`);
        const imgs =
          galleryRes.data.images?.map(
            (pic) => `${API_BASE}/image/${pic.id}/blob`
          ) || [];
        setGallery(imgs);
      } finally {
        setLoading(false);
      }
    }
    loadEvents();
  }, []);

  const displayDate = (d) =>
    new Date(d).toLocaleString(undefined, {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const openAt = (i) => {
    setIdx(i);
    setOpen(true);
  };
  const next = () => setIdx((p) => (p + 1) % gallery.length);
  const prev = () => setIdx((p) => (p - 1 + gallery.length) % gallery.length);

  /** keyboard navigation */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (!open) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  if (loading)
    return <div className="text-center mt-20 text-lg">Loading...</div>;

  if (!event)
    return (
      <div className="text-center mt-20 text-lg">
        No event found
      </div>
    );

  return (
    <section style={{ paddingTop: topOffset }} className="pb-14 w-full">
      {/* HERO */}
      <div
        ref={heroRef}
        className="relative h-64 md:h-[44vw] max-h-[560px] overflow-hidden rounded-2xl"
      >
        <img
          src={event.cover}
          alt={event.title}
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

        {/* Floating Info Card */}
        <div className="absolute left-4 right-4 bottom-4 md:left-12 md:w-[46%] md:bottom-12">
          <article className="rounded-2xl bg-white/97 backdrop-blur-sm px-5 py-4 shadow-[0_18px_45px_rgba(3,7,18,0.12)] border border-black/6">
            <div className="inline-flex items-center gap-2 text-xs text-white rounded-full px-2 py-0.5"
              style={{ background: "rgba(0,0,0,0.45)" }}>
              <FiCalendar />
              {displayDate(event.event_date)}
            </div>
            <h1 className="mt-2 text-white text-lg font-extrabold truncate">
              {event.title}
            </h1>

            <p className="text-sm text-white/80">{event.hosted_by}</p>
          </article>
        </div>
      </div>

      {/* CONTENT + GALLERY */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          {/* DESCRIPTION */}
          <section className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm">
            <header className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg" style={{ background: gradient }}>
                <FiImage className="text-white" />
              </div>
              <h2 className="font-semibold text-lg text-black">
                About this event
              </h2>
            </header>
            <p className="text-black/80">{event.description}</p>
          </section>

          {/* GALLERY */}
          <section>
            <h3 className="text-lg font-semibold text-black mb-3">Gallery</h3>

            {gallery.length > 0 ? (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {gallery.slice(0, 6).map((src, i) => (
                    <button key={i} onClick={() => openAt(i)}
                      className="overflow-hidden rounded-xl border relative">
                      <img src={src} className="object-cover w-full h-36" alt="" />
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="p-6 text-center text-black/60 border rounded-lg">
                No gallery available
              </div>
            )}
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="bg-white p-5 rounded-2xl border shadow-sm">
          <h4 className="font-semibold text-black mb-4">Event Details</h4>
          <p className="text-sm text-black/70 mb-2">
            <FiCalendar className="inline mr-2" />
            {displayDate(event.event_date)}
          </p>
          <p className="text-sm text-black/70">
            <FiUser className="inline mr-2" />
            {event.hosted_by}
          </p>
        </aside>
      </div>

      {/* PREVIOUS EVENTS */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <h3 className="text-lg font-semibold text-black mb-4">
          Previous Events
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {previous.map((ev) => {
            const img = ev.cover_image_id
              ? `${API_BASE}/image/${ev.cover_image_id}/blob`
              : "/placeholder.jpg";
            return (
              <div key={ev.id}
                className="rounded-xl bg-white border p-3 shadow-sm">
                <img src={img} alt="" className="h-28 w-full object-cover rounded-lg" />
                <div className="mt-2 text-sm font-semibold">
                  {ev.title}
                </div>
                <p className="text-xs text-black/60">
                  {displayDate(ev.event_date)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* LIGHTBOX */}
      {open && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            ref={lightboxRef}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[idx]}
              className="max-h-[78vh] w-full object-contain rounded-md"
              alt=""
            />

            {/* Close */}
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setOpen(false)}
            >
              <FiX size={22} />
            </button>

            {/* Prev */}
            {idx > 0 && (
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
              >
                <FiChevronLeft size={26} />
              </button>
            )}

            {/* Next */}
            {idx < gallery.length - 1 && (
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
              >
                <FiChevronRight size={26} />
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
