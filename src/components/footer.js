import React from "react"
import styled from "styled-components"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

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

const Footer = () => (
  <StyledFooter>
    <a
      href="https://github.com/konstantinmuenster/how-to-gatsby-portfolio"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label="External Link"
    >
      <span role="img" aria-label="emoji">👏</span> Get in Contact!
    </a>
    <GitHubIcon fontSize="large"></GitHubIcon>
    <LinkedInIcon fontSize="large"></LinkedInIcon>
    <EmailIcon fontSize="large"></EmailIcon>

  </StyledFooter>
)

export default Footer