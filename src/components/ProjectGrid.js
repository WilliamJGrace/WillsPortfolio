import React from 'react'
import styled from "styled-components"
import Masonry from 'react-masonry-component'
import './ProjectGrid.css'
import Project from './Project'
import { Link } from 'gatsby'



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

const style = {
    maxWidth: '70%',
    textAlign: 'center',
}

const styleForProject = {
    borderStyle: 'solid'
}



const ProjectGrid = ({content}) => {
    let projects = content.allMarkdownRemark.edges
   
    let projectsWithoutNull = []

    for(var i=0;i<projects.length;i++){
        if(projects[i].next !== null){
            projectsWithoutNull.push(projects[i])

        }

    }

    return (
        <>
        <Masonry className="showcase"
        style={style}>
            {projectsWithoutNull.map((project) => (
                <div className="showcase__item">
                <figure className="card">
                  <figcaption className="card__caption">
                    <h2 className="card__title">
                        {project.next.frontmatter.Title}
                    </h2>
                    <div className="card__description">
                      <p>{project.next.frontmatter.Description}</p>
                    </div>
                    <button className="card__githublink">
                    <Link to={project.next.frontmatter.Githublink}>Github</Link>
                    </button>
                    <button className="card__githublink">
                    <Link to={project.next.frontmatter.Demo}>Demo</Link>
                    </button>

    
                  </figcaption>
                </figure>
              </div>
              ))}

        </Masonry>
        {/* <Grid>
            {projectsWithoutNull.map(project => (
                
                <Col><Project project={project}></Project></Col>

            ))}           
        </Grid>
        <Grid>
               <Col><h1>hi</h1></Col>
               <Col><h1>gi</h1></Col>
               <Col><h1>hello</h1></Col>
           </Grid> */}
</>
    )
}

export default ProjectGrid