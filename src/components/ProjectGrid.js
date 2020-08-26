import React from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styled from 'styled-components'

import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import './ProjectGrid.css'
import Project from './Project'
import { Link } from 'gatsby'



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  
}));




const ProjectGrid = ({content}) => {
    let projects = content.allMarkdownRemark.edges
   
    let projectsWithoutNull = []

    for(var i=0;i<projects.length;i++){
        if(projects[i].next !== null){
            projectsWithoutNull.push(projects[i])

        }

    }
    const data = useStaticQuery(graphql`
    query MyQuery {
        file(relativePath: {eq: "roadtodiscovery.png"}) {
          childImageSharp {
            fluid {
              aspectRatio
              base64
              sizes
              src
            }
          }
        }
      }
    `  
    )

    return (
      <React.Fragment>
      <CssBaseline />

      <Container className='cardGrid' maxWidth="md">
      <Grid container spacing={4}>
        {projectsWithoutNull.map((project) => (
          <Grid item key='card' xs={12} sm={6} md={4}>
            <Card className='card'>
              <CardMedia
                className='cardMedia'
                image="https://source.unsplash.com/random"
                title="Image title"
              ><Img fluid={data.file.childImageSharp.fluid}
              alt="A corgi smiling happily"></Img></CardMedia>
              <CardContent className='cardContent'>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.next.frontmatter.Title}
                </Typography>
                <Typography >
                {project.next.frontmatter.Description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </React.Fragment>
    )
}
export default ProjectGrid