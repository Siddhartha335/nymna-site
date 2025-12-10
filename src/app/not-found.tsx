"use client"

import Image from 'next/image';
import Link from 'next/link';
import LinearBackground from '@/components/LinearBackground';
import Navbar from '@/components/landing/navbar';
import Back from "@/images/back.svg"
import Home from "@/images/home.svg"
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {

  const router = useRouter();

  return (
    <>
      <LinearBackground>
        <Navbar />
        <div className='min-h-screen flex flex-col items-center justify-center text-center px-4 -mt-24'>
          <h1 className="text-3xl md:text-[36px] font-light text-gray-800 mb-12 md:mb-16">You musn’t be here!</h1>

          <div className="relative w-[330px] sm:w-[531px] h-[226px] flex flex-col items-center">
            {/* Background Frame */}
            <Image
                src="/Frame.svg"
                alt="Frame"
                width={531}
                height={226}
                className="text-[#0F2942]"
            />

            {/* Overlay Image */}
            <div className="absolute top-0 left-0 w-full h-36 sm:h-full">
                <Image
                src="/notfound.svg"
                alt="404 Overlay"
                fill
                className="object-contain"
                />
            </div>
          </div>

          <div className='-mt-10 sm:mt-12 flex gap-8'>
              <Link href="/">
                <button className="px-4 py-2 text-sm sm:text-base sm:px-6 sm:py-3 bg-[#13548A] text-white transition hover:cursor-pointer flex gap-2 items-center rounded-full btn-shadow">
                  <Home size={20} />
                  Go to Homepage 
                </button>
              </Link>
              <button 
              onClick={()=> (router.back())}
              className="px-4 py-2 text-sm sm:text-base sm:px-6 sm:py-3 bg-[white] text-[#13548A] border border-[#EEEEEE] transition hover:cursor-pointer flex gap-2 items-center rounded-full btn-shadow">
                  <Back />
                  Go back 
              </button>
          </div>
        </div>      
      </LinearBackground>
    </>
  );
};

export default NotFoundPage;