import React from 'react';
import Footer from '../components/Footer';
import Fotterslider from '../components/Fotterslider';
import NewsletterSubscription from '../components/NewsletterSubscription';
import ExploreProducts from '../components/ExploreProjects';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import CartSelectAddress from '../components/productcomponents/CartSelectAddress';

const AddAddress: React.FC = () => {
  return (
    <div>
    <div>
    <div className="App font-Montaga One">
     <Header />
     <div className="hidden md:block">
       <Navigation/>
     </div>
   </div>
<CartSelectAddress/>
  <ExploreProducts/>
   <NewsletterSubscription />
   <Fotterslider  />
   <Footer/>
 </div>
 </div>
  );
};

export default AddAddress;
