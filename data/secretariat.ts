export interface Document {
  id: string;

  title: string;

  slug: string;

  type: string;

  published: string;

  summary: string;

  pdf: string;

  cover: string | null;
}

export const documents: Document[] = [












{
  id: "welcome-message",

  title: "Welcome to prashamghimire.org",

  slug: "welcome-message",

  type: "Message",

  published: "2026-07-14",

  summary:
    "Welcome message marking the launch of the official website and digital archive.",

  pdf: "/secretariat/welcome-message.pdf",

  cover: null,
},

{
  id: "clarification-notice",

  title: "Instagram Story Clarification Notice",

  slug: "clarification-notice",

  type: "Notice",

  published: "2026-04-29",

  summary:
    "An official clarification issued by the Secretariat regarding the story posted on @prasham_ghim 's Instagram story on 2026-04-29.",

  pdf: "/secretariat/clarification.png",

  cover: null,
},

{
  id: "personal-letterhead",

  title: "Commencement of the Personal Letterhead of Prasham Ghimire",

  slug: "personal-letterhead",

  type: "Notice",

  published: "2026-03-21",

  summary:
    "Official commencement of the personal letterhead of Prasham Ghimire.",

  pdf: "/secretariat/pl-intro.pdf",

  cover: null,
},

];