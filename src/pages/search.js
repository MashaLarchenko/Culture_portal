import React from "react"
import { Link, graphql } from "gatsby"
import AuthorsPage from "../components/Search/Input/AllAuthorsPage"
import Header from "../components/header/index"
// import { Container } from "@material-ui/core"
import SEO from "../components/seo"

const SecondPage = () => (
  <div className="search_page_container">
    <Header />
      <SEO title="Page two" />
      <AuthorsPage/>
      <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage