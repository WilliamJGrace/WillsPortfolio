import React from "react"
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
      marginTop: '20px'},

    gridItem: {}
  
    
  }))



const Description = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.gridContainer} container>
            <Grid item className={classes.gridItem} xs={6}> 
         Hi
     </Grid>
     <Grid item className={classes.gridItem}xs={6}>
         Hi
     </Grid>
</Grid>
    )
}

export default Description