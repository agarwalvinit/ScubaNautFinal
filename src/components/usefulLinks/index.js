import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./index.scss"

const Links = [
  {
    line1: "View",
    line2: "Packages",
    url: "#",
  },
  {
    line1: "View",
    line2: "Packages",
    url: "#",
  },
  {
    line1: "View",
    line2: "Packages",
    url: "#",
  },
]

const UsefulLinks = () => {
  return (
    <section className="txt-primary p-a-3 txt-center useful-container">
      <div className="useful-header before-and-after">Useful Links</div>
      <div className="flex space-between p-y-8">
        {Links.map(link => (
          <Link
            to={link.url}
            className="p-x-3 p-y-1-1 bg-primary txt-white box-shadow"
          >
            <div>{link.line1}</div>
            <div>{link.line2}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}

UsefulLinks.propTypes = {
  children: PropTypes.node.isRequired,
}

export default UsefulLinks
