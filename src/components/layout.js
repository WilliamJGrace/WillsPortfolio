
import React from "react"
import styled from "styled-components"

import GlobalStyle from "./globalStyle"
import Header from "./header"
import Footer from "./footer"

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  #main-content {
    width: 100%;
    max-width: 62.5rem;
    margin: 0 auto;
    padding: 0 2.5rem;
  }
`

const Seperator = styled.div`
height: 20px;

`


const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <GlobalStyle />
      <Header />
      <Seperator/>
      <main id="main-content">{children}</main>
      <Seperator/>

      <Footer />
    </StyledLayout>
  )
}

export default Layout
