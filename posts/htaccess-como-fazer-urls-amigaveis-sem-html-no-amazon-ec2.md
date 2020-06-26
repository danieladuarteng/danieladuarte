---
title: .HTACCESS - Como fazer URLs amigáveis (sem .html) no Amazon EC2
category: tecnologia
author: Daniela Duarte
description: "Aprenda a fazer URLs amigáveis "
date: 2018-01-16T12:29:14.000Z
thumbnail: assets/img/url.jpg
alt: "Imagem da url: http://www."
urlImage: https://pixabay.com/pt/illustrations/http-www-digital-368146/
legend: PIXABAY
---
Aprendi HTML no 1º ano do ensino médio, sou técnica em informática desde 2013, e recém formada em engenharia da computação, porém todos esses anos nunca tinha colocado um site no ar.

Então montei meu site, em um mês. E como gosto de ter uma boa base, não gosto de utilizar frameworks, plugins, e outras coisas que facilitam a vida do programador, podem me chamar de burra, mas prefiro aprender fazendo as coisas do zero para realmente entender como tudo funciona.

Hospedei meu site no EC2 da Amazon, e configurar isso é foda para quem não sabe nada de servidores, assim como eu, então cada dia estou aprendendo um pouco sobre a ferramenta.

Desde que lancei o site, estava implicando com isso:

![Imagem da url: danieladuarte.com.br/sobremim.html](/assets/img/url-com-ponto-html-no-final.jpg)

Minhas URLs com .html no final, estava me dando nos nervos, eu pensava: como alguém vai pedir para eu fazer um site com essa URL feia desse jeito, parece que nem sabe fazer site :O

Somente agora tive tempo de começar as modificações no meu site, e essa era a primeira da lista, foi difícil saber o que procurar para transformar minha URL em uma URL amigável, como essa:

![Imagem da url: danieladuarte.com.br/sobremim](/assets/img/url-sem-ponto-html-no-final.jpg)

Mas finalmente consegui, vamos ao passo-a-passo:

## Primeiro você precisa saber como essa configuração se chama: HTACCESS

O HTACCESS é um arquivo de configuração do servidor Apache que tem diversas funcionalidades, e uma delas é a customização de URLs amigáveis, que será abordado nesse artigo.

## Agora a parte da configuração

## Configuração do HTTPD

1. Acesse o servidor via SSH\
Eu utilizo o PUTTY no Windows para acessar o servidor, se quiserem saber como configurá-lo me fale nos comentários. Como já está salva a configuração, seleciono AWS e clico em OPEN

![Print da tela de configuração do PuTTY Configuration, selecionando aws e clicando no botão Open](/assets/img/putty-configuration.jpg)

2. Será aberto o terminal SSH, acesse como administrador:

`sudo su`

3. Entre na pasta de configurações:

`cd /etc/httpd/conf`

4. Abra o arquivo de configuração (httpd.conf) no VI:

`vi httpd.conf`

5. Será exibido o arquivo httpd.conf no editor VI para sua edição:

![Arquivo do httpd.config aberto no VI](/assets/img/arquivo-httpd-aberto-no-vi.jpg)

6. Procure por esse trecho de código: "AllowOverride None" e altere para "AllowOverride All", conforme mostrado abaixo:

![Arquivo httpd.config aberto no VI, editando a palavra AllowOverride None para AllowOverride All](/assets/img/tela-com-comando-allowoverride-all.jpg)

7. Após alteração, para sair e salvar aperte ESC, digite :wq e dê ENTER

8. Você voltará para tela de inicio

9. Agora é preciso reiniciar o HTTPD, digite:

`service httpd restart`

10. Aparecerá que o servidor foi reiniciado com sucesso:

![Mensagem que o servidor httpd foi resetado com sucesso](/assets/img/mensagem-de-httpd-reiniciado-com-sucesso.jpg)

<!--StartFragment-->

## Criando o HTACCESS

Agora que a configuração foi realizada, temos que criar o arquivo HTACCESS:

1. Ainda no terminal, entre na pasta html

`cd /var/www/html`

2. Digite o seguinte trecho para entrar ou criar o arquivo .htaccess

`vi .htaccess`

3. Digite o seguinte código:

```c
<ifModule mod_rewrite.c>
  RewriteEngine on
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME}\.html -f
  RewriteRule ^(.*)$ $1.html
</ifModule>

```

4. Após a digitação do código, aperte ESC, digite :wq e dê ENTER, para sair e salvar o arquivo.

## Finalizando

Agora só configurar as urls no HTML para o redirecionamento sem o .html, conforme mostrado abaixo:

```html
<ul id="submenu" class="lista-menu alinhamento">
  <li><a href="/">Início</a></li>
  <li><a href="servicos">Serviços</a></li>
  <li><a href="sobre-mim">Sobre mim</a></li>
  <li><a href="blog">Blog</a></li>
  <li><a href="fale-comigo">Fale comigo</a></li>
</ul>
```

E seu site funcionará sem o .html

![Print da parte falecomigo do site danieladuarte.com.br com a url sem o .html no final](/assets/img/site-sem-o-ponto-html.jpg)

...

O que achou desse post, quer ver mais conteúdos parecidos com esse no blog? Sabia configurar o HTACCESS? 

Deixe seu comentário e se ficou alguma dúvida só postar nos comentários ;)