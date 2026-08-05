import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  href: string;
  className?: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  href,
  className = "",
}: ProjectCardProps) => {
  return (
    <Link
      href={href}
      className={`group relative flex h-full min-h-[22rem] w-full flex-col overflow-hidden rounded-lg border-2 border-[#2A0E61] bg-black/20 shadow-lg transition-all duration-300 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/40 ${className}`}
    >
      <div className="relative h-52 w-full shrink-0 overflow-hidden bg-black/30 sm:h-56">
        <Image
          src={src}
          alt={title}
          width={512}
          height={320}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Dim + View Details centered on image only */}
        <div
          className="pointer-events-none absolute inset-0 z-10 bg-black/0 transition-colors duration-300 group-hover:bg-black/35"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/95 px-4 py-2 text-xs font-semibold text-white shadow-lg ring-1 ring-cyan-400/30">
            View Details
            <svg
              className="h-4 w-4 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="relative z-10 flex min-h-[9.5rem] flex-1 flex-col p-4">
        <h2 className="line-clamp-2 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-lg font-semibold leading-snug text-transparent transition-all duration-300 group-hover:from-purple-400 group-hover:to-cyan-400 sm:text-xl">
          {title}
        </h2>
        <p className="mt-2 line-clamp-4 flex-1 text-sm leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-gray-200 sm:text-base">
          {description}
        </p>
      </div>
    </Link>
  );
};
