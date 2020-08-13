import styled from "styled-components"
import { Link } from "gatsby"

export const MenuWrapper = styled.nav`
  background-color: #e86ed0;
`

export const MenuList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
`

export const MenuItem = styled.li`
  text-align: center;
  text-transform: uppercase;

  .active {
    text-decoration: underline;
  }
`

export const MenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`
