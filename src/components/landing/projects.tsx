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
  return (
    <HeroParallax products={products} />
  );
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
