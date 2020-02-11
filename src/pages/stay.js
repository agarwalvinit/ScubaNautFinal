import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/stay.css"
import "../styles/about.css"
import "../styles/global.css"

const Stay = () => (
  <div className="stay-page">
    <div className="stay-hero-section">
      <img
        src="https://images.thrillophilia.com/image/upload/s--6Q_k6BKI--/c_fill,f_auto,fl_strip_profile,h_446,q_auto,w_750/v1/images/photos/000/135/066/original/1542706867_SML_Taj_Exotica_September_2017-7406_R1.jpg.jpg?1542706867"
        alt="Gypsy Divers | Best Scuba Diving in Andaman | Havelock Scuba Diving Courses| Learn Scuba Diving"
        className="img-stay"
      />
      <img
        src="https://images.thrillophilia.com/image/upload/s--G-SGftCv--/c_fill,f_auto,fl_strip_profile,h_446,q_auto,w_750/v1/images/photos/000/135/074/original/1540273631_Silver_Sands_Beach_Resort.jpg.jpg?1540273631"
        alt="Gypsy Divers | Best Scuba Diving in Andaman | Havelock Scuba Diving Courses| Learn Scuba Diving"
        className="img-stay"
      />
      <img
        src="https://images.thrillophilia.com/image/upload/s--e_mRWyEO--/c_fill,f_auto,fl_strip_profile,h_446,q_auto,w_750/v1/images/photos/000/135/076/original/1540274077_Munjoh_Ocean_Resort.jpg.jpg?1540274077"
        alt="Gypsy Divers | Best Scuba Diving in Andaman | Havelock Scuba Diving Courses| Learn Scuba Diving"
        className="img-stay"
      />
      <img
        src="https://images.thrillophilia.com/image/upload/s--T9vXDHBV--/c_fill,f_auto,fl_strip_profile,h_446,q_auto,w_750/v1/images/photos/000/135/072/original/1540277479_tsg.jpg.jpg?1540277479"
        alt="Gypsy Divers | Best Scuba Diving in Andaman | Havelock Scuba Diving Courses| Learn Scuba Diving"
        className="img-stay"
      />
      <div className="overlay-section">
        <h1 className="contact stay-contact">Enjoy Your Stay With Us</h1>
        <div className="underline-div">
          <div className="separator"></div>
        </div>
        <p className="lead stay-lead">
          We offer affordable places in havelock.
        </p>
        <p className="content stay-content">
          India Scuba Explorers was started by Johann and Samantha, a scuba
          centric couple.
        </p>
        <p className="content stay-content">
          Jo will dive in to any puddle and Sam has found dive sites solely on
          intuition. (Jo is convinced it’s witchcraft).
        </p>
        <button className="submit-button content" type="button">
          Contact Us
        </button>
      </div>
    </div>

    <Layout className="stay-main">
      <SEO title="Stays" />
    </Layout>
  </div>
)

export default Stay
