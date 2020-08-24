import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import links from "./content"
import * as Style from "./styled"

const Menu = () => {
  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "logotipo.png" }) {
          childImageSharp {
            fixed(width: 150, height: 100) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <Style.Div>

      <Style.MenuLogo>

        <Img
          fixed={logo.childImageSharp.fixed}
          alt="Logo escrito Daniela Duarte"
        />

        <Style.Label
          htmlFor="btn_menu"
        >
          &#9776;
        </Style.Label>

      </Style.MenuLogo>

      <Style.Input
        id="btn_menu"
        type="checkbox"
      />

      <Style.MenuList>

        {links.map((link, index) => (
          <Style.MenuItem key={index}>

            <Style.MenuLink
              to={link.url}
              activeClassName="active"
            >
              {link.label}
            </Style.MenuLink>
            
          </Style.MenuItem>
        ))}

      </Style.MenuList>

    </Style.Div>
  )
}

export default Menu
