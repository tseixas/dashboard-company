# dashboard-company

Aplicação para cadastro de empresas e contatos com visualização de informações via dashboard

## Tecnologias
- React - NextJS (Em andamento)
- NodeJS - NestJS
- Banco de dados - PostgreSQL
- Docker

## Pré-requisitos
- Node 18
- Docker e Docker compose

## Como executar
Clonar o repositório: ```git clone git@github.com:tseixas/dashboard-company.git```

### Backend
- Rodar o seguinte comando na raiz do projeto ```docker compose up```
  Com esse comando será possível subir o backend, banco de dados e ter dados iniciais no banco.
- Acesse o link: http://localhost:8000/api do Swagger da API.
- Dados de Login: 
    ```
    {
        "email": "admin@teste.com",
        "password": "123456789"
    }
    ```