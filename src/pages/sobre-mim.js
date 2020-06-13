import React from "react"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import SEO from "../components/seo"

const AboutPage = () => {
  const description = `Tenho 25 anos,
    trabalho com desenvolvimento frontend, 
    sou formada em engenharia da computação e técnico em informática.
    Sou apaixonada por tecnologia e empreendedorismo, 
    apoio o desenvolvimento de mais mulheres na área de tecnologia, 
    por isso escrevo neste blog sobre tecnologia, experiências e 
    aprendizados, a fim de inspirar e orientar cada vez mais, mulheres 
    que estão ou querem entrar no mundo da computação.
    Possuo experiência nas áreas de tecnologia, administração e 
    marketing desde startups à multinacionais como Santa Marina, 
    CBB Web (Medcel), Saint-Gobain e Kestraa.
    Tive meu TCC (Cartão Virtual Biométrico) patenteado e selecionado
    para o programa de mentoria de startups da Escola de Negócios do Sebrae.
    Fui selecionada entre 2500 inscrições para ser uma das 100 mulheres 
    empreendedoras a participar do programa de liderança feminina da 
    Google o Womenwill.`

  return (
    <Layout>
      <SEO title="Sobre mim" />
      <Profile title="Oii, eu sou a Daniela..." description={description} />
    </Layout>
  )
}

export default AboutPage
