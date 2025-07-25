import Footer from "@/components/landing/footer"; 
import Navbar from "@/components/landing/navbar";
import LinearBackground from "@/components/LinearBackground";
export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LinearBackground>
      <Navbar />
      {children}
      <Footer />
    </LinearBackground>
  );
}
