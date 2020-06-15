import React from "react"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const BlogList = props => {
  console.log({ props })
  const postList = props.data && props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog" />
      {postList.map(
        ({
          node: {
            frontmatter: { title, description },
            fields: { url },
          },
        }) => (
          <PostItem url={url} title={title} description={description} />
        )
      )}
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
            category
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
            description
            title
          }
          timeToRead
          fields {
            url
          }
        }
      }
    }
  }
`

export default BlogList
