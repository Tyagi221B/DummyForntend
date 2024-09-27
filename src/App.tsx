import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Import your page components
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import Homepage from './Pages/Homepage';
import ProductPage from './Pages/ProductPage';
import Shop from './Pages/Shop';
import ShoppingCart from './Pages/ShoppingCart'; 
import AddAddress from './Pages/AddAddress';
import Account from './components/myaccount/Account';
import Address from './components/myaccount/Address';
import OrderSection from './components/myaccount/OrderSection';
import TrackOrder from './components/myaccount/TrackOrder';
import Wishlist from './components/myaccount/Wishlist';

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get the current route path

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]); // Whenever the route path changes, trigger the scroll

  return null; // This component doesn't render anything visually
};

const App: React.FC = () => {
  return (
    <Router>
      {/* Ensure ScrollToTop works on every route change */}
      <ScrollToTop /> 

      {/* Define all routes for the app */}
      <div>
        <Switch>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/cart/address" element={<AddAddress />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/address" element={<Address />} />
          <Route path="/account/orderhistory" element={<OrderSection />} />
          <Route path="/account/trackorder" element={<TrackOrder />} />
          <Route path="/account/wishlist" element={<Wishlist />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
