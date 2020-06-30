import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPosts from '../components/RecommendedPosts'
import Newsletter from '../components/Newsletter'
import Comments from '../components/Comments'
import { graphql } from "gatsby"
import * as Style from "../components/Post/styled"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

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
      <Newsletter title="Gostou do post?" />
      <RecommendedPosts next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
      }
      fields {
        slug
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
