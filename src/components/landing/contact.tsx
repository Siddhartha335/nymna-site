"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-blumine-900 w-full relative overflow-hidden" id="contact">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[linear-gradient(104.92deg,_#B3D0F5_30.64%,_#57A5FF_72.12%,_#247BFF_99.78%)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      </div>

      <div className="container mx-auto px-4 pt-[64px] pb-16 relative z-10">
        <div className="max-w-5xl mx-auto mt-[51px]">
          <div className="flex flex-col md:flex-row">
            {/* Left Section - Mission */}
            <div className="w-full md:w-1/2 bg-[#13548A] p-8 flex flex-col justify-center">
              <div className="max-w-md">
                <h2 className="text-white text-4xl font-bold mb-2">
                  Build the Future with Us
                </h2>
                <p className="text-white mb-8">
                  We&apos;re a team of builders, thinkers, and doers solving real-world problems through technology.
                </p>
                <p className="text-white mb-4">
                  Whether you&apos;re looking to collaborate, contribute, or explore what’s next—let’s start the conversation.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-300 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-white">Innovative projects across software, AI, and digital solutions</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-300 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-white">A culture that encourages bold ideas and fast execution</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-300 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-white">Opportunities to collaborate with passionate technologists</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-300 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-white">Make a tangible impact from day one</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="w-full md:w-1/2 bg-white p-8 border-t">
              <div>
                <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
                  <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <label className="block text-gray-700 font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="Ram"
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Bahadur"
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+977-9800000000"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    placeholder="Tell us how you'd like to collaborate..."
                    className="w-full px-3 py-2 border border-gray-300 rounded h-28 resize-none"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="bg-[#13548A] text-white px-6 py-2 rounded hover:bg-[#0f4370] transition"
                >
                  Submit Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
