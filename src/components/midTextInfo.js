import React from "react"

import "../styles/comingSoon/midTextInfo.scss"

const TextInfo = ({ className, label1, label2 }) => {
  return (
    <div className={`${className} textInfo__container m-auto p-a-3 txt-center`}>
      <div className="f-16 f-bold flex-column-container align-center justify-center">
        <div className="txt-primary">{label1}</div>
        <div className="txt-black">{label2}</div>
      </div>
    </div>
  )
}

TextInfo.defaultProps = {
  className: "",
}

export default TextInfo
