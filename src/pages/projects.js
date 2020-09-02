import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet';
import favicon from '../favicon/favicon.ico';
import Layout from '../components/layout'
import ProjectGrid from '../components/ProjectGrid'




const Projects = ({data}) => {
    return (
      <>
      <Helmet>
        <title>Will Grace</title>
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      </Helmet>
     <Layout>   
         <ProjectGrid content={data} />
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