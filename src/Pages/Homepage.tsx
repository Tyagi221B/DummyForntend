import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import CategoryIcons from "../components/CategoryIcons";
import OfferSection from "../components/OfferSection";
import images from "../assets/images";
import ShopByCategory from "../components/ShopByCategory";
import ExploreProducts from "../components/ExploreProjects";
import Banner from "../components/banner";
import IconSection from "../components/IconSection";
import JewelleryCollections from "../components/JewelleryCollections";
import ClientTestimonials from "../components/ClientTestimonials";
import JewelrySection from "../components/ClassicJewelryCollection";
import NewsletterSubscription from "../components/NewsletterSubscription";
import Footer from "../components/Footer";
import Fotterslider from "../components/Fotterslider";
import LatestLookbook from "../components/LatestLookbook";

const Homepage: React.FC = () => {
  return (
    <div className="App font-Montaga One">
      <Header />
      <div className="hidden md:block">
        <Navigation />
      </div>
      <HeroSection />
      <CategoryIcons />
      <OfferSection
        category="Interesting offer"
        title="Adorn Yourself with the Finest Diamond Jewelry"
        description="Indulge in timeless beauty with our jewelry collection"
        buttonText="Shop Now"
        image1={images.Ring1}
        image2={images.Ring2}
      />
      <OfferSection
        category="You should know"
        title="Elements of Luxury Jewelry Demo"
        description="Explore our exquisite collection of luxury jewelry pieces"
        buttonText="Discover More"
        image1={images.Ring3}
        image2={images.Ring4}
        reversed
      />
      <ShopByCategory />
      <ExploreProducts />
      <Banner />
      <IconSection />
      <JewelleryCollections />
      <LatestLookbook />
      <ClientTestimonials />
      <JewelrySection />
      <NewsletterSubscription />
      <Fotterslider />
      <Footer />
    </div>
  );
};

export default Homepage;
