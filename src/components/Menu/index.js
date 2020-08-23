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
      <Style.Input
        id="btn_menu"
        type="checkbox"
      />
        <label htmlFor="btn_menu" className="label">
          &#9776;
        </label>
      <Style.MenuWrapper>
        <Style.MenuList>
          <Style.MenuItem>
            <Img
              fixed={logo.childImageSharp.fixed}
              alt="Daniela Duarte"
            ///style={{ width: "100px", height: "100px" }}
            />
          </Style.MenuItem>
          {links.map((link, index) => (
            <Style.MenuItem key={index}>
              <Style.MenuLink to={link.url} activeClassName="active">
                {link.label}
              </Style.MenuLink>
            </Style.MenuItem>
          ))}
        </Style.MenuList>
      </Style.MenuWrapper>
    </Style.Div>
  )
}





export default Menu
