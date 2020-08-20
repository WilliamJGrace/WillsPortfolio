import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'
import ProjectGrid from '../components/ProjectGrid'

const Projects = ({data}) => {
    return (
     <Layout>
         <ProjectGrid content={data.about.edges[0].node}>

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
            DemoLink
            
          }
          rawMarkdownBody
        }
      }
    }
  }
`

  
export default Projects