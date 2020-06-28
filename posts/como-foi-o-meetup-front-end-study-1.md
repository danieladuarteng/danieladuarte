---
title: "Como foi o Meetup Front-End Study #1"
category: ti-para-todos
author: Daniela Duarte
description: Minha experiência no meetup Front-End Study
date: 2018-07-04 08:55:05
thumbnail: /assets/img/capa-do-meetup-front-end-study.png
alt: Capa do meetup Front-end Study, com meninas felizes e o título do meetup na
  frente da foto, e dois itens indicando que há grupos de mentoria e garotas que
  ajudam garotas
urlImage: https://www.meetup.com/pt-BR/WoMakersCode/events/252004135/
legend: Imagem retirada do meetup front-end study
---
<!--StartFragment-->

Primeiro para quem não conhece:

***Meetup: é um encontro presencial informal onde pessoas se reúnem para fazer networking e diversas atividades. Existe o site e aplicativo [Meetup,](https://www.meetup.com/pt-BR/about/) que ajuda a organizar esses eventos, além de você poder encontrar muitos grupos bem legais e diferentes, tem para todo gosto.***

Eu já tinha me cadastrado na plataforma há algum tempo, porém ainda não tinha visto nenhum interessante, foi que vi no grupo do facebook do [Elas Programam](https://www.facebook.com/groups/elasprogramam) sobre o Meetup de Front-End Study organizado pelo [WoMakersCode,](http://womakerscode.org/) fui ver na descrição e tava lá: palestras de Vue.js, React e Inteligência Artificial mais mentoria <3

Palestras da minha área e ainda de IA que é uma das minhas grandes paixões, até parece que ia perder.

## No dia

Começamos com um almoço e muito networking oferecido pela empresa parceira Microsoft <3

## Primeira palestra sobre Vue.js (se lê View js) feita pela Karoline Setoue

Resumão:



* Os frameworks de Javascript foram criados para organizar sua estrutura e ainda para corrigir alguns bugs (erros)
* Os mais utilizados hoje são: Angular, React e Vue
* O Vue usa templates, é mais rápido para aprender em comparação aos outros, pois você vai aprendendo e já consegue colocar em prática o pouco que aprendeu e possui componentes atualizáveis, ou seja, você atualiza um parâmetro em um arquivo e não precisa ir nos outros arquivos que ele está também, pois ele já atualiza para você ;)
* DOM *(Document Object Model)* é uma interface que representa os componentes da página e o Virtual DOM é um framework para manipulação do DOM



Mais sobre o Vue.js:



1. É um framework progressivo do JS para construção de interfacesFunciona como componente
2. Indicado para fazer SPA *(Single Page Application)*
3. Renderização via Virtual DOM
4. Reatividade: guarda estados das variáveis
5. Tem um ciclo de vida de inicio e fim, quando é terminado o processo ele é destruído
6. Para saber mais: <https://vuejs.org/>



Foi uma palestra que me abriu muito os olhos aos frames, que realmente ajudam e facilitam o desenvolvimento.



## Segunda palestra foi sobre React realizada pela Lais Lima

Resumão:



* React é uma linguagem de programação declarativa, ou seja, escrevemos o que queremos e não como queremos. Um exemplo legal que encontrei no site da Udacity foi esse:



[Imagine que você tenha a possibilidade de “curtir” uma publicação em seu site.](https://br.udacity.com/blog/post/react-o-que-e-como-funciona)

[Caso essa publicação seja curtida, a cor do botão é alterada. Se não havia sido curtida antes, o botão fica azul. Caso já tenha sido curtida anteriormente, a publicação será "descurtida", ou seja, o botão voltará a ser cinza.](https://br.udacity.com/blog/post/react-o-que-e-como-funciona)

[Em uma linguagem imperativa, usando JavaScript, o resultado poderia ser obtido do seguinte modo:](https://br.udacity.com/blog/post/react-o-que-e-como-funciona)

```
if(usuario.curtiu()) 
{
  if(botaoEstaAzul()) 
  {
    removeAzul();
    adicionaCinza();
  } else 
  {
     removeCinza();
     adicionaAzul();
   }
}
```

[Veja como o programador precisa se preocupar com cada passo da ação para mudar a cor do botão.](https://br.udacity.com/blog/post/react-o-que-e-como-funciona)

[Se o usuário clica e o botão já está azul, remove-se a cor azul e adiciona-se a cor cinza. Caso contrário, o processo é o inverso.](https://br.udacity.com/blog/post/react-o-que-e-como-funciona)

[Você deve ter percebido como esse tipo de solução pode ficar complexo em uma aplicação real.](https://br.udacity.com/blog/post/react-o-que-e-como-funciona)

[Veja agora como fazer a mesma ação usando o React:](https://br.udacity.com/blog/post/react-o-que-e-como-funciona)

```
if(this.state.curtido) {
  return;
} else {
  return ;
}

```

[O código acima deixa claro que a linguagem não está preocupada em saber todos os passos para executar a ação.](https://br.udacity.com/blog/post/react-o-que-e-como-funciona)

[Caso o state.curtido do botão seja verdadeiro, retorna o componentecurtidaAzul; se for falso, retorna curtidaCinza. Assim, o React se preocupa apenas com o que é exibido na interface do usuário.](https://br.udacity.com/blog/post/react-o-que-e-como-funciona)

* React é móvel, através do React Native é possível programar em uma vez só e criar aplicativos tanto para iOS quanto para Android e também para VR
* Também tem seu próprio Virtual DOM
* Ela também fez uma demonstração na prática de como funciona os props (valores herdados para componentes), com os componentes Contatinhos, Crush e ContatoDoCrush atribuindo o contato do whatsapp no state (valores que vão ser alterados), através da sua [demo Contatinhos](https://github.com/lalizita/react-demo-contatinhos)

Foi bem legal essa palestra, ver na prática como funcionava certas coisas do React me fez pensar em várias coisas que quero implementar nos meus projetos.

Depois tivemos um coffee break

Após o coffe, tive a palestra da Cythia Zanoni, onde ela falou sobre **Inteligência Artificial, Front-end e super poderes.**

Ela mostrou como a IA pode ajudar na questão de acessibilidade, mostrou os serviços cognitivos da Microsoft, que podem ser implementados nos sites, sistemas, para que todos (pessoas com deficiência auditiva, visual, motora e sem deficiência) possam consumir cada vez mais o que está na internet.

Essa a palestra que mais me chamou atenção no descritivo do Meetup e realmente me abriu os olhos para novas coisas que posso criar e que meu amor por IA e Front-End podem trabalhar juntos.

Na hora da mentoria:

![Foto do grupo de meninas na hora da mentoria](/assets/img/foto-do-grupo-de-meninas-na-hora-da-mentoria.jpg)

Por último fomos separadas em grupos de 5 e cada grupo ficou com uma mentora com experiência na área de Front-End, e tivemos que discutir sobre a carreira, mercado e orientadas a elaborar um plano de estudos para que atingíssemos nossos objetivos.

Um conselho maravilhoso que tive da mentora [Cristina Luz](https://www.linkedin.com/in/cristinaluz07/) foi de fazer um projeto com tudo que queremos aprender, pois assim já colocamos na prática, aprendemos com os erros e ainda criamos um portfólio para mostrar nas entrevistas.

Mulheres lindas, que estiveram lá:

![Foto de todas as meninas que participaram do meetup](/assets/img/foto-de-todas-as-meninas-que-participaram-do-meetup.jpg)

Agradeço muito a iniciativa do WoMakersCode desse Meetup maravilhoso que me trouxe tanto conhecimento e que me incentivou a fazer esse post para que mais pessoas que não puderam comparecer tivessem acesso ao conhecimento que adquirimos lá.

E teremos uma continuação desses Meetups de Front-End Study, esse foi o primeiro de muitos que aconteceram, se quiser participar dos próximos segue o [Meetup do WoMakersCode](https://www.meetup.com/pt-BR/WoMakersCode/) e fique atenta aos próximos.

...

E você já conhecia os Meetups? Já foi em um? Como foi sua experiência lá?

Me conte nos comentários