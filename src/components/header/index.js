import React from "react"
import { Link } from "gatsby"
// import { Link } from '@wapps/gatsby-plugin-lingui';
import { Container, Typography, Toolbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
// import { withI18n } from '@lingui/react';
// import Menu from './menu';
// import 'typeface-roboto';
import logo from "../../images/architect-logo-small.png"

const useStyles = makeStyles(theme => ({
  headerWrapper: {
    boxShadow: "0px 4px 4px #000000",
    backgroundColor: "rgba(0, 0, 0, 0.77)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flex: "0 1",
    // marginBottom: '5%',
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
  headerTitle: {
    fontSize: "2rem",
    textAlign: "center",
    padding: "10px",
    ["@media (max-width: 490px)"]: {
      flex: "0 1",
      textAlign: "left",
    },
  },
  homeLink: {
    textDecoration: "none",
    color: "#ffffff",
  },
}))

const Header = () => {
  const classes = useStyles()
  // const { i18n } = props;
  return (
    <Toolbar className={classes.headerWrapper}>
      <Container className={classes.containerLogo}>
        <img src={logo} alt="Main page" />
        <div>
          <Link to={`/`} className={classes.homeLink}>
            Home page
          </Link>
          <Link to={`/search`} className={classes.homeLink}>
            List of Director
          </Link>
        </div>
        {/* <Typography variant="h1" className={classes.headerTitle} >
                 
                   </Typography>
                   <Typography variant="h2" className={classes.headerTitle} >
                    
                   </Typography> */}
      </Container>
      {/* <Menu /> */}
    </Toolbar>
  )
}

export default Header
