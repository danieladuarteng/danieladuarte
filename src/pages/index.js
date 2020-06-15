import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Profile from "../components/Profile"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"

const description = `
Trabalho com tecnologia desde 2014, 
onde passei por diversas áreas desde 
criação de documentação de sistemas à 
criação de sites, hotsites e e-mail marketing.
Nos últimos anos, me especializei em desenvolvimento 
frontend, ou seja, a parte visual de aplicativos 
ou sites.
Atualmente trabalho como Desenvolvedora 
Frontend, criando interfaces iterativas que 
atendam as necessidades do cliente.
Além disso, produzo conteúdo sobre 
tecnologia, experiências e aprendizados 
para este blog, minha newsletter e LinkedIn.`

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
  `)

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <Profile
        title="Oii, eu sou a Daniela..."
        description={description}
        button={{ title: "Saiba mais ", route: "/sobre-mim" }}
      />
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
      <Link to="/blog">TODOS OS POSTS</Link>
    </Layout>
  )
}

export default IndexPage
