import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  SKILL_ICON_ROW_1,
  SKILL_ICON_ROW_2,
  SKILL_ICON_ROW_3,
} from "@/constants";

const SKILL_ROWS = [
  SKILL_ICON_ROW_1,
  SKILL_ICON_ROW_2,
  SKILL_ICON_ROW_3,
] as const;

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-14 md:py-16"
    >
      <div className="relative z-10 flex w-full flex-col items-center">
      <SkillText />

      {SKILL_ROWS.map((row, rowIndex) => {
        const indexOffset = SKILL_ROWS.slice(0, rowIndex).reduce(
          (sum, r) => sum + r.length,
          0
        );
        return (
          <div
            key={rowIndex}
            className="flex w-full max-w-5xl flex-row flex-nowrap justify-center overflow-x-auto mt-4 gap-4 sm:gap-5 items-center mx-auto px-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {row.map((skill, i) => (
              <SkillDataProvider
                key={`${rowIndex}-${skill.skill_name}`}
                src={skill.image}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={indexOffset + i}
                size={
                  "size" in skill && skill.size === "lg" ? "lg" : undefined
                }
              />
            ))}
          </div>
        );
      })}
      </div>

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 z-[-10] flex items-center justify-center bg-cover opacity-30">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
