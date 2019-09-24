import React from "react"
import Layout from '../components/layout';
import Header from '../components/header';
import Portfolio from '../components/portfolio';
import About from '../components/about';



const IndexPage = () => {

    return(
        <>
        <Layout>
        <Header />
        <About />
        <Portfolio />
        </Layout>
        </>
    )
}

export default IndexPage