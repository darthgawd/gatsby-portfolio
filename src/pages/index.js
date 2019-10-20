import React from "react"
import Layout from '../components/layout';
import Header from '../components/header';
import Menu from '../components/menu';
import Top from '../components/top';
import Footer from '../components/footer';
import Portfolio from './portfolio';
import { Router } from "@reach/router";
import './index.scss'
// import Portfolio from "./portfolio";




const IndexPage = () => {

    return(
        <>
        <Layout>
        <Top />
        <Menu />
        <Header />
        <Footer />
        {/* <Router>
            <Portfolio path="/portfolio" />
        </Router> */}

        </Layout>

        </>
    )
}

export default IndexPage