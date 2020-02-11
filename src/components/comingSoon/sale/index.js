import React from "react"

import WhatsApp from "../../../img/whatsapp.svg"
import Insta from "../../../img/insta.svg"
import FB from "../../../img/fb.svg"
import Youtube from "../../../img/youtube.svg"
import Weather from "../../../img/weather.svg"

import "./sale.scss"

const Nav = () => (
  <div className="sale-container flex align-center f-14 space-between p-a-1-1">
    <span>
      Discount of <span className="txt-primary">10%</span> is applicable on all
      the programs. Sale is valid upto{" "}
      <span className="txt-primary">30th September</span>!!
    </span>
    <span className="flex align-center">
      <img
        src={Weather}
        className="m-r-1"
        height="30"
        width="35"
        alt="try scuba"
      />
      <span className="f-14">Havelock</span>
    </span>
    <span className="flex space-between">
      <div className="social-media__box m-r-1">
        <img src={WhatsApp} />
      </div>
      <div className="social-media__box m-r-1">
        <img src={Insta} />
      </div>
      <div className="social-media__box m-r-1">
        <img src={FB} />
      </div>
      <div className="social-media__box m-r-1">
        <img src={Youtube} />
      </div>
    </span>
  </div>
)

export default Nav
