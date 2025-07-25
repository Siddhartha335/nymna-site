"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ContactForm from "@/components/landing/contact";
import Footer from "@/components/landing/footer";
import {Header} from "@/components/landing/header";
import { HeroParallaxDemo } from "@/components/landing/projects";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={200}
        height={50}
        className="mb-4"
      />
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      <p className="mt-4 text-gray-700">Loading...</p>
    </div>
  )
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for components to be ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
   <> 
    <Header />
    <HeroParallaxDemo />
    <ContactForm />
    <Footer />
   </>
  );
}