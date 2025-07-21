import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import { Metadata } from "next"
import type { BlogPost } from "../page"
import { blogs } from "../page"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = params.slug;

  const specificBlog = blogs.find(b => b.id === blog);
  if (!specificBlog) {
    throw new Error(`Blog post with id "${blog}" not found.`);
  }
  return {
    title: `${specificBlog.title} | Your Blog`,
    description: specificBlog.description,
    openGraph: {
      title: specificBlog.title,
      description: specificBlog.description,
      images: [specificBlog.image],
      type: 'article',
      authors: [specificBlog.author_name],
      publishedTime: specificBlog.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: specificBlog.title,
      description: specificBlog.description,
      images: [specificBlog.image],
    }
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const specificBlog = params.slug;

  const blog = blogs.find(b => b.id === specificBlog);
  if (!blog) {
    throw new Error(`Blog post with id "${specificBlog}" not found.`);
  }

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
              Software engineering has evolved significantly over the past decade. With the rise of <strong>cloud computing</strong>, 
              <strong> microservices architecture</strong>, and <strong>DevOps practices</strong>, developers need to adapt to new methodologies and tools 
              to build scalable, maintainable applications.
            </p>
            
            <p className="text-lg leading-relaxed">
              In this comprehensive guide, we'll explore the fundamental principles that every software engineer should 
              master to excel in today's fast-paced development environment.
            </p>
          </div>

          {/* Core Principles Section with cards */}
          <div className="mb-16">
            <h2 className="flex items-center font-bold gap-3 mb-8">
              Core Software Engineering Principles
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Understanding these foundational concepts will help you write better code and make informed architectural decisions:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="flex items-center gap-2 text-xl font-bold mb-4 text-gray-800">
                  SOLID Principles
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div><strong>Single Responsibility:</strong> A class should have only one reason to change</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div><strong>Open/Closed:</strong> Software entities should be open for extension, closed for modification</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div><strong>Liskov Substitution:</strong> Objects should be replaceable with instances of their subtypes</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div><strong>Interface Segregation:</strong> Many client-specific interfaces are better than one general-purpose interface</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div><strong>Dependency Inversion:</strong> Depend on abstractions, not concretions</div>
                  </li>
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
                  <li className="flex items-start gap-3">
                    <div>Use meaningful variable and function names</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div>Keep functions small and focused</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div>Avoid deep nesting and complex conditionals</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div>Write comprehensive tests</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div>Refactor regularly to improve code quality</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        {/* Tags */}
        <div className="mt-12 pt-8 border-t">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related posts or CTA */}
      <div className="mt-16 pt-8 border-t">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Enjoyed this article?</h3>
            <p className="text-gray-600">Check out more insights and resources on our blog.</p>
          </div>
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Read More Articles
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}