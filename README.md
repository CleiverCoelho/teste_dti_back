# Desafio tecnico
Voce pode testar a api em seu link de deploy: https://teste-api-xb5i.onrender.com <br/> <br/>

Também pode seguir os passos a seguir para rodar a aplicação localmente

## Premissas
- Para rodar essa aplicação é preciso ter o gerenciador de pacotes para aplicações Nodejs chamado "NPM". 
- É preciso ter o sistema de controle de versões distribuído "Git" para seguir os comandos de instalação local (voce também pode baixar o zip do arquivo). 
- Para evitar problemas com versões também aconselho rodar esta aplicação no Sistema Operacional do Linux Ubuntu 20.04
- É preciso ter a versão do node acima da 18, pois estou utilizando o prisma como typeORM para meu banco de dados.
- Na mesma linha de raciocínio é preciso ter o postgreSQL instalado em sua maquina

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

# Passos para docker com DockerFile

Primeiro, cheque se voce não tem nenhum container, network ou imagens com os mesmos nomes daqueles usados nesse passo a passo. Feito isso, no diretorio raiz...

Construa a imagem do backend:
```bash
docker build -t backend .
```

Crie uma network para conectar a api do back-end com o banco de dados:
```bash
docker network create backend-network
```

Crie um volume do docker para salvar as informações do banco de dados:
```bash
docker volume create backend-volume
```
Rode o container do postgres dentro de uma mesma network e credenciais do postgres:
```bash
docker run -d 
  --name postgres 
  --network backend-network 
  -e POSTGRES_PASSWORD=postgres 
  -p 5433:5432 
  -v backend-volume:/var/lib/postgresql/data
postgres
```

Então, rode o backend dentro da mesma network
```bash
docker run -d 
  --name backend 
  --network backend-network 
  -e DATABASE_URL="postgresql://postgres:postgres@postgres:5432/desafio_back_dti?schema=public" 
  -p 3000:3000 
backend
```

Seu server está pronto e rodando na porta 3000!

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


