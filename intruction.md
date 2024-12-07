# Rodando o `Stock Manager` na sua máquina:
 
 ## Requisitos:
  - [NodeJs](https://nodejs.org/en)
  - [Git](https://git-scm.com/downloads)
  - [Docker](https://www.docker.com/)

  ### Repositórios:
  
  Para rodar o projeto completo na sua máquina é necessário ter esses dois repositórios clonados
  - [Front-end](https://github.com/gabriel-vitebo/stockManager)
  - [Back-end](https://github.com/gabriel-vitebo/stockManagerAPI)

  Dica: Crie uma paste como `trabalhoEtep`ou algo assim, e clone os 2 repositórios dentro dessa pasta

  ### ATENÇÃO: A documentação daqui pra baixo vai ser dividida entre o repositorio do front e do back, PRESTE ATENÇÃO para não confundir e fazer errado
 
  ## Clonando o repositório  DO BACK-END:

  - Crie uma conta no [GITHUB](https://github.com/)
  - Com a conta criada, acesse o [repositório](https://github.com/gabriel-vitebo/stockManagerAPI) mencionado acima
  - clique em `code`, logo depois em `https` copie o link
  <img src="./assets/Captura de tela de 2024-12-07 14-10-01.png" alt="foto do clone do repositorio">

  ### No VSCODE (ou qualquer outro editor de texto):
  clique em "abrir pastas" e selecione a pasta que você criou
  Logo depois, abra o terminal e confira se está na pasta correta

  se tiver, execute o comando

  ```
  git clone https://github.com/gabriel-vitebo/stockManager.git
  ```
  Deverá aparecer uma pasta com o nome `stockManagerBackEnd`, aqui você tem duas opçoes
  
  1 - Clique em `Abrir pastas`e selecione a pasta criada

  OU

  2 - no proprio terminal rode o comando `cd stockManagerBackEnd`

  Depois disso, com o terminal aberto, confira se está realmente dentro da pasta `stockManagerBackEnd`

  Caso estiver, rode o comando
```
npm install
```

deverá aparecer a pasta `node_modules`na raiz do projeto

Agora, se você rodar o comando

```
npm run dev
```

Se tudo der certo, o terminal devera mostrar uma mensagem como: `server running on port 3333`

isso significa que o servidor está rodando local na sua máquina

# Criando o banco de dados

Antes de criar o banco de dados, é bom avisar, o banco de dados não vai rodar diretamente na sua máquina, ela vai rodar em uma imagem docker, que nao vou me extender muito aqui mas recomendo estudar sobre, usamos muito no dia a dia no mercado de trabalho

no terminal, ainda dentro do projeto, rode o comando:
```
docker compose up
````

Se tudo der certo, o banco já esta criado e rodando

agora, vamos criar as tables do nosso banco de dados

rode o comando
```
npx prisma migrate dev
```

esse comando vai rodar todas as `migrates` e assim criar as tables do banco de dados

caso queria ver, existe uma pasta na raiz do projeto chamada `prisma`e dentro dela tem o `schema` do banco de dados, fique avontade para olhar e perguntar algo

# Testando

Para testar, recomendo que baixe o [insomnia](https://insomnia.rest/)
mas não vou explicar como usa, entao uma alternativa mais simples é baixar a extenção no proprio vscode do `REST client`

com essa extenção instalada, o docker rodando e o servidor no ar, no terminal coloque

```
POST https://localhost:3333/users HTTP/1.1
content-type: application/json

{
  "name": "seu nome",
  "email": "seu@email.com",
  "password": "suaSenha",
}
```

o retorno disso deverá ser `201` e no terminal, rodando

```
npx prisma studio
```

vai abrir o banco de dados do prisma, e na tebela de `users` deverá ter o seu usuário lá





## Clonando o repositório  DO FRONT-END:

  - Crie uma conta no [GITHUB](https://github.com/)
  - Com a conta criada, acesse o [repositório](https://github.com/gabriel-vitebo/stockManager) mencionado acima
  - clique em `code`, logo depois em `https` copie o link
  <img src="./assets/Captura de tela de 2024-12-07 14-10-01.png" alt="foto do clone do repositorio">

  ### No VSCODE (ou qualquer outro editor de texto):
  clique em "abrir pastas" e selecione a pasta que você criou
  Logo depois, abra o terminal e confira se está na pasta correta

  se tiver, execute o comando

  ```
  git clone https://github.com/gabriel-vitebo/stockManager.git
  ```
  Deverá aparecer uma pasta com o nome `stockManagerFrontEnd`, aqui você tem duas opçoes
  
  1 - Clique em `Abrir pastas`e selecione a pasta criada

  OU

  2 - no proprio terminal rode o comando `cd stockManagerFrontEnd`

  Depois disso, com o terminal aberto, confira se está realmente dentro da pasta `stockManagerFrontEnd`

  Caso estiver, rode o comando
```
npm install
```

clique no link que aparecerá, e pronto, você está dentro da página principal