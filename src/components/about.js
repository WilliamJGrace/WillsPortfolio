
import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }
`

const About = ({ content }) => {
  return (
    <StyledSection id="hero">
      <h1 className="title">
        Hello{" "}
        <span role="img" aria-label="emoji">
          👋
      </span>
        <br />
      I'm a Software Developer{" "}
      </h1>
      <h2 className="subtitle">
        I design, test, develop and deploy {" "}
        <span className="highlighted">Full Stack Applications</span>
      </h2>
      <div className="description">PHP/Laravel/Livewire | Alpine/JavaScript/React/Node.js/Express | HTML/CSS/SASS/Tailwind</div>
    </StyledSection>
  )
}

export default About
