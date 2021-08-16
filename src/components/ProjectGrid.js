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

    projectsWithoutNull = projectsWithoutNull.reverse()
    
    return (
      <React.Fragment>
      <CssBaseline />

      <Container className={classes.cardGrid} width="md">
      <Grid container spacing={4}>
        {projectsWithoutNull.map((project, index) => (
          <Grid item key={index} xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={project.next.frontmatter.Imglink}
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
                  <a href={project.next.frontmatter.Githublink}>Github</a>
                </Button>
                {project.next.frontmatter.Demolink ?
                 <Button size="small" color="primary">
                 <a href={project.next.frontmatter.Demolink}>Demo</a>
                 </Button>
                 :
                 null
                }
               
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