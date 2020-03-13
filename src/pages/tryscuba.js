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

import tryScubaIcon from "../img/tryscuba.svg"
import UnderwaterExplore from "../img/underwater_explore.jpg"
import AndrosDiving from "../img/andros_diving.jpg"
import AcquaticAnimal from "../img/aquatic_animal.jpg"

// Constants
import LEARN_SCUBA_DATA from "../Data/tryscuba"

import "../styles/comingSoon/learnscuba.scss"

const {
  imgInfo,
  midTextInfo,
  courseIncludes,
  tryCost,
  cost,
  tax,
  info,
  infoSecond,
  preRequisite,
} = LEARN_SCUBA_DATA

const TryScubaPage = () => (
  <ComingSoonLayout>
    <ComingSoonSeo title="Coming Soon Homepage" />
    <TryScuba />
  </ComingSoonLayout>
)

const TryScuba = () => (
  <section className="learnscuba__container bg-white">
    <Sale />
    <Nav className="txt-black" />
    <ImageWithInfo
      image={AndrosDiving}
      label1={imgInfo.label1}
      label2={imgInfo.label2}
    />
    <MidTextInfo label1={midTextInfo.label1} label2={midTextInfo.label2} />
    <div className="before-and-after learn-scuba--icon txt-center p-y-3">
      <img src={tryScubaIcon} height="60" width="80" alt="learn scuba" />
    </div>
    <div className="flex justify-center align-center p-x-3 mid__box--width">
      <img
        src={UnderwaterExplore}
        className="box-shadow m-r-10 w-320"
        height="150"
        alt="learn scuba"
      />
      <BorderedBox label1="Try Dive" label2="1 hr" />
    </div>
    <MidTextInfo
      className="midInfo__overide"
      label1="We aren’t going to lie. This is the most famous program with the tourists visiting the island. This is our most basic, entry-level package, designed for those who are usually scared of water, but still want to experience diving."
    />
    <div className="p-b-8">
      <div className="flex justify-center txt-black-4 p-x-3 f-14 mid__box--width">
        <div className="w-320 p-a-2 m-r-3">
          <div>{info.para1}</div>
        </div>
        <div className="w-320 p-a-2">
          <div>{info.para2}</div>
          <div className="f-bold txt-black-6 m-t-1">{info.note}</div>
          <BulletBox className="m-t-3" bulletData={courseIncludes} />
        </div>
      </div>
      <div className="price--indicator f-18 txt-center">
        <div className="f-bold flex align-center">
          <div className="m-r-7">
            <div className="f-14">1 DIVE</div>
            <div>Rs. 3500/-</div>
          </div>
          <div className="m-r-5">
            <div className="f-14">2 DIVE</div>
            <div>Rs. 5500/-</div>
          </div>
        </div>
        <div className="f-16 txt-black-4">({tax})</div>
      </div>
    </div>
    <ImageWithInfo image={AcquaticAnimal} />
    <div className="flex justify-center align-center p-x-3 p-y-3 mid__box--width">
      <img
        src={UnderwaterExplore}
        className="box-shadow m-r-10 w-320"
        height="150"
        alt="learn scuba"
      />
      <BorderedBox label1="Discover Scuba Diving" label2="2.5 to 3 hrs" />
    </div>
    <div>
      <div className="flex justify-center txt-black-4 p-x-3 f-14 mid__box--width">
        <div className="w-320 p-a-2 m-r-3">
          <div>{infoSecond}</div>
        </div>
        <div className="w-320 p-a-2">
          <BulletBox bulletData={courseIncludes} />
          <BulletBox className="m-t-3" bulletData={preRequisite} />
        </div>
      </div>
    </div>
    {/* <div className="mid__box--width p-l-120">
      <BulletBox className="p-t-3 f-14" bulletData={preRequisite} />
    </div> */}
    <div className="price--indicator f-18 txt-center p-y-3">
      <div className="f-bold">{cost}</div>
      <div className="f-16 txt-black-4">({tax})</div>
    </div>
    <UsefulLinks />
    <Footer />
  </section>
)

export default TryScubaPage
