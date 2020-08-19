import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
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

const FlexContainer = styled.div`
  width: 80%%;
  min-height: 300px;
  margin: 0 auto;
  display: flex;

`
const FlexContainerColumn = styled.div`
  padding: 10px
  min-height: 300px;
  flex: 1

`

const IndexPage = ({data}) => {
  return (
    <Layout>
      <FlexContainer>
        <FlexContainerColumn>
        <About content={data.about.edges[0].node} />
        </FlexContainerColumn>
        <FlexContainerColumn>
        <ProfilePic/>
        </FlexContainerColumn>

      </FlexContainer>

    </Layout>
  
  )
}

export default IndexPage