import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Button from '../components/Button'
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"

const Description = () => (
  <>
  <p>Trabalho com tecnologia desde 2014, 
  onde passei por diversas áreas desde 
  criação de documentação de sistemas à 
  criação de sites, hotsites e e-mail marketing.</p>
  <p>Nos últimos anos, me especializei em desenvolvimento 
  frontend, ou seja, a parte visual de aplicativos 
  ou sites.</p>
  <p>Atualmente trabalho como Desenvolvedora 
  Frontend, criando interfaces iterativas que 
  atendam as necessidades do cliente.</p>
  <p>
  Além disso, produzo conteúdo sobre 
  tecnologia, experiências e aprendizados 
  para este blog, minha newsletter e LinkedIn.</p>
  </>
);



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
              slug
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
        description={<Description />}
        buttonConfig={
          {
            title: "Saiba mais ",
            route: "/sobre-mim",
            color: "#029DDB",
            background: "#fff"
          }
        }
      />
      <h1>Artigos recentes</h1>
      {postList.map(
        ({
          node: {
            frontmatter: { title, description },
            fields: { slug },
          },
        }) => (
            <PostItem slug={slug} title={title} description={description} />
          )
      )}
      <Button 
          title="TODOS OS ARTIGOS"
          route="/blog"
          color="#fff"
          background="#c96893;"
        />
    </Layout>
  )
}

export default IndexPage
