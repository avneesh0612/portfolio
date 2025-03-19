import { Footer, Hero, Main } from "@/components";
import getUserDataAndPosts from "@/utils/getPosts";

async function getPosts() {
  const Posts = await getUserDataAndPosts("avneesh0612");
  return Posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col px-0 pt-8 md:px-8 lg:px-18">
      <Hero />
      <Main posts={posts} />
      <Footer />
    </div>
  );
}
