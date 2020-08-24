import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import * as Style from "./styled"

const Newsletter = ({title}) => (
  <Style.NewsletterWrapper 
    action="https://danieladuarte.us17.list-manage.com/subscribe/post?u=99d5a979cddef03e25e111bb4&amp;id=b9fbd70afe" 
    method="post" 
    id="mc-embedded-subscribe-form" 
    name="mc-embedded-subscribe-form" 
    className="validate" 
    target="_blank" 
    novalidate
  >
		<legend>{title}</legend>
      <Style.NewsletterLabel for="mce-EMAIL">
      Cadastre-se para receber gratuitamente atualizações e publicações do blog na sua caixa de entrada!
      </Style.NewsletterLabel>
      <input 
        type="email" 
        value="" 
        name="EMAIL" 
        placeholder="Seu melhor e-mail"
        required
      />
      <Button
        type="submit" 
        title="CADASTRAR" 
        name="subscribe" 
        color="#029DDB"
        background="#fff"
      />		
	</Style.NewsletterWrapper>
)

Newsletter.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Newsletter