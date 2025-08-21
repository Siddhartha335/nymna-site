// Types
export interface BlogPost {
  id: string
  intro: string
  title: string
  description: string
  image: string
  author_image: string
  author_name: string
  date: string
  read_time: string
  tags: string[]
}

export interface Career {
  id: string
  title: string
  description: string
  remote: boolean
  fulltime: boolean
  partTime: boolean
  requirements: string[]
  benefits: string[]
  payrange: string
}

// export const blogs: BlogPost[] = [
//   {
//     id: "ux-review-presentations",
//     intro: "Design",
//     title: "UX Review Presentations",
//     description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
//     image: "/blog.png",
//     author_image: "/jenny.jpg",
//     author_name: "Jenny Wilson",
//     date: "20 Jan 2022",
//     read_time: "8 min read",
//     tags: ["UX Design", "Presentations", "Design Process"]
//   },
//   {
//     id: "design-systems-guide",
//     intro: "Design",
//     title: "Building Scalable Design Systems",
//     description: "A comprehensive guide to creating and maintaining design systems that scale with your organization.",
//     image: "/blog.png",
//     author_image: "/jenny.jpg",
//     author_name: "John Smith",
//     date: "15 Feb 2022",
//     read_time: "12 min read",
//     tags: ["Design Systems", "UI Components", "Design Tokens"]
//   },
//   {
//     id: "user-research-methods",
//     intro: "Research",
//     title: "Modern User Research Methods",
//     description: "Explore the latest user research techniques and how to implement them in your design process.",
//     image: "/blog.png",
//     author_image: "/jenny.jpg",
//     author_name: "Sarah Chen",
//     date: "10 Mar 2022",
//     read_time: "6 min read",
//     tags: ["User Research", "Methods", "UX Strategy"]
//   },
//   {
//     id: "mobile-first-design",
//     intro: "Design",
//     title: "Mobile-First Design Principles",
//     description: "Learn how to create exceptional mobile experiences that users love and convert better.",
//     image: "/blog.png",
//     author_image: "/jenny.jpg",
//     author_name: "Mike Johnson",
//     date: "5 Apr 2022",
//     read_time: "10 min read",
//     tags: ["Mobile Design", "Responsive", "UI/UX"]
//   },
//   {
//     id: "accessibility-guidelines",
//     intro: "Accessibility",
//     title: "Web Accessibility Best Practices",
//     description: "Essential guidelines for creating inclusive digital experiences that work for everyone.",
//     image: "/blog.png",
//     author_image: "/jenny.jpg",
//     author_name: "Emma Davis",
//     date: "22 Apr 2022",
//     read_time: "9 min read",
//     tags: ["Accessibility", "Inclusive Design", "WCAG"]
//   },
//   {
//     id: "prototyping-tools",
//     intro: "Tools",
//     title: "Choosing the Right Prototyping Tool",
//     description: "Compare popular prototyping tools and find the perfect fit for your design workflow.",
//     image: "/blog.png",
//     author_image: "/jenny.jpg",
//     author_name: "Alex Rodriguez",
//     date: "8 May 2022",
//     read_time: "7 min read",
//     tags: ["Prototyping", "Tools", "Workflow"]
//   }
// ]