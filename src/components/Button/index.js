import React from "react"
import PropTypes from 'prop-types'
import * as Style from "./styled"

const Button = ({ 
  title,
  background,
  color,
  route,
  marginTop,
  type,
  name,
  noLink
}) => {
  
  const ButtonContainer = () => (
    <Style.ButtonContainer
        type={type}
        name={name}
        marginTop={marginTop}
        background={background}
        color={color}
      >
      {title} 
    </Style.ButtonContainer>
  )

  return (
    <>
    {noLink ? (
      <ButtonContainer />
    ) :
      (
        <Style.ButtonLink
          color={color}
          to={route}
        >
          <ButtonContainer/>
        </Style.ButtonLink>
      )
    }
  </>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.bool,
}

export default Button