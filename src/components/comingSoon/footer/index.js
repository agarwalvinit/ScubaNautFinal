import React from "react"

import WhatsApp from "../../../img/whatsapp.svg"
import Insta from "../../../img/insta.svg"
import FB from "../../../img/fb.svg"
import Youtube from "../../../img/youtube.svg"

import "./footer.scss"

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="pure-g p-y-8 p-b-0">
      <div className="pure-u-1-3 flex-column-container p-l-5 txt-blue-1">
        <h3 className="f-14 txt-primary">APPROVED BY</h3>
        <div className="footer-link__box p-y-8">
          <div className="f-12">Tourism Department, A&N Islands</div>
        </div>
      </div>
      <div className="pure-u-1-3 flex-column-container p-l-5 txt-blue-1">
        <h3 className="f-14 txt-primary">QUICK LINKS</h3>
        <div className="footer-link__box p-y-8">
          <div className="f-12">Terms & Conditions</div>
          <div className="f-12 m-t-1">Privacy policy</div>
          <div className="f-12 m-t-1">FAQ's</div>
          <div className="f-12 m-t-1">
            Learning Scuba Diving - The Open Water Diver
          </div>
          <div className="f-12 m-t-1">Try Scuba - 1 day experience</div>
        </div>
      </div>
      <div className="pure-u-1-3 flex-column-container p-l-5 txt-blue-1">
        <h3 className="f-14 txt-primary">SCUBANAUT IN HAVELOCK</h3>
        <div className="footer-link__box p-y-8">
          <div className="f-12 address address__line">
            Scubanaut, Opp Virgin Beach Resort,
          </div>
          <div className="f-12 m-t-1">Beach #1, Goving Nagar,</div>
          <div className="f-12 m-t-1">Havelock Island,</div>
          <div className="f-12 m-t-1">South Andamans, India</div>
          <div className="f-12 m-t-1 address phone__line">+91 9531963624</div>
          <div className="f-12 m-t-1 address mail__line">dive@scubanaut.in</div>
        </div>
      </div>
    </div>
    <SubFooter />
  </footer>
)

const SubFooter = () => (
  <div className="footer-strip__container flex align-center space-between p-a-1-1">
    <span>© {new Date().getFullYear()} All Rights Reserved</span>
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

export default Footer
