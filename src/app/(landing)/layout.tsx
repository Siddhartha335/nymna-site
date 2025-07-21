import Footer from "@/components/landing/footer"; 
import Navbar from "@/components/landing/navbar";
export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
