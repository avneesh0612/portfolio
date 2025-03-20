import { personalData } from "@/data";
import { PostType } from "@/types/PostType";
import type { FC } from "react";

interface PostsType {
  posts: PostType[];
}

export const Blog: FC<PostsType> = ({ posts }) => {
  return (
    <section className="py-12 px-4" id="blog" aria-labelledby="blog-heading">
      <h2 id="blog-heading" className="text-4xl font-light text-center mb-8">
        Latest Blog Posts
      </h2>
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-8 px-4 md:px-0 pt-6">
        {posts.map((post) => (
          <article
            key={post.data.post.slug}
            className="block border-l-4 border-neutral-700 pl-4 md:pl-4 hover:border-neutral-900 dark:hover:border-neutral-300 transition-all duration-200"
          >
            <a
              href={`${personalData.blog}/${post.data.post.slug}`}
              className="block pb-6 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark rounded-md p-2"
              aria-label={`Read ${post.data.post.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-2xl font-medium text-neutral-900 group-hover:text-neutral-600 dark:text-neutral-100 dark:group-hover:text-neutral-300 transition-colors">
                {post.data.post.title}
                <span className="text-lg text-neutral-400 ml-2">
                  ({post.data.post.readTimeInMinutes} min read)
                </span>
              </h3>
              <p className="text-neutral-500 text-sm mt-3 line-clamp-2">
                {post.data.post.brief}
              </p>
              <div className="text-neutral-400 text-sm mt-3 flex items-center gap-4">
                <span
                  className="flex items-center gap-1"
                  title="Reactions"
                  aria-label={`${post.data.post.reactionCount} reactions`}
                >
                  <span aria-hidden="true">❤️</span>
                  {post.data.post.reactionCount}
                </span>
                <span
                  className="flex items-center gap-1"
                  title="Comments"
                  aria-label={`${
                    post.data.post.replyCount + post.data.post.responseCount
                  } comments`}
                >
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
