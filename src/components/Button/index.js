import React from "react"
import PropTypes from 'prop-types'
import * as Style from "./styled"

const Button = ({title, background, color, route}) =>(
  <Style.ButtonContainer background={background}>
    <Style.ButtonLink
      color={color}
      to={route}
    >
    {title}
    </Style.ButtonLink>
  </Style.ButtonContainer>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
}

export default Button