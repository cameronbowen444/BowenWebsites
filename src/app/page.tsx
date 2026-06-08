import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3edf9] text-black">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}