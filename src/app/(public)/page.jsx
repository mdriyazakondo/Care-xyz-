import FAQ from "@/components/Home/FAQ";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/HeroSection";
import HowItWorks from "@/components/Home/HowItWorks";
import SafetySection from "@/components/Home/SafetySection";
import ServicesSection from "@/components/Home/ServicesSection";
import Testimonials from "@/components/Home/Testimonials";

const page = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <Features />
      <Testimonials />
      <HowItWorks />
      <SafetySection />
      <FAQ />
    </div>
  );
};

export default page;
