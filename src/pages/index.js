import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import About from '../components/about'
import Description from '../components/Description'
import styled from 'styled-components'

const StyledLayoutAbout = styled.div`

  width: 100%;
  max-width: 62.5rem;
  margin: 0 auto;
  padding: 0 2.5rem;
`

const IndexPage = ({data}) => {
  return (
    <Layout>
      <StyledLayoutAbout>
      <About content={data.about.edges[0].node} />
      </StyledLayoutAbout>
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