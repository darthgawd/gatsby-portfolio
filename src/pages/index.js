import React from "react"
import { Link } from "gatsby";
import Layout from '../components/layout';
import Header from '../components/header';
import Portfolio from '../components/portfolio';


const IndexPage = () => {

    return(
        <>
     
        <Layout>
        <Header />
        <Portfolio />
        </Layout>
        </>
    )
}

export default IndexPage