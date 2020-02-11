import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/index.css"
import "../styles/about.css"
import "../styles/global.css"
import "../styles/kayaking.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
  </Layout>
)

const HeroSection = () => (
  <div className="hero-section">
    <div className="left half-hero-section">
      <img
        className="hero-image"
        src="https://www.gypsydivers.co.in/images/gallery/andaman_and_nicobar_scuba_diving.JPG"
        alt="Gypsy Divers | Best Scuba Diving in Andaman | Havelock Scuba Diving Courses| Learn Scuba Diving"
      />
      <div className="hero-content-holder">
        <h3 className="hero-content">Learn Scuba With Professional Guidence</h3>
        <Link to="/try-scuba" className="button-link">
          <button className="hero-button" type="button">
            Try Scuba
          </button>
        </Link>
      </div>
    </div>

    <div className="right half-hero-section">
      <img
        className="hero-image"
        src="https://www.gypsydivers.co.in/images/gallery/andaman_and_nicobar_scuba_diving.JPG"
        alt="Gypsy Divers | Best Scuba Diving in Andaman | Havelock Scuba Diving Courses| Learn Scuba Diving"
      />
      <div className="hero-content-holder">
        <h3 className="hero-content">Become A Scuba Professional</h3>
        <Link to="/learn-scuba" className="button-link">
          <button className="hero-button" type="button">
            Learn Scuba
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default IndexPage
