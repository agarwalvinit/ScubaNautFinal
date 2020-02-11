import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/stay.css"
import "../styles/about.css"
import "../styles/global.css"
import "../styles/kayaking.css"
import "../styles/contact.css"

const Stay = () => (
  <div className="kayaking-section">
    <div className="stay-hero-section">
      <img
        alt=""
        className="kayaking-image"
        src="https://www.albeeadventures.com/images/Photos_1200/kayaking_golfo_dulce_playa_cativo_experience_luxury.jpg"
      />
      <div className="kayak-overlay-section">
        <h1 className="contact stay-contact no-margin">
          Open Water Diver Course
        </h1>
        <div className="underline-div">
          <div className="separator"></div>
        </div>
      </div>
    </div>
    <Layout>
      <SEO title="Stays" />
      <div className="privacy-content-holder">
        <p className="content">
          No previous dive experience is required and upon completion of the
          course students will be certified to dive to a depth of 18m (60ft)
          with a dive buddy of equal or higher certification. The certification
          is valid for the rest of your life, meaning that you can dive with any
          dive shop, anywhere in the world!
        </p>
        <p className="content">
          The 4-day OW course guides students through a 3-phase process
          including Dive theory, shallow water skill work and Open Water
          experience dives.
        </p>

        <p className="content">
          <b>Price - Rs 23000/-</b> <i>(* Extra GST @18% )</i>
        </p>
        <p className="content">
          <b>Course Includes:</b>
          <ul>
            <li>OW course e-manual</li>
            <li>Rental Dive equipment</li>
            <li>Dive computer rental</li>
            <li>Certification fee</li>
            <li>Dive Logbook</li>
            <li>taxi pick-up from the pier on arrival</li>
          </ul>
        </p>
        <p className="content">
          <b>Prerequisites:</b>
          <ul>
            <li>A minimum of 10 years old</li>
            <li>Ability to swim 200m un-aided & tread water for 10 minutes</li>
            <li>
              Good physical health (Those with known medical conditions may need
              written approval from a dive medic)
            </li>
          </ul>
        </p>

        <br />
        <br />
      </div>
    </Layout>
  </div>
)

export default Stay
