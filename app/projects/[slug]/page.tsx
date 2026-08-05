import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/constants";
import { PROJECT_DETAILS } from "@/lib/project-details";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const details = PROJECT_DETAILS[slug];

  if (!details) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${details.title} - Prajwal S Portfolio`,
    description: details.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const details = PROJECT_DETAILS[slug];

  if (!details) {
    notFound();
  }

  const showGithubInHeader = slug === "fortress" || slug === "promptify";
  const showLiveLinks =
    details.links &&
    (details.links.frontend ||
      details.links.backend ||
      (details.links.github && !showGithubInHeader));

  return (
    <div className="min-h-screen bg-[#030014] text-white">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/#projects"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Projects
        </Link>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          {(slug === "mssql-to-postgresql-migration" || slug === "venmo-integration") && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-2xl border border-[#2A0E61]">
              <Image
                src={details.image}
                alt={details.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <div className="mb-8">
            <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                {details.title}
              </h1>
              {showGithubInHeader && details.links?.github && (
                <a
                  href={details.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors shrink-0"
                  aria-label={`View ${details.title} on GitHub`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-sm font-medium">Repository</span>
                </a>
              )}
            </div>
            {details.subtitle && (
              <p className="text-2xl text-gray-400 mb-4">{details.subtitle}</p>
            )}
            <p className="text-lg text-gray-300">{details.description}</p>
          </div>

          {showLiveLinks && (
            <div className="mb-8 bg-black/40 rounded-xl p-6 border border-[#232329] shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-white">Live Links</h2>
              <div className="space-y-3">
                {details.links?.github && !showGithubInHeader && (
                  <div>
                    <span className="text-gray-400 text-sm">GitHub: </span>
                    <a
                      href={details.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 hover:underline break-all"
                    >
                      {details.links.github}
                    </a>
                  </div>
                )}
                {details.links?.frontend && (
                  <div>
                    <span className="text-gray-400 text-sm">Webpage: </span>
                    <a
                      href={details.links.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 hover:underline break-all"
                    >
                      {details.links.frontend}
                    </a>
                  </div>
                )}
                {details.links?.backend && (
                  <div>
                    <span className="text-gray-400 text-sm">Backend API: </span>
                    <a
                      href={details.links.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 hover:underline break-all"
                    >
                      {details.links.backend}
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {details.structuredContent && (
            <div className="space-y-8 mb-8">
              {details.structuredContent.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-black/40 rounded-xl p-8 border border-[#232329] shadow-lg">
                  <h2 className="text-2xl font-semibold mb-6 text-white">{section.title}</h2>
                  {section.image && (
                    <div className="mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={section.image}
                        alt={`${section.title} diagram`}
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                      />
                    </div>
                  )}
                  {section.images && section.images.length > 0 && (
                    <div className="mb-6 space-y-4">
                      {section.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="rounded-lg overflow-hidden">
                          <Image
                            src={img}
                            alt={`${section.title} diagram ${imgIndex + 1}`}
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-cyan-400 mr-3 mt-1">●</span>
                        <span className="text-gray-200 text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <div className="bg-black/40 rounded-xl p-8 border border-[#232329] shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-white">Key Achievements</h2>
            <ul className="space-y-4">
              {details.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">●</span>
                  <span className="text-gray-200 text-lg leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
