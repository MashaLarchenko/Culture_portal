import React, { useState } from "react"
import Input from "./Input"
import ListOfDirectors from "../../directors/ListOfDirectors"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "@material-ui/core"

export default function AuthorsPage() {
  const data = useStaticQuery(graphql`
    {
      allContentfulEn {
        edges {
          node {
            name
            firstName
            directorsInfo {
              directorsInfo
            }
            titleText
            map {
              lat
              lon
            }
            lang
            works {
              listOfWorks {
                film
                year
              }
            }
            timeline {
              timelineData {
                date
                description
              }
            }
            birthPlace
            birthDate
            photo {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const [value, setValue] = useState('');

   const handleChange = (e) => {
     if(e.target.value) {
      setValue (e.target.value);
     } else {
      setValue('');
     }
   }



  return (
    <Container className='search_container'>
      <Input placeholder='Search by name or city' setValue={setValue} handleChange={handleChange}/>
      <ListOfDirectors data={data} value={value}/>
    </Container>
  )
}
