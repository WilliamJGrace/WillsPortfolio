import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import Layout from '../components/layout'
import ProjectGrid from '../components/ProjectGrid'

const Seperator = styled.div`
height: 20px;

`

const Projects = ({data}) => {
    return (
     <Layout>
       <Seperator/>
       
         <ProjectGrid content={data}>

         </ProjectGrid>
         <Seperator/>

    </Layout>
    )
  }

export const pageQuery = graphql`
{
    allMarkdownRemark {
      edges {
        next {
          id
          frontmatter {
            Title
            Description
            Githublink
            Demolink
          }
        }
      }
    }
  }
`
  


  
export default Projects