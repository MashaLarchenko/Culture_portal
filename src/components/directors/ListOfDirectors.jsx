import React from "react"
// import { Link, graphql } from "gatsby"

export default function ListOfDirectors({ data }) {
  return (
    <ul>
      {data.allContentfulEn.edges.map(element => {
        console.log(element.node)
        return <li>
         <h3>{element.node.name}</h3> 
         <h5>{element.node.titleText}</h5>
         <p>{element.node.directorsInfo.directorsInfo}</p>
         </li>
      })}
    </ul>
  )
}
