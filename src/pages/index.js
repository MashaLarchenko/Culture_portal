import React from "react"
import { Link, graphql } from "gatsby"
import DirectorOfTheDay from "../components/directors/DirectorOfTheDay"
import Header from "../components/header/index"
import About from "../components/mainPage/About"
import { Container } from "@material-ui/core"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <div>
    <Header />
    {/* <Container mxWidth='lg' > */}
      <About />
      <div className='paralax_img'/>
      <DirectorOfTheDay data={data} />
      <Link to="/search">To page 2</Link>
    {/* </Container> */}
  </div>
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
          map {
            lat
            lon
          }
          lang
          works {
            listOfWorks {
              film
              year
            }
          }
          timeline {
            timelineData {
              date
              description
            }
          }
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
