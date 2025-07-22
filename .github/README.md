# Consumo Consciente <img src="https://i.im.ge/2024/04/14/ZTlDp8.1edd2f03-867f-430e-a181-228d71f58135-removebg-preview-1.png" width=100px  height=90px>

Consumo Consciente é um projeto que visa promover produtos que se destacam pelo baixo consumo de energia, permitindo que as pessoas pesquisem e se interessem por esses produtos de forma mais informada.

## Objetivo

O objetivo deste projeto é fornecer uma plataforma onde  possam encontrar produtos que são eficientes em termos de consumo de energia, ajudando a promover um estilo de vida mais sustentável e consciente.
## Deploy

O projeto está disponível para acesso online. Você pode visualizá-lo [aqui](https://consumo-consciente-3.onrender.com/).


## Como Iniciar

Para começar a trabalhar com este projeto, siga as etapas abaixo:

1. **Banco de dados**: Ultilize do arquivo SQL disponível no repositório para criação do banco(nome do banco de sua preferência) e iserção de dados das tabelas.
    
   Arquivo SQL [aqui](https://github.com/iingridliveira/Consumo-consciente/blob/master/backup.sql).


2. **Instalação**: Execute o seguinte comando para instalar as dependências do projeto:
    ```bash
    npm install 
    ```

3. **Configuração de variáveis de ambiente**:
   

 3.1 Crie um arquivo `.env` na raiz do projeto  Backend(PASTA) adicione as seguintes variáveis de ambiente, substituindo os valores conforme necessário requisitado do banco MySQL
   **Exemplo**: usando localhost  DATABASE_URL sendo a url que tem o acesso ao banco de dados local e URL que da acesso ao front que sera usado na verificação do cors


    DATABASE_URL= "mysql://root:minhasenha@localhost:3306/meu_banco_local"
    URL="http://http://localhost:5173/"

 3.2 Crie um arquivo `.env` na raiz do projeto  Frontend(PASTA) VITE_BASEURL, vai ser a rota base para uso no front de requisições Http;


     VITE_BASEURL= "http://localhost:3000/"

     

4.  **Execução**:
    - **Backend**: Acesse a pasta do backend no terminal:
        ```bash
        cd Backend
        ```
      Em seguida, execute o seguinte comando para iniciar o servidor:
        ```bash
        npm run dev
        ```

    - **Frontend**: Acesse a pasta do frontend no terminal:
        ```bash
        cd Frontend
        ```
      Em seguida, execute o seguinte comando para iniciar o servidor:
        ```bash
        npm run dev
        ```

6. **Deploy**: Se aplicável, instruções sobre como fazer o deploy do projeto em um ambiente de produção.

## Tecnologias Utilizadas

### Frontend
- **Framework**: React.js
- **Bundler**: Vite.js
- **Estilização**: Bootstrap e css
- **Rotas**: React Router dom
- **Requisições**: Axios

### Backend
- **Linguagem**: Node.js
- **ORM**: Sequelize
- **Banco de Dados**: MySQL

<!-- ## Contribuição

Instruções sobre como os desenvolvedores podem contribuir para o projeto. Isso pode incluir informações sobre como reportar bugs, solicitar novas funcionalidades e enviar pull requests.

## Licença

Declare a licença sob a qual o projeto está disponível. Isso pode ser crucial para que outras pessoas saibam como podem usar e distribuir o código. Exemplos comuns de licenças incluem MIT, Apache 2.0, GPL, entre outras.

## Contato

Informações de contato do(s) mantenedor(es) do projeto, como e-mail ou links para redes sociais. -->
