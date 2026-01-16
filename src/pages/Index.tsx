import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import PriceList from "@/components/PriceList";
import Locations from "@/components/Locations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Gallery />
      <PriceList />
      <Locations />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
