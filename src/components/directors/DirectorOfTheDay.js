import React from "react"
import { Container, Typography, Grid, Button } from "@material-ui/core"
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
  //   const randomNum = Math.floor(Math.random() * (9 - 1)) + 1
  const directorOfDay = allDirectors[currentAuthor].node
  return (
    <Container className="directorOfTheDay" maxWidth="lg">
      <Typography variant="h5" className="title">
        Director of the day
      </Typography>
      <Grid container className="container">
        <Grid item className="infoWrapper">
          <Grid item className="item">
            <Typography variant="h6">{directorOfDay.name}</Typography>
          </Grid>
          <Grid item className="item">
            <Typography variant="body1">{directorOfDay.birthDate}</Typography>
          </Grid>
          <Grid item className="item">
            <Typography variant="body2">
              {directorOfDay.directorsInfo.directorsInfo}
            </Typography>
          </Grid>
          <Grid item className="item">
            <Button variant="contained" color="default">
              <Link to={`/director/${directorOfDay.name}`}>View more</Link>
            </Button>
          </Grid>
        </Grid>
        <Grid item className="architectImageWrapper">
          <img
            alt={directorOfDay.name}
            src={directorOfDay.photo.file.url}
            width="150"
            height="150"
          />
        </Grid>
      </Grid>
    </Container>
    // <>
    //   <h3>{directorOfDay.node.name}</h3>
    //   <h5>{directorOfDay.node.titleText}</h5>
    //   <h5>{directorOfDay.node.birthPlace}</h5>
    //   <h5>{directorOfDay.node.birthDate}</h5>
    //   <p>{directorOfDay.node.directorsInfo.directorsInfo}</p>
    // </>
  )
}
