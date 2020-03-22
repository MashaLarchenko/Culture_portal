import React from "react"
import { Link } from "@reach/router"
import Image from "../image"

export default function DirectorCard({ director }) {
  console.log()
  return (
    <li>
      <div>
        <Image director={director} />
      </div>
      <h3>
        {director.firstName} {director.name}
      </h3>
      <h5>{`${director.birthDate}, ${director.birthPlace}`}</h5>
      <p>{director.titleText}</p>
      <Link to={`/director/${director.name}`} className='button'>View more</Link>
    </li>
  )
}
