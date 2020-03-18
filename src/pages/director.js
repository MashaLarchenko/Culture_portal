import React from "react"
// import { Link, Router } from "gatsby"
import { Router, Link } from "@reach/router"
import AuthorPage from "../components/AuthorPage/AuthorPage"
import Header from "../components/header/index"
import { Container } from "@material-ui/core"
import SEO from "../components/seo"

function DirectorPage (...args) {
    console.log(args[0]['*']);
     return (   
  <>
    <Header />
    <Container maxWidth="lg" className="search_page_container">
      <SEO title="Page two" />
      <Router>
        <AuthorPage path="/director/:name" author={args[0]['*']} />
      </Router>
      {/* <AuthorPage author={args[0]['*']}/> */}
      {/* <ListOfDirectors data={data} /> */}
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </>
     )
}

export default DirectorPage
