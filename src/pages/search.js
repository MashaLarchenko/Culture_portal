import React from "react"
import { Link, graphql } from "gatsby"
import ListOfDirectors from "../components/directors/ListOfDirectors"
import Header from "../components/header/index"
import { Container } from "@material-ui/core"
import SEO from "../components/seo"

const SecondPage = ({ data }) => (
  <>
    <Header />
    <Container maxWidth="lg">
      <SEO title="Page two" />
      <ListOfDirectors data={data} />
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </>
)

export default SecondPage

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
