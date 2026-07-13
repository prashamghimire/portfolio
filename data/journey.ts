export interface Achievement {
  id: string;
  section: "Academic Journey" | "Leadership, Service & Volunteering";

  institution: string;

  title: string;

  date: string;

  category: string;

  summary: string;

  description: string;

  images: string[];
}

export const achievements: Achievement[] = [

];