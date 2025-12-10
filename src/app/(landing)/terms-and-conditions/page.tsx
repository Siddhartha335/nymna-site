import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Link from "next/link"

const page = () => {
  return (
    <MaxWidthWrapper>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl text-[#13548A] font-semibold text-center mb-5">Terms & Conditions</h1>
        <p className="text-lg text-[#3D3D3D] text-center">
          Quick Summary: These terms govern your use of Nymna Technology’s services. By{" "}
        using our services, you agree to these terms. Please read them carefully.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="max-w-4xl mx-auto mt-10 p-6">
        <h2 className="text-2xl text-[#13548A] font-medium mb-3">Table of Contents</h2>
        <hr className="border-t border-[#248AD3] mb-4" />
        <ol className="list-decimal pl-6 space-y-1 text-gray-800 text-lg hover:cursor-pointer">
          <Link href="#one"><li>Acceptance of Terms</li></Link>
          <Link href="#two"><li>Description of Services</li></Link>
          <li>User Accounts and Responsibilities</li>
          <li>Acceptable Use Policy</li>
          <li>Intellectual Property Rights</li>
          <li>Privacy and Data Protection</li>
          <li>Payment Terms</li>
          <li>Limitation of Liability</li>
          <li>Termination</li>
          <li>Contact Information</li>
        </ol>
        <hr className="border-t border-[#248AD3] mt-2" />
      </div>

      {/* Sections */}
      <div className="max-w-4xl mx-auto mt-6 space-y-6 mb-12">
        {/* Section 1 */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-[#13548A]" id="">1. Acceptance of Terms</h2>
          <p className="text-gray-800 text-base">
            If you do not agree with any part of these terms, you may not access the service.
            Your continued use of our services constitutes acceptance of any updates or
            modifications to these terms.
          </p>
        </div>

        {/* Section 2 */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-[#13548A]" id="two">2. Description of Services</h2>
          <p className="text-gray-800 text-base mb-2">
            Nymna Technology provides software development, consulting, and technology solutions.
            Our services include but are not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-800 text-base space-y-1">
            <li>Custom software development and web applications</li>
            <li>Technology consulting and strategic planning</li>
            <li>Cloud infrastructure and deployment services</li>
            <li>Maintenance and support for existing systems</li>
            <li>Training and technical documentation</li>
          </ul>
        </div>
        {/* Section 3 */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-[#13548A]" id="two">3. User Accounts and Responsibilities</h2>
          <p className="text-gray-800 text-base mb-2">
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for maintaining the confidentiality of your account.
          </p>
        </div>
        {/* Section 4 */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-[#13548A]" id="two">4. Acceptable Use Policy</h2>
          <p className="text-gray-800 text-base mb-2">
            You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our services. Prohibited activities include:
          </p>
          <ul className="list-disc pl-6 text-gray-800 text-base space-y-1">
            <li>Violating any applicable laws or regulations</li>
            <li>Transmitting harmful or malicious code</li>
            <li>Attempting to gain unauthorized access to our systems</li>
            <li>Interfering with the proper working of our services</li>
            <li>Harassing or intimidating other users</li>
          </ul>
        </div>
        {/* Section 5 */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-[#13548A]" id="two">5. Intellectual Property Rights</h2>
          <p className="text-gray-800 text-base mb-2">
            The service and its original content, features, and functionality are and will remain the exclusive property of Nymna Technology and its licensors. The service is protected by copyright, trademark, and other laws.
          </p>
          <p className="text-gray-800 text-base mb-2">
            You may not modify, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information obtained from our services without our prior written consent.
          </p>
          
        </div>
        {/* Section 6 */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-[#13548A]" id="two">6. Privacy and Data Protection</h2>
          <p className="text-gray-800 text-base mb-2">
            Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our services. By using our services, you agree to the collection and use of information in accordance with our Privacy Policy.
          </p>
          <p className="text-gray-800 text-base mb-2">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </div>
        {/* Section 7 */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-[#13548A]" id="two">7. Payment Terms</h2>
          <p className="text-gray-800 text-base mb-2">
            Payment terms are specified in individual service agreements. Generally, payments are due within 30 days of invoice date unless otherwise agreed upon in writing.
          </p>
          <ul className="list-disc pl-6 text-gray-800 text-base space-y-1">
            <li>Late payments may incur additional fees</li>
            <li>Disputed charges must be reported within 30 days</li>
            <li>Refunds are handled on a case-by-case basis</li>
            <li>All prices are subject to applicable taxes</li>
          </ul>
        </div>
        {/* Section 8 */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-[#13548A]" id="two">8. Limitation of Liability</h2>
          <p className="text-gray-800 text-base mb-2">
            In no event shall Nymna Technology, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>          
        </div>
        {/* Section 9 */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-[#13548A]" id="two">9. Termination</h2>
          <p className="text-gray-800 text-base mb-2">
            We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.
          </p>
          <p className="text-gray-800 text-base mb-2">
            Upon termination, your right to use the service will cease immediately. If you wish to terminate your account, you may contact us at any time.
          </p>          
        </div>
        {/* Section 2 */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-[#13548A]" id="two">10. Contact Information</h2>
          <p className="text-gray-800 text-base mb-2">
            If you have any questions about these Terms and Conditions, please contact us:
          </p>
          <ul className="list-disc pl-6 text-gray-800 text-base space-y-1">
            <li>Email:legal@nymnatech.com</li>
            <li>Phone:+1 (555) 123-4567</li>
            <li>Address:123 Tech Street, Innovation District, San Francisco, CA 94105</li>
          </ul>
        </div>
      </div>    
    </MaxWidthWrapper>
  )
}

export default page