import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import About from '../components/about'
import ProfilePic from '../components/profilePic'

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

const IndexPage = ({data}) => {
  return (
    <Layout>
      <About content={data.about.edges[0].node} />
      <ProfilePic/>
    </Layout>
  
  )
}

export default IndexPage