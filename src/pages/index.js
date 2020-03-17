import React from "react";
import { Link, graphql } from "gatsby";
// import LitOfDirectors from "../components/directors/ListOfDirectors";
import DirectorOfTheDay from "../components/directors/DirectorOfTheDay";
import Header from "../components/header/index";
import About from "../components/mainPage/About";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = ({ data }) => (
  <>
    <Header />
    <About/>
    <DirectorOfTheDay data={data} />
    <Link to='/page-2'>To page 2</Link>
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
