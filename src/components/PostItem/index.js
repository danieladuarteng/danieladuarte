import React from "react"
import PropTypes from "prop-types"
import * as Style from "./styled"

const PostItem = ({ url, title, description }) => (
  <Style.PostItemLink to={url}>
    <Style.PostItemWrapper>
      <Style.PostItemTitle>{title}</Style.PostItemTitle>
      <Style.PostItemDescription>{description}</Style.PostItemDescription>
    </Style.PostItemWrapper>
  </Style.PostItemLink>
)

PostItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
