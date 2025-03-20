import { personalData } from "@/data";
import Image from "next/image";
import type { FC } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { Download } from "lucide-react";

export const Hero: FC = () => {
  return (
    <section
      className="flex w-full flex-col-reverse md:flex-row items-center justify-between pt-4 md:pt-0 gap-4 md:min-h-screen px-2 md:px-0"
      id="home"
    >
      <div className="flex flex-col px-4 md:px-0">
        <RoughNotationGroup show>
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
              Hey, I&apos;m{" "}
              <RoughNotation
                type="highlight"
                color="var(--accent-first)"
                order="1"
                multiline
              >
                {personalData.name}
              </RoughNotation>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-neutral-900 dark:text-neutral-100 md:flex-2/3">
              — a high school student and developer based in India, passionate
              about building powerful dev tools, contributing to open source,
              and sharing my learnings through writing. Currently, I&apos;m the{" "}
              <RoughNotation
                type="underline"
                color="var(--accent-second)"
                order="2"
                multiline
              >
                CTO at Orcas
              </RoughNotation>
              , where we&apos;re reshaping equity crowdfunding for startups.
              I&apos;ve worked across multiple startups as a{" "}
              <RoughNotation
                type="highlight"
                color="var(--primary)"
                order="3"
                multiline
              >
                developer relations engineer, full-stack developer, and
                technical writer
              </RoughNotation>
              , helping teams build, scale, and engage with developer
              communities. When I&apos;m not coding, you&apos;ll find me
              experimenting with side projects, writing articles, or diving into
              something completely random—just for the fun of it. Oh, and
              I&apos;m also a sports enthusiast{" "}
              <RoughNotation
                type="bracket"
                color="var(--accent-third)"
                order="5"
                brackets={["left", "right"]}
                multiline
              >
                fitness freak + nerd :p.
              </RoughNotation>{" "}
              Got a startup that needs someone like me?{" "}
              <RoughNotation
                type="underline"
                color="var(--primary)"
                order="6"
                iterations={6}
                multiline
              >
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-primary hover:text-primary-hover dark:text-primary/90 dark:hover:text-primary-hover/90"
                >
                  Let&apos;s talk!
                </a>
              </RoughNotation>
            </p>
          </div>
        </RoughNotationGroup>

        <div className="mt-8 flex items-center gap-4">
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 dark:focus:ring-offset-background-dark"
            aria-label="Download my CV"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>

      <Image
        src="/pfp.png"
        alt={personalData.name}
        width={300}
        height={300}
        className="size-[90%] md:size-[300px] mb-4 p-4 md:p-10 md:m-10 border-2 border-neutral-200 dark:border-neutral-200/20 shadow-lg shadow-neutral-200/50 dark:shadow-neutral-200/10 hover:shadow-neutral-300/50 dark:hover:shadow-neutral-200/20 transition-all duration-200 mt-10 md:mt-0"
        priority
      />
    </section>
  );
};
