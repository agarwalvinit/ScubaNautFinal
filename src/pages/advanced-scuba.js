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
          Advanced Scuba Diving
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
          Just finished your Open Water course and hungry for more? Maybe you’ve
          been a certified diver for years and want to gain experience in
          specialized dive activities? The Advanced Course strips back your
          diving takes away any bad habits and re-engages you with the
          underwater world.
        </p>
        <p className="content">
          This course immediately links from all Open Water Diver
          certifications. Once you have earned an Open Water Diver certification
          you can reap the benefits from a choice of specialized dive
          activities:
        </p>

        <p className="content">
          The options include Deep, Wreck, Night, Navigation, Computer, Search
          and Recovery, Naturalist, Photography and Perfect Buoyancy.
        </p>
        <p className="content">
          The beauty of the Advanced course is that there is no theory work!
          It’s all about the diving! Over the course of 2 days and 5 dives, our
          experienced instructors pass on valuable dive knowledge and in-water
          skills based on the 5 chosen dive specialties.
        </p>
        <p className="content">
          <b>Price - Rs 16000/-</b> <i>(* Extra GST @18% )</i>
        </p>
        <p className="content">
          <b>What is included:</b>
          <ul>
            <li> All learning materials</li>
            <li>Rental Dive equipment</li>
            <li>Certification</li>
            <li>Taxi pick-up from the pier on arrival </li>
          </ul>
        </p>
        <p className="content">
          <b>Prerequisites:</b>
          <ul>
            <li>Minimum of 12 years of age</li>
            <li>Open water certification from a recognized training agency.</li>
            <li>Certification</li>
            <li>Taxi pick-up from the pier on arrival </li>
          </ul>
        </p>

        <div className="note-section">
          <p className="lead left">NOTE:</p>
          <p className="content">
            it is recommended that you do not fly within 24 hours after diving!
          </p>
          <br />
          <br />
        </div>
      </div>
    </Layout>
  </div>
)

export default Stay
