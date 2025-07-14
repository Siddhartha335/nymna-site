"use client"

import { useState } from "react"
import Image from "next/image"
import { HiMenuAlt3 } from "react-icons/hi"
import MobileSliderMenu from "./mobileslidermenu"
import MaxWidthWrapper from "../MaxWidthWrapper"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }
  return (
    <MaxWidthWrapper>
    <div className="flex flex-row justify-between items-center py-3 mb-16">
        <Image src="/logo1.svg" alt="logo" width={114} height={93} className="cursor-pointer relative z-50" />
        <div className="hidden md:block">
        <ul className="flex flex-row gap-9 text-lg font-medium">
            <li className="cursor-pointer transition-colors">Home</li>
            <li className="cursor-pointer transition-colors">Products</li>
            <li className="cursor-pointer transition-colors">Blogs</li>
            <li className="cursor-pointer transition-colors">Contact</li>
            <li className="cursor-pointer transition-colors">Careers</li>
        </ul>
        </div>
        <div 
        className="block md:hidden relative z-50" 
        onClick={toggleMobileMenu}
        >
        <HiMenuAlt3 className="text-3xl cursor-pointer" />
        </div>              
    </div>
    {/* Mobile Slider Menu */}
      <MobileSliderMenu 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu} 
      />
    </MaxWidthWrapper>
  )
}

export default Navbar

