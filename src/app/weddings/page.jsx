import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WeddingHero from "./Hero";
import WeddingAbout from "./WeddingProcess";
import WeddingPortfolio from "./WeddingPortfolio";
import WeddingCTA from "./WeddingCTA";

const WeddingPage = () => {
  return (
    <div className="text-black min-h-screen selection:bg-lime-500/30">
      <Navbar />

      {/* --- HERO SECTION: CONTINUOUS AUTO-SLIDER --- */}
      <WeddingHero />

      {/* About & PRocess */}
      <WeddingAbout />

      {/* --- CREATIVE GRID SECTION --- */}
      <WeddingPortfolio />

      {/* --- CTA SECTION --- */}
      {/* <WeddingCTA /> */}

      <Footer />
    </div>
  );
};

export default WeddingPage;
