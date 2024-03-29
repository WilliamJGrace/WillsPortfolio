import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import About from '../components/about'
import Description from '../components/Description'
import styled from 'styled-components'
import { Helmet } from 'react-helmet';
import favicon from '../favicon/favicon.ico';
import ogimage from '../images/ProfilePic.png';


const StyledLayoutAbout = styled.div`

  width: 100%;
  max-width: 62.5rem;
  margin: 0 auto;
  padding: 0 2.5rem;
`

const IndexPage = ({data}) => {
  return (
    <>
    <Helmet>
      <title>Will Grace</title>
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      <link rel="canonical" href="https://www.willgrace.dev/" />
      <meta property="og:image" content={ogimage} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Will Grace's Portfolio" />
      <meta property="og:description" content="Browse my latest projects." />



    </Helmet>
    <Layout>
      <StyledLayoutAbout>
      <About content={data.about.edges[0].node} />
      </StyledLayoutAbout>
      <Description/>
    </Layout>
    </>
  
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