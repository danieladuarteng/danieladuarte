import React from 'react'
import PostItem from "../PostItem"
import { useStaticQuery, graphql, Link } from "gatsby"
import Button from '../Button'
import * as Style from "./styled"

const PostSection = () =>{
  const { allMarkdownRemark } = useStaticQuery(graphql`
  query PostList {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
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
                    urlImage,
                    alt
                  },
                fields: { slug },
              },
            }) => (
                <PostItem 
                  slug={slug} 
                  title={title} 
                  description={description}
                  thumbnail={thumbnail}
                  urlImage={urlImage} 
                  alt={alt}
                />
              )
          )}
          </Style.PostSectionWrapper>
          <Style.PostSectionButton>
            <Button 
              title="TODOS OS ARTIGOS"
              route="/blog"
              color="#fff"
              background="#c96893;"
              marginTop={false}
            />
        </Style.PostSectionButton>
        
    </>
  )
}

export default PostSection