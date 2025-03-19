import { personalData } from "@/data";
import Image from "next/image";
import type { FC } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export const Hero: FC = () => {
  return (
    <section
      className="flex w-full flex-col-reverse md:flex-row items-center justify-between pt-10 md:pt-0 gap-4 min-h-screen px-4 md:px-0"
      id="home"
    >
      <RoughNotationGroup show>
        <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-gray-200 md:flex-2/3">
          Hey, I&apos;m{" "}
          <RoughNotation type="highlight" color="#F59E0B" order="1" multiline>
            {personalData.name}
          </RoughNotation>
          — a developer based in India, passionate about building powerful dev
          tools, contributing to open source, and sharing my learnings through
          writing. Currently, I&apos;m the{" "}
          <RoughNotation type="underline" color="#10B981" order="2" multiline>
            CTO at Orcas
          </RoughNotation>
          , where we&apos;re reshaping equity crowdfunding for startups.
          I&apos;ve worked across multiple startups as a{" "}
          <RoughNotation type="highlight" color="#3B82F6" order="3" multiline>
            developer relations engineer, full-stack developer, and technical
            writer
          </RoughNotation>
          , helping teams build, scale, and engage with developer communities.
          When I&apos;m not coding, you&apos;ll find me experimenting with side
          projects, writing articles, or diving into something completely
          random—just for the fun of it. Oh, and I&apos;m also a sports
          enthusiast.{" "}
          <RoughNotation
            type="bracket"
            color="#EC4899"
            order="5"
            brackets={["left", "right"]}
          >
            fitness freak + nerd combo :p.
          </RoughNotation>{" "}
          Got a startup that needs someone like me?{" "}
          <RoughNotation
            type="underline"
            color="#3B82F6"
            order="6"
            iterations={6}
            multiline
          >
            <a
              href={`mailto:${personalData.email}`}
              className="text-blue-500 hover:text-blue-700"
            >
              Let&apos;s talk!
            </a>
          </RoughNotation>
        </p>
      </RoughNotationGroup>
      <Image
        src="/pfp.png"
        alt={personalData.name}
        width={300}
        height={300}
        className="w-48 md:w-[300px] h-48 md:h-[300px] mb-8 md:mb-0 p-4 md:p-10 md:m-10 border-2 border-[#f0f0f0]/20 shadow-lg shadow-[#f0f0f0]/10 hover:shadow-[#f0f0f0]/20 transition-all duration-200 mt-10 md:mt-0"
        priority
      />
    </section>
  );
};
