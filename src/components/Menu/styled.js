import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const Div = styled.div`
  display: flex;
  font-size: 1.2rem;
  font-weight: 300;
  background-color: #e86ed0;
  position: fixed;
  z-index: 99;
  width: 100%;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    display: block;
    background-color: unset;
  `}
`

export const MenuLogo = styled.div`
  display: flex;
  background-color: #e86ed0;
  padding: 10px 20px;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
  `}
`

export const Label = styled.label`
  padding: 5px;
  color: #fff;
  cursor: pointer;
  width: 50px;
  margin: 0;
  text-align: center;
  display: none;
  font-size: 3rem;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    display: block;
  `}
`
export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin-left: -100%;
    transition: all .4s;
    display: block;
  `}
`

export const Input = styled.input`
  display: none;

  &:checked {
    & ~ ${MenuList} {
      margin-left: 0;
    }
  }
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
  border: 1px solid #e86ed0;

  &:hover {
    background-color: #fff;
    color: #e86ed0;
  }
`
