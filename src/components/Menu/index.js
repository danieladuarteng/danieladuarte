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

  return(
      <Style.MenuWrapper>
        <Style.MenuList>
        <Img
          fixed={logo.childImageSharp.fixed}
          alt="Daniela Duarte"
        ///style={{ width: "100px", height: "100px" }}
        />
          {links.map((link, index) => (
            <Style.MenuItem key={index}>
              <Style.MenuLink to={link.url} activeClassName="active">
                {link.label}
              </Style.MenuLink>
            </Style.MenuItem>
          ))}
        </Style.MenuList>
      </Style.MenuWrapper>
    )
}
  




export default Menu
