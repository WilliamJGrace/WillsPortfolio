import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet';

import Layout from '../components/layout'
import ProjectGrid from '../components/ProjectGrid'




const Projects = ({data}) => {
    return (
      <>
      <Helmet>
      <title>Will Grace</title>
    </Helmet>
     <Layout>
       
         <ProjectGrid content={data}>

         </ProjectGrid>

    </Layout>
    </>
    )
  }

export const pageQuery = graphql`
{
  allMarkdownRemark {
    edges {
      next {
        frontmatter {
          Title
          Description
          Githublink
          Demolink
          Imglink          
        }
      }
    }
  }
}

`
  


  
export default Projects