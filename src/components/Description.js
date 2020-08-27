import React from "react"
import Grid from '@material-ui/core/Grid'
import ProfilePic from '../components/profilePic'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
      marginTop: '100px',
    marginBottom: '100px'},

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
        <Grid className={classes.gridContainer} container>
            <Grid item className={classes.gridItem} xs={6}> 
        <ProfilePic/>
     </Grid>
     <Grid item className={classes.gridItem}xs={6}>
         <h2 className={classes.header}>About Me</h2>
         <div>I a BSc in Microbiology assistant in a genetic lab in London. However, I dg at Mind.</div>

     </Grid>
</Grid>
    )
}

export default Description