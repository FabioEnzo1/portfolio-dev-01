# Portfólio — Astro + TypeScript + Tailwind

Site de portfólio estático, rápido e com tema escuro.

## Como rodar

Requer Node.js 22.23 ou mais novo.

```bash
npm install
npm run dev      # abre em http://localhost:4321 com atualização ao salvar
npm run build    # gera o site pronto na pasta dist/
npm run preview  # testa o build localmente
```

## Estrutura

```
public/                  arquivos servidos como estão (favicon, curriculo.pdf, imagens)
src/
├── components/          Header, Hero, ProjectCard, Stack, About, Contact, Footer
├── content/projects/    um arquivo .md por projeto
├── content.config.ts    define quais campos cada projeto tem
├── data/site.ts         nome, e-mail, redes, stack e texto "sobre"
├── layouts/Layout.astro estrutura da página, SEO e fontes
├── pages/
│   ├── index.astro      home
│   └── projetos/[slug].astro   página de cada projeto
└── styles/global.css    cores e fontes (tokens do design)
```

## O que trocar primeiro

1. `src/data/site.ts`: seu nome, cidade, e-mail, redes sociais, stack e texto "sobre".
2. `src/components/Hero.astro`: a frase "[UMA FRASE SOBRE O QUE VOCÊ FAZ DE MELHOR]".
3. `src/content/projects/`: troque os três exemplos pelos seus projetos.
4. `astro.config.mjs`: coloque a URL final em `site`.
5. `public/curriculo.pdf` e a foto na seção "Sobre" (`src/components/About.astro`).

## Adicionar um projeto

Crie `src/content/projects/meu-projeto.md`:

```md
---
titulo: "Meu projeto"
categoria: "Web app"
descricao: "Resumo em uma ou duas linhas."
tags: ["Next.js", "PostgreSQL"]
ordem: 1
imagem: "/projetos/meu-projeto.png"   # arquivo em public/projetos/
demo: "https://meu-projeto.com"
repo: "https://github.com/voce/meu-projeto"
---

## O problema
Texto em Markdown que aparece na página do projeto.
```

O projeto com menor `ordem` vira o destaque grande da home.

## Mudar cores e fontes

Edite o bloco `@theme` em `src/styles/global.css`. A cor de destaque é `--color-accent`.

## Publicar

1. Suba o projeto para um repositório no GitHub.
2. Na Vercel ou na Netlify, importe o repositório. O Astro é detectado sozinho.
3. Cada `git push` publica uma nova versão.
