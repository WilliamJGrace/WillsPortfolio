import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import About from '../components/about'
import Description from '../components/Description'
import ProfilePic from '../components/profilePic'



const IndexPage = ({data}) => {
  return (
    <Layout>
      <About content={data.about.edges[0].node} />
      <Description/>
    </Layout>
  
  )
}

export const pageQuery = graphql`
  {
    about: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            emoji
            subtitlePrefix
            subtitleHighlight
          }
          rawMarkdownBody
        }
      }
    }
  }
`

export default IndexPage