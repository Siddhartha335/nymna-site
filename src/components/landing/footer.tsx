import React from 'react'
import Image from 'next/image'
import Button from '../ui/button'
import Arrow from '@/app/images/arrow.svg'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div>
    <MaxWidthWrapper>
    <Image 
        src="/logo1.svg" 
        alt="logo" 
        width={114} 
        height={93}
        className='my-12 mx-auto'
    />
    
    {/* Main content section - responsive layout */}
    <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-4'>
        {/* Contact section */}
        <div className='text-base sm:text-lg text-center lg:text-left'>
            <h2 className='text-xs font-medium'>Contact</h2>
            <p className='mt-4 sm:pb-4 text-[15px]'>+977-9866115099</p>
            <p className='text-[15px]'>info@nymna.com</p>
        </div>
        
        {/* CTA section */}
        <div className='flex flex-col items-center order-first lg:order-none'>
            <h2 className='text-xl sm:text-2xl font-light mb-6 sm:mb-8 text-center max-w-md'>
                Let us help bring your ideas to life!
            </h2>
            <Button 
                label="Let's start" 
                rightcomponent={<Arrow className="ms-3" />}
                className='px-4 py-3 sm:px-6 sm:py-4'
            />
        </div>
        
        {/* Location section */}
        <div className='text-center lg:text-left'>
            <h2 className='text-xs font-medium'>Based in Nepal</h2>
            <p className='text-[15px] mt-4 sm:pb-4'>Bagdole, Lalitpur</p>
        </div>
    </div>        
    
    {/* Footer section - responsive layout */}
    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 py-12 sm:pt-16'>
        {/* Copyright */}
        <div className='max-w-full sm:max-w-[120px] text-center sm:text-left'>
            <p className='text-xs'>© Copyright 2025 Nymna Technology</p>
        </div>
        
        {/* Terms */}
        <div className='text-xs text-center order-last sm:order-none'>
            Terms & Conditions
        </div>
        
        {/* Social icons */}
        <div className='flex gap-4 justify-center sm:justify-end'>
            <FaFacebook size={20} />
            <PiInstagramLogoFill size={20} />
            <IoLogoWhatsapp size={20} />
        </div>
    </div>
</MaxWidthWrapper>
    </div>
  )
}

export default Footer