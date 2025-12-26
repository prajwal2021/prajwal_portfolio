import { notFound } from "next/navigation";
import Link from "next/link";

// SAAS Product details
const SAAS_PRODUCT_DETAILS: Record<string, {
  title: string;
  points: string[];
  description: string;
}> = {
  fortress: {
    title: "Fortress",
    description: "Privacy-first identity management system that protects users by generating unique email aliases.",
    points: [
      "Designed a privacy-first identity management system that protects users by generating unique email aliases for online services, preventing data tracking and spam.",
      "Architected the full-stack application using a .NET API, PostgreSQL and Next.js, implementing end-to-end security with JWT authentication, Argon2 hashing, and AES-encrypted vault storage.",
    ],
  },
  promptify: {
    title: "Promptify AI",
    description: "Full-stack prompt engineering tool for transforming raw user inputs into structured AI contexts.",
    points: [
      "Architected a full-stack prompt engineering tool featuring a React-based floating interface and a Node.js backend, streamlining the transformation of raw user inputs into structured AI contexts.",
    ],
  },
  countdown: {
    title: "Countdown",
    description: "A countdown application for tracking important events and deadlines.",
    points: [
      "Details coming soon...",
    ],
  },
};

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ productSlug: string }> }) {
  const { productSlug } = await params;
  const details = SAAS_PRODUCT_DETAILS[productSlug];
  
  if (!details) {
    return {
      title: "Product Not Found",
    };
  }
  
  return {
    title: `${details.title} - Prajwal S Portfolio`,
    description: details.description,
  };
}

export default async function SAASProductPage({ params }: { params: Promise<{ productSlug: string }> }) {
  const { productSlug } = await params;
  const details = SAAS_PRODUCT_DETAILS[productSlug];

  if (!details) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#030014] text-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/projects/saas-products"
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
          Back to SAAS Products
        </Link>
      </div>

      {/* Product Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Product Title */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4">
              {details.title}
            </h1>
            <p className="text-lg text-gray-300">{details.description}</p>
          </div>

          {/* Product Points */}
          <div className="bg-black/40 rounded-xl p-8 border border-[#232329] shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-white">Key Features</h2>
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
