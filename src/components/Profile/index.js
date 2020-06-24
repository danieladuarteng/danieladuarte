import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from 'prop-types'
import Button from '../Button'
import * as Style from "./styled"

const Profile = ({ title, description, buttonConfig, color, background }) => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "daniela-duarte.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 450) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )
  return (
      <Style.ProfileWrapper>
        <Style.ProfileAvatar>
          <Img
            fluid={avatarImage.childImageSharp.fluid}
            alt="Daniela Duarte"
            style={{ width: "500px", height: "450px" }}
          />
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
              marginTop={true}
            />
          )}
        </Style.ProfileDescription>
      </Style.ProfileWrapper>
  )
}
  

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


