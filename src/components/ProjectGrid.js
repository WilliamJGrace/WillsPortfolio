import React from 'react'
import styled from "styled-components"
import Masonry from 'react-masonry-component'
import Project from './Project'



const Grid = styled.div`
display: flex;
justify-content: space-between;
margin: 25px;

`

const Col = styled.div`
width: 32%;
color: white;
background: blue

`


const ProjectGrid = ({content}) => {
    const {frontmatter, rawMarkdownBody} = content
    console.log(frontmatter)
    return (
        <>
        <Grid>
            <Col><Project data={frontmatter}/></Col>
            <Col><h1>gi</h1></Col>
            <Col><h1>hello</h1></Col>
        </Grid>
        <Grid>
               <Col><h1>hi</h1></Col>
               <Col><h1>gi</h1></Col>
               <Col><h1>hello</h1></Col>
           </Grid>
</>
    )
}

export default ProjectGrid