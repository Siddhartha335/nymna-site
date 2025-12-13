"use client"

import { useState } from "react"
import Image from "next/image"
import { HiMenuAlt3 } from "react-icons/hi"
import MobileSliderMenu from "./mobileslidermenu"
import MaxWidthWrapper from "../MaxWidthWrapper"
import Link from "next/link"

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
    <div className="flex flex-row justify-between items-center pt-3 mb-10">
        <Link href="/" className="block md:hidden">
          <Image src="/logo.svg" alt="logo" width={80} height={40} className="cursor-pointer relative z-50" />
        </Link>
        <Link href="/" className="hidden md:block">
          <Image src="/logo1.svg" alt="logo" width={114} height={93} className="cursor-pointer relative z-50" />
        </Link>
        <div className="hidden md:block">
        <ul className="flex flex-row gap-9 text-lg font-medium relative z-50">
            <Link href="/project"><li className="cursor-pointer transition-colors">Projects</li></Link>
            {/* <Link href="/blogs"><li className="cursor-pointer transition-colors">Blogs</li></Link> */}
            <Link href="/contact"><li className="cursor-pointer transition-colors">Contact</li></Link>
            {/* <Link href="/careers">
              <li className="list-none cursor-pointer transition-colors relative">
                Careers
                <div className="text-sm text-white absolute -top-10 left-3">
                  We're Hiring
                </div>
              </li>
            </Link>          */}
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

