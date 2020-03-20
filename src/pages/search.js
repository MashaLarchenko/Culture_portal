import React from "react"
import AuthorsPage from "../components/Search/Input/AllAuthorsPage"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <div className="search_page_container">
      <SEO title="Page two" />
      <AuthorsPage />
    </div>
  </Layout>
)

export default SecondPage
