import React from 'react'
import Image from 'next/image'
import Button from '../ui/button'
import Arrow from '@/images/arrow.svg'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="relative w-full min-h-[500px] sm:min-h-[550px] md:min-h-[600px]">
      {/* Background SVG - fills entire footer */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/rectangle.svg"
          alt="rectangle"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* CONTENT OVERLAY */}
      <div className="relative z-10 w-full h-full flex items-center py-12 sm:py-16">
        <MaxWidthWrapper>
          {/* Logo */}
          <Image 
            src="/logo1.svg" 
            alt="logo" 
            width={114} 
            height={93}
            className='mb-8 sm:mb-12 mx-auto'
          />

          {/* Main content section */}
          <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-12 mb-12 sm:mb-16'>
            {/* Contact - Left */}
            <div className='text-center lg:text-left flex-1 order-2 lg:order-1'>
              <h2 className='text-xs font-medium mb-4'>Contact</h2>
              <p className='text-[15px] mb-2'>+977-9866115099</p>
              <p className='text-[15px]'>info@nymna.com</p>
            </div>

            {/* CTA - Center */}
            <div className='flex flex-col items-center flex-1 lg:flex-[1.5] order-1 lg:order-2'>
              <h2 className='text-xl sm:text-2xl md:text-[28px] font-light mb-6 sm:mb-8 text-center max-w-md lg:max-w-lg leading-relaxed'>
                Let us help bring your ideas to life!
              </h2>
              <Button 
                label="Let's start" 
                rightcomponent={<Arrow className="ms-3" />}
                className='px-6 py-3 sm:px-8 sm:py-4'
              />
            </div>

            {/* Location - Right */}
            <div className='text-center lg:text-right flex-1 order-3'>
              <h2 className='text-xs font-medium mb-4'>Based in Nepal</h2>
              <p className='text-[15px]'>Bagdole, Lalitpur</p>
            </div>
          </div>

          {/* Footer bottom section */}
          <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 sm:gap-4 pt-8 sm:pt-12'>
            {/* Copyright */}
            <div className='text-center sm:text-left flex-1'>
              <p className='text-xs'>© Copyright 2025 Nymna Technology</p>
            </div>

            {/* Terms */}
            <div className='text-xs text-center flex-1 order-last sm:order-none'>
              <a href="#" className='hover:opacity-70 transition-opacity'>
                Terms & Conditions
              </a>
            </div>

            {/* Social */}
            <div className='flex gap-4 justify-center sm:justify-end flex-1'>
              <a href="#" className='hover:opacity-70 transition-opacity' aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className='hover:opacity-70 transition-opacity' aria-label="Instagram">
                <PiInstagramLogoFill size={20} />
              </a>
              <a href="#" className='hover:opacity-70 transition-opacity' aria-label="WhatsApp">
                <IoLogoWhatsapp size={20} />
              </a>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  )
}

export default Footer