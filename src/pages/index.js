import React from "react"
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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Profile
      title="Oii, eu sou a Daniela..."
      description={description}
      button={{ title: "Saiba mais ", route: "/sobre-mim" }}
    />
    <PostItem
      slug="/slug/"
      title="Title of post"
      description="Description of post"
    />
  </Layout>
)

export default IndexPage
