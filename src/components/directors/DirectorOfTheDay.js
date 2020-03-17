import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    architectOfTheDay: {
        margin: '50px auto',
        border: '2px solid #263545',
        padding: '0',
        boxSizing: 'border-box'
    },
    container: {
        display: 'flex',
        ['@media (max-width: 768px)']: {
            flexDirection: 'column',
            textAlign: 'center'
        }
    },
    infoWrapper: {
        flex: '1 0',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        padding: '10px 20px',
        backgroundColor: '#263545',
        textTransform: 'capitalize',
        color: '#ffffff',
        ['@media (max-width: 490px)']: {
            textAlign: 'center'
        }
    },
    item: {
        padding: '10px 20px',
        margin: '10px 0',
        ['@media (max-width: 768px)']: {
            margin: '0'
        }
    },
    link: {
        textDecoration: 'none',
        color: '#222222'
    },
    architectImageWrapper: {
        // flex: '0 1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        ['@media (max-width: 768px)']: {
            order: -1
        }
    }
}));

export default function DirectorOfTheDay({ data }) {
    const classes = useStyles();
  const allDirectors = data.allContentfulEn.edges
  const randomNum = Math.floor(Math.random() * (9 - 1)) + 1
  const directorOfDay = allDirectors[randomNum];
  return (
    <Container className={classes.architectOfTheDay}>
    <Typography variant="h5" className={classes.title}>
        Director of the day
    </Typography>
    <Grid container className={classes.container}>
        <Grid item className={classes.infoWrapper}>
            <Grid item className={classes.item}>
                <Typography variant="h6">
                {directorOfDay.node.name}
                </Typography>
            </Grid>
            <Grid item className={classes.item}>
                <Typography variant="body1">
                {directorOfDay.node.birthDate}
                </Typography>
            </Grid>
            <Grid item className={classes.item}>
                <Typography variant="body2">
                {directorOfDay.node.directorsInfo.directorsInfo}
                </Typography>
            </Grid>
            <Grid item className={classes.item}>
                <Button variant="contained" color="default">
                    View
                    {/* <Link to={'/user/' + architectDataFiltered.path} className={classes.link}>
                        {i18n.t`MAIN__AUTOR-OF-THE-DAY--BUTTON`}
                    </Link> */}
                </Button>
            </Grid>
        </Grid>
        <Grid item className={classes.architectImageWrapper}>
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
