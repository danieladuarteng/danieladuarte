import React from 'react'
import PropTypes from 'prop-types'
import PostItem from "../PostItem"

import Button from '../Button'
import * as Style from "./styled"

const PostSection = ({postList, title, button}) => (
    <Style.PostSection>
      {title && (
        <Style.PostSectionTitle>
          Artigos recentes
        </Style.PostSectionTitle>
      )}
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
          {button && (
            <Style.PostSectionButton>
              <Button 
                title="TODOS OS ARTIGOS"
                route="/blog"
                color="#fff"
                background="#e86ed0;"
                marginTop={false}
              />
            </Style.PostSectionButton>
          )}
          
    </Style.PostSection>
)

PostSection.propTypes = {
  postList: PropTypes.array.isRequired,
  title: PropTypes.bool,
  button: PropTypes.bool,
}

export default PostSection