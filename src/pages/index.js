import React from "react"
import Layout from '../components/layout';
import Header from '../components/header';
import Home from '../components/home';
import Top from '../components/top';
import './index.scss'



const IndexPage = () => {

    return(
        <>
        <Layout>
        <Top />
        <Header />
        
        <Home />
        </Layout>
        </>
    )
}

export default IndexPage