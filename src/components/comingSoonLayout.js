import React from "react"
import PropTypes from "prop-types"

import "../styles/comingSoon/index.scss"

const ComingSoonLayout = ({ children }) => {
  return (
    <div className="scubanaut__container">
      <section>{children}</section>
    </div>
  )
}

ComingSoonLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ComingSoonLayout
