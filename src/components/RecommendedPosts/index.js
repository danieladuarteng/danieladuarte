import React from 'react'
import PropTypes from 'prop-types'
import * as Style from "./styled"

const RecommendedPosts = ({ next, previous }) => (
  <Style.RecommendedWrapper>
    {previous && (
      <Style.RecommendedLink
        to={previous.fields.url}
        className="previous">
        {previous.frontmatter.title}
      </Style.RecommendedLink>
    )}
    {next && (
      <Style.RecommendedLink
        to={next.fields.url}
        className="next">
        {next.frontmatter.title}
      </Style.RecommendedLink>
    )}
  </Style.RecommendedWrapper>
)

RecommendedPosts.propTypes = {
  next: PropTypes.shape({
    fields: PropTypes.shape({
      url: PropTypes.string.isRequired
    }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  }),
  previous: PropTypes.shape({
    fields: PropTypes.shape({
      url: PropTypes.string.isRequired
    }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  })
}

export default RecommendedPosts