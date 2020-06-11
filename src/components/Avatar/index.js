import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "daniela-duarte.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )
  return (
    <Img
      fluid={avatarImage.childImageSharp.fluid}
      alt="Daniela Duarte"
      style={{ width: "500px" }}
    />
  )
}

export default Avatar
