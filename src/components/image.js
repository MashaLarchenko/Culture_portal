import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import defaultImg from '../images/directors/Belousov/gallery/pic1.png';

const Image = ({ director }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid{
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  `)
  const { allImageSharp } = data
  const imageIndex = allImageSharp.nodes.findIndex(el => {
    const imgUrlname = el.fluid.originalName.split(".")[0]
    return imgUrlname === director.name
  })
  return (
    <Img
      fluid={
        imageIndex >= 0 ? allImageSharp.nodes[imageIndex].fluid : defaultImg
      }
      alt={director.name}
      imgStyle={{ objectFit: "contain" }}
    />
  )
}

export default Image
