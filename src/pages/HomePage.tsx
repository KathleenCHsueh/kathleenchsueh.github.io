import { useEffect } from "react";
import HeroSection from "@components/homepage/HeroSection";
import PageContainer from "@components/PageContainer";
import PortfolioSection from "@components/homepage/PortfolioSection";
import IntroSection from "@components/homepage/IntroSection";
import ContactSection from "@components/homepage/ContactSection";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#contact") {
      setTimeout(() => {
        const el = document.getElementById("contact");
        el?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [location.hash]);

  return (
    <PageContainer>
      <HeroSection />
      <PortfolioSection />
      <IntroSection />
      <ContactSection id="contact" />
    </PageContainer>
  );
};

export default HomePage;
