"use client";

import { Contact, Projects, Work } from "@/components";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Blog } from "./Blog";
import { PostType } from "@/types/PostType";

interface MainProps {
  posts: PostType[];
}

export const Main: FC<MainProps> = ({ posts }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Work />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Projects />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Blog posts={posts} />
      </motion.div>

      <Contact />
    </>
  );
};
