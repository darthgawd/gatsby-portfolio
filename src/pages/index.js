import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Menu from "../components/menu"
import Top from "../components/top"
import Footer from "../components/footer"
import Portfolio from "./portfolio"
import { Router } from "@reach/router"
import "./index.scss"
import "./react-transitions.css"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Top />
        <Router>
          <Menu path="/" />

        </Router>
        <Router>
          <Header path="/" />
          
          <Portfolio path="/" className="transition-container" />
        </Router>

        <Footer />
      </Layout>
    </>
  )
}

export default IndexPage
