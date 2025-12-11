import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Image from 'next/image'
import Upstart from "@/images/upstart.svg"
import type { Project } from '@/data/types'
import Link from 'next/link'

const Project = () => {
  return (
    <MaxWidthWrapper className='mt-12'>
        <div className='text-center mb-15'>
            <button className='bg-[#FFFFFF] p-2.5 rounded-full text-base font-normal mb-8'>
                Our Projects
            </button>
            <div className='max-w-[852px] mx-auto space-y-5'>
                <h1 className='text-3xl font-light'>We bring bold ideas to life with smart, scalable solutions.</h1>
                <p className='text-[#4B5666] text-lg'>At Nymna, our projects are more than code — they are partnerships built on innovation, quality, and impact.</p>
            </div>
        </div>
        <div className='space-y-15 mb-15'>
            {/* first one */}
            <div className="max-w-6xl mx-auto bg-[#035398] hover:bg-[#0C3F6E] rounded-[15px] flex items-stretch justify-between relative overflow-hidden transition-all duration-1000 ease-in-out hover:scale-105 group">
            {/* Left Content */}
            <div className="flex-1 max-w-md pt-10 pb-8 pl-15 flex flex-col justify-center transition-all duration-500 ease-in-out group-hover:translate-x-2">
            <div className="flex flex-col items-start gap-4 mb-6 transition-all duration-500 ease-in-out group-hover:translate-y-1">
                <Image
                src="/neb.svg"
                alt="logo"
                width={80}
                height={105}
                className="h-auto transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <h2 className="text-2xl font-medium text-[#FFFFFF] bg-clip-text">
                NEB Summary
                </h2>                
            </div>
            <div>
                <p className=" bg-clip-text text-[#FFFFFF] mb-7">
                    Comprehensive entrance prep with real tests, practice sets, and performance reports.
                </p>
                <Link href={"/project/neb-summary"}>
                <button className='btn-shadow py-2.5 px-5 rounded-full text-[#1E1E1E] bg-[#FFFFFF] cursor-pointer'>
                    Case Study
                </button>
                </Link>
            </div>
            </div>

            {/* Mobile Phones */}
            <div className="flex-1 flex justify-center items-end relative top-36 overflow-hidden transition-all duration-1000 ease-in-out group-hover:translate-x-8">
            {/* Front Phone */}
            <div className="relative w-[500px] h-[424px] z-20 transition-all duration-1000 ease-in-out group-hover:scale-105">
                <Image
                src="/mobile-rotate.svg"
                alt="rotate"
                width={500}
                height={424}
                className="absolute top-5 left-0 z-10"
                />
                {/* <Image
                src="/mobile-content.svg"
                alt="content"
                width={185}
                height={382}
                className="absolute top-5 left-5"
                /> */}
            </div>

            {/* Back Phone */}
            <div className="relative w-[500px] h-[424px] -ml-36 z-10 transition-all duration-1000 ease-in-out group-hover:scale-105">
                <Image
                src="/mobile-content.svg"
                alt="rotate"
                width={500}
                height={424}
                className="absolute top-20 left-0 z-10"
                />
                {/* <Image
                src="/mobile-content.svg"
                alt="content"
                width={185}
                height={382}
                className="absolute top-5 left-5"
                /> */}
            </div>
            </div>

            {/* Right Logo - Overflowing */}
            <div className="flex-1 relative overflow-hidden">
            <div className="absolute -right-0 top-1/2 -translate-y-1/2 opacity-60 overflow-visible transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-80">
                <Image
                src="/right-neb.svg"
                alt="logo"
                width={200}
                height={263}
                className="filter grayscale"
                />
            </div>
            </div>
            </div>

            {/* Second One */}
            <div className='relative'>
                <div className="
                max-w-6xl mx-auto rounded-[15px] flex justify-around gap-15 relative overflow-hidden
                group transition-all duration-1000 ease-in-out hover:scale-105
                bg-gradient-to-r from-[#1481A6] to-[#083240]
                ">
                {/* Solid color overlay (visible only on hover) */}
                <div
                    className="
                    absolute inset-0 bg-[#1481A6] opacity-0 
                    group-hover:opacity-100 transition-opacity duration-700
                    "
                ></div>               
                    {/* Left Content */}
                    <div className='py-20 relative z-10'>
                        <Image
                            src="/img1.png"
                            alt="logo"
                            width={474}
                            height={287}
                            className="h-auto relative transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                        <Image
                            src="/img2.png"
                            alt="logo"
                            width={506}
                            height={287}
                            className="h-auto absolute top-40 left-20 transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                    </div>

                    <div className="max-w-[444px] py-15 text-white relative z-10">
                        <Upstart />
                        <div className='mt-10 space-y-8'>
                            <h2 className='text-3xl font-normal'>UpstartPrep</h2>
                            <p className='text-base font-light'>Empowering students with personalized test prep and smart learning tools to achieve their academic goals.</p>
                            <Link href={"/project/upstartprep"}>
                            <button className='btn-shadow py-2.5 px-5 rounded-full text-[#1E1E1E] bg-[#FFFFFF] cursor-pointer'>
                                Case Study
                            </button>
                            </Link>
                        </div>
                    </div>

                    {/* Logo now inside the group for hover effect */}
                    <Image
                        src="/up.svg"
                        alt="logo"
                        width={200}
                        height={263}
                        className='absolute bottom-0 left-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-105'
                    />
                </div>
            </div>
            
            {/* Third one */}
            <div className="max-w-6xl mx-auto bg-[#0C9585] hover:bg-[#0A6558] rounded-[15px] flex items-stretch justify-between relative overflow-hidden transition-all duration-1000 ease-in-out hover:scale-105 group">
            {/* Left Content */}
            <div className="flex-1 max-w-md pt-10 pb-8 pl-15 flex flex-col justify-center transition-all duration-500 ease-in-out group-hover:translate-x-2">
            <div className="flex flex-col items-start gap-4 mb-6 transition-all duration-500 ease-in-out group-hover:translate-y-1">
                <Image
                src="/hamrologo.svg"
                alt="logo"
                width={80}
                height={105}
                className="h-auto transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <h2 className="text-2xl font-medium text-[#FFFFFF] bg-clip-text">
                HamroCSIT
                </h2>                
            </div>
            <div>
                <p className=" bg-clip-text text-[#FFFFFF] mb-7">
                    Comprehensive entrance prep with real tests, practice sets, and performance reports.
                </p>
                <Link href={"/project/hamrocsit"}>                
                <button className='btn-shadow py-2.5 px-5 rounded-full text-[#1E1E1E] bg-[#FFFFFF] cursor-pointer'>
                    Case Study
                </button>
                </Link>
            </div>
            </div>

            {/* Mobile Phones */}
            <div className="flex-2 flex justify-center items-end relative top-36 overflow-hidden transition-all duration-1000 ease-in-out group-hover:translate-x-8 z-0">
  
                {/* Front Phone (goes behind) */}
                <div className="relative w-[1800px] h-[424px] z-10 transition-all duration-1000 ease-in-out group-hover:scale-105">
                    <Image
                    src="/hamrocsit.png"
                    alt="rotate"
                    width={485}
                    height={280}
                    className="absolute top-1 left-0 z-0"
                    />
                </div>

                {/* Back Phone (comes on top now) */}
                <div className="relative w-[900px] h-[424px] -rotate-[5deg] -ml-36 z-30 transition-all duration-1000 ease-in-out group-hover:scale-105">
                    <Image
                    src="/mobile_hamro.png"
                    alt="rotate"
                    width={500}
                    height={424}
                    className="absolute top-10 left-0 z-20"
                    />
                </div>

            </div>
            
            {/* Right Logo - Overflowing */}
            <div className="flex-1 relative overflow-hidden">
            <div className="absolute -right-0 opacity-60 overflow-visible transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-80">
                <Image
                src="/hamrohalf.png"
                alt="logo"
                width={404}
                height={400}
                className="filter grayscale"
                />
            </div>
            </div>
            </div>

            {/* Fourth One */}
            <div className='relative'>
                <div className="max-w-6xl mx-auto bg-[#1481A6] hover:bg-[#003764] rounded-[15px] flex justify-around gap-15 relative overflow-hidden transition-all duration-1000 ease-in-out hover:scale-105 group">                
                    {/* Left Content */}
                    <Image
                        src={"/Hamronotes.png"}
                        alt="logo"
                        width={563}
                        height={325}
                        className="h-auto relative top-15 transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />

                    <div className="max-w-[444px] py-15 text-white relative z-10">
                        <Image
                            src={"/hamronotes.svg"}
                            alt='hamronotes logo'
                            width={160}
                            height={40}
                        />
                        <div className='mt-10 space-y-8'>
                            <h2 className='text-3xl font-normal'>HamroNotes</h2>
                            <p className='text-base font-light'>A platform offering free, high-quality study notes and learning resources to students across Nepal.</p>
                            <Link href={"/project/hamronotes"}>
                            <button className='btn-shadow py-2.5 px-5 rounded-full text-[#1E1E1E] bg-[#FFFFFF] cursor-pointer'>
                                Case Study
                            </button>
                            </Link>
                        </div>
                    </div>

                    {/* Logo now inside the group for hover effect */}
                    <Image
                        src="/hamrohalf.png"
                        alt="logo"
                        width={300}
                        height={300}
                        className='absolute top-0 -left-28 z-0 transition-transform duration-500 ease-in-out group-hover:scale-105'
                    />
                </div>
            </div>
            
        </div>
    </MaxWidthWrapper>
  )
}

export default Project

