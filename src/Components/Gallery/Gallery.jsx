// EventsGallery.VariantB.jsx
import React, { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";

export default function EventsGalleryVariantB() {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const [lightbox, setLightbox] = useState({
    open: false,
    images: [],
    index: 0,
    title: "",
  });

  const [visibleIds, setVisibleIds] = useState(new Set());
  const observerRef = useRef(null);

  const API_BASE = "https://futurewesecure.com/api/galleries";

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(API_BASE);
        const list = res.data?.data ?? [];

        const fullData = await Promise.all(
          list.map(async (g) => {
            let images = [];
            if (g.cover_image_id) {
              const detail = await axios.get(`${API_BASE}/${g.id}`);
              images =
                detail.data?.images?.map((img) => `${API_BASE}/image/${img.id}/blob`) || [];
            }

            return {
              id: g.id,
              title: g.title,
              subtitle: g.description,
              description: g.description,
              meetingLink: "",
              images,
            };
          })
        );

        fullData.sort((a, b) => b.id - a.id);
        setEventsData(fullData);
      } catch (e) {
        console.error(e);
        setErr("Couldn't load the gallery. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  /* Intersection Observer */
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-event-id");
          if (!id) return;
          if (entry.isIntersecting) {
            setVisibleIds((prev) => new Set(prev).add(id));
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    return () => observerRef.current?.disconnect?.();
  }, []);

  const setCardRef = useCallback((el) => {
    if (el && observerRef.current) observerRef.current.observe(el);
  }, []);

  const openLightbox = (images, index, title) => {
    if (!images.length) return;
    setLightbox({ open: true, images, index, title });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightbox((s) => ({ ...s, open: false }));
    document.body.style.overflow = "";
  };

  const prevImage = () =>
    setLightbox((s) => ({ ...s, index: (s.index - 1 + s.images.length) % s.images.length }));

  const nextImage = () =>
    setLightbox((s) => ({ ...s, index: (s.index + 1) % s.images.length }));

  useEffect(() => {
    if (!lightbox.open) return;
    const handler = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox.open]);

  const orange = "#f37021";
  const orangeDark = "#d95800";
  const black = "#0f0f0f";

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 mt-10">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: black }}>
            Gallery — Magazine View
          </h2>
          <p className="mt-2 text-black/60 max-w-xl">
            Carefully composed event pages with a large hero image and right-hand preview strip.
          </p>
        </div>
      </div>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white/40 animate-pulse h-64" />
          ))}
        </div>
      )}

      {!loading && err && <div className="text-center text-black/70 py-16">{err}</div>}

      <div className="space-y-12">
        {!loading &&
          !err &&
          eventsData.map((ev) => {
            const hero = ev.images[0] || "";
            const visible = visibleIds.has(String(ev.id));

            return (
              <article
                key={ev.id}
                data-event-id={String(ev.id)}
                ref={setCardRef}
                className={`grid gap-6 grid-cols-1 lg:grid-cols-3 rounded-3xl transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <button
                  onClick={() => openLightbox(ev.images, 0, ev.title)}
                  className="lg:col-span-2 relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg group"
                >
                  {hero ? (
                    <img
                      src={hero}
                      alt={ev.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold">{ev.title}</h3>
                  </div>
                </button>

                <aside className="space-y-4">
                  <div className="px-4 py-3 bg-white rounded-xl border shadow">
                    <h4 className="text-sm font-semibold">{ev.title}</h4>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {ev.images.slice(0, 4).map((src, i) => (
                      <button
                        key={i}
                        onClick={() => openLightbox(ev.images, i, ev.title)}
                        className="rounded-xl overflow-hidden border"
                      >
                        <img src={src} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => openLightbox(ev.images, 0, ev.title)}
                    className="px-3 py-2 rounded-md font-semibold text-sm text-white"
                    style={{ background: `linear-gradient(135deg, ${orange}, ${orangeDark})` }}
                  >
                    View Gallery
                  </button>
                </aside>
              </article>
            );
          })}
      </div>

      {lightbox.open && (
        <div
          className="fixed inset-0 bg-black/80 z-50 grid place-items-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="bg-white rounded-xl w-full max-w-5xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between px-4 py-3 border-b">
              <span>{lightbox.title}</span>
              <span
                className="text-white px-3 py-1 text-xs rounded"
                style={{ background: `linear-gradient(135deg, ${orange}, ${orangeDark})` }}
              >
                {lightbox.index + 1}/{lightbox.images.length}
              </span>
            </div>

            <div className="relative bg-black">
              <img
                src={lightbox.images[lightbox.index]}
                className="max-h-[78vh] mx-auto object-contain"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full"
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
