import React from 'react'
import InnerBanner from '../../../Component/InnerBanner'
import AboutDigitalMarketing from './AboutDigitalMarketing'
import ContactDm from './ContactDm'
import CompanyDm from './CompanyDm'
import Tools from './Tools'
import BusinessNeedDm from './BusinessNeedDm'
import Seo from '../../../Seocomponent/Seo'

const DigitalMarketing = () => {
    return (
        <> 
        <Seo title="Digital Marketing Services | SEO, Social Media & Lead Generation - Ramot" description="Boost your business with expert digital marketing services including SEO, social media marketing, and lead generation strategies tailored for growth." keywords="digital marketing services, SEO company, social media marketing, lead generation, online marketing agency"/>
           <InnerBanner title="Digital Marketing"/>  
           <AboutDigitalMarketing/>
           <CompanyDm/>
           <Tools/>
           <BusinessNeedDm/>
           <ContactDm/>
        </>
    )
}

export default DigitalMarketing
