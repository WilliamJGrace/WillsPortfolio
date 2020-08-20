import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import GlobalStyle from "./globalStyle"


const ProjectContainer = styled.div`

`


const Project = (data) => {
    console.log(data)
    return (
        <>
        <GlobalStyle/>
        <h1>{data.data.Title}</h1>
        <p>{data.data.Description}</p>
        <Img/>
        <Link to={data.data.Githublink}>GitHub</Link>
</>
    )
}

export default Project