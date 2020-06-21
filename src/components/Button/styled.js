import styled from "styled-components"
import { Link } from "gatsby"

export const ButtonLink = styled(Link)`
  color: ${prop => prop.color};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
`

export const ButtonContainer = styled.button`
  background: ${prop => prop.background};
  border-radius: 20px;
  padding: 10px 20px;
  border: 1px solid #fff;
  margin-top: 20px;
`