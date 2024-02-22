import { ContentNavItem, NavItem } from "@/types";

import siteMetadata, { defaultAuthor } from "@/lib/metadata";

const content: ContentNavItem[] = [
  {
    title: "Blog",
    href: "/posts",
    description: "Blogposts. Artikel tentang pemrograman, dan tips trik menarik.",
  },
  {
    title: "Speaking",
    href: "/speaking",
    description: "My previous (and current) talks, workshops, and other speaking engagements.",
  },
  {
    title: "Videos",
    href: defaultAuthor.socialProfiles.find((platform) => platform.name === "youtube")?.link as string,
    description: "My YouTube channel where I talk about web development.",
  },
  {
    title: "Traktir Kopi 🍵",
    href: siteMetadata.newsletterUrl as string,
    description: "Support dan dukungan anda sangat berarti bagi saya 💕",
  },
  {
    title: "Teaching",
    href: "/teaching",
    description: "I teach others. Sometimes for free, sometimes for money.",
  },
];

export const navigationLinks: NavItem[] = [
  {
    title: "Content",
    content,
  },
  {
    title: "Projects",
    href: "/projects",
  },
  // {
  //   title: "Uses",
  //   href: "/uses",
  // },
  {
    title: "about",
    href: "/about",
  },
  {
    title: "Now",
    href: "/now",
  },
];
