import { Achievement } from "../journey/lunar";

export interface CategoryPageData {
  title: string;
  subtitle: string;
  logo: string;
  intro: string;
  previous?: {
    title: string;
    href: string;
  };
  next?: {
    title: string;
    href: string;
  };
  achievements: Achievement[];
}