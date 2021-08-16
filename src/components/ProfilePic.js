import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"



const ProfilePic = () => {
  const data = useStaticQuery(graphql`
query PhotoQuery {
    file(relativePath: {eq: "ProfilePic.png"}) {
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
  return (
    <Img fluid={data.file.childImageSharp.fluid}
      alt="ProfilePicture"></Img>)

}

export default ProfilePic
