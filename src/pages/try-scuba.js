import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/stay.css"
import "../styles/about.css"
import "../styles/global.css"
import "../styles/index.css"

const TryScuba = () => (
  <div className="kayaking-section">
    <div className="stay-hero-section">
      <img
        alt=""
        className="kayaking-image"
        src="https://www.albeeadventures.com/images/Photos_1200/kayaking_golfo_dulce_playa_cativo_experience_luxury.jpg"
      />
      <div className="kayak-overlay-section">
        <h1 className="contact stay-contact no-margin">
          Try Scuba -Scuba diving for beginners 1 day Experiences
        </h1>
        <div className="underline-div">
          <div className="separator"></div>
        </div>
      </div>
    </div>
    <Layout>
      <SEO title="Stays" />
      <p className="content">
        Are you interested in trying scuba diving but do not have the time or
        desire to take a certification course? Or maybe you are not sure if this
        whole diving this is for you? Consider the Discover Scuba /Try Scuba
        programs
      </p>
      <p className="lead left">Try Dive (1.5 hours)</p>

      <p className="content">
        We aren’t going to lie. This is the most famous program with the
        tourists visiting the island. This is for people who are very scared of
        water. This program takes 1.5 - 2 hours including the shallow water
        training that covers the basic hand signals, learning how to use the
        equipment to breathe etc. This is followed by a 20-30 minute underwater
        assisted dive. Our dive masters/ instructors are going to hold on to the
        equipment and show you the reef and while we are at it, we take some
        pictures and videos. So, if you like to be assisted 100% during the
        dive, see how it feels like underwater and look at some fish then this
        is the program for you.
      </p>

      <p className="content">
        1 Dive <b>Price - Rs 3500/-</b> 2 Dives <b>Price - Rs 5500/-</b>{" "}
        <i>(* Includes GST @18% )</i>
      </p>
      <p className="content">
        <b>This Includes:</b>
        <ul>
          <li>Hotel Transfers </li>
          <li>Dive equipment</li>
          <li>Complementary photos and video footage</li>
        </ul>
      </p>

      <p className="lead left">Discover Scuba Diving ( 3-5 hours) </p>

      <p className="content">
        This program is considered as the introductory program to scuba diving
        according to all the dive agencies across the world. This takes 3-5
        hours of your time and at the end of this program, you will get a
        recognition card (Yeyy!). This is for people who want to understand the
        underwater dynamics on your body and get a realistic picture of what
        scuba diving is and want to know if its their cup of tea. If you wanted
        to do a beginner certification course ( Like our SSI Open water diver
        course) but not able to because of time constraints, then this is the
        program for you. As part of this program you will be given access to the
        SSI digital material that you can read sitting at home followed by a
        small brief about the equipment after you arrive in havelock and an in
        water(shallow water) training session. After this, our instructor is
        going to take you for a dive which doesn’t need to be 100% assisted but
        your instructor is always going to be around in case you face some
        difficulties. The best part is if you would like to continue learning to
        scuba dive then this dive will count towards your SSI Open water Diver
        course.
      </p>

      <p className="content">
        <b>Price - Rs 5500/-</b> <i>(* Includes GST @18% )</i>
      </p>
      <p className="content">
        <b>This Includes:</b>
        <ul>
          <li>Hotel Transfers </li>
          <li>Dive equipment</li>
          <li>Complementary photos and video footage</li>
        </ul>
      </p>
      <p className="content">
        <b>Prerequisites:</b>
        <ul>
          <li>A minimum of 10 years old</li>
          <li>
            Good physical health (Those with known medical conditions may need
            written approval from a medical practitioner){" "}
          </li>
        </ul>
      </p>

      <p className="lead">Comparison</p>
      <div className="two-row try-scuba-two-row">
        <div className="row-1">
          <p className="content"> ---</p>
          <p className="content">Dive time</p>
          <p className="content">Training time</p>
          <p className="content">Digital material</p>
          <p className="content">Digital recognition card by SSI</p>
          <p className="content">Assistance</p>
        </div>
        <div className="row-1">
          <p className="content">Try dive</p>
          <p className="content">20-30 mins</p>
          <p className="content">15-20 mins</p>
          <p className="content">No</p>
          <p className="content">No</p>
          <p className="content">
            Divemaster holds on to the customer 100 % of the time
          </p>
        </div>
        <div className="row-1">
          <p className="content">Discover Scuba Diving</p>
          <p className="content">40-45 minutes</p>
          <p className="content">30 -60 mins</p>
          <p className="content">Yes</p>
          <p className="content">Yes</p>
          <p className="content">
            Customer is overseen by the Instructor 100% of the time
          </p>
        </div>
      </div>
      <div className="note-section">
        <p className="lead left">NOTE:</p>
        <p className="content">
          1) Swimming is not a prerequisite for this program. All you need to do
          is be in good health, with no pre-existing medical conditions, and
          have basic-to-moderate fitness.
        </p>
        <p className="content">
          2) Please note that our Try Scuba programs are conducted with a
          customer to Divemaster ratio of 1:1 and for the time as mentioned
          depending on the program. Our programs are not to be confused with the
          Try Scuba program offered by tour operators, which consists of 10
          minutes of being dragged from point A to point B, having a few photos
          taken, and then dragged back. We focus on giving you a pre-dive
          briefing session, teaching you the basic skills of diving, taking you
          for a long, relaxed dive and also explaining the underwater dynamics
          to you, so you get a far richer and more immersive program.
        </p>
        <p className="content">
          3) It is recommended that you do not fly within 18-24 hours after
          diving!
        </p>
        <br />
        <br />
      </div>
    </Layout>
  </div>
)

export default TryScuba
