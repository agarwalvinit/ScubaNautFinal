import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/contact.css"

import location from "../images/sports-locain.png"

const ContactUs = () => (
  <div>
    <img className="location-image" src={location} alt="" />
    <Layout>
      <SEO title="Contact Us" />

      <h1 className="contact no-margin">Get in Touch With us</h1>
      <div className="underline-div">
        <div className="separator"></div>
      </div>
      <p className="lead">
        Please Get In Touch With Us Today To Learn More About Diving In Swaraj
        Deep/Havelock
      </p>

      <div className="sections-holder">
        <div className="contact-form">
          <p className="lead left">Drop a Line</p>
          <input
            placeholder="Full Name"
            className="input-field"
            type="text"
            name="fname"
          />
          <input
            placeholder="Phone Number"
            className="input-field"
            type="number"
            name="fname"
          />
          <input
            placeholder="Email"
            className="input-field"
            type="email"
            name="fname"
          />
          <input
            placeholder="Query"
            className="input-field textArea"
            type="textarea"
            name="fname"
          />
          <button className="submit-button content" type="button">
            Contact Us
          </button>
        </div>
        <div className="address-holder">
          <p className="lead left">Address</p>
          <div className="content">
            02, Foreshore Road, Near Chatham Police Station, <br /> Haddo Post,
            South Andamans Haddo, <br />
            Port Blair - 744102 Andaman and Nicobar Islands (India)
          </div>
          <p className="content">
            <b>email:</b> info@ecodiver.in, dive@ecodiver.in
          </p>
          <p className="content">
            <b>Telephone :</b> +91-(0)3192-282212,282299,282282
          </p>
          <p className="content note">
            NOTE: Because of the network connectivity issue if a call doesn’t
            work, drop a message on WhatsApp
          </p>
        </div>
      </div>
      {/* <div className="Quote-Section">
        let do the math its easy and interesting.
      </div> */}
    </Layout>
  </div>
)

export default ContactUs
