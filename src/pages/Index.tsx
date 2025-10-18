import Hero from "@/components/Hero";
import About from "@/components/About";
import ForWhom from "@/components/ForWhom.tsx";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Methods from "@/components/Methods.tsx";
import Credentials from "@/components/Credentials.tsx";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Credentials/>
      <ForWhom />
      <Methods/>
      {/*<Benefits />*/}
      {/*<Testimonials />*/}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
