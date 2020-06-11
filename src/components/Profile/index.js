import React from "react"
import Avatar from "../Avatar"

const Profile = ({ title, description, button }) => (
  <div className="Profile-wrapper">
    <Avatar />
    <h1>{title}</h1>
    <p>{description}</p>
    {button && <button>{button.title}</button>}
  </div>
)

export default Profile
