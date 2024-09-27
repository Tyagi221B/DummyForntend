// import React from 'react';
// import Sidebar from '../components/myaccount/Sidebar';
// import Account from '../components/myaccount/account';
// import Address from '../components/myaccount/address';
// import OrderSection from '../components/myaccount/OrderSection';
// import TrackOrder from '../components/myaccount/TrackOrder';
// import Wishlist from '../components/myaccount/Wishlist';
// import { Route, Routes } from 'react-router-dom';

// const MyProfile: React.FC = () => {
//   return (
//     <div className="container mx-auto px-4">
//       {/* For larger screens (md and above) */}
//       <div className="hidden md:flex flex-row gap-4">
//         <Sidebar />
//         <div className="flex-1 p-5">
//           <Routes>
//             <Route path="/" element={<Account />} />
//             <Route path="/address" element={<Address />} />
//             <Route path="/orderhistory" element={<OrderSection />} />
//             <Route path="/trackorder" element={<TrackOrder />} />
//             <Route path="/wishlist" element={<Wishlist />} />
//           </Routes>
//         </div>
//       </div>

//       {/* For smaller screens (xs to sm) */}
//       <div className="flex md:hidden flex-col items-center gap-4">
//         <div className="w-full flex justify-center">
//           <Sidebar />
//         </div>

//         <div className="flex-1 w-full p-5">
//           <Routes>
//             <Route path="/" element={<Account />} />
//             <Route path="/address" element={<Address />} />
//             <Route path="/orderhistory" element={<OrderSection />} />
//             <Route path="/trackorder" element={<TrackOrder />} />
//             <Route path="/wishlist" element={<Wishlist />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;


// import React from 'react'
// import Header from '../components/Header'
// import Navigation from '../components/Navigation'
// import NewsletterSubscription from '../components/NewsletterSubscription'
// import Fotterslider from '../components/Fotterslider'
// import Footer from '../components/Footer'
// import LatestLookbook from '../components/LatestLookbook'
// import Account from '../components/myaccount/account'


// const MyProfile: React.FC = () => {
//   return (
//     <div>
//     <div>
  //  <div className="App font-Montaga One">
  //    <Header />
  //    <div className="hidden md:block">
  //      <Navigation />
  //    </div>
  //  </div>
//   {/* hi how are you  */}
//   <Route path="/account" element={<Account />} />
//             <Route path="/account/address" element={<Address />} />
//             <Route path="/account/orderhistory" element={<OrderSection />} />
//             <Route path="/account/trackorder" element={<TrackOrder />} />
//             <Route path="/account/wishlist" element={<Wishlist />} /> 
//   <LatestLookbook/>
//    <NewsletterSubscription />
//    <Fotterslider  />
//    <Footer/>
//  </div>
//  </div>
//   )
// }

// export default MyProfile
