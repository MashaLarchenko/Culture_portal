import React from "react"
import { graphql } from "gatsby"
import DirectorOfTheDay from "../components/directors/DirectorOfTheDay"
import About from "../components/mainPage/About"
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <div className="main_wrapper">
    <Layout>
      <About />
      <DirectorOfTheDay data={data} />
    </Layout>
  </div>
)

export default IndexPage

export const query = graphql`
  {
    allContentfulEn {
      edges {
        node {
          name
          firstName
          directorsInfo {
            directorsInfo
          }
          titleText
          lang
          birthPlace
          birthDate
          photo {
            file {
              url
            }
          }
        }
      }
    }
  }
`
