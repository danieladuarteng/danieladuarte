import React from "react"
import Avatar from "../Avatar"
import * as Style from "./styled"

const Profile = ({ title, description, button }) => (
  <Style.ProfileWrapper>
    <Avatar />
    <Style.ProfileDescription>
      <h1>{title}</h1>
      <p>{description}</p>
      {button && <button>{button.title}</button>}
    </Style.ProfileDescription>
  </Style.ProfileWrapper>
)

export default Profile
