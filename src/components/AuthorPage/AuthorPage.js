import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "@material-ui/core"
import AuthorInfo from "./AuthorInfo/AuthorInfo"
import Gallery from "./Gallery/Gallery"
import Map from "./map/MapComponent"
import Video from "./video/videoContainer"
import Timeline from "./timeline/Timeline"
import Works from "./works/Works"
import "./style.css"

export default function AuthorPage({ author }) {
  const data = useStaticQuery(graphql`
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
            youtube
            photo {
              file {
                url
              }
            }
            gallery {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  let authorData = data.allContentfulEn.edges.filter(element => {
    return element.node.name === author
  })
  return (
    <Container className="single_author_wrapper">
      <AuthorInfo director={authorData[0].node} />
      <Timeline data={authorData[0].node} />
      <Works data={authorData[0].node} />
      <Map data={authorData[0].node} />
      <Gallery data={authorData[0].node} />
      <Video video={authorData[0].node} />
    </Container>
  )
}
