import React from "react"
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
      marginTop: '20px'},

    gridItem: {
        textAlign: 'center'
    }
  
    
  }))



const Description = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.gridContainer} container>
            <Grid item className={classes.gridItem} xs={6}> 
         Hi
     </Grid>
     <Grid item className={classes.gridItem}xs={6}>
         <h2>About Me</h2>
         <div>I am a recent graduate of Makers Academy, seeking a Full Stack or Front End Software Developer role. Since graduating with a BSc in Microbiology from the University of Leeds, I gained professional experience with Anthony Nolan as a research assistant in a genetic lab in London. However, I didn’t see myself spending the rest of my life in a lab coat. I wanted more out of a career, so I began learning to code. I started a client-facing role in a fast-growing start-up in London to gain a better insight into the tech industry, whilst introducing myself to the basics of languages such as HTML, CSS and Javascript in my free time. I switched to software development because, fundamentally, I enjoy solving problems, learning new things and I want a career that challenges me, and allows me to create and contribute to exciting projects. Currently, I am building my client-facing, project management, and development skills volunteering at Mind.</div>

     </Grid>
</Grid>
    )
}

export default Description