import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { blogPosts, formatDate, getPost } from "@/data/blog";
import { site } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title },
    ],
  };

  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />

      <PageHeader
        title={post.title}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.category },
        ]}
      />

      <article className="py-12 md:py-16">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 border-b border-navy-100 pb-6">
            <span className="rounded-full bg-navy-50 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-navy-700">
              {post.category}
            </span>
            <time dateTime={post.date} className="text-sm text-slate-500">
              {formatDate(post.date)}
            </time>
            <span className="text-sm text-slate-400">·</span>
            <span className="text-sm text-slate-500">{post.readingTime}</span>
          </div>

          <div className="space-y-10 pt-10">
            {post.sections.map((section, i) => (
              <section key={section.heading ?? `intro-${i}`}>
                {section.heading ? (
                  <h2 className="text-2xl font-bold tracking-tight text-navy-950">
                    {section.heading}
                  </h2>
                ) : null}
                {section.paragraphs ? (
                  <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-600">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}
                {section.bullets ? (
                  <ul className="mt-4 space-y-2.5">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet.slice(0, 48)}
                        className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-600"
                      >
                        <span
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-600"
                          aria-hidden
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <aside className="rounded-xl border border-navy-100 bg-navy-50/60 p-6 md:p-7">
              <h2 className="text-lg font-semibold text-navy-950">
                Key takeaways
              </h2>
              <ul className="mt-4 space-y-2.5">
                {post.takeaways.map((takeaway) => (
                  <li
                    key={takeaway.slice(0, 48)}
                    className="flex items-start gap-3 text-sm leading-relaxed text-navy-900"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" aria-hidden />
                    {takeaway}
                  </li>
                ))}
              </ul>
            </aside>

            <p className="border-t border-navy-100 pt-8 text-sm text-slate-500">
              Looking for equipment advice specific to your line?{" "}
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-1 font-semibold text-accent-600 hover:text-accent-700"
              >
                Talk to our team
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </p>
          </div>
        </div>
      </article>

      <CtaBand
        title="Turn the theory into the right machine spec"
        description="Share your material, throughput and target quality — we'll size the equipment for you."
      />
    </>
  );
}
