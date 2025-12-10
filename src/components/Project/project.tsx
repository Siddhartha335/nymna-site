import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Image from 'next/image'
import Upstart from "@/images/upstart.svg"

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
        <div className='space-y-15'>
            {/* first one */}
            <div className="max-w-7xl mx-auto bg-[#035398] rounded-[15px] flex items-stretch justify-between relative overflow-hidden transition-all duration-1000 ease-in-out hover:scale-105 group">
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
                <button className='btn-shadow py-2.5 px-5 rounded-full text-[#1E1E1E] bg-[#FFFFFF]'>
                    Case Study
                </button>
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
                <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#1481A6] to-[#083240] rounded-[15px] flex justify-around relative overflow-hidden transition-all duration-1000 ease-in-out hover:scale-105 group">                
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
                            className="h-auto absolute top-40 left-36 transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                    </div>

                    <div className="max-w-[444px] py-15 text-white relative z-10">
                        <Upstart />
                        <div className='mt-10 space-y-8'>
                            <h2 className='text-3xl font-normal'>UpstartPrep</h2>
                            <p className='text-base font-light'>Empowering students with personalized test prep and smart learning tools to achieve their academic goals.</p>
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
            
            {/* first one */}
            <div className="max-w-7xl mx-auto bg-[#035398] rounded-[15px] flex items-stretch justify-between relative overflow-hidden transition-all duration-1000 ease-in-out hover:scale-105 group">
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
                <button className='btn-shadow py-2.5 px-5 rounded-full text-[#1E1E1E] bg-[#FFFFFF]'>
                    Case Study
                </button>
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
                <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#1481A6] to-[#083240] rounded-[15px] flex justify-around relative overflow-hidden transition-all duration-1000 ease-in-out hover:scale-105 group">                
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
                            className="h-auto absolute top-40 left-36 transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                    </div>

                    <div className="max-w-[444px] py-15 text-white relative z-10">
                        <Upstart />
                        <div className='mt-10 space-y-8'>
                            <h2 className='text-3xl font-normal'>UpstartPrep</h2>
                            <p className='text-base font-light'>Empowering students with personalized test prep and smart learning tools to achieve their academic goals.</p>
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

            
        </div>
    </MaxWidthWrapper>
  )
}

export default Project




{/* Third One */}
            // <div className="max-w-7xl mx-auto bg-[#0C9585] rounded-[15px] flex items-stretch justify-between relative overflow-hidden transition-all duration-1000 ease-in-out hover:scale-105 group">
            // {/* Left Content */}
            // <div className="flex-1 max-w-md pt-10 pb-8 pl-15 flex flex-col justify-center transition-all duration-500 ease-in-out group-hover:translate-x-2">
            // <div className="flex flex-col items-start gap-4 mb-6 transition-all duration-500 ease-in-out group-hover:translate-y-1">
            //     <Image
            //     src="/hamrologo.svg"
            //     alt="logo"
            //     width={80}
            //     height={105}
            //     className="h-auto transition-transform duration-500 ease-in-out group-hover:scale-110"
            //     />
            //     <h2 className="text-2xl font-medium text-[#FFFFFF] bg-clip-text">
            //     HamroCSIT
            //     </h2>                
            // </div>
            // <div>
            //     <p className=" bg-clip-text text-[#FFFFFF] mb-7">
            //         Comprehensive entrance prep with real tests, practice sets, and performance reports.
            //     </p>
            //     <button className='btn-shadow py-2.5 px-5 rounded-full text-[#1E1E1E] bg-[#FFFFFF]'>
            //         Case Study
            //     </button>
            // </div>
            // </div>

            // {/* Mobile Phones */}
            // <div className="flex-1 flex justify-center items-end relative top-36 overflow-hidden transition-all duration-1000 ease-in-out group-hover:translate-x-8">
            // {/* Front Phone */}
            // <div className="relative w-[500px] h-[424px] z-20 transition-all duration-1000 ease-in-out group-hover:scale-105">
            //     <Image
            //     src="/laptop.svg"
            //     alt="rotate"
            //     width={500}
            //     height={424}
            //     className="absolute top-5 left-0 z-10"
            //     />
            //     {/* <Image
            //     src="/mobile-content.svg"
            //     alt="content"
            //     width={185}
            //     height={382}
            //     className="absolute top-5 left-5"
            //     /> */}
            // </div>

            // {/* Back Phone */}
            // <div className="relative w-[500px] h-[424px] -ml-36 z-10 transition-all duration-1000 ease-in-out group-hover:scale-105">
            //     <Image
            //     src="/mobile-content.svg"
            //     alt="rotate"
            //     width={500}
            //     height={424}
            //     className="absolute top-20 left-0 z-10"
            //     />
            //     {/* <Image
            //     src="/mobile-content.svg"
            //     alt="content"
            //     width={185}
            //     height={382}
            //     className="absolute top-5 left-5"
            //     /> */}
            // </div>
            // </div>

            // {/* Right Logo - Overflowing */}
            // <div className="flex-1 relative overflow-hidden">
            // <div className="absolute -right-30 rotate-[180 deg] top-1/2 -translate-y-1/2 opacity-60 overflow-visible transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-80">
            //     <Image
            //     src="/hamro.svg"
            //     alt="logo"
            //     width={404}
            //     height={405}
            //     className="filter grayscale"
            //     />
            // </div>
            // </div>
            // </div>
