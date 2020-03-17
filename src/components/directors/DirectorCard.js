import React from "react"

export default function DirectorCard({ director }) {
    console.log(director);
  return (
    <li>
      <h3>{director.name}</h3>
      <h5>{director.titleText}</h5>
      <img alt={director.name} src={director.photo.file.url} width="150" height='150'/>
    </li>
  )
}
