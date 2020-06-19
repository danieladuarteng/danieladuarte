import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments';
import * as Style from "./styled"

const Comments = ({ url, title }) => {
  const completeUrl = `https://www.danieladuarte.com.br${url}`
  console.log({ completeUrl })
  return (
    <Style.CommentsWrapper>
      <Style.CommentsTitle>Comentários</Style.CommentsTitle>
      <ReactDisqusComments
        shortname="danieladuarteng"
        identifier={completeUrl}
        title={title}
        url={completeUrl}
      />
    </Style.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments