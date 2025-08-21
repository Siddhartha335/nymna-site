"use client";

import { fetchCareers } from "@/backend/api";
import { useEffect,useState } from "react";
import type { Career } from "@/data/types";

const Careerspage = () => {

  const [alljobs,setAllJobs] = useState<Career[]>([]);

  const departments = [
    { name: 'View all', active: true },
    { name: 'Development', active: false },
    { name: 'Design', active: false },
    { name: 'Marketing', active: false },
  ];

  useEffect(()=> {
    const fetchJobs = async () => {
      const jobs = await fetchCareers();
      setAllJobs(jobs);
    }
    fetchJobs();
  },[])



  const handleApply = () => {
    const mailtoLink = `mailto:info@nymna.com`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <>
        <div className="text-center my-16">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-200 mb-8">
            <span className="text-base text-gray-600">We&apos;re hiring!</span>
          </div>          
          <h2 className='text-4xl sm:text-5xl !leading-[150%] mb-6'>Be part of our Mission
		    </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We&apos;re looking for passionate people to join us on our mission. We value 
            flat hierarchies, clear communication, and full ownership and responsibility.
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {departments.map((dept, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full border transition-colors ${
                dept.active
                  ? 'bg-[#13548A] text-white border-[#13548A]'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {alljobs.map((job, index) => (
            <div key={index} className="bg-custom-radial rounded-xl p-8 border border-[#57A5FF] hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-2xl mb-3">
                    {job.title}
                  </h3>
                  <p className="text-secondary_light_blue-700 mb-6 text-lg">
                    {job.description}
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    {job.remote && (
                      <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        100% remote
                      </span>
                    )}
                    {job.fulltime && (
                      <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Full-time
                      </span>
                    )}
                  </div>
                </div>
                
                <button 
                  onClick={handleApply}
                  className="flex items-center space-x-2 bg-[#13548A] text-white px-6 py-3 rounded-lg hover:bg-[#3399FF] transition-colors ml-8"
                >
                  <span className="text-lg font-medium">Apply</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default Careerspage