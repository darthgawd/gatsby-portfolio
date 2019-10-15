import React from "react"
import Layout from '../components/layout';
import Header from '../components/header';
import Home from '../components/home';
import Top from '../components/top';



const IndexPage = () => {

    return(
        <>
        <Layout>
        <Header />
        <Top />
        <Home />
        </Layout>
        </>
    )
}

export default IndexPage