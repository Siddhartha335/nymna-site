"use client"

import Image from "next/image"
import React, { useState } from "react"
import Arrow from "@/app/images/arrow.svg"
import { BackgroundBeams } from "../ui/background-beams"
import MaxWidthWrapper from "../MaxWidthWrapper"
import Button from "../ui/button"
import LinearBackground from "../LinearBackground"
import { HiMenuAlt3 } from "react-icons/hi"
import MobileSliderMenu from "./mobileslidermenu"

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <LinearBackground>
      <MaxWidthWrapper>
        {/* Navigation Header */}
        <div className="flex flex-row justify-between items-center py-3 mb-16">
          <Image src="/logo1.svg" alt="logo" width={114} height={93} className="cursor-pointer relative z-50" />
          <div className="hidden md:block">
            <ul className="flex flex-row gap-9 text-lg font-medium">
              <li className="cursor-pointer transition-colors">Home</li>
              <li className="cursor-pointer transition-colors">Products</li>
              <li className="cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
          <div 
            className="block md:hidden relative z-50" 
            onClick={toggleMobileMenu}
          >
            <HiMenuAlt3 className="text-3xl cursor-pointer" />
          </div>
        </div>
        
        {/* Main Content - Centered */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-4 mb-10 relative">
          <Image
            src="/logo-graphics.svg"
            alt="logo"
            width={354}
            height={331}
            priority
            className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-[66%]"
          />
          <div className="z-10 relative py-20">
            <h1 className="text-[60px] md:text-[112px] font-bold leading-[80px] md:leading-[150px] mb-16">
              We Build Edtech Solutions
            </h1>
            <p className="text-lg md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
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
      
      {/* Mobile Slider Menu */}
      <MobileSliderMenu 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu} 
      />
    </LinearBackground>
  )
}