import React from "react"
import { Router } from "@reach/router"
import AuthorPage from "../components/AuthorPage/AuthorPage"
import { Container } from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

function DirectorPage(...args) {
  return (
    <Layout>
      <Container maxWidth="lg" className="search_page_container">
        <SEO title="Page two" />
        <Router>
          <AuthorPage path="/director/:name" author={args[0]["*"]} />
        </Router>
      </Container>
    </Layout>

    // </>
  )
}

export default DirectorPage
