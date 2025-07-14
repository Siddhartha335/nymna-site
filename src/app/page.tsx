import ContactForm from "@/components/landing/contact";
import Footer from "@/components/landing/footer";
import {Header} from "@/components/landing/header";
import { HeroParallaxDemo } from "@/components/landing/projects";
// import Projects from "@/components/landing/projects";

export default function Home() {
  return (
   <> 
    <Header />
    {/* <Projects /> */}
    <HeroParallaxDemo />
    <ContactForm />
    <Footer />
   </>
  );
}
