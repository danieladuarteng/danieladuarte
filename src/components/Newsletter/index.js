import React from 'react'

const Newsletter = () => (
  <form 
    action="https://danieladuarte.us17.list-manage.com/subscribe/post?u=99d5a979cddef03e25e111bb4&amp;id=b9fbd70afe" 
    method="post" 
    id="mc-embedded-subscribe-form" 
    name="mc-embedded-subscribe-form" 
    class="validate" 
    target="_blank" 
    novalidate
  >
		<legend>Gostou do post?</legend>
      <label for="mce-EMAIL">
        <p>
          Cadastre-se para receber gratuitamente novidades e publicações do blog por e-mail
        </p>
      </label>
      <input 
        type="email" 
        value="" 
        name="EMAIL" 
        placeholder="Coloque seu melhor e-mail" 
        required
      />
      <input 
        type="submit" 
        value="CADASTRAR" 
        name="subscribe" 
        class="botaoEnviar-post"
      />			
	</form>
)

export default Newsletter