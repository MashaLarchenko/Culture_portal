import React from "react"
import { Link, graphql } from "gatsby"
import AuthorsPage from "../components/Search/Input/AllAuthorsPage"
import Header from "../components/header/index"
import { Container } from "@material-ui/core"
import SEO from "../components/seo"

const SecondPage = ({ data }) => (
  <>
    <Header />
    <Container maxWidth="lg" className="search_page_container">
      <SEO title="Page two" />
      <AuthorsPage/>
      {/* <ListOfDirectors data={data} /> */}
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </>
)

export default SecondPage

// export const query = graphql`
//   {
//     allContentfulEn {
//       edges {
//         node {
//           name
//           directorsInfo {
//             directorsInfo
//           }
//           titleText
//           map {
//             lat
//             lon
//           }
//           lang
//           works {
//             listOfWorks {
//               film
//               year
//             }
//           }
//           timeline {
//             timelineData {
//               date
//               description
//             }
//           }
//           birthPlace
//           birthDate
//           photo {
//             file {
//               url
//             }
//           }
//         }
//       }
//     }
//   }
// `
