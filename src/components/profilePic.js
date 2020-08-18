import React from "react"

import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"



const ProfilePic = () => {
    const data = useStaticQuery(graphql`
query MyQuery {
    file(relativePath: {eq: "ProfilePic.jpg"}) {
      childImageSharp {
        fluid {
          aspectRatio
          base64
          sizes
          src
        }
      }
    }
  }
`  

    )
    console.log(data.file.childImageSharp.fluid)
    return (
        <Img fluid={data.file.childImageSharp.fluid
       
        }
        alt="Profile Pic"></Img>
    )
}

export default ProfilePic