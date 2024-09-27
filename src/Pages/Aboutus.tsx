import React from 'react';
import AboutDetail from '../components/about/aboutdetail';
import NewsletterSubscription from '../components/NewsletterSubscription';
import Fotterslider from '../components/Fotterslider';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Header from '../components/Header';

const Aboutus: React.FC = () => {
  return (
    <div>
    <div>
   <div className="App font-Montaga One">
     <Header />
     <div className="hidden md:block">
       <Navigation />
     </div>
   </div>
   <AboutDetail/>
   <NewsletterSubscription />
   <Fotterslider  />
   <Footer/>
 </div>
 </div>
  );
};

export default Aboutus;
