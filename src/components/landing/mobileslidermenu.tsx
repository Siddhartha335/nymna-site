"use client";
import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { HiX } from "react-icons/hi"

const MobileSliderMenu = ({ isOpen, onClose }:{
    isOpen: boolean,
    onClose: () => void
}) => {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Slider Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col h-full w-full"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 py-9 border-b border-black/20 bg-white/10 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-black">Menu</h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-black/10 transition-colors"
              >
                <HiX className="text-2xl text-black" />
              </button>
            </div>
            
            {/* Menu Items */}
            <div className="p-6 flex-1 bg-white/10 backdrop-blur-sm">
              <ul className="space-y-6">
                <li>
                  <a 
                    href="#" 
                    className="block text-lg font-medium text-black hover:text-blue-600 transition-colors py-2"
                    onClick={onClose}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="block text-lg font-medium text-black hover:text-blue-600 transition-colors py-2"
                    onClick={onClose}
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="block text-lg font-medium text-black hover:text-blue-600 transition-colors py-2"
                    onClick={onClose}
                  >
                    Contact
                  </a>
                </li>
              </ul>
              
              {/* Additional Content */}
              <div className="mt-8 pt-8 border-t border-black/20">
                <button className="w-full bg-black/20 backdrop-blur-sm text-black py-3 px-6 rounded-lg font-medium hover:bg-black/30 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        </AuroraBackground>
      </div>
    </>
  )
}

export default MobileSliderMenu