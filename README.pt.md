# API Esporte Favorito 

[![Português](https://img.shields.io/badge/Idioma-Portugu%C3%AAs-blue)](README.pt.md) [![English](https://img.shields.io/badge/Language-English-green)](README.md)

Este projeto é construído com Node.js, TypeScript e SQLite. O projeto inclui uma rota POST para inserir dados de um arquivo CSV em um banco de dados e uma rota GET para filtrar usuários com base nos parâmetros de consulta.

## Visão geral

O projeto tem como objetivo fornecer uma integração perfeita entre o frontend e o banco de dados, expondo duas rotas principais:

1. **POST /api/users**: Esta rota permite inserir dados de um arquivo CSV no banco de dados. O arquivo CSV deve conter informações do usuário, como nome, e-mail e endereço. A API irá analisar o arquivo CSV e inserir os dados na tabela 'users' no banco de dados SQLite.

2. **GET /api/users**: Esta rota permite filtrar usuários com base nos parâmetros de consulta. A API irá comparar o texto passado na consulta com cada coluna da tabela 'users' no banco de dados e retornar os resultados correspondentes.

## Tecnologias utilizadas

O projeto é construído utilizando as seguintes tecnologias:

- Node.js: Um ambiente de execução JavaScript que nos permite executar código JavaScript fora de um navegador da web.
- TypeScript: Um superset do JavaScript que adiciona tipagem estática e outras funcionalidades para melhorar a qualidade e a manutenibilidade do código.
- SQLite: Um sistema de gerenciamento de banco de dados leve e baseado em arquivo que oferece uma maneira simples e eficiente de armazenar e recuperar dados.

## Pré-requisitos

Antes de executar o projeto, verifique se você possui os seguintes pré-requisitos instalados:

- Node.js: [Baixe e instale o Node.js](https://nodejs.org/en/download/)
- SQLite: [Baixe e instale o SQLite](https://www.sqlite.org/download.html)

## Começando

Para começar com o projeto, siga estas etapas:

1. Clone o repositório: `git clone <url-do-repositório>`
2. Navegue até o diretório do projeto: `cd <diretório-do-projeto>`
3. Instale as dependências: `npm install`
4. Inicie o servidor: `npm run dev`

## Rotas da API

A API expõe os seguintes pontos de extremidade:

- **POST /api/users**: Use este ponto de extremidade para inserir dados de um arquivo CSV no banco de dados. O arquivo CSV deve ser enviado como uma solicitação multipart/form-data, com o campo 'file' contendo o arquivo CSV.

- **GET /api/users**: Use este ponto de extremidade para filtrar usuários com base nos parâmetros de consulta. A API irá comparar o texto passado na consulta com cada coluna da tabela 'users' no banco de dados e retornar os resultados correspondentes.
