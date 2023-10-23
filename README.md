# Desafio tecnico
Voce pode testar a api em seu link de deploy: https://teste-api-xb5i.onrender.com <br/> <br/>

Também pode seguir os passos a seguir para rodar a aplicação localmente

## Premissas
- Para rodar essa aplicação é preciso ter o gerenciador de pacotes para aplicações Nodejs chamado "NPM". 
- É preciso ter o sistema de controle de versões distribuído "Git" para seguir os comandos de instalação local (voce também pode baixar o zip do arquivo). 
- Para evitar problemas com versões também aconselho rodar esta aplicação no Sistema Operacional do Linux Ubuntu 20.04
- É preciso ter a versão do node acima da 18, pois estou utilizando o prisma como typeORM para meu banco de dados.
- Na mesma linha de raciocínio é preciso ter o postgreSQL instalado em sua maquina (no entanto o banco de dados está deployado junto ao deploy da api no backend)

## Decisoes de projeto
- Utilização de Nodejs para o desenvolvimento do Back-End para: facilitar a instalção local do projeto, utilizando o mesmo ecosssistema de gerenciamento de pacotes do front (npm); agilizar o desenvolvimento e a manutenção da aplicação utilizando javascript unificado (cliente/servidor)
- Criação da api em Typescript para tipagem expressa de dados e com isso, agilidade em tempo de desenvolvimento.
- Utilização do typeORM chamado prisma, para maior facilidade de manipulação do banco de dados para novas features atarvés de migrations e codigo menos verboso na camada "repositories". (ex de nova feature: adicionar novas configurações de petshops para base do canil em outra localidade, implicando diferentes distancias, relações e constraints no banco relacional)
- Realização de testes de integração e unitários com as ferramentas jest e supertest, com a finalidade de testar a api de ponta a ponta e as principais regras de negocio, na camada "service" da aplicação. (ex: retorno do petshop mais proximo em caso de empate no preço total) 

# How to install

Clone com HTTPS:
```bash
git clone https://github.com/CleiverCoelho/teste_dti_back.git
```

Va para o diretrio raiz do projeto:
```bash
cd teste_dti_back
```

Agora siga os passos abaixo!

# How to run

Install depedencies:
```bash
npm install
```

Build the aplication:
```bash
npm build
```
Rode o comando "start", que já inclui qualquer migração para o banco de dados com prisma que por acaso precise rodar. Voce também irá precisar criar um arquivo ".env", para isso voce pode seguir o arquivo ".env.example"

```bash
npm start
```

Pronto! sua aplicação está rodando localmente na porta 5000! 

# Passos para testes de integração e unitarios
To see the tests runnning:
```bash
npm run test
```

- Será gerada uma nova migração com um banco de dados "limpo", cada vez que o comando for rodado, para garantir a validade de todos os testes. Por padrão, o comando no package.json está para rodar com as configurações do banco configurado em ".env"

Para ver o relatório de cobertura do código:
```bash
npm run test:coverage
```
- Voce só pode rodar esse comando após rodar o comando de teste primeiro, devido a necessidade de realizar migrations.


