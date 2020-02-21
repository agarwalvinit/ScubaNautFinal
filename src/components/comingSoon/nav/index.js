import React from "react"

import Logo from "../../../img/logo.png"

import "./nav.scss"

const Nav = props => (
  <nav className="nav flex align-center p-y-3 p-x-3">
    <img src={Logo} width="100" height="100" alt="logo" className="logo" />
    <div className="pure-menu pure-menu-horizontal">
      <ul className="pure-menu-list">
        <li className="pure-menu-item pure-menu-allow-hover">
          <a className={props.className} id="menuLink1" href="#">
            SCUBA DIVING
          </a>
        </li>
        <li className="pure-menu-item">
          <a className={props.className} href="#">
            KAYAKING
          </a>
        </li>
        <li className="pure-menu-item">
          <a className={props.className} href="#">
            STAY WITH US
          </a>
        </li>
        <li className="pure-menu-item">
          <a className={props.className} href="#">
            TRAVEL ASSIST
          </a>
        </li>
        <li className="pure-menu-item">
          <a className={props.className} href="#">
            CONTACT US
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Nav
