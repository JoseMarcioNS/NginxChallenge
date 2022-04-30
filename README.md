# Desafio: Nginx com Node.js

O **nginx** será usado como proxy reverso.

A idéia principal é que quando um usuário acesse o **nginx**, o mesmo fará uma chamada em nossa aplicação **node.js**. 

Essa aplicação por sua vez adicionará um registro em nosso banco de dados **mysql**, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx será:

Full Cycle Rocks!

Lista de nomes cadastrada no banco de dados.

 - Marcio

# Como executar

1. Faça o clone do projeto
2. Execute o comando  **docker-compose up -d** na raiz do projeto
3. No navegador acesse o link:  http://localhost:8080
