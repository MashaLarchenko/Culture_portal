import React from "react"
// import { Link, graphql } from "gatsby"

export default function ListOfDirectors({ data }) {
//   const name = data.allContentfulDirectors.edges.node.name
  return (
    <ul>
      {data.allContentfulDirectors.edges.map(element => {
          console.log(element.node.name);
 return <li>{element.node.name}</li>
      })}
    </ul>
  )
}

// export const query = graphql`
// {
// allContentfulDirectors {
//     edges {
//       node {
//         name
//       }
//     }
//   }
// }
// `
