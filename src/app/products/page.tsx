import { PageHeader } from "@/components/page-header";
import { ProductsGrid } from "./products-grid";
import { CtaBand } from "@/components/cta-band";
import { products } from "@/data/products";

export const metadata = {
  title: "Products",
  description:
    "Explore Toshak Ancillary's 14 auxiliary equipment product lines — chillers, hopper dryers, dosing and blending systems, mixers, mould temperature controllers, process controllers and grinders.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Our Products"
        description="Fourteen product lines covering cooling, drying, material handling, dosing, mixing, process control and size reduction — filter by category or browse the full range."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductsGrid products={products} />
        </div>
      </section>
      <CtaBand
        title="Can't find exactly what you need?"
        description="Many machines are configurable — tell us your application and we will propose the right specification."
      />
    </>
  );
}
