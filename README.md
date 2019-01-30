Projeto básico de React com Firebase. Pode ser usado como _boilerplate_ para novos projetos maiores.

- Autenticação
- Rotas protegidas
- Persistência com Realtime Database

## Setup do Projeto

Deve ser criado um arquivo `.env` no diretório raiz do projeto. O arquivo deve conter as chaves abaixo, preenchidas com os dados de um projeto Firebase:

```
REACT_APP_API_KEY=XXXXxxxx
REACT_APP_AUTH_DOMAIN=xxxxXXXX.firebaseapp.com
REACT_APP_DATABASE_URL=https://xxxXXXX.firebaseio.com
REACT_APP_PROJECT_ID=xxxxXXXX
REACT_APP_STORAGE_BUCKET=xxxxXXXX.appspot.com
REACT_APP_MESSAGING_SENDER_ID=xxxxXXXX
```

## Instalação e execução

Utilizar **yarn** (de preferência) ou **npm**.

Para instalar as dependências do projeto

```sh
yarn install
```

Para executar a aplicação

```sh
yarn start
```

A aplicação será disponibilizada em [http://localhost:3000](http://localhost:3000)
