"use client";

import Image from "next/image";
import Arrow from "@/images/arrow.svg";
import { BackgroundBeams } from "../ui/background-beams";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Button from "../ui/button";
import LinearBackground from "../LinearBackground";
import Navbar from "./navbar";

export const Header = () => {

  return (
    <LinearBackground>
      <MaxWidthWrapper>
        {/* Navigation Header */}
        <Navbar />
        {/* Main Content - Centered */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-4 mb-20 md:mb-10 relative">
          <Image
            src="/logo-graphics.svg"
            alt="logo"
            width={354}
            height={331}
            priority
            className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-[66%]"
          />
          <div className="z-10 relative ">
            <h1 className="text-[60px] md:text-[80px] font-bold leading-[80px] md:leading-[100px] mb-24 max-w-2xl mt-10">
              We Build Edtech Solutions
            </h1>
            <p className="text-lg md:text-lg max-w-2xl mx-auto mb-15 leading-relaxed">
              We design powerful platforms and technologies that empower
              educators and institutions to reach and support children more
              effectively.
            </p>
            <Button
              label="Contact Us"
              rightcomponent={<Arrow className="ms-3" />}
              className="relative z-50 cursor-pointer"
            />
          </div>
        </div>
        <BackgroundBeams />
      </MaxWidthWrapper>
    </LinearBackground>
  );
};
