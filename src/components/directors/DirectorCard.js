import React from "react"
// import { useStaticQuery, graphql } from "gatsby";
// import { Link, Router } from "gatsby"
import { Router, Link } from "@reach/router"

// import Img from "gatsby-image";
import Image from "../image"
import AuthorPage from "../../pages/director"
import defaultImg from "../../images/directors/Belousov/gallery/pic1.png"

export default function DirectorCard({ director }) {
  return (
    <li>
      <div>
        <Image director={director} />
      </div>
      <h3>{director.name}</h3>
      <h5>{`${director.birthDate}, ${director.birthPlace}`}</h5>
      <p>{director.titleText}</p>
      <Link to={`/director/${director.name}`}>View more</Link>
      {/* 
      <Router>
        <AuthorPage path="/director/:name" director={director} />
      </Router> */}
    </li>
  )
}
