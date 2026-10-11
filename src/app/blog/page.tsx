import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { blogPosts, formatDate } from "@/data/blog";

export const metadata = {
  title: "Engineering Technical Blog",
  description:
    "Practical guides on chillers, drying, dosing and extrusion process control — written for plastics processors.",
};

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHeader
        title="Technical Knowledge Hub"
        description="Engineering-first operational guides for plastics processors — thermodynamic sizing, gravimetric vs volumetric dosing, resin dew-point moisture control, and extrusion regulation."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post, idx) => (
              <Reveal key={post.slug} variant="fade-up" delay={idx * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-navy-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-navy-300 hover:shadow-xl sm:p-8"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-navy-50 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-navy-800">
                        <Tag className="h-3 w-3 text-accent-600" />
                        {post.category}
                      </span>
                      <time
                        dateTime={post.date}
                        className="flex items-center gap-1 font-mono text-xs text-slate-400"
                      >
                        <Clock className="h-3 w-3" />
                        {formatDate(post.date)} &bull; {post.readingTime}
                      </time>
                    </div>

                    <h2 className="mt-4 text-xl font-bold leading-snug text-navy-950 transition-colors group-hover:text-accent-600 sm:text-2xl">
                      {post.title}
                    </h2>

                    <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {post.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-navy-100 pt-4 text-xs font-semibold text-accent-600">
                    <span className="inline-flex items-center gap-1">
                      <BookOpen className="h-3.5 w-3.5" /> Read Technical Article
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have an application query on your manufacturing floor?"
        description="Our application engineers evaluate tonnage, thermal heat loads, and throughput specs every day — send your details across for a detailed assessment."
      />
    </>
  );
}
