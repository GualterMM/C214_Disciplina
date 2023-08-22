# Projeto API em Node
Um projeto de API utilizando NodeJS, Express e MongoDB. A aplicação consiste em um simples CRUD de um banco de dados de carros, incluindo teste unitários e testes mock.

## 🔧 Pré-requisitos
1. Instalação do [NodeJS](https://nodejs.org/).
2. Uma ferramenta que possibilite o envio e recebimento de requisições HTTP, como um browser ou [Postman](https://www.postman.com/).
3. Uma ferramenta de terminal.

## 🚀 Instalando o projeto
Crie um novo diretório no seu sistem operacional o qual você deseja instalar o projeto.
Depois, clone o respositório utilizando o seguinte comando:

```
git clone https://github.com/GualterMM/C214-Lab-Relatorio07.git
```

Com o repositório clonado, abra sua ferramenta de terminal no diretório do projeto e instale as dependências do projeto usando o comando:

```
npm install
```

Para executar o projeto, utilize um dos seguintes comandos:

```
npm start
```

```
npm run start
```

Para executar a suite de testes, utilize um dos seguintes comandos:

```
npm test
```

```
npm run test
```

## 💻 Utilizando a API
**IMPORTANTE: O servidor é criado utilizando a porta 4000. Certifique-se que essa porta está liberada para uso no seu dispositivo.**  
Com o servidor rodando, a URL do mesmo é `http://localhost:4000`. Todas as rotas daqui em diante referidas **devem precedir a rota raiz**.  

## GET

### Buscar todos os carros
* **URL**
  * `/carro/list`
* **Parâmetros de URL**
  * _Nenhum_
* **Parâmetros de corpo da requisição**
  * _Nenhum_
* **Resposta de sucesso**
  * **Código**: 200 OK
  * **Conteúdo**:
    ```
    [
        {
            "_id": "64555cc275863d257c5d2404",
            "marca": "Volks",
            "cor": "Preto",
            "ano": "1984",
            "tipo": "Casual",
            "id": "4bb2fd3c-55eb-4337-b9b1-fcb417496e98",
            "__v": 0
        },
        {...}
    ]
    ```
* **Resposta de erro**
  * **Código**: 500 Internal Server Error

## PATCH

### Buscar carro por tipo
* **URL**
  * `/carro/listCarro`
* **Parâmetros de URL**
  * _Nenhum_
* **Parâmetros de corpo da requisição**
  * **Obrigatórios**: `tipo`
* **Resposta de sucesso**
  * **Código**: 200 OK
  * **Conteúdo**:
    ```
    [
        {
            "_id": "64555cc275863d257c5d2404",
            "marca": "Volks",
            "cor": "Preto",
            "ano": "1984",
            "tipo": "Casual",
            "id": "4bb2fd3c-55eb-4337-b9b1-fcb417496e98",
            "__v": 0
        },
        {...}
    ]
    ```
* **Resposta de erro**
  * **Código**: 500 Internal Server Error

## POST

### Inserir carro
* **URL**
  * `/carro/create`
* **Parâmetros de URL**
  * _Nenhum_
* **Parâmetros de corpo da requisição**
  * **Obrigatórios**: `marca`, `ano`, `cor`, `tipo`
    ```
    {
        "marca": "Volkswagen",
        "cor": "Azul",
        "ano": "2020",
        "tipo": "Casual"
    }
    ```
    
* **Resposta de sucesso**
  * **Código**: 200 OK
  * **Conteúdo**:
    ```
    {
        "_id": "645568a68d1e660974bc53fc",
        "marca": "Volkswagen",
        "cor": "Azul",
        "ano": "2020",
        "tipo": "Casual",
        "id": "367c781f-d194-49c4-bc76-9b4a03bab3dc",
        "__v": 0
    }
    ```
* **Respostas de erro**
  * **Código**: 400 Bad Request
  * **Conteúdo**: 
  ```
    {
        "name": "ValidationError",
        "message": {
            <campo>: [
                "<campo> can't be blank"
            ]
        }
    }
    ```
    
    ```
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <title>Error</title>
    </head>

    <body>
        <pre>SyntaxError: Unexpected token <token incorreto> in JSON at position <linha de erro> [...] </pre>
    </body>

    </html>
    ```
    * **Código**: 409 Conflict
    * **Código**: 500 Internal Server Error

## PUT

### Atualizar carro
* **URL**
  * `/carro/update`
* **Parâmetros de URL**
  * _Nenhum_
* **Parâmetros de corpo da requisição**
  * **Obrigatórios**: `id`, `marca`, `ano`, `cor`, `tipo`
    ```
    {
        "id": "4bb2fd3c-55eb-4337-b9b1-fcb417496e98",
        "marca": "Volkswagen",
        "cor": "Azul",
        "ano": "2020",
        "tipo": "Casual"
    }
    ```
    
* **Resposta de sucesso**
  * **Código**: 200 OK
  * **Conteúdo**:
    ```
    {
        "_id": "64555cc275863d257c5d2404",
        "marca": "Volkswagen",
        "cor": "Azul",
        "ano": "2020",
        "tipo": "Casual",
        "id": "4bb2fd3c-55eb-4337-b9b1-fcb417496e98",
        "__v": 0
    }
    ```
    
* **Resposta de erro**
  * **Código**: 400 Bad Request
  * **Conteúdo**:
    ```
    {
        "name": "ValidationError",
        "message": {
            <campo>: [
                "<campo> can't be blank"
            ]
        }
    }
    ```
    
  * **Código**: 404 Not Found
  * **Código**: 500 Internal Server Error

## DELETE

### Remover filme
* **URL**
  * `/carro/delete`
* **Parâmetros de URL**
  * _Nenhum_
* **Parâmetros de corpo da requisição**
  * **Obrigatórios**: `id`
    ```
    {
        "id": "4bb2fd3c-55eb-4337-b9b1-fcb417496e98"
    }
    ```
    
* **Resposta de sucesso**
  * **Código**: 200 OK
  * **Conteúdo**:
    ```
    1
    ```
    
* **Resposta de erro**
  * **Código**: 400 Bad Request
  * **Conteúdo**:
    ```
    {
        "name": "ValidationError",
        "message": {
            <campo>: [
                "<campo> can't be blank"
            ]
        }
    }
    ```
  * **Código**: 500 Internal Server Error
