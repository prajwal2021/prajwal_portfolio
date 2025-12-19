"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    handle: "https://www.linkedin.com/in/anderson-nieves",
    avatar: "/projects/avatar.png",
    text: "I’ve had the privilege of working with Prajwal, and It's a pleasure to see his willingness to learn and his rapid adaptation to any changes in the technologies we use.Prajwal’s ability to quickly understand the requirements and deliver high-quality work is evident. His proactive nature, clear communication, and openness to feedback are qualities that make him a addition to our team.",
    name: "Anderson Nieves",
  },
  {
    handle: "https://www.linkedin.com/in/ing-javier-lozano/",
    avatar: "/projects/avatar.png",
    text: "I had the pleasure of working with Prajwal at CSGI, where we were part of the same development team. During that time, I also had the opportunity to mentor him. Prajwal consistently demonstrated strong technical skills in .NET, Angular, and database technologies. He took full ownership of his work, communicated effectively, and delivered high-quality solutions. His problem-solving approach and dedication made him a reliable and valuable team member.",
    name: "Javier Lozano Ortiz",
  },
  {
    handle: "https://www.linkedin.com/in/pooja-chavan-763303147/",
    avatar: "/projects/avatar.png",
    text: "I had the pleasure of working with Prajwal on several .NET-based projects, and I can confidently say that he brought energy, dedication, and a strong willingness to learn to the team every single day.He had quickly grasped both front-end and back-end concepts, showing a solid command over C#, .NET, databases like MSSQL and PostgreSQL, and JavaScript frameworks like Angular. What stood out most was his problem-solving approach—never hesitating to take ownership of a task, ask thoughtful questions, and deliver quality code even under tight timelines.Prajwal is not just technically sound, but also a fantastic team player—always open to feedback, respectful in communication, and eager to contribute wherever needed. I’m confident that with this attitude and skill set, he will grow into a strong and reliable full stack engineer.I highly recommend Prajwal to any organization looking for a committed and capable developer with a growth mindset.",
    name: "Pooja Chavan",
  },
];

export const Testimonials = () => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (idx: number) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section id="testimonials" className="py-24 px-4 md:px-0 flex flex-col items-center relative overflow-hidden">
      <h2 className="text-4xl font-bold text-white text-center mb-12">What People Say About Me?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl items-start">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-xl p-8 flex flex-col justify-between shadow-lg border border-[#232329] min-h-[260px]">
            <div className="flex items-center mb-4">
              <Image
                src={t.avatar}
                alt={t.name}
                width={48}
                height={48}
                className="rounded-full object-cover mr-4"
              />
              <div>
                <div>
                  <div className="font-bold text-xl inline-block bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">{t.name}</div>
                  <div className="mt-1">
                    <a
                      href={t.handle}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 text-sm hover:underline"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className={`text-white text-lg ${!expanded[i] ? 'line-clamp-5' : ''}`}>{t.text}</p>
              {t.text.split(' ').length > 30 && (
                <button
                  className="mt-2 text-cyan-400 hover:underline text-sm focus:outline-none"
                  onClick={() => toggleExpand(i)}
                >
                  {expanded[i] ? 'Show less' : 'Read more'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

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
            <source src="/videos/move.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
}; 