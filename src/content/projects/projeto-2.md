---
titulo: "SampleAPI"
categoria: "API"
descricao: "SampleApi é uma API backend para cadastro de usuários, construída com foco em separação de responsabilidades e aplicação de conceitos de arquitetura em camadas."
tags:
  [
    "Typescript",
    "Node.js",
    "Fastify",
    "Zod",
    "Drizzle ORM",
    "PostgreSQL",
    "Vitest",
  ]
ordem: 2
imagem: "/foto-sampleAPI.png"
---

## Sobre o projeto

A API resolve o fluxo de criação de usuários com validação de dados, verificação de e-mail duplicado, armazenamento seguro da senha com hash e seleção de canal preferencial de marketing. Pode ser útil para desenvolvedores que desejam estudar uma API Node.js com Fastify, PostgreSQL, Drizzle ORM, testes automatizados e organização inspirada em princípios SOLID.

## Funcionalidades e Estrutura

- O projeto está organizado em camadas, separando regras de negócio, entrada HTTP e recursos externos.
- Cadastro de usuários.
- Validação do corpo da requisição com Zod.
- Validação de idade mínima e máxima para cadastro.
- Validação de telefone com prefixo brasileiro +55.
- Validação de e-mail em formato válido.
- Validação de confirmação de senha.
- Bloqueio de cadastro com e-mail já existente.
- Armazenamento de senha com hash usando bcrypt.
- Persistência de usuários em banco PostgreSQL usando Drizzle ORM.
- Seleção de canal preferencial de marketing entre email, sms, push e whatsapp.
- Simulação de envio de notificação por estratégia de canal.
- Documentação interativa via Swagger UI em /docs.
- Testes automatizados para o endpoint de criação de usuário.
- Atualmente, o projeto implementa apenas a operação de criação para a entidade User.
