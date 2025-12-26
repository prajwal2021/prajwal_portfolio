import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/constants";

// Project details mapping
const PROJECT_DETAILS: Record<string, {
  title: string;
  subtitle?: string;
  points: string[];
  image: string;
  description: string;
}> = {
  "mssql-to-postgresql-migration": {
    title: "Aurora Migration",
    subtitle: "Enterprise Work Project",
    points: [
      "Migrated a large-scale enterprise application from MSSQL to PostgreSQL, handling schema design, data conversion, and query optimization to improve query response time by ~30%.",
      "Refactored application code to support the new database, ensuring seamless integration and improving system scalability and performance.",
      "Conducted regression testing and validation to ensure zero data loss and improved query efficiency post-migration.",
      "Delivered migration and feature enhancements that support over 200K merchants, improving transaction reliability and scalability.",
    ],
    image: "/projects/project_1.png",
    description: "Led the seamless migration of critical databases from Microsoft SQL Server to PostgreSQL.",
  },
  "venmo-integration": {
    title: "Venmo Integration",
    subtitle: "Enterprise Work Project",
    points: [
      "Integrated Venmo SDK into Forte Checkout, enabling seamless peer-to-peer payment support alongside existing methods.",
      "Built an iframe-based modal for secure transactions and optimized the front end in Angular for a smooth user experience.",
      "Ensured compliance with security protocols and performed unit/integration testing for reliability.",
      "Contributed to features used by 150K+ merchants, significantly increasing the adoption of Venmo as a payment option.",
    ],
    image: "/projects/project_2.png",
    description: "Integrated Venmo as a payment option into an enterprise-grade financial platform at CSG.",
  },
  "saas-products": {
    title: "SAAS Products",
    points: [
      "Building multiple SaaS products using Next.js, TypeScript, Tailwind CSS, and backend technologies.",
      "Focused on creating scalable architectures, responsive interfaces, and smooth user experiences.",
      "Working across different domains to deliver high-quality software solutions.",
    ],
    image: "/projects/project_3.png",
    description: "Building multiple SaaS products using Next.js, TypeScript, Tailwind CSS, and backend technologies.",
  },
};

// Generate metadata for SEO
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

// SAAS Products list
const SAAS_PRODUCTS = [
  {
    slug: "fortress",
    title: "Fortress",
    description: "Privacy-first identity management system",
  },
  {
    slug: "promptify",
    title: "Promptify AI",
    description: "Full-stack prompt engineering tool",
  },
  {
    slug: "countdown",
    title: "Countdown",
    description: "Coming soon",
  },
];

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  // Special handling for SAAS Products - show list of products
  if (slug === "saas-products") {
    return (
      <div className="min-h-screen bg-[#030014] text-white">
        {/* Back Button */}
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

        {/* SAAS Products List */}
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4">
                SAAS Products
              </h1>
              <p className="text-lg text-gray-300">
                Building multiple SaaS products using Next.js, TypeScript, Tailwind CSS, and backend technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SAAS_PRODUCTS.map((product) => (
                <Link
                  key={product.slug}
                  href={`/projects/saas-products/${product.slug}`}
                  className="bg-black/40 rounded-xl p-8 border border-[#232329] shadow-lg hover:border-cyan-500 transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                      {product.title}
                    </h2>
                    <p className="text-gray-400 mt-2">{product.description}</p>
                  </div>
                  <div className="flex items-center text-cyan-400 text-sm mt-4">
                    <span>View Details</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const details = PROJECT_DETAILS[slug];

  if (!details) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#030014] text-white">
      {/* Back Button */}
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

      {/* Project Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Project Image */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-2xl border border-[#2A0E61]">
            <Image
              src={details.image}
              alt={details.title}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Project Title */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4">
              {details.title}
            </h1>
            {details.subtitle && (
              <p className="text-2xl text-gray-400 mb-4">{details.subtitle}</p>
            )}
            <p className="text-lg text-gray-300">{details.description}</p>
          </div>

          {/* Project Points */}
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
