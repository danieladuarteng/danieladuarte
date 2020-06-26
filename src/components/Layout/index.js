import React from "react"
import PropTypes from "prop-types"
import Menu from "../Menu"
import Footer from "../Footer"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <header>
        <Menu />
      </header>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
