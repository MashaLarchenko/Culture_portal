import React from "react"

export default function DirectorOfTheDay({ data }) {
  const allDirectors = data.allContentfulEn.edges
  const randomNum = Math.floor(Math.random() * (9 - 1)) + 1
  const directorOfDay = allDirectors[randomNum]
  return (
    <>
      <h3>{directorOfDay.node.name}</h3>
      <h5>{directorOfDay.node.titleText}</h5>
      <p>{directorOfDay.node.directorsInfo.directorsInfo}</p>
    </>
  )
}
