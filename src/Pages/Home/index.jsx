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

const Home = () => {
    return (
        <>
            <Banner />
            <Service/>
            <About/>
            <Googlepartner/>
            <Digitalinnovation/>
           <Feedback/>
            <Team/>
            <Blog/>
            <ProjectContact/>
        </>
    )
}

export default Home
