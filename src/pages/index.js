import React from "react"
import { Link, graphql } from "gatsby"
import LitOfDirectors from "../components/directors/ListOfDirectors"
import Header from "../components/header/index"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <>
    <Header />
    <LitOfDirectors data={data} />
  </>
)

export default IndexPage

export const query = graphql`
  {
    allContentfulEn {
      edges {
        node {
          name
          directorsInfo {
            directorsInfo
          }
          titleText
        }
      }
    }
  }
`
