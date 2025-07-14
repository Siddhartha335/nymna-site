// import React from 'react';
// import Image from 'next/image';

// const Projects = () => {
//   return (
//     <div>
//       <h2 className="text-[60px] mt-20 font-bold text-center">Our Projects</h2>
//       <div className="max-w-7xl mx-auto bg-gradient-to-b from-[#133934] to-[#061311] rounded-sm flex items-stretch justify-between relative overflow-hidden">
//         {/* Left Content */}
//         <div className="flex-1 max-w-md pt-16 pb-8 pl-8 flex flex-col justify-center">
//           <div className="flex flex-col items-start gap-4 mb-6">
//             <Image
//               src="/hamro.svg"
//               alt="logo"
//               width={98}
//               height={85}
//               className="h-auto"
//             />
//             <h2 className="text-2xl font-semibold bg-gradient-to-l from-[#177C4D] to-[#E0E0EB] bg-clip-text text-transparent">
//               HamroCSIT
//             </h2>
//           </div>
//           <p className="bg-gradient-to-l from-[#177C4D] to-[#E0E0EB] bg-clip-text text-transparent ">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//             incididunt ut labore et dolore magna aliqua. A little longer like 4 - 5 lines are
//             okay for this section. This is an about us section.
//           </p>
//         </div>

//         {/* Mobile Phones */}
//         <div className="flex-1 flex justify-center items-end relative top-36 overflow-hidden">
//           {/* Front Phone */}
//           <div className="relative w-[224px] h-[424px] z-20">
//             <Image
//               src="/mobile-rotate.svg"
//               alt="rotate"
//               width={224}
//               height={424}
//               className="absolute top-0 left-0 z-10"
//             />
//             <Image
//               src="/mobile-content.svg"
//               alt="content"
//               width={185}
//               height={382}
//               className="absolute top-5 left-5"
//             />
//           </div>

//           {/* Back Phone */}
//           <div className="relative w-[224px] h-[424px] -ml-20 rotate-[15deg] z-10">
//             <Image
//               src="/mobile-rotate.svg"
//               alt="rotate"
//               width={224}
//               height={424}
//               className="absolute top-0 left-0 z-10"
//             />
//             <Image
//               src="/mobile-content.svg"
//               alt="content"
//               width={185}
//               height={382}
//               className="absolute top-5 left-5"
//             />
//           </div>
//         </div>

//         {/* Right Logo - Overflowing */}
//         <div className="flex-1 relative overflow-hidden">
//           <div className="absolute -right-70 top-1/2 -translate-y-1/2 opacity-20 overflow-visible">
//             <Image
//               src="/hamro.svg"
//               alt="logo"
//               width={600}
//               height={550}
//               className="filter grayscale"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "HamroCSIT Entrance",
    link: "https://hamrocsit.com/entrance",
    thumbnail: "/projects/hamrocsit entrance.png",
  },

  {
    title: "HamroNotes",
    link: "https://hamronotes.com",
    thumbnail: "/projects/hamronotes1.png",
  },

  {
    title: "UpstartPrep",
    link: "https://upstartprep.com",
    thumbnail: "/projects/upstart1.png",
  },

  {
    title: "HamroCSIT",
    link: "https://hamrocsit.com",
    thumbnail: "/projects/hamrocsit entrance.png",
  },
  {
    title: "UpstartPrep - SAT Preparation",
    link: "https://upstartprep.com",
    thumbnail: "/projects/upstart1.png",
  },
  {
    title: "Nymna Old",
    link: "https://nymna.com",
    thumbnail: "/projects/nymna old.png",
  },

  {
    title: "HamroCSIT App",
    link: "https://play.google.com/store/apps/details?id=com.hamrocsit",
    thumbnail: "/projects/hamrocsitapp.png",
  },
  {
    title: "UpstartPrep - ACT Preparation",
    link: "https://upstartprep.com",
    thumbnail: "/projects/upstart2.png",
  },
  {
    title: "UpstartPrep",
    link: "https://upstartprep.com",
    thumbnail: "/projects/upstart3.png",
  },
  {
    title: "HamroNotes BCA",
    link: "https://hamronotes.com",
    thumbnail: "/projects/hamronotes2.png",
  },
  {
    title: "Test Prep",
    link: "#",
    thumbnail: "/projects/upstart2.png",
  },
];
