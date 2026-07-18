export interface Writing {
  id: string;

  title: string;

  slug: string;

  category:
    | "Article"
    | "Essay"
    | "Speech"
    | "Debate Script"
    | "Poem"
    | "Reflection"
    | "Journal"
    | "Book Review";

  language: "English" | "Nepali";

  published: string;

  updated?: string;

  featured: boolean;

  cover: string | null;

  summary: string;

  background?: string;

  dedication?: string;

  topics: string[];

  keywords: string[];

  content: string;
}

export const writings: Writing[] = [
  {
    id: "kal-pratiksha",

    title: "काल प्रतीक्षा",

    slug: "kal-pratiksha",

    category: "Poem",

    language: "Nepali",

    published: "2026-07-10",

    featured: true,

    cover: null,

    summary:
      "A ghazal written during a difficult moment while my grandfather, my childhood hero, was recovering after being discharged from the ICU.",

    background:
      "This ghazal was written when my grandfather was seriously ill after being discharged from the ICU at Mechi Provincial Hospital to Model Ward.",

    dedication:
      "To my grandfather, my childhood hero.",

    topics: [
      "Poetry",
      "Life",
      "Family",
    ],

    keywords: [
      "Grandfather",
      "Health",
      "Waiting",
      "Time",
      "Mortality",
    ],

    content: "writings/kal-pratiksha.md",
  },

{
  id: "mero-desh",

  title: "मेरो देश",

  slug: "mero-desh",

  category: "Poem",

  language: "Nepali",

  published: "2026-07-11",

  featured: true,

  cover: null,

  summary:
    "A poem reflecting my emotions as a Nepalese citizen after MCC agreement got passed by the Nepalese parliament.",

  background:
    "This is the first poem ever written by me. It was written during my school days when I was in grade 8.",

  dedication:
    "To the motherland, Nepal.",

  topics: [
    "Poetry",
    "Nepal"
  ],

  keywords: [
    "Nepal",
    "patriotism"
  ],

  content:
    "writings/mero-desh.md",
},

{
  id: "timi-gayepachhi",

  title: "तिमी गएपछि",

  slug: "timi-gayepachhi",

  category: "Poem",

  language: "Nepali",

  published: "2026-07-11",

  featured: true,

  cover: null,

  summary:
    "You got it well. Needs no explanation.",

  background:
    "Just having fun with words and rhymes. This poem was written during my post +2 board exam leisure time.",

  dedication:
    "Anonymous.",

  topics: [
    "Poetry",
    "love",
    "sadness"
  ],

  keywords: [
    "love",
    "heartbreak"
  ],

  content:
    "writings/timi-gayepachhi.md",
},

{
  id: "ma-fakat-base",

  title: "म फकत बसेँ।",

  slug: "ma-fakat-base",

  category: "Poem",

  language: "Nepali",

  published: "2026-07-11",

  featured: true,

  cover: null,

  summary:
    "Should't have stayed, right?",

  background:
    "This is the first gazal ever written by me for SWSC-organised Peepal Chautari Gazal Saanjh. It was written during my post +2 board exam leisure time.",

  dedication:
    "Anonymous.",

  topics: [
    "Poetry",
    "grief",
  ],

  keywords: [
    "heartbreak",
    "Hope"
  ],

  content:
    "writings/ma-fakat-base.md",
},

{
  id: "bittiya-siksha",

  title: "बालबालिकाका लागि वित्तीय शिक्षा",

  slug: "bittiya-siksha",

  category: "Article",

  language: "Nepali",

  published: "2026-07-11",

  featured: true,

  cover: null,

  summary:
    "Financial education is a must for every student in economically volatile nations like Nepal.",

  background:
    "Addressing the emptiness and voidness of financial literacy in school-level education in Nepal. This article was written during my post +2 board exam leisure time.",

  dedication:
    "To all the concerned authorities.",

  topics: [
    "education",
    "contemporary issues",
    "financial literacy",
    "economics"
  ],

  keywords: [
    "education",
    "contemporary issues",
    "financial literacy",
    "economics"
  ],

  content:
    "writings/bittiya-siksha.md",
},

{
  id: "the-crisis-of-leadership-in-the-age-of-viral-fame",

  title: "The Crisis of Leadership in the Age of Viral Fame",

  slug: "the-crisis-of-leadership-in-the-age-of-viral-fame",

  category: "Article",

  language: "English",

  published: "2026-07-16",

  featured: false,

  cover: null,

  summary:
    "Viral fame may shape today's headlines, but history ultimately remembers those who choose service over popularity and principle over applause.",

  background:
    "Trying to question the impact of viral fame on leadership. This article was written during my post +2 board exam leisure time.",

  dedication:
    "To all the netizens and the public.",

  topics: [
    "social media",
    "contemporary issues",
    "leadership",
  ],

  keywords: [
    "social media",
    "contemporary issues",
    "leadership"
  ],

  content:
    "writings/the-crisis-of-leadership.md",
},

{
  id: "timro-chahana-chhaina-malai",

  title: "तिम्रो चाहना छैन मलाई",

  slug: "timro-chahana-chhaina-malai",

  category: "Poem",

  language: "Nepali",

  published: "2024-11-24",

  featured: false,

  cover: null,

  summary:
    " ",

  background:
    "",

  dedication:
    "Anonymous.",

  topics: [
    "Poetry",
    "grief",
    "love",
    "sadness"
  ],

  keywords: [
    "heartbreak",
    "Hope",
    "love",
    "sadness"
  ],

  content:
    "writings/timro-chahana-chhaina-malai.md",
}





];