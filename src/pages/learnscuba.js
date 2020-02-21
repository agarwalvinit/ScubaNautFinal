import React from "react"
import { Link } from "gatsby"

import ComingSoonLayout from "../components/comingSoonLayout"
import Sale from "../components/comingSoon/sale"
import Nav from "../components/comingSoon/nav"
import QuestionAnswer from "../components/comingSoon/questionAnswer"
import Footer from "../components/comingSoon/footer"
import ComingSoonSeo from "../components/comingSoonSeo"
import UsefulLinks from "../components/usefulLinks"
import MidTextInfo from "../components/midTextInfo"

import ImageWithInfo from "./imageWithInfo"

import learnScubaIcon from "../img/learnscuba.svg"
import GroupIcon from "../img/group.svg"
import teamIcon from "../img/team.svg"
import locationBlueIcon from "../img/location_blue.svg"
import ratingIcon from "../img/rating.svg"
import UnderwaterExplore from "../img/underwater_explore.jpg"
import AndrosDiving from "../img/andros_diving.jpg"
import AcquaticAnimal from "../img/aquatic_animal.jpg"

const LearnScubaPage = () => (
  <ComingSoonLayout>
    <ComingSoonSeo title="Coming Soon Homepage" />
    <LearnScuba />
  </ComingSoonLayout>
)

const LearnScuba = () => (
  <section className="learnscuba_container bg-white">
    <Sale />
    <Nav className="txt-black" />
    <ImageWithInfo
      image={AndrosDiving}
      label1="What better  way to  learn how to dive
      than in the crystal clear, warm waters of Havelock ?"
      label2="1 Day Experience"
    />
    <MidTextInfo
      label1="No previous dive experience is required and upon completion of the course students will be certified to dive to a depth of 18m"
      label2="The certification is valid for the rest of your life, meaning that you can dive with any dive shop"
    />
    <div className="before-and-after">
      <img src={learnScubaIcon} height="80" width="90" alt="learn scuba" />
    </div>
    <div className="divider--icon"></div>
    <section className="p-y-8">
      <QuestionAnswer
        headerText="WHY SCUBA DIVE?"
        content="Did you know that 70% of the planet is covered with water and over 21,000 species of fish live in it? Scuba Diving gives you that freedom to explore those unexpected underwater territories and the best part is you don’t have to physically exert yourself in the process. A lot of Scuba Divers agree with us that the very act of staying under the eater tend to be meditative and relieves stress from day to day life. Do sign up for our Open Water Diver program to know how this is going to change your life."
      />
    </section>
    <section className="p-y-3">
      <QuestionAnswer
        headerText="WHY HAVELOCK?"
        content="Havelock Island is considered the birthplace of Scuba Diving in Andaman Islands. So the real question here is Why not Havelock?"
      />
    </section>

    <section className="p-y-8">
      <QuestionAnswer headerText="WHY CHOOSE SCUBANAUT?" />
    </section>
    <UsefulLinks />
    <ImageWithInfo image={AcquaticAnimal} />
    <Footer />
  </section>
)

export default LearnScubaPage
