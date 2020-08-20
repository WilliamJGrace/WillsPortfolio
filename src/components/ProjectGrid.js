import React from 'react'
import styled from "styled-components"

const Grid = styled.div`
display: flex;
justify-content: space-between
`

const Col = styled.div`
width: 32%;
color: white;
background: blue
`


const ProjectGrid = () => {
    return (
        <>
        <Grid>
            <Col><h1>hi</h1></Col>
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