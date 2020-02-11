import { withPrefix, Link } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

import logo from "../images/Scubanaut.png"
import $ from "jquery"

import {
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa"

import "../styles/footer.css"
import "../styles/header.css"

class Header extends React.Component {
  componentDidMount() {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 10) {
        $(".sub-header-div").hide(250)
      } else {
        $(".sub-header-div").show(250)
      }
    })
  }
  render() {
    return (
      <header className="header-main">
        <SubHeader />
        <div className="main-header-div">
          <Link className="tab" to="/">
            <img className="header-logo" src={logo} alt="Logo" />
          </Link>
          <div className="tabs-holder">
            <ul className="tab">
              <li>
                <div>Scuba Diving </div>
                <ul>
                  <li>
                    <div className="in-tab">Beginners</div>
                    <ul>
                      <li>
                        <Link className="tab-option" to="/try-scuba">
                          Try Scuba
                        </Link>
                      </li>
                      <li>
                        <Link className="tab-option" to="/learn-scuba">
                          Learn Scuba
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="in-tab">Certified Divers</div>
                    <ul>
                      <li>
                        <Link className="tab-option" to="/advanced-scuba">
                          Advanced Scuba Diving
                        </Link>
                      </li>
                      <li>
                        <Link className="tab-option" to="/speciality-courses">
                          Speciality Courses
                        </Link>
                      </li>
                      <li>
                        <Link className="tab-option" to="/fun-dives">
                          Fun Dives
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <Link className="tab" to="/kayaking/">
              Kayaking
            </Link>
            <Link className="tab" to="/stay/">
              Stay with us
            </Link>
            <Link className="tab" to="/travel-assistance/">
              Travel Assist
            </Link>
            <Link className="tab" to="/contact/">
              Contact Us
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

const SocialFooter = () => (
  <div className="social-footer-div">
    <Link to="/">
      <FaWhatsapp />
    </Link>

    <Link to="/">
      <FaFacebook />
    </Link>
    <Link to="/">
      <FaYoutube />
    </Link>
    <Link to="/">
      <FaInstagram />
    </Link>
  </div>
)
const SubHeader = () => (
  <div className="sub-header-div">
    <p className="sub-footer-content content">
      Discount of 10% is applicable on all the programs. Sale is valid upto 30th
      September
    </p>
    <SocialFooter />
  </div>
)
export default Header
