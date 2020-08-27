import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import About from '../components/about'
import ProfilePic from '../components/profilePic'



const IndexPage = ({data}) => {
  return (
    <Layout>
      <About />
    </Layout>
  
  )
}


export default IndexPage