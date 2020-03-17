import { Link } from "gatsby"
import React from "react"

import logo from "../../../img/logo.png"

import "./nav.scss"

class Header extends React.Component {
  render() {
    return (
      <header className="nav-header">
        <div className="main-header">
          <Link className="tab p-a-2" to="/">
            <img className="nav-logo" src={logo} alt="Logo" />
          </Link>
          <div className="tabs-holder">
            <ul className="tab cp">
              <li>
                <div>Scuba Diving </div>
                <ul className="second__nav">
                  <li>
                    <div className="in-tab">Beginners</div>
                    <ul>
                      <li>
                        <Link className="tab-option" to="/tryscuba">
                          Try Scuba
                        </Link>
                      </li>
                      <li>
                        <Link className="tab-option" to="/learnscuba">
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

export default Header
