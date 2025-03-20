import {
  FarcasterIcon,
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  XIcon,
} from "@/components/Icons";
import { personalData } from "./personal";

export const socialLinks = [
  {
    name: "GitHub",
    Icon: GithubIcon,
    link: "https://github.com/avneesh0612",
  },
  {
    name: "X",
    Icon: XIcon,
    link: "https://x.com/avneesh0612",
  },
  {
    name: "Farcaster",
    Icon: FarcasterIcon,
    link: "https://warpcast.com/avneesh",
  },
  {
    name: "Mail me",
    Icon: MailIcon,
    link: `mailto:${personalData.email}`,
  },
  {
    name: "LinkedIn",
    Icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/avneesh0612/",
  },
];
