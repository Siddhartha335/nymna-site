import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { projects } from "../data";
import type { Project } from "@/data/types";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/images/arrow.svg";

export default function ProjectPage({ params }: { params: { title: string } }) {
  const project: Project | undefined = projects.find((p) => p.project_id === params.title);

  if (!project) return <div>Project Not Found</div>;

  return (
    <MaxWidthWrapper>
      {/* Hero Section */}
      <section className="px-6 py-8 text-center">
        <div className="max-w-4xl mx-auto">
          <Image 
            src={project.logo} 
            alt={project.name} 
            width={80} 
            height={80}
            className="mx-auto mb-5"
          />
          <h1 className="text-4xl font-light text-[#1A5169] mb-15">{project.name}</h1>
          <h2 className="text-3xl font-semibold mb-4" style={{color: 'linear-gradient(90deg, #0C2631 0%, #1E1E1E 100%)'}}>{project.short_description}</h2>
          <p className="text-base md:text-[20px] text-[#4B5666] font-normal max-w-3xl mx-auto mb-8">{project.medium_description}</p>
          
          {project.link && (
            <Link 
              href={project.link}
              target="_blank"
              className="inline-flex items-center gap-3 bg-black text-white underline px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Visit Website
              <Arrow />
            </Link>
          )}
        </div>
      </section>

      {/* Long Description Section */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-4xl text-center font-normal text-[#0C2631] leading-relaxed">
            {project.long_description}
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-12" style={{color: 'linear-gradient(90deg, #0C2631 0%, #1E1E1E 100%)'}}>Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-[#9EC6F2] border border-[#FFFFFF] card-shadow rounded-2xl p-6 hover:bg-opacity-80 transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Description Sections */}
      {project.main_description && project.main_description.map((section, index) => (
        <section key={index} className={`px-6 py-16`}>
          <div className="max-w-6xl mx-auto">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              {/* Text Content */}
              <div className="flex-1">
                <div 
                  className="prose prose-lg max-w-none feature"
                  style={{color: 'linear-gradient(90deg, #0C2631 0%, #1E1E1E 100%)'}}
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
              
              <div className="flex-1 relative">
                <div className="relative z-10">
                  <Image 
                    src={section.imageUrl} 
                    alt={`${project.name} screenshot`}
                    width={600}
                    height={400}
                  />
                </div>
                <div className="absolute -bottom-35 -left-10 z-0">
                  <Image
                    src={"/ellipse.svg"}
                    alt="Ellipse"
                    width={540}
                    height={239}
                  /> 
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Technology Stack Section */}
      {project.technology_used && (
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">

            <h2 className="text-4xl font-semibold text-center mb-16 
              bg-gradient-to-r from-[#0C2631] to-[#1E1E1E] text-transparent bg-clip-text">
              Technology used in this project
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-15 mx-auto max-w-4xl">

              {/* DESIGN */}
              {project.technology_used.design && (
                <div className="flex flex-col items-center text-center space-y-6">
                  <h3 className="text-2xl font-normal text-gray-900">Design</h3>
                  <div className="flex gap-4">
                    {project.technology_used.design.map((tech, index) => (
                      <div key={index} className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center">
                        <Image src={tech} width={40} height={40} alt="design" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DATABASE */}
              {project.technology_used.databaase && (
                <div className="flex flex-col items-center text-center space-y-6">
                  <h3 className="text-2xl font-normal text-gray-900">Database</h3>
                  <div className="flex gap-4">
                    {project.technology_used.databaase.map((tech, index) => (
                      <div key={index} className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center">
                        <Image src={tech} width={40} height={40} alt="database" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DOCUMENTATION */}
              {project.technology_used.docs && (
                <div className="flex flex-col items-center text-center space-y-6">
                  <h3 className="text-2xl font-normal text-gray-900">Documentation</h3>
                  <div className="flex gap-4">
                    {project.technology_used.docs.map((tech, index) => (
                      <div key={index} className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center">
                        <Image src={tech} width={40} height={40} alt="docs" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* PROJECT MANAGEMENT */}
              {project.technology_used.project_management && (
                <div className="flex flex-col items-center text-center space-y-6">
                  <h3 className="text-2xl font-normal text-gray-900">Project Management</h3>
                  <div className="flex gap-4">
                    {project.technology_used.project_management.map((tech, index) => (
                      <div key={index} className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center">
                        <Image src={tech} width={40} height={40} alt="pm tool" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FRONTEND */}
              {project.technology_used.frontend && (
                <div className="flex flex-col items-center text-center space-y-6">
                  <h3 className="text-2xl font-normal text-gray-900">Frontend</h3>
                  <div className="flex gap-4">
                    {project.technology_used.frontend.map((tech, index) => (
                      <div key={index} className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center">
                        <Image src={tech} width={40} height={40} alt="frontend" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* BACKEND */}
              {project.technology_used.backend && (
                <div className="flex flex-col items-center text-center space-y-6">
                  <h3 className="text-2xl font-normal text-gray-900">Backend</h3>
                  <div className="flex gap-4">
                    {project.technology_used.backend.map((tech, index) => (
                      <div key={index} className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center">
                        <Image src={tech} width={40} height={40} alt="backend" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* Call to Action Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6" 
              style={{color: 'linear-gradient(90deg, #0C2631 0%, #1E1E1E 100%)'}}
          >Are you ready to use it?</h2>
          <p className="text-lg text-[#0C2631] mb-8 max-w-3xl mx-auto">
            Discover what&apos;s possible with {project.name} — where ambition meets action. 
            Join a growing community turning ideas into impact and start shaping your own story today.
          </p>
          
          {project.link && (
            <Link 
              href={project.link}
              target="_blank"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors underline"
            >
              Get Started
              <Arrow />
            </Link>
          )}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}