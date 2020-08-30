import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import PostSection from "../components/PostSection"
import Newsletter from "../components/Newsletter"
import SEO from "../components/seo"

const Description = () => (
  <>
    <p>Trabalho com tecnologia desde 2014,
    onde passei por diversas áreas desde
    criação de documentação de sistemas à
    criação de sites, hotsites e e-mail marketing.</p>
    <p>Nos últimos anos, me especializei em desenvolvimento
    frontend, ou seja, faço os designs se tornarem reais e
    iterativos no mundo da tecnologia.</p>
    <p>
      Além disso, produzo conteúdo sobre
      tecnologia, experiências e aprendizados
    para este blog, minha newsletter e LinkedIn.</p>
  </>
);

const IndexPage = () => {
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
  const newsletterTitle = 'Receba novidades por e-mail!'

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
      <PostSection
        postList={postList}
        title={true}
        button={true}
      />
      {/* <Newsletter title={newsletterTitle}/> */}
    </Layout>
  )
}

export default IndexPage
