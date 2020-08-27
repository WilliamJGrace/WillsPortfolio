import React from "react"
import Grid from '@material-ui/core/Grid'
import Container from "@material-ui/core/Container";


import ProfilePic from '../components/profilePic'
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
      marginTop: '100px',
    marginBottom: '100px',

width: '100%'},

    gridItem: {
        textAlign: 'center',
        margin: 'auto',
        paddingLeft: '5px'
    },

    header: {
    }
  
    
  }))



const Description = () => {
    const classes = useStyles()
    return (
        <>
        <CssBaseline />
        <Container style={{ height: "100vh", width:'100%'}}>

        <Grid className={classes.gridContainer} container>
            <Grid item className={classes.gridItem} xs={6}> 
        <ProfilePic/>
     </Grid>
     <Grid item className={classes.gridItem}xs={6}>
         <h2 className={classes.header}>About Me</h2>
         <div>I a BSc in Microbiology assistant in a genetic lab in London. However, I dg at Mind.</div>

     </Grid>
</Grid>
</Container>
</>
    )
}

export default Description