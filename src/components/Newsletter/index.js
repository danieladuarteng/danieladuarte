import addToMailchimp from "gatsby-plugin-mailchimp"
import Button from '../Button'
import React, { useState } from "react"
import * as Style from "./styled"

const Newsletter = ({ title }) => {

  const [result, setResult] = useState(null);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    const { result } = await addToMailchimp(email)
    setResult(result)
    setLoading(false)
  }
  const handleChange = event => {
    setEmail(event.target.value)
  }

  return (
    <Style.NewsletterWrapper onSubmit={(event) => handleSubmit(event)}>
      <legend>{title}</legend>
      <Style.NewsletterLabel for="mce-EMAIL">
        Cadastre-se para receber gratuitamente atualizações e publicações do blog na sua caixa de entrada!
      </Style.NewsletterLabel>
      <input
        type="email"
        value={email}
        name="EMAIL"
        placeholder="Seu melhor e-mail"
        onChange={(event) => handleChange(event)}
        required
      />
      {
        result === 'success' ?
        (
          <div>Obrigada por inscrever-se!</div>
        ) :
        result === 'error' ?
        (
          <div>Houve algum erro, por favor digite novamente ou envie um e-mail para falecom@danieladuarte.com.br</div>
        ) :
        (
          <Style.ButtonWrapper>
            <Button
              type="submit"
              title="CADASTRAR"
              name="subscribe"
              color="#029DDB"
              background="#fff"
              noLink
              disabled={loading}
            />
            {loading && <Style.Loader />}
          </Style.ButtonWrapper>
        )
      }
    </Style.NewsletterWrapper>
  )
}


export default Newsletter;