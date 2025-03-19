import { personalData } from "@/data";
import { PostType } from "@/types/PostType";
import type { FC } from "react";

interface PostsType {
  posts: PostType[];
}

export const Blog: FC<PostsType> = ({ posts }) => {
  return (
    <section className="py-12 px-4" id="blog">
      <h2 className="text-4xl font-light text-white text-center mb-8">
        Latest Blog Posts
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {posts.map((post) => (
          <article
            key={post.data.post.slug}
            className="group hover:transform hover:scale-[1.01] transition-all duration-200"
          >
            <a
              href={`${personalData.blog}/${post.data.post.slug}`}
              className="block border-b border-gray-700 pb-6 group-hover:border-gray-500"
              aria-label={`Read ${post.data.post.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-2xl font-medium text-white group-hover:text-gray-300 transition-colors">
                {post.data.post.title}
                <span className="text-lg text-gray-400 ml-2">
                  ({post.data.post.readTimeInMinutes} min read)
                </span>
              </h3>
              <p className="text-gray-500 text-sm mt-3 line-clamp-2">
                {post.data.post.brief}
              </p>
              <div className="text-gray-400 text-sm mt-3 flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <span aria-hidden="true">❤️</span>
                  {post.data.post.reactionCount}
                </span>
                <span className="flex items-center gap-1">
                  <span aria-hidden="true">💬</span>
                  {post.data.post.replyCount + post.data.post.responseCount}
                </span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};
