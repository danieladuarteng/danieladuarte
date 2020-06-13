import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  display: flex;
  text-decoration: none;
`

export const PostItemWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
  color: #c96893;
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
  color: #47525e;
`
