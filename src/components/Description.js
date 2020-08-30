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
    marginBottom: '100px',
    maxWidth: '70.5rem',
    margin: 'auto',
    width: '100%',
},

    gridItem: {
        textAlign: 'center',
        margin: 'auto',
        paddingLeft: '5px',
        margin: 'auto',
        padding: '0 2.5rem',
        paddingTop: '50px'
    },

    header: {
    }
  
    
  }))


  const GridContainerDiv = styled.div`
  height: 80vh;
  width: 100%;
  margin: 0 auto;
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
            <Grid item className={classes.gridItem} xs={6}> 
        <ProfilePic/>
     </Grid>
     <Grid item className={classes.gridItem}xs={6}>
         <h2 className={classes.header}>About Me</h2>
         <div>I a BSc in Microbiology assistant in a genetic lab in London. However, I dg at Mind.</div>

     </Grid>
</Grid>
</GridContainerDiv>
{/* </Container> */}
</>
    )
}

export default Description