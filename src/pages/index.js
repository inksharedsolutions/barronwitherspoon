import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Banner from "../components/banner"
import MidBook from "../components/front-book"
import Author from "../components/author"
import FeaturedLogos from "../components/mid-main"
// import ParallaxBottom from "../components/parallax-bottom"
// import Testimonial from "../components/testimonial"

//Primary: 2A7CA4
//Secondary: ec6168
//Accent: 0E0D0E or F4F3F1

const IndexPage = (props) => (
    <Layout>
        <Helmet title="Home | Barron Witherspoon Sr."/>
        <Nav pathExt={props.path} />
        <Banner />    
        <Author />    
        <MidBook />
        
        {/* <ParallaxBottom/>   */}
        {/* <Testimonial/>        */}

        <FeaturedLogos />
    </Layout>
)

export default IndexPage
