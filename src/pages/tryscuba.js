import React from "react"
import { Link } from "gatsby"

import ComingSoonLayout from "../components/comingSoonLayout"
import Sale from "../components/comingSoon/sale"
import Nav from "../components/comingSoon/nav"
import QuestionAnswer from "../components/comingSoon/questionAnswer"
import Footer from "../components/comingSoon/footer"
import ComingSoonSeo from "../components/comingSoonSeo"
import UsefulLinks from "../components/usefulLinks"

import ImageWithInfo from "./imageWithInfo"

import tryScubaIcon from "../img/tryscuba.svg"
import learnScubaIcon from "../img/learnscuba.svg"
import GroupIcon from "../img/group.svg"
import teamIcon from "../img/team.svg"
import locationBlueIcon from "../img/location_blue.svg"
import ratingIcon from "../img/rating.svg"
import UnderwaterExplore from "../img/underwater_explore.jpg"
import AndrosDiving from "../img/andros_diving.jpg"
import AcquaticAnimal from "../img/aquatic_animal.jpg"

const TryScuba = () => (
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
      label1="Did you know that 70% of the planet is covered with water"
      label2="1 Day Experience"
    />
    <section className="p-y-8">
      <QuestionAnswer
        headerText="WHY SCUBA DIVE?"
        content="Did you know that 70% of the planet is covered with water and over 21,000 species of fish live in it? Scuba Diving gives you that freedom to explore those unexpected underwater territories and the best part is you don’t have to physically exert yourself in the process. A lot of Scuba Divers agree with us that the very act of staying under the eater tend to be meditative and relieves stress from day to day life. Do sign up for our Open Water Diver program to know how this is going to change your life."
      />
    </section>
    <ImageWithInfo image={AcquaticAnimal} />
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
    <Footer />
  </section>
)

export default TryScuba
