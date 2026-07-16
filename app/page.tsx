import WelcomePopup from "@/components/WelcomePopup";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";

export default function WelcomePage() {
  return (
    <>
      <Navbar />

      <WelcomePopup />

      <Hero />

      <Footer />
    </>
  );
}