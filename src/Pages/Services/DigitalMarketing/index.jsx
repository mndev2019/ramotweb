import React from 'react'
import InnerBanner from '../../../Component/InnerBanner'
import AboutDigitalMarketing from './AboutDigitalMarketing'
import ContactDm from './ContactDm'
import CompanyDm from './CompanyDm'
import Tools from './Tools'
import BusinessNeedDm from './BusinessNeedDm'

const DigitalMarketing = () => {
    return (
        <>
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
