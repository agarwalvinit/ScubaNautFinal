import React from "react"
import { Link } from "gatsby"

import ComingSoonLayout from "../components/comingSoonLayout"
import Sale from "../components/comingSoon/sale"
import Nav from "../components/comingSoon/nav"
import QuestionAnswer from "../components/comingSoon/questionAnswer"
import Footer from "../components/comingSoon/footer"
import ComingSoonSeo from "../components/comingSoonSeo"

import tryScubaIcon from "../img/tryscuba.svg"
import learnScubaIcon from "../img/learnscuba.svg"
import GroupIcon from "../img/group.svg"
import teamIcon from "../img/team.svg"
import locationBlueIcon from "../img/location_blue.svg"
import ratingIcon from "../img/rating.svg"

import "../styles/comingSoon/homePage.scss"

const ComingSoonPage = () => (
  <ComingSoonLayout>
    <ComingSoonSeo title="Coming Soon Homepage" />
    <ComingSoon />
  </ComingSoonLayout>
)

const ComingSoon = () => (
  <section className="homepage__container">
    <Sale />
    <Nav className="txt-primary" />
    <div className="pure-g p-y-8">
      <div className="pure-u-1-2 flex-column-container txt-white align-center justify-center txt-white">
        <div className="scuba-dive__box">
          <img src={tryScubaIcon} height="80" width="90" alt="try scuba" />
        </div>
        <div className="m-t-2 f-18">Experience scuba diving</div>
        <div className="f-18">in a day</div>
        <button className="scuba__btn p-a-0-1 p-x-1 f-14">TRY SCUBA</button>
      </div>
      <div className="pure-u-1-2 flex-column-container txt-white align-center justify-center txt-white">
        <div className="scuba-dive__box">
          <img src={learnScubaIcon} height="80" width="90" alt="learn scuba" />
        </div>
        <div className="m-t-2 f-18">Get your introductory</div>
        <div className="f-18">scuba diving licence now</div>
        <button className="scuba__btn p-a-0-1 p-x-1 f-14">LEARN SCUBA</button>
      </div>
    </div>
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

    <div className="pure-g p-y-8">
      <div className="pure-u-1-3 flex-column-container align-center justify-center txt-blue-1">
        <div className="txt-center scuba-dive__box">
          <img src={GroupIcon} height="40" width="50" alt="try scuba" />
          <div className="f-16 m-t-1 txt-primary">Small Groups</div>
        </div>
        <div className="m-t-3 f-14">We like to train our</div>
        <div className="f-14">students in a small group.</div>
      </div>
      <div className="pure-u-1-3 flex-column-container align-center justify-center txt-blue-1">
        <div className="txt-center scuba-dive__box">
          <img src={teamIcon} height="40" width="50" alt="learn scuba" />
          <div className="f-16  m-t-1 txt-primary">Our FriendLy Team</div>
        </div>
        <div className="m-t-3 f-14">We go out of our way</div>
        <div className="f-14">to help our guests.</div>
      </div>
      <div className="pure-u-1-3 flex-column-container align-center justify-center txt-blue-1">
        <div className="txt-center scuba-dive__box">
          <img
            src={locationBlueIcon}
            height="40"
            width="30"
            alt="learn scuba"
          />
          <div className="f-16 m-t-1 txt-primary">Location</div>
        </div>
        <div className="m-t-3 f-14">We are a 5 minute walk</div>
        <div className="f-14">away from the jetty</div>
      </div>
    </div>

    <div className="p-y-8 rating__container flex-column-container justify-center">
      <div className="txt-center scuba-dive__box">
        <img
          src={ratingIcon}
          className=""
          height="40"
          width="50"
          alt="try scuba"
        />
        <div className="f-16 m-t-1 txt-primary">Highly Rated</div>
      </div>
    </div>
    <Footer />
  </section>
)

export default ComingSoonPage
