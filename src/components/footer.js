import { Link } from "gatsby"
import React from "react"

import "../styles/footer.css"
import "../styles/global.css"
import {
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa"

const Footer = ({ siteTitle }) => (
  <footer className="main-footer-div">
    <div className="content-footer-div">
      <div className="content-sub-div">
        <p className="footer-heading">Approved By</p>
        <div>
          <img
            alt=""
            className="blueray-andaman"
            src="https://www.paradiseandaman.com/assets/img/tourism-logo.png"
          />
        </div>
      </div>
      <div className="content-sub-div">
        <p className="footer-heading">Quick Links</p>
        <div>
          <Link className="quick-links" to="/terms-conditions/">
            <p className="footer-links">Terms & Conditions</p>
          </Link>
          <Link className="quick-links" to="/faqs/">
            <p className="footer-links ">Faq</p>
          </Link>
          <Link className="quick-links" to="/page-2/">
            <p className="footer-links">
              Learning Scuba Diving - The Open Water Diver
            </p>
          </Link>
          <Link className="quick-links" to="/privacy-policy/">
            <p className="footer-links">Try Scuba - 1 day experience</p>
          </Link>
        </div>
      </div>
      <div className="content-sub-div">
        <p className="footer-heading">Scubanaut in Havelock </p>
        <div>
          <p className="footer-content">Scubanaut, Opp Virgin Beach Resort,</p>
          <p className="footer-content">Beach #1, Govind Nagar,</p>
          <p className="footer-content">Havelock Island,</p>
          <p className="footer-content">South Andamans, India</p>

          <p className="footer-content">
            <FaWhatsapp /> dive@scubanaut.in
          </p>
          <p className="footer-content">
            <FaEnvelope /> +91 9531963624
          </p>
        </div>
      </div>
    </div>
    <SubFooter />
  </footer>
)

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

const SubFooter = () => (
  <div className="sub-footer-div">
    <p className="sub-footer-content content">
      © {new Date().getFullYear()} Scubanaut. All Rights Reserved. Developed by
      &nbsp;
      <a href="https://www.gatsbyjs.org"> Dileep Bolisetti</a>.
    </p>
    <SocialFooter />
  </div>
)

export default Footer
