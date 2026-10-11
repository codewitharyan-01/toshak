import { PageHeader } from "@/components/page-header";
import { GalleryGrid } from "./gallery-grid";
import { CtaBand } from "@/components/cta-band";

export const metadata = {
  title: "Gallery",
  description:
    "Photographs of Toshak Ancillary equipment — mixers, dosing systems, chillers and mould temperature controllers from our manufacturing range.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        description="A look at our machines — product photography from the Toshak Ancillary range."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
      <CtaBand
        title="Want to see a machine up close?"
        description="Visit our works in Vatva, Ahmedabad, or ask us for a detailed walkthrough video of any machine."
      />
    </>
  );
}
