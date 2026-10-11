import type { Product, ProductCategory } from "./types";
import { dryingHandlingProducts } from "./drying-handling";
import { dosingProducts } from "./dosing";
import { mixingProducts } from "./mixing";
import { temperatureControlProducts } from "./temperature-control";
import { coolingProducts } from "./cooling";
import { controlsProducts } from "./controls";

export type { Product, ProductCategory } from "./types";
export { productCategories } from "./types";

const all = [
  ...coolingProducts,
  ...temperatureControlProducts,
  ...dryingHandlingProducts,
  ...dosingProducts,
  ...mixingProducts,
  ...controlsProducts,
];

/** Menu order mirrors the current live website's product navigation. */
const menuOrder = [
  "hopper-dryer",
  "vacuum-hopper-loader",
  "volumetric-doser-feeder",
  "mold-temperature-controller",
  "batch-mixer",
  "air-cooled-water-chiller",
  "vertical-mixer-with-dryer",
  "volumetric-master-batch-doser",
  "vertical-mixer",
  "vertical-mixer-with-heater",
  "extrusion-process-controller",
  "gravimetric-dosing-blending",
  "grinder-flake-cutter",
  "water-cooled-water-scroll-chiller",
];

export const products: Product[] = menuOrder
  .map((slug) => all.find((p) => p.slug === slug))
  .filter((p): p is Product => Boolean(p));

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Related products: same category first, then the rest in menu order. */
export function getRelatedProducts(slug: string, count = 3): Product[] {
  const product = getProduct(slug);
  if (!product) return [];
  const sameCategory = products.filter(
    (p) => p.slug !== slug && p.category === product.category,
  );
  const others = products.filter(
    (p) => p.slug !== slug && p.category !== product.category,
  );
  return [...sameCategory, ...others].slice(0, count);
}

/** Category → products map for the navigation mega-menu and filter chips. */
export const categoryGroups: { category: ProductCategory; products: Product[] }[] =
  [
    "Cooling Systems",
    "Temperature Control",
    "Drying & Material Handling",
    "Dosing & Blending",
    "Mixing",
    "Process Control",
    "Size Reduction",
  ].map((category) => ({
    category: category as ProductCategory,
    products: products.filter((p) => p.category === category),
  }));
