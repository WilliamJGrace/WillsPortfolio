import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  width: 100%;
  height: 4.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: white;
`

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/" aria-label="home">
        <StyledLogo>Will Grace.</StyledLogo>
      </Link>
    </StyledHeader>
  )
}

export default Header