import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/index.css"
import "../styles/about.css"
import "../styles/global.css"
import "../styles/kayaking.css"
import { FaUsers, FaRegHandshake, FaMapMarkerAlt, FaStar } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <PartnersSection />
    <AboutScubaSection />
    <AboutLocationSection />
    <WhyUsSection />
    <TestimonialsSection />
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
        <h3 className="hero-content">Experience scuba diving in a day </h3>

        <Link to="/beginners" className="button-link">
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
        <h3 className="hero-content">
          Get your introductory scuba diving license now
        </h3>
        <Link to="/certified-divers" className="button-link">
          <button className="hero-button" type="button">
            Learn Scuba
          </button>
        </Link>
      </div>
    </div>
  </div>
)

const PartnersSection = () => (
  <div className="partners-section">
    <h1 className="contact no-margin">Our Partners</h1>
    <div className="underline-div">
      <div className="separator"></div>
    </div>
    <div className="logos-holder">
      <img
        className="ssi partner-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdEWvMWte7f6yjM8ZbgaV2BNSFb8rqUvvvkbPT00bwRplwjxL"
        alt="Gypsy Divers | Best Scuba Diving in Andaman | Havelock Scuba Diving Courses| Learn Scuba Diving"
      />
      <img
        className="scuba-pro partner-logo"
        src="https://www.scubapro.com/sites/all/themes/scubapro_theme/logo.png"
        alt="Gypsy Divers | Best Scuba Diving in Andaman | Havelock Scuba Diving Courses| Learn Scuba Diving"
      />
      <img
        className="luxfer partner-logo"
        src="https://www.luxfercylinders.com/img/luxfer/logo-shrink-sm.png"
        alt="Gypsy Divers | Best Scuba Diving in Andaman | Havelock Scuba Diving Courses| Learn Scuba Diving"
      />
    </div>
  </div>
)

const AboutScubaSection = () => (
  <div className="two-row">
    <div className="row-1">
      <img
        src="https://www.gypsydivers.co.in/images/gallery/andaman_and_nicobar_scuba_diving.JPG"
        alt="Gypsy Divers | Best Scuba Diving in Andaman | Havelock Scuba Diving Courses| Learn Scuba Diving"
        className="img-location-kayak"
      />
    </div>
    <div className="row-2">
      <p className="lead left">Why Scuba Dive? </p>
      <p className="content">
        Do you know that 70% of the planet is covered with water? Scuba Diving
        gives you that freedom to explore those unexplored underwater
        territories and the best part is you don’t have to physically exert
        yourself in the process. A lot of Scuba Divers agree with us that the
        very act of staying under the water tends to be meditative and relieves
        stress from our day to day life. Do sign up for our Open Water Diver
        program to know how this is going to change your life.
      </p>
    </div>
  </div>
)

const WhyUsSection = () => (
  <div className="two-row">
    <div className="row-1">
      <img
        src="https://www.gypsydivers.co.in/images/gallery/andaman_and_nicobar_scuba_diving.JPG"
        alt="Gypsy Divers | Best Scuba Diving in Andaman | Havelock Scuba Diving Courses| Learn Scuba Diving"
        className="img-location-kayak"
      />
    </div>
    <div className="row-2">
      <p className="lead left">Why choose Scubanaut?</p>
      <p className="content">
        <div>
          <FaUsers />
          Small groups (We like to train our students in small groups)
        </div>
        <div>
          <FaRegHandshake />
          Our Friendly Team
        </div>
        <div>
          <FaMapMarkerAlt />( We are a 5 minute walk away from the Jetty )
        </div>
        <div>
          <FaStar />
          Highly rated
        </div>
      </p>
    </div>
  </div>
)

const AboutLocationSection = () => (
  <div className="two-row even">
    <div className="row-1">
      <p className="lead left">Why Havelock?</p>
      <p className="content">
        Havelock Island is considered the birthplace of Scuba Diving in Andaman
        Islands. So the real question here is Why not Havelock?
      </p>
    </div>
    <div className="row-2">
      <img
        src="https://www.gypsydivers.co.in/images/gallery/andaman_and_nicobar_scuba_diving.JPG"
        alt="Gypsy Divers | Best Scuba Diving in Andaman | Havelock Scuba Diving Courses| Learn Scuba Diving"
        className="img-location-kayak"
      />
    </div>
  </div>
)

const TestimonialsSection = () => (
  <div className="testimonials-section">
    <img
      src="https://blueocean.azureedge.net/cache/c/b/d/4/1/f/cbd41f897abe97cdb746634d06a9c95e24803996.jpg"
      alt="Gypsy Divers | Best Scuba Diving in Andaman | Havelock Scuba Diving Courses| Learn Scuba Diving"
      className="place-holder-video"
    />
    <div className="testimonials-overlay-section">
      <h1 className="contact stay-contact no-margin">Our happy customers!</h1>

      <p className="content stay-content play-button">Play Video</p>
    </div>
  </div>
)

export default IndexPage
