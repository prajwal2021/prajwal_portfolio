"use client";

import { useState, useEffect } from "react";

export const Connect = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSubmitted(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success!
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="connect" className="flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
      <h2 className="text-4xl font-bold text-white mb-8 z-10">Get in Touch - Let's Connect</h2>
      {mounted ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-black/40 rounded-xl p-8 flex flex-col gap-6 shadow-lg border border-[#232329] relative z-10"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            disabled={loading}
            className="px-4 py-3 rounded-md bg-[#18181b] text-white border border-[#232329] focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            disabled={loading}
            className="px-4 py-3 rounded-md bg-[#18181b] text-white border border-[#232329] focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            disabled={loading}
            className="px-4 py-3 rounded-md bg-[#18181b] text-white border border-[#232329] focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold py-3 rounded-md hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {error && (
            <div className="text-red-400 text-center mt-2 text-sm">{error}</div>
          )}
          {submitted && (
            <div className="text-green-400 text-center mt-2">Thank you for reaching out! I'll get back to you soon.</div>
          )}
        </form>
      ) : (
        <div className="w-full max-w-lg bg-black/40 rounded-xl p-8 flex flex-col gap-6 shadow-lg border border-[#232329] relative z-10 min-h-[400px]" />
      )}

      <div className="w-full h-full absolute top-0 left-0 z-0">
        <div className="w-full h-full opacity-40 absolute flex items-center justify-center">
          <video
            className="w-full h-full object-cover"
            preload="none"
            playsInline
            loop
            muted
            autoPlay
            suppressHydrationWarning
          >
            <source src="/videos/planet.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
}; 