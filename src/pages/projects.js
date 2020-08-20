import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'
import ProjectGrid from '../components/ProjectGrid'

const Projects = ({data}) => {
    console.log(data)
    return (
     <Layout>
         <ProjectGrid content={data.about.edges[1].node}>

         </ProjectGrid>
    </Layout>
    )
  }

export const pageQuery = graphql`
  {
    about: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            Title
            Description
            Githublink
            Demolink
            
          }
          rawMarkdownBody
        }
      }
    }
  }
`


  
export default Projects