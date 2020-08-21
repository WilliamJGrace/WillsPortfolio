import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'
import ProjectGrid from '../components/ProjectGrid'

const Projects = ({data}) => {
    return (
     <Layout>
         <ProjectGrid content={data}>

         </ProjectGrid>
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