import React from "react"
import styled from "styled-components"
import { Link } from "gatsby-plugin-intl"

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--background-color);
  z-index: 2;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 50em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    padding-bottom: 1em;
  }
`

const Title = styled(Link)`
  font-size: 1.2em;
  letter-spacing: 5px;
  padding: 1em 0;
  white-space: nowrap;
  color: var(--font-color);
  text-decoration: none;

  @media only screen and (max-width: 600px) {
    padding: 1em;
  }
`

const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--code-font);
  height: 100%;
  color: var(--font-color);

  & > * {
    margin-left: 2em;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;

    & > * {
      margin: 0;
    }
  }
`

const Header = ({ title, children }) => {
  return (
    <StyledHeader>
      <Container>
        <Title to="/">{title}</Title>
        <Options>{children}</Options>
      </Container>
    </StyledHeader>
  )
}

export default Header
