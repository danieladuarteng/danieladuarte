import styled from "styled-components"
import media from "styled-media-query"

export const ProfileWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 550px;
  grid-template-areas: 
    "avatar description";

  ${media.lessThan("huge")`
  /* screen width is less than 1440px (huge) */
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  `}

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
