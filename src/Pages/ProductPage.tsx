import React from 'react'
import Footer from '../components/Footer'
import Fotterslider from '../components/Fotterslider'
import NewsletterSubscription from '../components/NewsletterSubscription'
import Header from '../components/Header'
import ExploreProducts from '../components/ExploreProjects'
import Navigation from '../components/Navigation'
import ProductDetailPage from '../components/productcomponents/ProductDetailPage'
import CustomerReview from '../components/productcomponents/CustomerReview'

const ProductPage: React.FC = () => {
  return (
    <div>
    <div>
    <div className="App font-Montaga One">
     <Header />
     <div className="hidden md:block">
       <Navigation/>
     </div>
   </div>
<ProductDetailPage/>
   <CustomerReview/>
  <ExploreProducts/>
   <NewsletterSubscription />
   <Fotterslider  />
   <Footer/>
 </div>
 </div>
  )
}

export default ProductPage
