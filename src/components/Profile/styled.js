import styled from "styled-components"
import media from "styled-media-query"

export const ProfileWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "avatar description";
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    display: block;
  `}
`

export const ProfileDescription = styled.div`
  grid-area: description;
  background-color: #029DDB;
  color: #fff;
  padding: 40px;
`

export const ProfileAvatar = styled.div`
  grid-area: avatar;
`
