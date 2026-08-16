import React from 'react'
import FooterForm from './footerFormSection';
import FooterLinks from './footerLinksSection';
import MapSection from '../ui/googleMaps';
import ShortFinalCtaSection from "./ShortFinalCtaSection";


const Footer = () => {
  return (
    
      <footer>
        <ShortFinalCtaSection/>
        <FooterForm/>
        <MapSection/>
        <FooterLinks/>
      </footer>
    
  )
}

export default Footer
