import React from "react"
import { Link, graphql } from "gatsby";
import ListOfDirectors from '../components/directors/ListOfDirectors';
import Layout from "../components/layout";
import SEO from "../components/seo";

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
  <ListOfDirectors data={data} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
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
