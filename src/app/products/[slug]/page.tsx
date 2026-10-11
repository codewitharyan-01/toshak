import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/reveal";
import { ProductCard } from "@/components/product-card";
import { SpecTable } from "@/components/spec-table";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { getProduct, getRelatedProducts, products } from "@/data/products";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.seo.title,
    description: product.seo.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug, 3);
  const enquiryHref = `/contact-us?product=${product.slug}`;
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hello Toshak Ancillary, I would like an enquiry about the ${product.name}.`,
  )}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seo.description,
    image: `${site.url}${product.image}`,
    category: product.category,
    brand: { "@type": "Brand", name: site.name },
    manufacturer: { "@type": "Organization", name: site.name },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Products", item: `${site.url}/products` },
      { "@type": "ListItem", position: 3, name: product.name },
    ],
  };

  return (
    <>
      <JsonLd data={[productJsonLd, faqJsonLd, breadcrumbJsonLd]} />

      <PageHeader
        title={product.name}
        description={product.tagline}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      />

      {/* Intro */}
      <section className="py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
              {product.category}
            </p>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-600">
              {product.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={enquiryHref} className={cn(buttonVariants(), "bg-accent-600 text-white hover:bg-accent-700")}>
                Inquire Price & Specifications
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                <MessageCircle className="h-4 w-4 text-tech-green" aria-hidden />
                WhatsApp Direct
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-navy-200/80 bg-white p-6 shadow-sm">
              <Image
                src={product.image}
                alt={product.name}
                width={640}
                height={640}
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-navy-100 bg-navy-50/50 py-14 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Key features"
            title={`Why choose our ${product.name}`}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.features.map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 4) * 0.05}>
                <div className="h-full rounded-xl border border-navy-200/80 bg-white p-5 shadow-xs">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-950">
                    <Check className="h-4 w-4 text-accent-400" aria-hidden />
                  </div>
                  <h3 className="mt-3 text-[15px] font-semibold leading-snug text-navy-950">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-14 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Technical specifications"
            title="Model range & specifications"
            description="Configurations are selected according to your material, capacity and process requirements — our team will confirm the right model for your application."
          />
          <div className="mt-8">
            <SpecTable specs={product.specs} />
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-navy-950">
                Typical applications
              </h3>
              <ul className="mt-4 space-y-2.5">
                {product.applications.map((application) => (
                  <li
                    key={application}
                    className="flex items-start gap-2.5 text-sm text-slate-600"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" aria-hidden />
                    {application}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-navy-950">
                Industries served
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.industries.map((industry) => (
                  <span
                    key={industry}
                    className="rounded-full border border-navy-200 bg-white px-3.5 py-1.5 text-sm text-navy-900"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-navy-100 bg-navy-50/60 py-14 md:py-16">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Frequently asked questions"
          />
          <div className="mt-8">
            <FaqAccordion faqs={product.faqs} />
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-14 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" eyebrow="Related products" title="Pairs well with" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relatedProduct) => (
              <ProductCard key={relatedProduct.slug} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Request a quotation for the ${product.name}`}
        description="Share your material, capacity and application — we'll respond with the right configuration and pricing."
      />
    </>
  );
}
