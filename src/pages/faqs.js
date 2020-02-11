import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useSpring, animated } from "react-spring"
import useResizeAware from "react-resize-aware"

import "../styles/stay.css"
import "../styles/about.css"
import "../styles/global.css"

import { StyledFaq, StyledFaqsList } from "../styles/faq-styles"

const faqsData = [
  {
    question: "Do I need a passport/visa to go to Andaman?",
    answer: `For Indians: No passport/visa/permission is required. 
For Foreigners: A passport is required with an Indian Visa to enter India. This is also applicable to foreigners entering Andamans directly from a charter/private yachts. `,
  },
  {
    question: "It is an Indian territory. So do I use Indian Currency?",
    answer:
      "Yes. Indian Rupee is used in the Andaman Islands. You can exchange currency at the airport, from the banks or currency dealers. Also, you can withdraw Indian Rupees from the ATMs there.",
  },
  {
    question: "Is it safe/secure to travel to Andamans?",
    answer:
      "Crime is almost not heard of and there is close to 0 theft on the islands. So, you can assume that these islands are as safe as a place can be in the country.",
  },
  {
    question: "Is it worth coming in June/July/August? 	",
    answer:
      "If you are a beginner and want to do an intro dive or Open Water course – the answer is “YES – DEFINITELY”. The conditions at this time are not too different from in-season (not surprising, if you consider that tidal flow has the biggest effect on visibility here, more than surface conditions like wind and rain), and we have sites that are accessible all year long, no matter what the conditions. Yes, there is the possibility of rain but don’t forget one other element: Havelock is really magical during the monsoons. You have the islands to yourself, the “tourism buzz” is over and it goes back to being a sleepy little island tucked away in a remote corner of the world. That is an experience that few other places can match, and that alone can make taking the risk of bad weather worthwhile. Well, that and the above-mentioned off-season discounts.",
  },
  {
    question: "How do I pay the deposit?",
    answer:
      "Once your booking is made, we will send you the details on how to pay the deposit via email.",
  },
  {
    question: "What modes of payment do you accept?",
    answer:
      "We take cash, Visa, Master, Maestro and Rupay cards – there is a 2% surcharge for payments made in the Andamans with a card. You can also pay via bank transfer/ UPI/ Google Pay/ Phonepe if you have an Indian bank account.",
  },
  {
    question: "Can I speak to someone on the phone?",
    answer:
      "Due to network connectivity issues, it can be a little tiring to talk to someone from the team because of the poor call quality and network issues. So we suggest that the best way to communicate with us would be through email. If you have a quick query about something, then whatsapp would be our preferred mode of communication.  Also, while we are happy to answer any questions you may have, we may be out diving, so we request that you read the website in detail – the information here is kept current and prices you will be quoted are exactly the same as published here. So this may actually save you time. Also we don’t take bookings on the phone and usually are not able to to give you availability information on the phone either (unless you catch us when we are on the computer), so you will most likely have to email anyway",
  },
  {
    question: "What is SSI? Does this mean you aren’t PADI?",
    answer:
      "SSI stands for Scuba Schools International. SSI and PADI ( and many other famous international organisations) are dive agencies that set standards, design the teaching curriculum, draft the student’s reading material etc and all of them are recognised as members of Recreational Scuba Training Council. So, as a student it really doesn’t matter to you. If you have an SSI Open water diver certification and would like to learn from a PADI instructor in the future and vice versa, there shouldn’t be any problem with that. More than the dive agency what matters more is how good the instructor who is going to help you learn is.",
  },
  {
    question: "I don’t know how to swim. Can I Scuba Dive?",
    answer:
      "To experience Scuba ( Try Scuba / Discover Scuba programs), swimming is not a prerequisite but if you would like to sign up for the introductory Open Water Diver program, then you need to be in a reasonably decent shape (able to walk 10-15 min without fatigue). You also need to know basic swimming (able to swim 200m). You also have to answer a Medical questionnaire – if you answer “no” to the questions in it, you are all set to go. If you answer “yes” to any of them, you need to get a doctor’s clearance first on this document.",
  },
  {
    question: "What language do people over there speak?",
    answer: "Pretty much everyone understands (and speak) Hindi and English.",
  },
  {
    question: "What if it rains?",
    answer:
      "As Mr X said, there is no rain underwater. Rain doesn’t affect the underwater visibility too much. More than rain, we will have to be wary with the winds which can significantly affect the visibility - esp at places where the Try Scuba / Open Water Diver programs are conducted.",
  },
  {
    question: "I need help with the ferry tickets. Where do I book them?",
    answer:
      "Makruzz, Greenocean, Sealink are some of the private ferry operators along with the regular government ferries that carry tourists between Portblair and Havelock. Government ferry tickets cannot be booked online whereas private ferry tickets can be booked online. Do drop a message on whatsapp if you need any help with that.",
  },
  {
    question: "How is internet on the islands?",
    answer:
      "There is virtually no internet that works on mobile networks ( Forget about 4G, the islands are still running at 2G speeds. That too at a few places). Brace yourself for a vacation without regular access to the internet.",
  },
  {
    question: "What mobile networks work there?",
    answer:
      "In Port Blair, you should get network connectivity on Airtel, BSNL and vodafone where as in Havelock, BSNL has the most coverage.",
  },
]

const Faq = props => {
  const { question, answer } = props
  const [isOpen, toggleOpen] = useState(false)
  const [resizeListener, { height }] = useResizeAware()

  const animProps = useSpring({
    height: isOpen ? height : 0,
    opacity: isOpen ? 1 : 0,
  })
  return (
    <StyledFaq onClick={() => toggleOpen(!isOpen)}>
      <div className="faq-question">
        <span>Q: {question}</span>
      </div>

      <animated.div className="faq-answer" style={{ ...animProps }}>
        <span style={{ position: "relative" }}>
          {resizeListener}A: {answer}
        </span>
      </animated.div>
    </StyledFaq>
  )
}

const FaqsList = () => {
  return (
    <div>
      <div className="stay-hero-section">
        <img
          alt=""
          className="kayaking-image"
          src="https://www.albeeadventures.com/images/Photos_1200/kayaking_golfo_dulce_playa_cativo_experience_luxury.jpg"
        />
        <div className="kayak-overlay-section">
          <h1 className="contact stay-contact no-margin">
            Frequently Asked Questions
          </h1>
          <div className="underline-div">
            <div className="separator"></div>
          </div>
        </div>
      </div>
      <Layout>
        <SEO title="Faqs" />
        <div className="privacy-content-holder">
          <StyledFaqsList>
            {faqsData.map((faq, i) => (
              <Faq
                key={"faq_" + i}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </StyledFaqsList>
        </div>
        <br />
        <br />
        <br />
      </Layout>
    </div>
  )
}

export default FaqsList

// const Faqs = () => (
//   <Layout>
//     <SEO title="Faqs" />
//     <h1 className="contact">FAQs:</h1>
//     <div className="underline-div">
//       <div className="separator"></div>
//     </div>
//     <div className="privacy-content-holder">
//       <p className="lead left">
//         Q) We offer affordable places in whole havelock.
//       </p>
//       <p className="content">
//         A) India Scuba Explorers was started by Johann and Samantha, a scuba
//         centric couple.
//       </p>
//       <p className="lead left">
//         Q) We offer affordable places in whole havelock.
//       </p>
//       <p className="content">
//         A) India Scuba Explorers was started by Johann and Samantha, a scuba
//         centric couple.
//       </p>
//       <p className="lead left">
//         Q) We offer affordable places in whole havelock.
//       </p>
//       <p className="content">
//         A) India Scuba Explorers was started by Johann and Samantha, a scuba
//         centric couple.
//       </p>
//       <p className="lead left">
//         Q) We offer affordable places in whole havelock.
//       </p>
//       <p className="content">
//         A) India Scuba Explorers was started by Johann and Samantha, a scuba
//         centric couple.
//       </p>
//       <p className="lead left">
//         Q) We offer affordable places in whole havelock.
//       </p>
//       <p className="content">
//         A) India Scuba Explorers was started by Johann and Samantha, a scuba
//         centric couple.
//       </p>
//     </div>
//     <br />
//     <br />
//     <br />
//   </Layout>
// )

// export default Faqs
