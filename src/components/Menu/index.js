import React from "react"
import links from "./content"
import * as Style from "./styled"

const Menu = () => (
  <Style.MenuWrapper>
    <Style.MenuList>
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

export default Menu
