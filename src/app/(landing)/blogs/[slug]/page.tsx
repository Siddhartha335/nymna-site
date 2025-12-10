// src/app/(landing)/blogs/[slug]/page.tsx
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import type { Metadata } from "next/types";
import type { BlogPost } from "@/data/types";
import { fetchAllBlogs } from "@/backend/api";

// --- Generate Metadata ---
export async function generateMetadata(
  props: { params: { slug: string } }
): Promise<Metadata> {
  const blogs: BlogPost[] = await fetchAllBlogs();
  const blogSlug = props.params.slug;

  const blog = blogs.find((b) => String(b.id) === blogSlug);
  if (!blog) throw new Error(`Blog post with id "${blogSlug}" not found.`);

  return {
    title: `${blog.title} | Your Blog`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [blog.image],
      type: "article",
      authors: [blog.author_name],
      publishedTime: blog.date,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  };
}
export default async function BlogPost(
  props: { params: { slug: string } }
) {
  const blogs: BlogPost[] = await fetchAllBlogs();
  const blogSlug = props.params.slug;

  const blog = blogs.find((b) => String(b.id) === blogSlug);
  if (!blog) throw new Error(`Blog post with id "${blogSlug}" not found.`);

  return (
    <MaxWidthWrapper className="mb-20">
      {/* Back button */}
      <Link
        href="/blogs"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Blogs
      </Link>

      {/* Hero section */}
      <article className="mb-12">
        <header className="mb-12">
          {/* Category and meta info */}
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {blog.intro}
            </span>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                {blog.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                {blog.read_time}
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {blog.description}
          </p>

          {/* Author and share */}
          <div className="flex items-center justify-between pb-8 border-b">
            <div className="flex items-center gap-4">
              <Image
                src={blog.author_image}
                alt={blog.author_name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-lg">{blog.author_name}</h3>
                <p className="text-gray-600">Author & UX Designer</p>
              </div>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
              <Share2 size={16} />
              Share
            </button>
          </div>
        </header>

        {/* Featured image */}
        <div className="mb-12">
          <Image
            src={blog.image}
            alt={blog.title}
            width={1200}
            height={600}
            className="rounded-lg w-full object-cover shadow-lg"
            priority
          />
        </div>

        {/* Stylish intro section */}
        <div className="relative rounded-2xl mb-12">
          <h2 className="flex items-center gap-3 mb-6 font-bold">
            Introduction to Modern Software Engineering
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Software engineering has evolved significantly over the past decade.
            With the rise of <strong>cloud computing</strong>,
            <strong> microservices architecture</strong>, and <strong>DevOps practices</strong>,
            developers need to adapt to new methodologies and tools to build scalable,
            maintainable applications.
          </p>
          <p className="text-lg leading-relaxed">
            In this comprehensive guide, we&apos;ll explore the fundamental principles
            that every software engineer should master to excel in today&apos;s fast-paced
            development environment.
          </p>
        </div>

        {/* Core Principles Section */}
        <div className="mb-16">
          <h2 className="flex items-center font-bold gap-3 mb-8">
            Core Software Engineering Principles
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Understanding these foundational concepts will help you write better code
            and make informed architectural decisions:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="flex items-center gap-2 text-xl font-bold mb-4 text-gray-800">
                SOLID Principles
              </h3>
              <ul className="space-y-3">
                <li><strong>Single Responsibility:</strong> A class should have only one reason to change</li>
                <li><strong>Open/Closed:</strong> Software entities should be open for extension, closed for modification</li>
                <li><strong>Liskov Substitution:</strong> Objects should be replaceable with instances of their subtypes</li>
                <li><strong>Interface Segregation:</strong> Many client-specific interfaces are better than one general-purpose interface</li>
                <li><strong>Dependency Inversion:</strong> Depend on abstractions, not concretions</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="flex items-center gap-2 text-xl font-bold mb-4 text-gray-800">
                Clean Code Practices
              </h3>
              <p className="text-gray-600 mb-4">
                Writing clean, readable code is essential for long-term project success. Here are key practices:
              </p>
              <ul className="space-y-3">
                <li>Use meaningful variable and function names</li>
                <li>Keep functions small and focused</li>
                <li>Avoid deep nesting and complex conditionals</li>
                <li>Write comprehensive tests</li>
                <li>Refactor regularly to improve code quality</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {JSON.parse(blog.tags[0]).map((tag:string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related posts / CTA */}
      <div className="mt-16 pt-8 border-t">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Enjoyed this article?</h3>
            <p className="text-gray-600">Check out more insights and resources on our blog.</p>
          </div>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 bg-[#13548A] text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Read More Articles
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
