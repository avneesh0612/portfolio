import { Hero, Main } from "@/components";
import { personalData, socialLinks } from "@/data";
import getUserDataAndPosts from "@/utils/getPosts";
import { WebSite, WithContext } from "schema-dts";

async function getPosts() {
  const Posts = await getUserDataAndPosts("avneesh0612");
  return Posts;
}

const jsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: personalData.name,
  url: personalData.site,
  description: personalData.shorterDesc,
  image: `${personalData.site}/about.png`,
  author: {
    "@type": "Person",
    name: personalData.name,
    url: personalData.site,
  },
  sameAs: socialLinks.map((link) => link.link),
  potentialAction: {
    "@type": "SearchAction",
    target: `${personalData.site}/search?q={search_term_string}`,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": personalData.site,
  },
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col px-0 pt-8 md:px-8 lg:px-18">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Main posts={posts} />
    </div>
  );
}
