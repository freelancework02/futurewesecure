// Blog.VariantB.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BlogVariantB() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const API_BASE = "http://futurewesecure.com/api/blogs";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // 1️⃣ Load Blog List
        const res = await axios.get(API_BASE);
        const list = res.data?.data ?? [];

        // 2️⃣ Load images for every blog using parallel requests
        const finalBlogs = await Promise.all(
          list.map(async (b) => {
            const detail = await axios.get(`${API_BASE}/${b.id}`);

            const images = detail.data?.images?.map(
              (img) => `${API_BASE}/image/${img.id}/blob`
            ) || [];

            const coverImg =
              detail.data?.blog?.cover_image_id &&
              `${API_BASE}/image/${detail.data.blog.cover_image_id}/blob`;

            return {
              id: b.id,
              title: b.title,
              summary: b.excerpt || "",
              content_html: detail.data?.blog?.content_html || "",
              images,
              cover: coverImg || images[0] || "",
            };
          })
        );

        setBlogs(finalBlogs);
      } catch (e) {
        console.error("Error loading blogs:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const orange = "#f37021";
  const orangeDark = "#d95800";
  const black = "#0f0f0f";

  return (
    <section className="mt-28 md:mt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: black }}>
            Blog & Insights
          </h2>
          <p className="text-black/60 mt-3">
            Explore curated knowledge across financial topics.
          </p>
        </div>

        {/* Loading Placeholder */}
        {loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-60 bg-gray-200 animate-pulse rounded-2xl" />
            ))}
          </div>
        )}

        {/* Masonry Blog Grid */}
        {!loading && (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[1fr]">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group relative rounded-3xl overflow-hidden bg-white border border-black/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                {/* Cover Image */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={blog.cover}
                    alt={blog.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold" style={{ color: black }}>
                    {blog.title}
                  </h3>

                  <p className="text-black/70 mt-2 line-clamp-3 text-sm">
                    {blog.summary?.length > 0
                      ? blog.summary
                      : blog.content_html.replace(/<[^>]+>/g, "").slice(0, 120) + "..."}
                  </p>

                  <button
                    onClick={() =>
                      navigate(`/blog/${blog.id}`, {
                        state: {
                          blog, // pass blog detail + images
                        },
                      })
                    }
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition"
                    style={{
                      background: `linear-gradient(135deg, ${orange}, ${orangeDark})`,
                      color: "white",
                    }}
                  >
                    Read More →
                  </button>
                </div>

                {/* Orange bottom highlight */}
                <div
                  className="absolute bottom-0 left-0 w-full h-1"
                  style={{
                    background: `linear-gradient(90deg, ${orange}, ${orangeDark})`,
                  }}
                />
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
