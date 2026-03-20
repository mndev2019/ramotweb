import React from 'react'
import InnerBanner from '../../../Component/InnerBanner'
import Intro from './Intro'
import Plan from './Plan'
import Support from './Support'
import Seo from '../../../Seocomponent/Seo'

const GoogleService = () => {
    return (
        <>
         <Seo title="Trusted Google Workspace Partner | Business Email & Cloud Solutions - Ramot" description="As a Google Workspace partner, we provide secure business email, cloud collaboration, and migration services for modern businesses." keywords="Google Workspace partner, business email, cloud collaboration, Gmail business setup, workspace migration"/>
           <InnerBanner title="Google Services"/>
           <Intro/>
           <Plan/>
           <Support/>
        </>
    )
}

export default GoogleService
