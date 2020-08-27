import React from "react"
import styled from "styled-components"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


const StyledFooter = styled.footer`
  width: 100%;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: +1px;
  font-weight: 700;
`

const useStyles = makeStyles((theme) => ({
  icon: {
    margin: '5px'}

  
}))


const Footer = () => {

const classes = useStyles()



return (


  <StyledFooter>

    <Link color="inherit" href='https://www.linkedin.com/in/william-grace-b4b171b3/'><LinkedInIcon className={classes.icon} fontSize="large" ></LinkedInIcon></Link>
    <Link color="inherit" href='https://github.com/WilliamJGrace'><GitHubIcon className={classes.icon} fontSize="large" ></GitHubIcon></Link>
    <Link color="inherit" href='mailto:williamjgrace@outlook.com'><EmailIcon className={classes.icon} fontSize="large" ></EmailIcon></Link>



  </StyledFooter>
)}

export default Footer