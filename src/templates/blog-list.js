import React from "react"
import PostSection from "../components/PostSection"
import Pagination from "../components/Pagination"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const BlogList = props => {
  const postList = props.data && props.data.allMarkdownRemark.edges


  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/blog" : `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Blog" />
      <PostSection postList={postList} />
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query PostListBlog($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            description
            title
            thumbnail
            urlImage
            alt
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogList
