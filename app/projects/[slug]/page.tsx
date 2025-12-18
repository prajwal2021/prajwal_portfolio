import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/constants";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-start py-24 px-6 md:px-10">
      <div className="w-full max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[rgb(112,66,248)] transition mb-6"
        >
          <span>←</span> Back to Projects
        </Link>
        <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          {project.title}
        </h1>
        <div className="mt-8 w-full aspect-video relative rounded-lg overflow-hidden border border-[#2A0E61] bg-black/30">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="mt-8 text-gray-300 leading-7 text-lg">
          {project.description}
        </p>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}


