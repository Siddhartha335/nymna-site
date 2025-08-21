import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Input } from "@/components/ui/input"
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { MoveUpRight } from "lucide-react";
import type { Metadata } from "next/types";
import type { BlogPost } from "@/data/types";
import { fetchAllBlogs } from "@/backend/api";

export const metadata: Metadata = {
  title: "Blog | Resources and Insights",
  description: "The latest industry news, interviews, technologies, and resources for designers and developers.",
  openGraph: {
    title: "Blog | Resources and Insights",
    description: "The latest industry news, interviews, technologies, and resources for designers and developers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Resources and Insights",
    description: "The latest industry news, interviews, technologies, and resources for designers and developers.",
  }
}

const BlogPage = async () => {

  const allBlogs:BlogPost[] = await fetchAllBlogs();
  console.log(allBlogs)

  return (
    <MaxWidthWrapper className="mb-20">
      {/* Header Section */}
      <div className="text-center my-8">
        <div className="inline-flex items-center px-2 py-1 bg-white rounded-full border border-gray-200 mb-4">
          <span className="text-sm text-black">Our Blog</span>
        </div>          
        <h1 className='text-3xl sm:text-4xl !leading-[150%] mb-4 font-bold'>
          Resources and Insights
        </h1>
        <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
          The latest industry news, interviews, technologies, and resources.
        </p>
      </div>

      {/* Search Section */}
      <div className="relative w-full max-w-xs mx-auto mb-12">
        <Input
          type="text"
          placeholder="Search articles..."
          className="bg-white text-black pr-10 pl-3 rounded-sm border-[#57A5FF] focus:border-blue-500 focus:ring-blue-500"
        />
        <button 
          type="submit" 
          className="absolute right-2 top-1/2 -translate-y-1/2 text-black hover:text-gray-700 transition-colors"
        >
          <CiSearch size={20} />
        </button>
      </div>

      {/* Featured Post */}
      {allBlogs.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
          <Link 
            href={`/blogs/${allBlogs[0].id}`}
            className="group block"
          >
            <div className="grid md:grid-cols-2 gap-8 bg-custom-radial rounded-lg border border-[#13548A] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={allBlogs[0].image}
                  alt={allBlogs[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {allBlogs[0].intro}
                  </span>
                  <span className="text-sm text-gray-500">{allBlogs[0].read_time}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                  {allBlogs[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {allBlogs[0].description}
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={allBlogs[0].author_image}
                    alt={allBlogs[0].author_name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="text-sm">
                    <p className="font-medium">{allBlogs[0].author_name}</p>
                    <p className="text-gray-500">{allBlogs[0].date}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* All Articles Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-8">All Articles</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allBlogs.slice(1).map((blog, index) => (
            <Link 
              href={`/blogs/${blog.id}`} 
              key={index}
              className="group block rounded-lg border border-[#13548A] bg-[#F0F0F5] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {blog.intro}
                  </span>
                  <span className="text-xs text-gray-500">{blog.read_time}</span>
                </div>
                
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <MoveUpRight className="text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" size={16} />
                </div>
                
                <p className="text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {blog.description}
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <Image
                    src={blog.author_image}
                    alt={blog.author_name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="text-xs">
                    <p className="font-medium text-gray-900">{blog.author_name}</p>
                    <p className="text-gray-500">{blog.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Load More / Pagination */}
      <div className="text-center mt-16">
        <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors">
          Load More Articles
        </button>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-20 bg-gradient-to-r bg-custom-radial rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4 text-[#13548A]">Stay Updated</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Get the latest articles and insights delivered directly to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1"
          />
          <button className="bg-[#13548A] text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default BlogPage