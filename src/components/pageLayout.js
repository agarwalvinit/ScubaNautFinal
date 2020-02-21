import React from "react"
import PropTypes from "prop-types"

import "../styles/comingSoon/index.scss"

const PageLayout = ({ children }) => {
  return <section className="scubanaut__container">{children}</section>
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
