import React from "react"
import "../styles/comingSoon/bulletBox.scss"

const BulletBox = ({ className, bulletData }) => {
  return (
    <div className={className}>
      <div className="f-bold txt-black-6">{bulletData.name}:</div>
      <ul className="p-l-1-1 course--bullet">
        {bulletData.values.map(val => (
          <li>{val}</li>
        ))}
      </ul>
    </div>
  )
}

BulletBox.defaultProps = {
  className: "",
}

export default BulletBox
