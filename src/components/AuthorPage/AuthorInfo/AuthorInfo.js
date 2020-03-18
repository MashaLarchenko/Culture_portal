import React from "react";
import Image from "../../image";
import { Container } from "@material-ui/core";
import './info.scss'

export default function AuthorInfo({ director }) {
  return (
    <Container maxWidth="lg" className='author_info_container'>
      <Image director={director} className=''/>
      <h3>{director.name}</h3>
      <h5>{`${director.birthDate}, ${director.birthPlace}`}</h5>
      <p>{director.titleText}</p>
      <p>{director.directorsInfo.directorsInfo}</p>
    </Container>
  )
}
