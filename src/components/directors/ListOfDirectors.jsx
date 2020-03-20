import React from "react"
import DirectorCard from "./DirectorCard"
import "./directors.scss"
import "./media.css"

export default function ListOfDirectors({ data, value }) {
  console.log(value)
  const upperValue = value.toUpperCase();
  let filteredDirectors = [];
  if(value === undefined || '') {
    filteredDirectors = data.allContentfulEn.edges;
  } else {
    filteredDirectors = data.allContentfulEn.edges.filter(element => {
   return element.node.name.toUpperCase().includes(upperValue) || element.node.birthPlace.toUpperCase().includes(upperValue)
  })
  }
 
  return (
    <ul className="directorList_container">
      {filteredDirectors.map((element, index )=> {
        return <DirectorCard director={element.node} key={index}/>
      })}
    </ul>
  )
}
