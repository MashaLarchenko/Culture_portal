import React from "react"
import Image from "../../image"
import { Container } from "@material-ui/core"
import "./info.scss"

export default function AuthorInfo({ director }) {
  return (
    <Container className="author_info_container">
      <Image director={director} maxWidth="300px" />
      <div className="about_author_container">
        <h3 data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
          {director.firstName} {director.name}
        </h3>
        <h5>{`${director.birthDate}, ${director.birthPlace}`}</h5>
        <p data-sal="slide-right" data-sal-delay="400" data-sal-easing="ease">
          {director.titleText}
        </p>
        <p data-sal="slide-right" data-sal-delay="600" data-sal-easing="ease">{director.directorsInfo.directorsInfo}</p>
      </div>
    </Container>
  )
}
