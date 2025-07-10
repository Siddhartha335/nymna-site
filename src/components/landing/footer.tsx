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
    <div style={{
    background: 'radial-gradient(107.19% 844.57% at 0% 97.66%, #3399FF 0%, #F0F0F5 62.03%, #13548A 100%)',
    }} >
    <MaxWidthWrapper className='max-w-7xl pt-12'>
        <Image 
            src="/logo1.svg" 
            alt="logo" 
            width={114} 
            height={93}
            className='my-12 mx-auto'
        />
        <div className='flex flex-row justify-between items-center'>
            <div className='text-lg'>
                <h2 className='pb-8'>Contact</h2>
                <p className='pb-4'>+977-9866115099</p>
                <p>info@nymna.com</p>
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='text-2xl font-light mb-8'>Let us help bringing your ideas to life!</h2>
                <Button 
                    label="Let's start" 
                    rightcomponent={<Arrow className="ms-3" />}
                    className='px-2 py-2'
                />
            </div>
            <div>
                <h2 className='pb-8'>Based on Nepal</h2>
                <p className='pb-4'>Bagdole, Lalitpur</p>
            </div>
        </div>        
        <div className='flex justify-between pt-16'>
            <div className='max-w-[120px]'>
                <p className='text-sm'>© Copyright 2025 Nymna Technology</p>
            </div>
            <div className='text-sm'>Terms & Conditions</div>
            <div className='flex gap-4'>
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