import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  text-decoration: none;
  padding: 20px;
`

export const PostItemWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  img {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 300px;
    margin: auto auto 1.875rem auto;
  }
`

export const PostItemTitle = styled.h1`
  color: #e86ed0;
  text-align: center;
`

export const PostItemDescription = styled.p`
  color: #47525e;
  text-align: center;
`
