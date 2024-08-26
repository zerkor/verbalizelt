import Hero from "./_sections/hero";
import Features from "../../components/ui/features";  // Montez de deux niveaux pour accéder au dossier components/ui
import WorldMapSection from "./_sections/worldMapSection";
import Footer from "./_sections/footer";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Hero />
      <Features />
      <WorldMapSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
