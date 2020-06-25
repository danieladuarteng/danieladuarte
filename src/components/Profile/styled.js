import styled from "styled-components"

export const ProfileWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "avatar description";
`

export const ProfileDescription = styled.div`
  grid-area: description;
  background-color: #029DDB;
  color: #fff;
  padding: 40px 20px;
`

export const ProfileAvatar = styled.div`
  grid-area: avatar;
`
