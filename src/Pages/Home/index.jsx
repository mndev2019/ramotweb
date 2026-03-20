import React from 'react'
import Banner from './Banner'
import Service from './Service'
import About from './About'
import Googlepartner from './Googlepartner'
import Digitalinnovation from './Digitalinnovation'
import Team from './Team'
import Blog from './Blog'
import ProjectContact from './ProjectContact'
import Feedback from './Feedback'
import Seo from '../../Seocomponent/Seo'

const Home = () => {
    return (
        <>
            <Seo
                title="Ramot | Google Workspace Partner & IT Solutions Company"
                description="Grow your business with Google Workspace, web development, CRM, and digital solutions."
                url="https://ramot.cloud/"
            />
            <Banner />
            <Service />
            <About />
            <Googlepartner />
            <Digitalinnovation />
            <Feedback />
            <Team />
            <Blog />
            <ProjectContact />
        </>
    )
}

export default Home
