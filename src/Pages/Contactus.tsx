import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Fotterslider from '../components/Fotterslider'
import NewsletterSubscription from '../components/NewsletterSubscription'
import ContactDetail from '../components/contact/contactdetail'


const Contactus = () => {
  return (
    <div>
       <div>
      <div className="App font-Montaga One">
        <Header />
        <div className="hidden md:block">
          <Navigation />
        </div>
      </div>
       <ContactDetail/>
      <NewsletterSubscription />
      <Fotterslider  />
      <Footer/>
    </div>
    </div>
  )
}

export default Contactus
