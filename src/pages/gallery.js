import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/gallery.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Page four" />
    <h1 className="contact">GALLERY</h1>
    <div className="underline-div">
      <div className="separator"></div>
    </div>
    <div className="gallery-holder">
      <div className="img-holder">
        <img
          src="https://www.gypsydivers.co.in/images/gallery/andaman_and_nicobar_scuba_diving.JPG"
          alt="Gypsy Divers | Best Scuba Diving in Andaman | Havelock Scuba Diving Courses| Learn Scuba Diving"
          className="img-responsive"
        />
      </div>
      <div className="img-holder">
        <img
          src="https://www.gypsydivers.co.in/images/gallery/andaman_and_nicobar_scuba_diving.JPG"
          alt="Gypsy Divers | Best Scuba Diving in Andaman | Havelock Scuba Diving Courses| Learn Scuba Diving"
          className="img-responsive"
        />
      </div>
      <div className="img-holder">
        <img
          src="https://www.gypsydivers.co.in/images/gallery/andaman_and_nicobar_scuba_diving.JPG"
          alt="Gypsy Divers | Best Scuba Diving in Andaman | Havelock Scuba Diving Courses| Learn Scuba Diving"
          className="img-responsive"
        />
      </div>
      <div className="img-holder">
        <img
          src="https://www.gypsydivers.co.in/images/gallery/andaman_and_nicobar_scuba_diving.JPG"
          alt="Gypsy Divers | Best Scuba Diving in Andaman | Havelock Scuba Diving Courses| Learn Scuba Diving"
          className="img-responsive"
        />
      </div>
      <div className="img-holder">
        <img
          src="https://www.gypsydivers.co.in/images/gallery/andaman_and_nicobar_scuba_diving.JPG"
          alt="Gypsy Divers | Best Scuba Diving in Andaman | Havelock Scuba Diving Courses| Learn Scuba Diving"
          className="img-responsive"
        />
      </div>
    </div>
  </Layout>
)

export default SecondPage
