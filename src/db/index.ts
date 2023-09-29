const projects = [
  {
    id: 1,
    title: "Projeto de Login e To do List.",
    tools: "React, TypeScript, Firebase, TailwindCSS, React-Hook-Form e Zod.",
    img: { src: "/todolist.png", alt: "Projeto Todolist Dashboard" },
    inverted: true,
    description:
      "Este projeto se trata de uma To Do List, na qual você consegue se cadastrar, alterar suas informações, como: Foto de Perfil, Nome, Email, Senha, etc. E também consegue armazenar suas tasks, filtra-las por tipos, data, finalizadas ou não finalizadas. O Projeto contém uma área de dashboard, onde o usuário consegue visualizar todas as tasks, e as que estão por vir. Não foi um projeto difícil em sí, porém teve várias funcionalidades, rsrs.",
  },
  {
    id: 2,
    title: "Projeto Login Firebase.",
    tools: "React, TypeScript, Firebase, TailwindCSS, React-Hook-Form e Zod.",
    img: { src: "/tailwind.png", alt: "Projeto Login Tela de Login" },
    inverted: false,
    description:
      "Um projeto simples, apenas para treinar as bibliotecas e frameworks, possui um sistema de autenticação e registro.",
  },
  {
    id: 3,
    title: "Projeto Sistema de Gerenciamento de Laboratório.",
    tools: "React, TypeScript, MaterialUI, React-Hook-Form e Zod, MySQL",
    img: {
      src: "/Dashboard.png",
      alt: "Projeto Sistema de gerenciamento de Laboratório.",
    },
    inverted: true,
    description:
      "Um dos projetos mais complexos, se trata de um sistema de gerenciamento de laboratório, onde é possível cadastrar pacientes e seus exames, visualizar o dashboard com gráficos de diversas informações sobre pacientes e lucro.",
  },
  {
    id: 4,
    title: "Projeto Interactive Card.",
    tools: "React, JavaScript, React-Hook-Form e Yup.",
    img: { src: "/cardts.png", alt: "Projeto Credit Card Form" },
    inverted: false,
    description:
      "Um projeto simples, feito através do desafio do FrontMentor, se trata de um formulário de cartão de cŕedito.",
  },
];

export default projects;
