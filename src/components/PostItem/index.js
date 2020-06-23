import React from "react"
import PropTypes from "prop-types"
import * as Style from "./styled"

const PostItem = ({ slug, title, description, thumbnail, alt }) => (
  <Style.PostItemLink to={slug}>
    <Style.PostItemWrapper>
      <img src={thumbnail} alt={alt}/>
      <Style.PostItemTitle>{title}</Style.PostItemTitle>
      <Style.PostItemDescription>{description}</Style.PostItemDescription>
    </Style.PostItemWrapper>
  </Style.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default PostItem
