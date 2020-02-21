import React from "react"

import "../styles/comingSoon/midTextInfo.scss"

const TextInfo = props => {
  return (
    <div className="textInfo__container m-auto p-a-3 txt-center">
      <div className="f-20 flex-column-container align-center justify-center">
        <div className="txt-primary">{props.label1}</div>
        <div className="txt-black">{props.label2}</div>
      </div>
    </div>
  )
}

export default TextInfo
