import React from "react";
import DirectorCard from './DirectorCard';
import './directors.scss';
import './media.css';
// import { Link, graphql } from "gatsby"

export default function ListOfDirectors({ data }) {
  return (
    <ul className='directorList_container'>
      {data.allContentfulEn.edges.map(element => {
        console.log(element.node)
        return <DirectorCard director={element.node}/>
      })}
    </ul>
  )
}
