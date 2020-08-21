import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import GlobalStyle from "./globalStyle"


const ProjectContainer = styled.div`

`


const Project = (data) => {
    if(data.project.next === null){
        return null
    }
    return (
        <>
        
        <h1>{data.project.next.frontmatter.Title}</h1>
        <p>{data.project.next.frontmatter.Description}</p>
        <Img/>
        <Link to={data.project.next.frontmatter.Githublink}>GitHub</Link>
        <Link to={data.project.next.frontmatter.Githublink}>Demo</Link>

</>
    )
}

export default Project