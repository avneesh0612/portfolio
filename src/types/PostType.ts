export interface PostType {
  data: {
    post: {
      _id: string;
      title: string;
      content: string;
      brief: string;
      totalReactions: number;
      replyCount: number;
      responseCount: number;
      coverImage: { url: string };
      slug: string;
      popularity: number;
      reactionCount: number;
      readTimeInMinutes: number;
    };
  };
}
