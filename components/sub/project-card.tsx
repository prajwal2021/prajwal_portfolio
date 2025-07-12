import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
    >
      <div className="w-full h-60 mx-auto flex items-center justify-center bg-black/30">
        <Image
          src={src}
          alt={title}
          width={256}
          height={176}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </Link>
  );
};
