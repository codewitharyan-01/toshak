/** Structured product fields, per the rebuild specification's data model. */

export type ProductCategory =
  | "Cooling Systems"
  | "Temperature Control"
  | "Drying & Material Handling"
  | "Dosing & Blending"
  | "Mixing"
  | "Process Control"
  | "Size Reduction";

export type SpecTable = {
  columns: string[];
  rows: string[][];
  /** Displayed under the table, e.g. when values are representative. */
  note?: string;
};

export type ProductFeature = {
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  /** Short card description (used on grids). */
  tagline: string;
  /** Detail-page intro paragraphs. */
  intro: string[];
  features: ProductFeature[];
  specs: SpecTable;
  applications: string[];
  industries: string[];
  faqs: Faq[];
  image: string;
  seo: {
    title: string;
    description: string;
  };
};

export const productCategories: ProductCategory[] = [
  "Cooling Systems",
  "Temperature Control",
  "Drying & Material Handling",
  "Dosing & Blending",
  "Mixing",
  "Process Control",
  "Size Reduction",
];
