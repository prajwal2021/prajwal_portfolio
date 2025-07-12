// import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Experience } from "@/components/main/experience";
import { Education } from "@/components/main/education";
import { Testimonials } from "@/components/main/testimonials";
import { Connect } from "@/components/main/connect";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Testimonials />
        <Connect />
        {/* <Encryption /> */}
      </div>
    </main>
  );
}
