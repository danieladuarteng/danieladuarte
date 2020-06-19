import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import * as Style from "../components/Post/styled"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Style.PostHeader>
        <Style.PostDate>{post.frontmatter.date} - {post.timeToRead} min de leitura</Style.PostDate>
        <Style.PostTitle>{post.frontmatter.title}</Style.PostTitle>
        <Style.PostDescription>{post.frontmatter.description}</Style.PostDescription>
      </Style.PostHeader>
      <Style.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </Style.MainContent>
    </Layout>
  )
}

export const query = graphql`
  query Post($url: String!) {
    markdownRemark(fields: { url: { eq: $url } }) {
      frontmatter {
        title
        description
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
