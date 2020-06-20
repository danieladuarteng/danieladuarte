/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path") // Not to get lost and work on any SO

// To add the url field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/url`
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'url'
    createNodeField({
      node,
      name: "slug",
      value: `/blog${relativeFilePath.slice(12, -1)}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
  {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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
            slug
          }
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          slug: node.fields.slug, // here is a query variable
          previousPost: next,
          nextPost: previous
        },
      })
    })
    const postsPerPage = 2
    const numPages = Math.ceil(posts.length / postsPerPage) // rounds up

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? "/blog/" : `/blog/page/${index + 1}`,
        component: path.resolve("./src/templates/blog-list.js"),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      })
    })
  })
}
