// BlogDetail.VariantA.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Contactus/Contactus";

export default function BlogDetailVariantA() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const API_BASE = "http://futurewesecure.com/api/blogs";

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${API_BASE}/${id}`);
        const { blog, images } = res.data;

        const imgUrls =
          images?.map((img) => `${API_BASE}/image/${img.id}/blob`) || [];

        const coverImg =
          blog.cover_image_id &&
          `${API_BASE}/image/${blog.cover_image_id}/blob`;

        setBlog({
          id: blog.id,
          title: blog.title,
          summary: blog.excerpt || "",
          author: "Team",
          date: blog.created_at,
          content_html: blog.content_html || "",
          images: imgUrls,
          cover: coverImg || imgUrls[0] || "",
        });
      } catch (error) {
        console.error(error);
        setErr("Blog not found");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const orange = "#f37021";
  const orangeDark = "#d95800";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading blog...
      </div>
    );
  }

  if (err || !blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="h-24" />
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-semibold mb-4">{err}</h2>
          <button
            onClick={() => navigate("/blog")}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#f37021] to-[#d95800] text-white"
          >
            Back to Blogs
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="h-20 md:h-24 lg:h-28" />

      {/* Hero */}
      <header className="relative w-full overflow-hidden">
        <div className="h-[48vw] max-h-[560px]">
          <img
            src={blog.cover}
            alt={blog.title}
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        {/* Floating Info Card */}
        <div className="max-w-6xl mx-auto px-4 -mt-20 md:-mt-24 relative">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-black/5 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="text-xs text-gray-600 mb-2">
                {new Date(blog.date).toLocaleDateString()}
              </div>
              <h1 className="text-xl md:text-3xl font-bold text-black mb-3">
                {blog.title}
              </h1>

              <p className="text-gray-700 text-sm md:text-base">
                {blog.summary}
              </p>
            </div>

            <button
              onClick={() => navigate("/blog")}
              className="px-5 py-2 text-sm font-semibold rounded-full text-white"
              style={{
                background: `linear-gradient(135deg, ${orange}, ${orangeDark})`,
              }}
            >
              Back to Blogs
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <article className="prose prose-lg max-w-none text-gray-800">
          {/* Layout: Image left + Content Right */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Side Image */}
            {blog.images.length > 0 && (
              <div className="md:w-2/5 rounded-2xl overflow-hidden shadow">
                <img
                  src={blog.images[0]}
                  className="w-full h-auto object-cover"
                  alt={blog.title}
                />
              </div>
            )}

            {/* HTML Content */}
            <div
              className="md:w-3/5 prose max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content_html }}
            />
          </div>

          {/* Optional More Images */}
          {blog.images.length > 1 && (
            <section className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
              {blog.images.slice(1).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-full h-40 object-cover rounded-lg shadow-sm"
                  alt="Blog visual"
                />
              ))}
            </section>
          )}

          {/* CTA */}
          <div className="mt-12 p-8 bg-[#fff8f1] border rounded-2xl text-center shadow-sm">
            <h3 className="text-2xl font-bold text-black mb-3">
              Ready to explore more insights?
            </h3>
            <p className="text-gray-600 mb-6">
              Discover expert-driven perspectives in our growing blog collection.
            </p>
            <button
              onClick={() => navigate("/blog")}
              className="px-6 py-3 rounded-full text-white font-semibold"
              style={{
                background: `linear-gradient(135deg, ${orange}, ${orangeDark})`,
              }}
            >
              Browse All Blogs
            </button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
