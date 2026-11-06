// Todos os textos "fixos" do site ficam aqui. Troque os [COLCHETES] pelos seus dados.

export const site = {
  nome: "Fábio Enzo",
  cidade: "Fortaleza-CE",
  email: "fabio.enzoo00@gmail.com",
  descricao:
    "Portfólio de Fábio Enzo Araujo Barbosa, desenvolvedor full stack. Projetos, stack e contato.",
  curriculo: "/public/Curriculo_Fabio_Enzo.pdf",
  disponivel: true,
  social: [
    { rotulo: "GitHub", url: "https://github.com/FabioEnzo1" },
    {
      rotulo: "LinkedIn",
      url: "https://www.linkedin.com/in/f%C3%A1bio-enzo-araujo-barbosa-71855235b",
    },
  ],
};

export const nav = [
  { rotulo: "Projetos", href: "/#projetos" },
  { rotulo: "Stack", href: "/#stack" },
  { rotulo: "Sobre", href: "/#sobre" },
];

export const stack = [
  {
    grupo: "Front-end",
    itens: ["React / Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    grupo: "Back-end",
    itens: ["Node.js / Python / Java", "API REST", "Autenticação"],
  },
  { grupo: "Banco de dados", itens: ["PostgreSQL", "MongoDB", "Prisma / ORM"] },
  { grupo: "DevOps e ferramentas", itens: ["Git / GitHub", "Docker", "CI/CD"] },
];

export const sobre = [
  "Sou Fábio Enzo, desenvolvedor full stack de Fortaleza-CE. Trabalho na criação de aplicações web, do front-end ao back-end, usando tecnologias como React, Next.js, TypeScript, Node.js e bancos de dados como PostgreSQL e MongoDB.",
  "Gosto de pensar no produto como um todo: entender a necessidade, estruturar a solução e construir interfaces e sistemas práticos e eficientes. Também sigo ampliando meus conhecimentos e atualmente estudo Go, Astro e NestJS.",
];
