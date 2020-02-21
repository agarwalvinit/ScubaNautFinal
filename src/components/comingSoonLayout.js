import React from "react"
import PropTypes from "prop-types"

import "../styles/comingSoon/index.scss"

const ComingSoonLayout = ({ children }) => {
  return (
    <div className="comingsooon__homepage">
      <section className="scubanaut__container">{children}</section>
    </div>
  )
}

ComingSoonLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ComingSoonLayout
