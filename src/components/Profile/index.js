import React from "react"
import PropTypes from 'prop-types'
import Avatar from "../Avatar"
import Button from '../Button'
import * as Style from "./styled"

const Profile = ({ title, description, buttonConfig, color, background }) => (
  <Style.ProfileWrapper>
    <Style.ProfileAvatar>
    <Avatar />
    </Style.ProfileAvatar>
    <Style.ProfileDescription>
      <h1>{title}</h1>
      {description}
      {buttonConfig && (
        <Button 
          title={buttonConfig.title} 
          route={buttonConfig.route}
          color={buttonConfig.color} 
          background={buttonConfig.background}
        />
      )}
    </Style.ProfileDescription>
  </Style.ProfileWrapper>
)

Profile.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.element.isRequired,
  buttonConfig: PropTypes.shape({
    title: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
  })
}

export default Profile


