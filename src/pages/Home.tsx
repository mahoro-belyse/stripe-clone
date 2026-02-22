import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import LogoCloud from "../components/sections/LogoCloud";
import FlexibleSolutionsIntro from "@/components/sections/FlexibleSolutionIntro";
import Solutions from "@/components/sections/Solutions";
import SessionsBanner from "@/components/sections/SessionsBanner";
import PaymentsShowcase from "../components/sections/PaymentShowcase";
import BillingShowcase from "../components/sections/BillingShowcase";
import AgenticCommerce from "@/components/sections/AgenticCommerce";
import ConnectShowcase from "../components/sections/ConnectShowcase";
import Stats from "../components/sections/Stats";
import CustomerStories from "../components/sections/CustomerStories";
import DeveloperSection from "../components/sections/DeveloperSection";
import Testimonials from "../components/sections/Testimonial";
import CTA from "../components/sections/CTA";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <FlexibleSolutionsIntro />
        <Solutions />
        <SessionsBanner />
        <PaymentsShowcase />
        <BillingShowcase />
        <AgenticCommerce />
        <ConnectShowcase />
        <Stats />
        <CustomerStories />
        <DeveloperSection />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
