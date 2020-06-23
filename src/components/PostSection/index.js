import React from 'react'
import PostItem from "../PostItem"
import { useStaticQuery, graphql, Link } from "gatsby"
import Button from '../Button'
import * as Style from "./styled"

const PostSection = () =>{
  const { allMarkdownRemark } = useStaticQuery(graphql`
  query PostList {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            description
            title
            thumbnail
            urlImage
          }
          fields {
            slug
          }
        }
      }
    }
  }
`)

const postList = allMarkdownRemark.edges
return(
    <>
      <Style.PostSectionTitle>Artigos recentes</Style.PostSectionTitle>
        <Style.PostSectionWrapper>
          {postList.map(
            ({
              node: {
                frontmatter: 
                  { 
                    title, 
                    description,
                    thumbnail,
                    urlImage
                  },
                fields: { slug },
              },
            }) => (
                <PostItem 
                  slug={slug} 
                  title={title} 
                  description={description}
                  thumbnail={thumbnail}
                  //legend={legend}
                  urlImage={urlImage} 
                  //alt={alt}
                />
              )
          )}
          </Style.PostSectionWrapper>
        <Button 
          title="TODOS OS ARTIGOS"
          route="/blog"
          color="#fff"
          background="#c96893;"
        />
    </>
  )
}

export default PostSection