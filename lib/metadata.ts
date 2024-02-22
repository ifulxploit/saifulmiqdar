import { AuthorType, SiteMetaData } from "@/types";

import { socialProfiles } from "./social-data";

export const BASE_URL =
  `https://${process.env.VERCEL_URL}` ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  `http://localhost:${process.env.PORT || 3000}`;

export const defaultAuthor: AuthorType = {
  name: "Saiful Miqdar",
  handle: "@saiful_mqdr",
  socialProfiles,
  email: "miqdarsaiful@gmail.com",
  website: "https://ifulxploit.github.io",
  jobTitle: "Frontend Engineer & UI Designer",
  company: "Pamekasancode.",
  availableForWork: true,
  location: {
    city: "Tasikmalaya",
    media: "/losangeles.jpg",
  },
};

const defaultTitle = `${defaultAuthor.name}'s Blog`;
const defaultDescription = `I'm ${defaultAuthor.name}. - Crafting Inspiring Blogs, Portfolios, and Projects for Your Digital Journey. 🌴.`;

const siteMetadata: SiteMetaData = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  siteRepo: "https://github.com/ifulxploit",
  newsletterProvider: "mailerlite",
  newsletterUrl: "https://saweria.co/ifulxploit",
  analyticsProvider: "google",
  defaultTheme: "system",
  activeAnnouncement: false,
  announcement: {
    buttonText: "Support on Github →",
    link: "https://github.com/ifulxploit",
  },
  postsPerPage: 10,
  postsOnHomePage: 8,
  projectsOnHomePage: 4,
};

export default siteMetadata;
