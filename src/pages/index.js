import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'
import About from '../components/about'
import ProfilePic from '../components/profilePic'
import styled from "styled-components"

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
const MainContainer = styled.section`
  margin: 6rem auto;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ContainerLeft = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  flex: 0 0 65%;
  align-items: center;
`

const ContainerRight = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  flex: 1;
  align-items: center;
`

const IndexPage = ({data}) => {
  return (
    <Layout>
      <MainContainer>
        <ContainerLeft>
          <About content={data.about.edges[0].node} />
        </ContainerLeft>
        <ContainerRight>
      <ProfilePic/>
      </ContainerRight>
      </MainContainer>
    </Layout>
  
  )
}

export default IndexPage