import React from "react"
import { Container } from "@material-ui/core"
import "./about.css"

export default function About() {
  return (
    <Container className="main_info" maxWidth="lg">
      <h2 data-sal="zoom-out" data-sal-delay="300" data-sal-easing="ease">
        INFORMATION ON THIS PORTAL IS DEDICATED TO FILM DIRECTORS OF BELARUS
      </h2>
      <p data-sal="fade" data-sal-delay="400" data-sal-easing="ease">
        Yuri Viktorovich Tarich (1885-1967) and Vladimir Vladimirovich
        Korsh-Sablin (1900 - 1974) are considered as the founders of Belarusian
        cinema. They have forever entered the history of Belarusian cinema as
        the first domestic writers and directors. More than 500 feature films,
        several thousand documentaries and about 100 cartoons were shot at
        "Belarusian Film." During the Second World War there was also produced a
        film magazine "Soviet Belarus," containing a front chronicle. In 1996,
        the film studio received a new name - "National Film Studio" Belarusian
        Film. " And the works of Belarusian cinematographers were repeatedly
        awarded at various international festivals. By the way, the Union of
        Cinematographers of Belarus was founded in 1962. In order to become
        successful in his business, the director must be characterized by a
        subtle flair for qualitative ideas, for amazing scenarios, the time of
        release of the picture, the needs of the public. He seeks funds,
        interests investors and producers, selects actors and film crew, directs
        the process of creating and making the film. The amount of of obstacles
        and restrictions for directing cinema and television gradually becomes
        less and less as the range of duties of the director grow. Today Belarus
        is proud of many talented directors, actors, artists and operators who
        have created gold fund of national cinema of the Republic
      </p>
    </Container>
  )
}
