import React from "react"
import Image from "../../image"
import { Container } from "@material-ui/core"
import "./info.scss"

export default function AuthorInfo({ director }) {
  return (
    <Container maxWidth="lg" className="author_info_container">
      <Image director={director} />
      <div className='about_author_container'>
        <h3 data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
          {director.name}
        </h3>
        <h5>{`${director.birthDate}, ${director.birthPlace}`}</h5>
        <p>{director.titleText}</p>
        <p>{director.directorsInfo.directorsInfo}</p>
      </div>
    </Container>
  )
}
