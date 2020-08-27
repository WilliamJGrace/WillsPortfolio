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
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  
}));




const ProjectGrid = ({content}) => {
  const classes = useStyles();



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

      <Container className={classes.cardGrid} width="md">
      <Grid container spacing={4}>
        {projectsWithoutNull.map((project) => (
          <Grid item key='card' xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={project.next.frontmatter.Imglink}
                // image="https://drive.google.com/file/d/https://lh3.googleusercontent.com/tu9521ecyqQb036SmzCsi2rZr6FiDeekIxcjdtOMveZUYNvqvW-FneUQmvPnzO9w_ODwr4qx4_h27lZaClWyHrKgpWtXIWbNMcYBtaxD18AFsSACwJfvkiz-jrLvxL_m7WSogU0-WPY-92EECCZV4CRdVrfJqZ52pM/view?https://photos.app.goo.gl/LJ2PM7TZ1FnDEATZ6=sharing"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.next.frontmatter.Title}
                </Typography>
                <Typography >
                {project.next.frontmatter.Description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <Link to={project.next.frontmatter.Githublink}>Github</Link>
                </Button>
                <Button size="small" color="primary">
                  <Link to={project.next.frontmatter.Demolink}>Demo</Link>
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