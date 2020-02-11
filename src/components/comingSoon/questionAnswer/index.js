import React from "react"

import "./questionAnswer.scss"

const QuestionAnswer = ({ headerText, content }) => (
  <header class="header flex-column-container align-center p-a-3 p-x-3 txt-center">
    <h1 class="f-18 p-y-2">{headerText}</h1>
    <section class="txt-center para__section">
      <p class="txt-white f-12">{content}</p>
    </section>
  </header>
)

export default QuestionAnswer
