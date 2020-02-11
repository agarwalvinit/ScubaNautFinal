import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page five" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page activities</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
