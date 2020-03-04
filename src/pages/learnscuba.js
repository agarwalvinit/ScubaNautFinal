import React from "react"

import ComingSoonLayout from "../components/comingSoonLayout"
import Sale from "../components/comingSoon/sale"
import Nav from "../components/comingSoon/nav"
import Footer from "../components/comingSoon/footer"
import ComingSoonSeo from "../components/comingSoonSeo"
import UsefulLinks from "../components/usefulLinks"
import MidTextInfo from "../components/midTextInfo"
import BorderedBox from "../components/borderedBox"
import BulletBox from "../components/bulletBox"

import ImageWithInfo from "./imageWithInfo"

import learnScubaIcon from "../img/learnscuba.svg"
import UnderwaterExplore from "../img/underwater_explore.jpg"
import AndrosDiving from "../img/andros_diving.jpg"
import AcquaticAnimal from "../img/aquatic_animal.jpg"

// Constants
import LEARN_SCUBA_DATA from "../Data/learnscuba"

import "../styles/comingSoon/learnscuba.scss"

const {
  imgInfo,
  courseIncludes,
  cost,
  tax,
  info,
  preRequisite,
} = LEARN_SCUBA_DATA

const LearnScubaPage = () => (
  <ComingSoonLayout>
    <ComingSoonSeo title="Coming Soon Homepage" />
    <LearnScuba />
  </ComingSoonLayout>
)

const LearnScuba = () => (
  <section className="learnscuba__container bg-white">
    <Sale />
    <Nav className="txt-black" />
    <ImageWithInfo
      image={AndrosDiving}
      label1={imgInfo.label1}
      label2={imgInfo.label2}
    />
    <MidTextInfo label1="What better way to learn how to dive than in the crystal clear, warm waters of Havelock?" />
    <div className="before-and-after learn-scuba--icon txt-center p-y-3">
      <img src={learnScubaIcon} height="60" width="80" alt="learn scuba" />
    </div>
    <div className="flex justify-center align-center p-x-3 p-y-8 mid__box--width">
      <img
        src={UnderwaterExplore}
        className="box-shadow m-r-10 w-320"
        height="150"
        alt="learn scuba"
      />
      <BorderedBox label1="Learn Scuba" label2="4 days" />
    </div>
    <div className="p-b-8">
      <div className="flex justify-center txt-black-4 p-x-3 f-14 mid__box--width">
        <div className="w-320 p-a-2 m-r-3">
          <div>{info.para1}</div>
          <div>{info.para2}</div>
        </div>
        <BulletBox className="p-a-2" bulletData={courseIncludes} />
      </div>
      <div className="mid__box--width p-l-120">
        <BulletBox className="p-t-3 f-14" bulletData={preRequisite} />
      </div>
    </div>
    <div className="price--indicator f-18 txt-center p-y-3">
      <div className="f-bold">{cost}</div>
      <div className="f-16 txt-black-4">({tax})</div>
    </div>
    <UsefulLinks />
    <ImageWithInfo image={AcquaticAnimal} />
    <Footer />
  </section>
)

export default LearnScubaPage
