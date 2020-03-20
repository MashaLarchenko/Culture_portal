import React from "react"
import { Container } from "@material-ui/core"
import { Link } from "@reach/router"
import "./directors.scss"
import "./media.css"

const getDate = () => {
  let date = new Date()
  return Number(date.toLocaleString("en-US", { day: "numeric" }))
}
export default function DirectorOfTheDay({ data }) {
  const allDirectors = data.allContentfulEn.edges
  const date = getDate()
  const currentAuthor = date % (allDirectors.length - 1)
  const directorOfDay = allDirectors[currentAuthor].node
  return (
    <Container className="directorOfTheDay" maxWidth="lg">
      <h3 className="title">Director of the day</h3>
      <article className="container">
        <div item className="infoWrapper">
          <h5>
            {directorOfDay.firstName} {directorOfDay.name}
          </h5>
          <p>{directorOfDay.birthDate}</p>
          <p>{directorOfDay.directorsInfo.directorsInfo}</p>
          <Link to={`/director/${directorOfDay.name}`} className="button">
            View more
          </Link>
        </div>
        <img
          alt={directorOfDay.name}
          src={directorOfDay.photo.file.url}
          height="100%"
        />
      </article>
    </Container>
  )
}
