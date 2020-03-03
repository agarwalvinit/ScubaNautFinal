import React from "react"
import "../styles/comingSoon/borderedBox.scss"

const BorderedBox = props => {
  return (
    <div className="outer-box__container">
      <div className="f-20 flex-column-container align-center justify-center border-box__container">
        <div className="txt-primary f-bold">{props.label1}</div>
        <div className="txt-black-4">{props.label2}</div>
      </div>
    </div>
  )
}

export default BorderedBox
