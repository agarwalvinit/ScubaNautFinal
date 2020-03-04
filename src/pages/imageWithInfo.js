import React from "react"
import "../styles/comingSoon/imageWithInfo.scss"

const ImageWithInfo = props => {
  return (
    <div className="img_container ovr-hidden txt-center f-24">
      <img
        src={props.image}
        className="img--block"
        width="100%"
        height="100%"
      />
      {props.label1 && (
        <div className="centered f-bold flex-column-container justify-center">
          <div>{props.label1}</div>
          <div>{props.label2}</div>
        </div>
      )}
    </div>
  )
}

export default ImageWithInfo
