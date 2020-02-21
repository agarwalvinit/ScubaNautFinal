import React from "react"
import "../styles/comingSoon/imageWithInfo.scss"

const Image = props => {
  return (
    <div className="Img_container f-24">
      <img src={props.image} width="100%" height="100%" />
      {props.label1 && (
        <div className="centered flex-column-container justify-center">
          <div>{props.label1}</div>
          <div>{props.label2}</div>
        </div>
      )}
    </div>
  )
}

export default Image
