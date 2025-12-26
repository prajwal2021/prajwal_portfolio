"use client";

import Image from "next/image";

const testimonials = [
  {
    handle: "https://www.linkedin.com/in/anderson-nieves",
    avatar: "/projects/avatar.png",
    text: "I’ve had the privilege of working with Prajwal, and It's a pleasure to see his willingness to learn and his rapid adaptation to any changes in the technologies we use.Prajwal’s ability to quickly understand the requirements and deliver high-quality work is evident. His proactive nature, clear communication, and openness to feedback are qualities that make him a addition to our team.",
    name: "Anderson Nieves",
    title: "",
  },
  {
    handle: "https://www.linkedin.com/in/ing-javier-lozano/",
    avatar: "/projects/avatar.png",
    text: "I had the pleasure of working with Prajwal at CSGI, where we were part of the same development team. During that time, I also had the opportunity to mentor him. Prajwal consistently demonstrated strong technical skills in .NET, Angular, and database technologies. He took full ownership of his work, communicated effectively, and delivered high-quality solutions. His problem-solving approach and dedication made him a reliable and valuable team member.",
    name: "Javier Lozano Ortiz",
    title: "",
  },
  {
    handle: "https://www.linkedin.com/in/pooja-chavan-763303147/",
    avatar: "/projects/avatar.png",
    text: "I had the pleasure of working with Prajwal on several .NET-based projects, and I can confidently say that he brought energy, dedication, and a strong willingness to learn to the team every single day.He had quickly grasped both front-end and back-end concepts, showing a solid command over C#, .NET, databases like MSSQL and PostgreSQL, and JavaScript frameworks like Angular. What stood out most was his problem-solving approach—never hesitating to take ownership of a task, ask thoughtful questions, and deliver quality code even under tight timelines.Prajwal is not just technically sound, but also a fantastic team player—always open to feedback, respectful in communication, and eager to contribute wherever needed. I’m confident that with this attitude and skill set, he will grow into a strong and reliable full stack engineer.I highly recommend Prajwal to any organization looking for a committed and capable developer with a growth mindset.",
    name: "Pooja Chavan",
    title: "",
  },
  {
    handle: "https://www.linkedin.com/in/sukanya-madhavan",
    avatar: "/projects/avatar.png",
    text: "I am pleased to recommend Prajwal, a Software Development Engineer Graduate who has been part of my team for two years. Prajwal started as an intern and was promoted to his current role. He has been a key member of our global agile/scrum team, helping to add new features that serve over 150,000 businesses with our cloud-based SaaS payment solutions. Prajwal has received extensive training in both business and software development and has practical experience in creating customer-focused features. He is a great team player who is eager to learn, share, and grow. I wish him the best in his future endeavors.",
    name: "Sukanya Madhavan",
    title: "CPO | CTO",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-4 md:px-0 flex flex-col items-center relative overflow-hidden">
      <h2 className="text-4xl font-bold text-white text-center mb-12">What People Say About Me?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl items-start">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-xl p-8 flex flex-col shadow-lg border border-[#232329] h-[400px] relative z-10">
            <div className="flex items-center mb-4 flex-shrink-0">
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
                  {t.title && (
                    <div className="text-gray-400 text-sm mt-1">{t.title}</div>
                  )}
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
            <div className="relative z-10 flex-1 overflow-y-auto pr-2 custom-scrollbar">
              <p className="text-white text-lg leading-relaxed">{t.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-full absolute top-0 left-0 pointer-events-none">
        <div className="w-full h-full z-0 opacity-40 absolute flex items-center justify-center">
          <video
            className="w-full h-full object-cover"
            preload="none"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/move.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}; 