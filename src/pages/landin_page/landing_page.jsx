import React from 'react';
import SearchBarComponent from '../../componants/SearchBarwithBACK/SearchBarWithBackground';
import HowItWorks from '../../componants/HowItWorks/HowItWorks'; // Make sure to import the new component
import ContactUs from '../../componants/ContactUs/ContactUs';
import Footer from '../../componants/footer/footer';

function LandingPage() {
  return (
    <div>
      <SearchBarComponent />
      <HowItWorks />
      <ContactUs/>
      <Footer/>

    </div>
  );
}

export default LandingPage;
