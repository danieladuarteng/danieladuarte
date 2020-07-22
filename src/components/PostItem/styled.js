import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  text-decoration: none;
`

export const PostItemWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 0 20px 20px 20px;
  img {
    display: block;
    width: 350px;
    height: 250px;
    max-width: 350px;
    max-height: 200px;
    margin: auto auto 1.875rem auto;
  }
`

export const PostItemTitle = styled.h1`
  color: #fc3cb4;
  text-align: center;
`

export const PostItemDescription = styled.p`
  color: #47525e;
  text-align: center;
`
