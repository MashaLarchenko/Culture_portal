import React from "react";
import { Container, Typography, Grid, Button } from '@material-ui/core';
import './directors.scss';
import './media.css';


export default function DirectorOfTheDay({ data }) {
  const allDirectors = data.allContentfulEn.edges
  const randomNum = Math.floor(Math.random() * (9 - 1)) + 1
  const directorOfDay = allDirectors[randomNum];
  return (
    <Container className='directorOfTheDay'>
    <Typography variant="h5" className='title'>
        Director of the day
    </Typography>
    <Grid container className='container'>
        <Grid item className='infoWrapper'>
            <Grid item className='item'>
                <Typography variant="h6">
                {directorOfDay.node.name}
                </Typography>
            </Grid>
            <Grid item className='item'>
                <Typography variant="body1">
                {directorOfDay.node.birthDate}
                </Typography>
            </Grid>
            <Grid item className='item'>
                <Typography variant="body2">
                {directorOfDay.node.directorsInfo.directorsInfo}
                </Typography>
            </Grid>
            <Grid item className='item'>
                <Button variant="contained" color="default">
                    View
                    {/* <Link to={'/user/' + architectDataFiltered.path} className=link}>
                        {i18n.t`MAIN__AUTOR-OF-THE-DAY--BUTTON`}
                    </Link> */}
                </Button>
            </Grid>
        </Grid>
        <Grid item className='architectImageWrapper'>
            <img alt={directorOfDay.node.name} src={directorOfDay.node.photo.file.url} width="150" height='150'/>
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
