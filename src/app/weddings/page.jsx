import Navbar from "@/components/Navbar";
import WeddingHero from "./Hero";
import WeddingAbout from "./WeddingProcess";
import WeddingPortfolio from "./WeddingPortfolio";
import WeddingFooter from "./WeddingFooter";
import WeddingServices from "./WeddingServices";

export const metadata = {
  title: "Weddings by Sequent Media House | Premium Wedding Planning & Cinematic Films",
  description: "Make your big day unforgettable. Sequent Media House offers end-to-end luxury wedding planning, bespoke stage decoration, cinematic wedding films, and complete event management.",
};

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

      {/* --- WEDDING RELATED SERVICES */}
      <WeddingServices />

      {/* FOOTER */}
      <WeddingFooter />
    </div>
  );
};

export default WeddingPage;
