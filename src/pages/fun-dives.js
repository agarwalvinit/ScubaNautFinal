import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/stay.css"
import "../styles/about.css"
import "../styles/global.css"

const Stay = () => (
  <Layout>
    <SEO title="Stays" />
    <h1 className="contact">Fun Dive</h1>
    <div className="underline-div">
      <div className="separator"></div>
    </div>
    <div className="empty-section">
      <p className="lead">Coming Soon.</p>
    </div>
  </Layout>
)

export default Stay
