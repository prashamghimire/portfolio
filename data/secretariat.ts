export interface Document {
  id: string;

  title: string;

  slug: string;

  type: string;

  published: string;

  summary: string;

  file: string;

  cover: string;
}

export const documents: Document[] = [

  {
    id: "welcome-message",

    title: "Welcome to prashamghimire.com.np",

    slug: "welcome-message",

    type: "Message",

    published: "",

    summary:
      "Welcome message marking the launch of the official website and digital archive.",

    file: "/secretariat(files)/welcome-notice.png",

    cover: "/secretariat(files)/welcome-notice.png",
  },

  {
    id: "clarification-notice",

    title: "Instagram Story Clarification Notice",

    slug: "clarification-notice",

    type: "Notice",

    published: "2026-04-29",

    summary:
      "An official clarification issued by the Secretariat regarding the story posted on @prasham_ghim's Instagram story on 29 April 2026.",

    file: "/secretariat(files)/clarification.png",

    cover: "/secretariat(files)/clarification.png",
  },

  {
    id: "personal-letterhead",

    title: "Commencement of the Personal Letterhead of Prasham Ghimire",

    slug: "personal-letterhead",

    type: "Notice",

    published: "2026-03-21",

    summary:
      "Official commencement of the personal letterhead of Prasham Ghimire.",

    file: "/secretariat(files)/intro.png",
    cover: "/secretariat(files)/intro.png", 
  }
];