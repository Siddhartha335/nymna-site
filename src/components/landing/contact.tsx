"use client"

import {useState} from 'react';
import {CheckCircle} from 'lucide-react';
const ContactForm = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		parentName: '',
		parentPhone: '',
		phone: '',
		school: '',
		gradYear: '',
		role: '',
		discussTopic: ''
	});

	const handleInputChange = (field: string, value: string) => {
		setFormData(prev => ({
			...prev,
			[field]: value
		}));
	};

	const handleSubmit = () => {
		// Handle form submission logic here
		console.log('Form submitted:', formData);
	};

	return (
		<div className="bg-blumine-900 w-full relative overflow-hidden" id='contact'>
			{/* <div className="absolute left-[162px] top-0 bottom-0 w-px"></div> */}
			<div className="absolute inset-0">
                    {/* <div
                      className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                      )}
                    /> */}
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[linear-gradient(104.92deg,_#B3D0F5_30.64%,_#57A5FF_72.12%,_#247BFF_99.78%)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            </div>

			{/* Content Container */}
			<div className="container mx-auto px-4 pt-[64px] pb-16 relative z-10">
				<div className="max-w-5xl mx-auto mt-[51px]">
					{/* Container for the form */}
					<div>
						<div className="flex flex-col md:flex-row">

							{/* Left Section - Marketing Content (inheriting main bg color) */}
							<div className="w-full md:w-1/2 bg-[#13548A] p-8 flex flex-col justify-center">
								<div className="max-w-md">
									<h2 className="text-white text-4xl font-bold mb-2">
										Meet with our Test Prep Experts
									</h2>
									<p className="text-white mb-8">
										Let us know how we can help and get connected with an SAT Tutoring
										expert to help your students with the test prep.
									</p>
									<p className="text-white mb-4">Let our experts test prep tutors help you with:</p>

									<div className="space-y-3">
										<div className="flex items-start">
											<CheckCircle className="text-blue-300 mr-2 flex-shrink-0 mt-1" size={20}/>
											<span
												className="text-white">Unlimited access to our adaptive SAT platform</span>
										</div>
										<div className="flex items-start">
											<CheckCircle className="text-blue-300 mr-2 flex-shrink-0 mt-1" size={20}/>
											<span className="text-white">50-question Power Banks (high-yield concepts only)</span>
										</div>
										<div className="flex items-start">
											<CheckCircle className="text-blue-300 mr-2 flex-shrink-0 mt-1" size={20}/>
											<span className="text-white">Custom mini-tests with instant feedback</span>
										</div>
										<div className="flex items-start">
											<CheckCircle className="text-blue-300 mr-2 flex-shrink-0 mt-1" size={20}/>
											<span className="text-white">Live proctored exams to build test-day confidence</span>
										</div>
									</div>
								</div>
							</div>

							{/* Right Section - Form */}
							<div className="w-full md:w-1/2 bg-white p-8 border-t">
								<div>
									<div className="flex flex-col md:flex-row md:space-x-4 mb-6">
										<div className="w-full md:w-1/2 mb-4 md:mb-0">
											<label className="block text-gray-700 font-medium mb-2">First Name</label>
											<input
												type="text"
												placeholder="Untitled"
												className="w-full px-3 py-2 border border-gray-300 rounded"
												value={formData.firstName}
												onChange={(e) => handleInputChange('firstName', e.target.value)}
											/>
										</div>
										<div className="w-full md:w-1/2">
											<label className="block text-gray-700 font-medium mb-2">Last Name</label>
											<input
												type="text"
												placeholder="Deev"
												className="w-full px-3 py-2 border border-gray-300 rounded"
												value={formData.lastName}
												onChange={(e) => handleInputChange('lastName', e.target.value)}
											/>
										</div>
									</div>

									<div className="mb-6">
										<label className="block text-gray-700 font-medium mb-2">Email</label>
										<input
											type="email"
											placeholder="eg. untitleddev@gmail.com"
											className="w-full px-3 py-2 border border-gray-300 rounded"
											value={formData.email}
											onChange={(e) => handleInputChange('email', e.target.value)}
										/>
									</div>

									<div className="mb-6">
										<label className="block text-gray-700 font-medium mb-2">Phone Number</label>
										<input
											type="tel"
											placeholder="+977-9800000000"
											className="w-full px-3 py-2 border border-gray-300 rounded"
											value={formData.phone}
											onChange={(e) => handleInputChange('phone', e.target.value)}
										/>
									</div>

									<div className="mb-6">
										<div className="flex flex-col md:flex-row md:space-x-4 mb-6">
											<div className="w-full md:w-1/2 mb-4 md:mb-0">
												<label className="block text-gray-700 font-medium mb-2">Parent&#39;s
													Name</label>
												<input
													type="text"
													placeholder="John"
													className="w-full px-3 py-2 border border-gray-300 rounded"
													value={formData.parentName}
													onChange={(e) => handleInputChange('parentName', e.target.value)}
												/>
											</div>
											<div className="w-full md:w-1/2">
												<label className="block text-gray-700 font-medium mb-2">Parent&#39;s
													phone number</label>
												<input
													type="tel"
													placeholder="+977-9800000000"
													className="w-full px-3 py-2 border border-gray-300 rounded"
													value={formData.parentPhone}
													onChange={(e) => handleInputChange('parentPhone', e.target.value)}
												/>
											</div>
										</div>
									</div>									
									<button
										onClick={handleSubmit}
										className="bg-[#13548A] text-white px-6 py-2 rounded"
									>
										Submit Now
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm
