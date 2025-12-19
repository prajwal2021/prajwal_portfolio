"use client";

import { useState } from "react";

export const Connect = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add your API/email logic here
  };

  return (
    <section id="connect" className="flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
      <h2 className="text-4xl font-bold text-white mb-8">Get in Touch - Let's Connect</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-black/40 rounded-xl p-8 flex flex-col gap-6 shadow-lg border border-[#232329]"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-md bg-[#18181b] text-white border border-[#232329] focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-md bg-[#18181b] text-white border border-[#232329] focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="px-4 py-3 rounded-md bg-[#18181b] text-white border border-[#232329] focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold py-3 rounded-md hover:opacity-90 transition"
        >
          Send Message
        </button>
        {submitted && (
          <div className="text-green-400 text-center mt-2">Thank you for reaching out!</div>
        )}
      </form>

      <div className="w-full h-full absolute top-0 left-0">
        <div className="w-full h-full z-[-1] opacity-40 absolute flex items-center justify-center">
          <video
            className="w-full h-full object-cover"
            preload="none"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/planet.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
}; 