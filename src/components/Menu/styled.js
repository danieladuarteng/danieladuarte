import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const Div = styled.div`
  * {
    font-size: 1.2rem;
    font-weight: 300;
  }

  .label {
    padding: 5px;
    background-color: #e86ed0;
    color: #fff;
    cursor: pointer;
    width: 50px;
    heigth: 50px;
    text-align: center;
    display: none;
  }
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    .label { display: block }
  `}
`
export const MenuWrapper = styled.nav`
  background-color: #e86ed0;
  width: 100%;
  height: 120px;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin-top: 5px;
    margin-left: -100%;
    transition: all .4s;
  `}
`

export const Input = styled.input`
  display: none;

  &:checked {
    & ~ ${MenuWrapper} {
      margin-left: 0
    }
  }
`
export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  position: relative;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    display: block;
` }
`

export const MenuItem = styled.li`
  text-align: center;
  text-transform: uppercase;
  width: 150px;

  .active {
    text-decoration: underline;
  }

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width: 100%;
  `}
`

export const MenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 15px;
  display: block;
  background-color: #e86ed0;

  &:hover {
    background-color: #fff;
    color: #e86ed0;
  }
`
