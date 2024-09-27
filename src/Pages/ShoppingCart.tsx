import React from 'react';
import Header from '../components/Header';
import ExploreProducts from '../components/ExploreProjects';
import NewsletterSubscription from '../components/NewsletterSubscription';
import Fotterslider from '../components/Fotterslider';
import Footer from '../components/Footer';
import Cart from '../components/productcomponents/Cart';
import Navigation from '../components/Navigation';

const ShoppingCart: React.FC = () => {
  return (
    <div>
    <div>
    <div className="App font-Montaga One">
     <Header />
     <div className="hidden md:block">
       <Navigation/>
     </div>
   </div>
   <Cart/>
  <ExploreProducts/>
   <NewsletterSubscription />
   <Fotterslider  />
   <Footer/>
 </div>
 </div>
  );
};

export default ShoppingCart;
