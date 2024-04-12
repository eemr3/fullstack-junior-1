# Desafio Técnico - Full Stack Junior

## Objetivos do desafio

Este desafio irá verificar se o candidato possuí as seguintes habilidades em um nível básico:

- Noções de Nextjs
- Noções de Tailwind
- Noções de Backend
- Git e Github

## O que deverá ser desenvolvido

- O candidato deverá escolher e desenvolver uma hero
- O candidato deverá desenvolver uma rota backend utilizando Nextjs

## Requisitos técnico

- O projeto foi criado utilizando o Nextjs
- Foi configurado tailwind
- Frontend
  - A rota / exibe um hero, de acordo com o design escolhido, com pixel perfect
- Backend

  - Todas as rotas recebem um secret
    - Caso o secret seja diferente de "naranja-labs", deverá retornar um erro com o melhor status code para essa situação.
  - A rota /jobs retorna um json com todas as informações do arquivo jobs.ts (O local onde este arquivo esta localizado pode ser alterado de acordo com seu desejo)
  - a rota /jobs?level=Junior deverá retornar apenas os jobs de level Junior
  - a rota /job/[id] deverá ter o seguinte comportamento:
    - Caso o id não exista no arquivo jobs.ts, deverá retornar um erro com um status code mais adequado para essa situação e uma messagem.
    - Caso o id exista, deverá retornar apenas o job ao qual o id seja correspondente.
  - a rota /job/submit deverá receber um body com a seguinte estrutura:

    ```
    {
      name: string,
      age: number,
      phone: string,
      state:string,
      city: string
    }
    ```

    - Caso o body não seja enviado, deverá retornar um erro com o melhor status code para esse caso e uma mensagem
    - Caso esteja tudo ok com o body, deverá retornar um json com a seguinte estrutura:

    ```
    {
      message: Thank you for your application, ${name}
    }
    ```

## Stack utilizada

**Front-end:** Nextjs, TypeScript, Context Api, TailwindCSS

**Back-end:** Nextjs (Api Route)

## Rodando localmente
- Clone o repositório
- Na pasta do projeto use o comando no termial ``npm install`` para instalar as dependencias
- Após a instalação da dependencias use o comando ``npm run dev``
- No navegador abra o endereço ``http://localhost:3000``
## Informação

Para utilizar os recusos de listagem "GET" e envio de informações (fake) "POST" clicar no botão "Let's Collaborate" que será redirecionado para a página "/jobs", no navbar o item (link) "Home" redireciona para o Hero.

## Demo

<img src="./public/Desafio-Técnico-Full-Stack-Junior-_1_.gif" />

## Autor

- Emerson Moreira
- [Linkedin](https://www.linkedin.com/in/emerson-moreira)
- [Github](https://github.com/eemr3)
- (61) 9 9867-3265
- eemr3@yahoo.com.br
