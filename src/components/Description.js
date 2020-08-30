import React from "react"
import Grid from '@material-ui/core/Grid'
import Container from "@material-ui/core/Container";
import styled from "styled-components"
import ProfilePic from '../components/profilePic'
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
      marginTop: '100px',
    maxWidth: '70.5rem',
    margin: 'auto',
    width: '100%',
    
},

    gridItem: {
        textAlign: 'center',
        margin: 'auto',
        padding: '0 1.5rem',
        paddingTop: '50px',
        paddingBottom: '50px'

    },

    header: {
    }
  
    
  }))


  const GridContainerDiv = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 0px;
  padding: 0 2.5rem;
  background: #FCFFDB  ;
  align-items: center;

  
  `



const Description = () => {
    const classes = useStyles()
    return (
        <>
        {/* <Container style={{ height: "100vh", width:'100%'}}> */}
        <GridContainerDiv>

        <Grid className={classes.gridContainer} container>
            <Grid item className={classes.gridItem} xs={12} sm={12} md={6}> 
        <ProfilePic/>
     </Grid>
     <Grid item className={classes.gridItem}xs={12} sm={12} md={6}>
         <h2 className={classes.header}>About Me</h2>
         <div>I am a recent graduate of Makers Academy, seeking a <b>Full Stack</b> or <b>Front End Software Developer role. </b> 
             Since graduating with a <b>BSc</b> in Microbiology from the <b>University of Leeds</b>, I gained professional experience as a research assistant in a genetic lab in London.
            However, I didn’t see myself spending the rest of my life in a lab coat, so I began learning to code. </div><br></br><div>
            I switched to software development because I enjoy <b>solving problems</b>, <b>learning new things</b> and I want a career that <b>challenges me. </b>
            </div><br></br>
            <div>

                Please take a look at my projects, and to get in touch use the links below 😎 

            </div>

     </Grid>
</Grid>
</GridContainerDiv>
{/* </Container> */}
</>
    )
}

export default Description