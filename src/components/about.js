
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

const About = () => {
  return (
    <StyledSection id="About">
      <h1 className="title">
        Hello <span role="img" aria-label="emoji">👋</span><br />
        I'm Will
      </h1>
      <h2 className="subtitle">
        I design and build <span className="highlighted">Full Stack Applications</span>.
      </h2>
      <div className="description">
        JavaScript, React, Node.js, Express, Mongo.DB
      </div>
    </StyledSection>
  )
}

export default About
