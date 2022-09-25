# Projeto Trivia

## Sobre
Aplicação de um jogo de perguntas e respostas baseado no jogo Trivia utilizando React e Redux.<br>
[Teste a aplicação aqui](https://afstudiox.github.io/trivia)

## Observações
- Ao logar no jogo, se o email tiver cadastro no site Gravatar, ter sua foto associada ao perfil da pessoa usuária.
- O usuário, ao acessar a página referente ao jogo, deverá escolher uma das respostas disponíveis para cada uma das perguntas apresentadas. A resposta deve ser marcada antes do contador de tempo chegar a zero, caso contrário a resposta deverá ser considerada errada.
- O usuário vai ser redirecionada, após 5 perguntas respondidas, para a tela de score, onde o texto mostrado depende do número de acertos.
- É possível visualizar a página de ranking, se quiser, ao final de cada jogo.
- Algumas opções para o jogo podem ser configuradas por uma tela de configuração acessível a partir do cabeçalho do app.

## Habilidades
- Criar um store Redux em aplicações React
- Criar reducers no Redux em aplicações React
- Criar actions no Redux em aplicações React
- Criar dispatchers no Redux em aplicações React
- Conectar Redux aos componentes React
- Criar actions assíncronas na sua aplicação React que faz uso de Redux.


## Desafios
- [ ] - Criar a tela de login, onde a pessoa que joga deve preencher as informações para iniciar um jogo
- [ ] - Criar o botão de iniciar o jogo
- [ ] - Criar um botão que leva a pessoa para tela de configuração
- [ ] - Criar um header que deve conter as informações da pessoa jogadora
- [ ] - Criar a página de jogo que deve conter as informações relacionadas à pergunta
- [ ] - Desenvolver o jogo onde só deve ser possível escolher uma resposta correta por pergunta
- [ ] - Desenvolver o estilo que, ao clicar em uma resposta, a correta deve ficar verde e as incorretas, vermelhas
- [ ] - Desenvolver um timer onde a pessoa que joga tem 30 segundos para responder
- [ ] - Criar o placar que ao clicar na resposta correta, pontos devem ser somados no placar da pessoa que está jogando
- [ ] - Criar um botão de "Next" que apareça após a resposta ser dada
- [ ] - Desenvolver o jogo de forma que a pessoa que joga deve responder 5 perguntas no total
- [ ] - Desenvolver o header de feedback que deve conter as informações da pessoa jogadora
- [ ] - Criar a mensagem de feedback para ser exibida a pessoa usuária
- [ ] - Exibir as informações relacionadas aos resultados obtidos para a pessoa usuária
- [ ] - Criar a opção para a pessoa jogadora poder jogar novamente
- [ ] - Criar a opção para a pessoa jogadora poder visualizar a tela de ranking
- [ ] - Criar um botão para ir ao início
- [ ] - Criar o conteúdo da tela de ranking
- [ ] - Ao mudar o valor do dropdown categoria, apenas perguntas da categoria selecionada devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave category no retorno da API;
- [ ] - Ao mudar o valor do dropdown dificuldade, apenas perguntas da dificuldade selecionada devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave difficulty no retorno da API;
- [ ] - Ao mudar o valor do dropdown tipo, apenas perguntas do tipo selecionado devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave type no retorno da API.


## Stacks utilizadas
![image](https://user-images.githubusercontent.com/34361632/178182186-5e33e0eb-b622-4781-b68b-447b6039a7dc.png)
![image](https://user-images.githubusercontent.com/34361632/178182193-03ec0ca6-b777-49f4-8ee9-c206bc2eaea9.png)
![image](https://user-images.githubusercontent.com/34361632/178182205-4c05657f-15ad-4055-91ad-8f100d60a936.png)
![image](https://user-images.githubusercontent.com/34361632/178182214-be8d2f93-15f1-46d9-bd4d-e81e1d2d697a.png)
![image](https://icongr.am/devicon/react-original.svg?size=40&color=2068ac)
![image](https://img.icons8.com/color/40/000000/redux.png)


## Como testar localmente:

1. Clone o repositório  `git clone git@github.com:afstudiox/trivia.git`
2. Entre na pasta do projeto com o comando `cd trivia`
3. Instale as dependências necessárias para execução do jogo com o commando `npm install` ou `npm i`
4. Inicie a aplicação com o script `npm start`


##  Fontes de consultas:

 * [Javascript.com](http://javascript.com/)

 * [W3Schools](https://www.w3schools.com/js/default.asp)

 * [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

 - [StackOverflow](https://pt.stackoverflow.com/questions/tagged/javascript)


## ©️ Direitos Autorais
Este projeto foi desenvolvido para fins de aprendizado por [Andre Felipe dos Santos](https://www.linkedin.com/in/afelipes/), [Diene Ferreira](https://www.linkedin.com/in/diene-ferreira/), [Jaqueline Santos](https://www.linkedin.com/in/jaquelineapsantos/), [Thamires Lourenço](https://www.linkedin.com/in/thamires-lourenco/) e [Vinícius de Paula](https://www.linkedin.com/in/vinicius-depaula/). 
É permitido baixar ou clonar o repositório para fins de estudo, porém não é permitida a publicação de cópias totais ou parciais do mesmo. 
Esta isenção de responsabilidade não abrange bibliotecas e dependências, que estão sujeitas às suas respectivas licenças.

