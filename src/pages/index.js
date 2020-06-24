import React from "react"
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
      <PostSection/>
      <Newsletter />
    </Layout>
  )
}

export default IndexPage
