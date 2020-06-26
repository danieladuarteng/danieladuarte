import React from 'react'
import * as Style from "./styled"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Style.FooterWrapper>
      Copyright ₢ {currentYear} | Daniela Duarte
    </Style.FooterWrapper>
  )
}

export default Footer;
  