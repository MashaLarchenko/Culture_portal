import React from "react";
import { Link } from "gatsby";
import { Container, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import './style.css';

const useStyles = makeStyles(theme => ({
  headerWrapper: {
    boxShadow: "0px 4px 4px #000000",
    backgroundColor: "rgba(0, 0, 0, 0.77)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    ["@media (max-width: 1020px)"]: {
      flexDirection: "column",
    },
  },
  containerLogo: {
    margin: "0",
    padding: "0",
    width: "auto",
    display: "flex",
    alignItems: "center",
    width: '100%',
    justifyContent: 'space-between',
    ["@media (max-width: 1020px)"]: {
      padding: "5px 0",
    },
    ["@media (max-width: 490px)"]: {
      justifyContent: "center",
    },
  },
  homeLink: {
    textDecoration: "none",
    color: "#ffffff",
    fontSize: '1.2rem',
  },
  logoImg: {
    fontSize: '1.8rem',
    ["@media (max-width: 490px)"]: {
      fontSize: "0.8rem",
      lineHeight: '30px',
    },
  },
}))

const Header = () => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.headerWrapper}>
      <Container className={classes.containerLogo}>
        <Link to='/' className={classes.logoImg}><span className='headerLogo'>📽</span> Directors of Belarus</Link>
        <div className='inner_header_container'>
          <Link to={`/`} className={classes.homeLink}>
            Home page
          </Link>
          <Link to={`/search`} className={classes.homeLink}>
            List of Director
          </Link>
        </div>
      </Container>
    </Toolbar>
  )
}

export default Header
