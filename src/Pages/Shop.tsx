import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Fotterslider from "../components/Fotterslider";
import Footer from "../components/Footer";
import ProductsList from "../components/productcomponents/productslist";

const Shop = () => {
  return (
    <div>
      <div className="App font-Montaga One">
        <Header />
        <div className="hidden md:block">
          <Navigation />
        </div>
      </div>
     {/* here the shop catagory code will be here  */}  
      <ProductsList />
      <Fotterslider />
      <Footer />
    </div>
  );
};

export default Shop;
