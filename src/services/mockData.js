export const cursos = [
  {
    id: 1,
    titulo: 'Desenvolvimento Web Full Stack',
    descricao: 'HTML, CSS, JavaScript, React, Node.js e bancos de dados. Do zero ao deploy em produção.',
    duracao: '6 meses',
    nivel: 'Iniciante',
    vagas: 30,
    preco: 'R$ 197/mês',
    icon: '⚡',
    tag: 'Mais popular',
    topicos: ['React & Next.js', 'Node.js & Express', 'PostgreSQL', 'Deploy na nuvem'],
  },
  {
    id: 2,
    titulo: 'Python para Dados & IA',
    descricao: 'Pandas, NumPy, Machine Learning com scikit-learn e introdução a LLMs com Python.',
    duracao: '5 meses',
    nivel: 'Intermediário',
    vagas: 25,
    preco: 'R$ 197/mês',
    icon: '🧠',
    tag: 'Novo',
    topicos: ['Python avançado', 'Pandas & NumPy', 'Machine Learning', 'APIs de IA'],
  },
  {
    id: 3,
    titulo: 'UI/UX Design System',
    descricao: 'Figma, design de interfaces, pesquisa com usuários e prototipação de alta fidelidade.',
    duracao: '4 meses',
    nivel: 'Iniciante',
    vagas: 20,
    preco: 'R$ 147/mês',
    icon: '🎨',
    tag: null,
    topicos: ['Figma avançado', 'Design System', 'Prototipação', 'UX Research'],
  },
  {
    id: 4,
    titulo: 'DevOps & Cloud Engineering',
    descricao: 'Docker, Kubernetes, CI/CD pipelines, AWS e infraestrutura como código com Terraform.',
    duracao: '5 meses',
    nivel: 'Avançado',
    vagas: 15,
    preco: 'R$ 247/mês',
    icon: '☁️',
    tag: 'Alta demanda',
    topicos: ['Docker & K8s', 'AWS / GCP', 'CI/CD', 'Terraform'],
  },
  {
    id: 5,
    titulo: 'Mobile com React Native',
    descricao: 'Crie apps iOS e Android com React Native, Expo e integração com APIs REST.',
    duracao: '4 meses',
    nivel: 'Intermediário',
    vagas: 20,
    preco: 'R$ 197/mês',
    icon: '📱',
    tag: null,
    topicos: ['React Native', 'Expo', 'Navigation', 'Push Notifications'],
  },
  {
    id: 6,
    titulo: 'Segurança e Ethical Hacking',
    descricao: 'Fundamentos de cibersegurança, pentest, OWASP Top 10 e preparação para certificações.',
    duracao: '6 meses',
    nivel: 'Intermediário',
    vagas: 15,
    preco: 'R$ 247/mês',
    icon: '🔐',
    tag: null,
    topicos: ['Pentest', 'OWASP', 'Redes', 'CTF Challenges'],
  },
]

// Módulos e aulas de cada curso — usados na Área do Aluno.
export const modulosPorCurso = {
  'Desenvolvimento Web Full Stack': [
    {
      id: 'fs-m1',
      titulo: 'Fundamentos de HTML & CSS',
      aulas: [
        { id: 'fs-m1-a1', titulo: 'Estrutura semântica com HTML5' },
        { id: 'fs-m1-a2', titulo: 'Layout com Flexbox e Grid' },
        { id: 'fs-m1-a3', titulo: 'Responsividade e Media Queries' },
      ],
    },
    {
      id: 'fs-m2',
      titulo: 'JavaScript Moderno',
      aulas: [
        { id: 'fs-m2-a1', titulo: 'ES6+: arrow functions, destructuring, spread' },
        { id: 'fs-m2-a2', titulo: 'Assincronismo: Promises e async/await' },
        { id: 'fs-m2-a3', titulo: 'Manipulação de DOM e eventos' },
      ],
    },
    {
      id: 'fs-m3',
      titulo: 'React & Next.js',
      aulas: [
        { id: 'fs-m3-a1', titulo: 'Componentes, props e state' },
        { id: 'fs-m3-a2', titulo: 'Hooks: useState, useEffect, custom hooks' },
        { id: 'fs-m3-a3', titulo: 'Roteamento e renderização com Next.js' },
      ],
    },
    {
      id: 'fs-m4',
      titulo: 'Node.js, Banco de Dados & Deploy',
      aulas: [
        { id: 'fs-m4-a1', titulo: 'API REST com Node.js e Express' },
        { id: 'fs-m4-a2', titulo: 'Modelagem com PostgreSQL' },
        { id: 'fs-m4-a3', titulo: 'Deploy em produção na nuvem' },
      ],
    },
  ],
  'Python para Dados & IA': [
    {
      id: 'py-m1',
      titulo: 'Python Avançado',
      aulas: [
        { id: 'py-m1-a1', titulo: 'Estruturas de dados e compreensões' },
        { id: 'py-m1-a2', titulo: 'Programação orientada a objetos' },
        { id: 'py-m1-a3', titulo: 'Ambientes virtuais e boas práticas' },
      ],
    },
    {
      id: 'py-m2',
      titulo: 'Pandas & NumPy',
      aulas: [
        { id: 'py-m2-a1', titulo: 'Manipulação de DataFrames' },
        { id: 'py-m2-a2', titulo: 'Limpeza e tratamento de dados' },
        { id: 'py-m2-a3', titulo: 'Álgebra vetorial com NumPy' },
      ],
    },
    {
      id: 'py-m3',
      titulo: 'Machine Learning',
      aulas: [
        { id: 'py-m3-a1', titulo: 'Regressão e classificação com scikit-learn' },
        { id: 'py-m3-a2', titulo: 'Validação de modelos e métricas' },
        { id: 'py-m3-a3', titulo: 'Introdução a APIs de IA e LLMs' },
      ],
    },
  ],
  'UI/UX Design System': [
    {
      id: 'ux-m1',
      titulo: 'Fundamentos de UX Research',
      aulas: [
        { id: 'ux-m1-a1', titulo: 'Entrevistas e personas' },
        { id: 'ux-m1-a2', titulo: 'Jornada do usuário' },
        { id: 'ux-m1-a3', titulo: 'Testes de usabilidade' },
      ],
    },
    {
      id: 'ux-m2',
      titulo: 'Figma Avançado & Design System',
      aulas: [
        { id: 'ux-m2-a1', titulo: 'Componentes e variantes' },
        { id: 'ux-m2-a2', titulo: 'Auto layout e design tokens' },
        { id: 'ux-m2-a3', titulo: 'Bibliotecas compartilhadas' },
      ],
    },
    {
      id: 'ux-m3',
      titulo: 'Prototipação de Alta Fidelidade',
      aulas: [
        { id: 'ux-m3-a1', titulo: 'Fluxos interativos' },
        { id: 'ux-m3-a2', titulo: 'Handoff para desenvolvimento' },
        { id: 'ux-m3-a3', titulo: 'Apresentação de portfólio' },
      ],
    },
  ],
  'DevOps & Cloud Engineering': [
    {
      id: 'do-m1',
      titulo: 'Docker & Kubernetes',
      aulas: [
        { id: 'do-m1-a1', titulo: 'Containers e imagens Docker' },
        { id: 'do-m1-a2', titulo: 'Orquestração com Kubernetes' },
        { id: 'do-m1-a3', titulo: 'Redes e volumes' },
      ],
    },
    {
      id: 'do-m2',
      titulo: 'CI/CD Pipelines',
      aulas: [
        { id: 'do-m2-a1', titulo: 'Integração contínua' },
        { id: 'do-m2-a2', titulo: 'Deploy automatizado' },
        { id: 'do-m2-a3', titulo: 'Testes em pipeline' },
      ],
    },
    {
      id: 'do-m3',
      titulo: 'AWS/GCP & Terraform',
      aulas: [
        { id: 'do-m3-a1', titulo: 'Fundamentos de nuvem' },
        { id: 'do-m3-a2', titulo: 'Infraestrutura como código' },
        { id: 'do-m3-a3', titulo: 'Monitoramento e custos' },
      ],
    },
  ],
  'Mobile com React Native': [
    {
      id: 'rn-m1',
      titulo: 'Fundamentos do React Native',
      aulas: [
        { id: 'rn-m1-a1', titulo: 'Componentes nativos e estilização' },
        { id: 'rn-m1-a2', titulo: 'Navegação entre telas' },
        { id: 'rn-m1-a3', titulo: 'Expo e ambiente de desenvolvimento' },
      ],
    },
    {
      id: 'rn-m2',
      titulo: 'Integração com APIs',
      aulas: [
        { id: 'rn-m2-a1', titulo: 'Consumo de APIs REST' },
        { id: 'rn-m2-a2', titulo: 'Armazenamento local' },
        { id: 'rn-m2-a3', titulo: 'Push notifications' },
      ],
    },
    {
      id: 'rn-m3',
      titulo: 'Publicação nas Lojas',
      aulas: [
        { id: 'rn-m3-a1', titulo: 'Build para iOS e Android' },
        { id: 'rn-m3-a2', titulo: 'Publicação na App Store e Play Store' },
        { id: 'rn-m3-a3', titulo: 'Monitoramento pós-lançamento' },
      ],
    },
  ],
  'Segurança e Ethical Hacking': [
    {
      id: 'sec-m1',
      titulo: 'Fundamentos de Redes & Segurança',
      aulas: [
        { id: 'sec-m1-a1', titulo: 'Protocolos e arquitetura de redes' },
        { id: 'sec-m1-a2', titulo: 'Criptografia aplicada' },
        { id: 'sec-m1-a3', titulo: 'OWASP Top 10' },
      ],
    },
    {
      id: 'sec-m2',
      titulo: 'Pentest na Prática',
      aulas: [
        { id: 'sec-m2-a1', titulo: 'Reconhecimento e enumeração' },
        { id: 'sec-m2-a2', titulo: 'Exploração de vulnerabilidades' },
        { id: 'sec-m2-a3', titulo: 'Relatórios de pentest' },
      ],
    },
    {
      id: 'sec-m3',
      titulo: 'CTF & Certificações',
      aulas: [
        { id: 'sec-m3-a1', titulo: 'Desafios CTF guiados' },
        { id: 'sec-m3-a2', titulo: 'Preparação para certificações' },
        { id: 'sec-m3-a3', titulo: 'Projeto final de segurança' },
      ],
    },
  ],
}

// Horários de mentoria disponíveis para reserva na Área do Aluno.
export const mentoriaSlots = [
  { id: 'mt1', data: '22/07/2026', hora: '19:00', mentor: 'Camila Souza', tema: 'Carreira em Frontend', vagas: 5 },
  { id: 'mt2', data: '23/07/2026', hora: '20:00', mentor: 'Rafael Mendes', tema: 'Dados & Machine Learning', vagas: 4 },
  { id: 'mt3', data: '24/07/2026', hora: '18:30', mentor: 'Juliana Costa', tema: 'Portfólio de UX Design', vagas: 6 },
  { id: 'mt4', data: '25/07/2026', hora: '19:30', mentor: 'Lucas Ferreira', tema: 'Preparação para entrevistas técnicas', vagas: 3 },
  { id: 'mt5', data: '29/07/2026', hora: '20:00', mentor: 'Equipe Escola Tech', tema: 'Dúvidas gerais & code review', vagas: 8 },
]

export const depoimentos = [
  {
    id: 1,
    nome: 'Camila Souza',
    cargo: 'Frontend Developer — Nubank',
    texto: 'Em 7 meses saí de caixa de supermercado para dev júnior no Nubank. O suporte da comunidade e a qualidade das aulas foram decisivos. Recomendo demais.',
    avatar: 'CS',
    estrelas: 5,
  },
  {
    id: 2,
    nome: 'Rafael Mendes',
    cargo: 'Data Analyst — iFood',
    texto: 'Já tinha noção de Python mas o curso de Dados me elevou de nível. Aprendi a construir pipelines reais. Fui promovido três meses depois de terminar.',
    avatar: 'RM',
    estrelas: 5,
  },
  {
    id: 3,
    nome: 'Juliana Costa',
    cargo: 'UX Designer — Creditas',
    texto: 'A didática é incrível. Passei de designer gráfico para UX em menos de um ano. Os projetos práticos do curso foram o que me diferenciaram no processo seletivo.',
    avatar: 'JC',
    estrelas: 5,
  },
  {
    id: 4,
    nome: 'Lucas Ferreira',
    cargo: 'Backend Engineer — PicPay',
    texto: 'Melhor investimento que já fiz na minha carreira. Conteúdo atualizado, mentores presentes e uma rede de alunos que vale ouro.',
    avatar: 'LF',
    estrelas: 5,
  },
]

export const faqs = [
  {
    id: 1,
    pergunta: 'Preciso ter conhecimento prévio em programação?',
    resposta: 'Depende do curso. Os cursos marcados como "Iniciante" não exigem nenhum conhecimento prévio — começamos do zero mesmo. Já os cursos Intermediários e Avançados indicam os pré-requisitos na página do curso.',
  },
  {
    id: 2,
    pergunta: 'As aulas são ao vivo ou gravadas?',
    resposta: 'Temos um modelo híbrido: as aulas teóricas são gravadas (assista quando quiser), e realizamos encontros ao vivo semanais para tirar dúvidas, resolver desafios e fazer code review com os instrutores.',
  },
  {
    id: 3,
    pergunta: 'Por quanto tempo tenho acesso ao conteúdo?',
    resposta: 'Acesso vitalício ao conteúdo do seu curso, incluindo todas as atualizações futuras. Qualquer material novo adicionado ao curso estará disponível para você automaticamente.',
  },
  {
    id: 4,
    pergunta: 'Existe garantia de emprego?',
    resposta: 'Não prometemos emprego, mas oferecemos suporte ativo à carreira: revisão de currículo, mock interviews, indicações para empresas parceiras e acesso à nossa rede de alumni com mais de 2.400 profissionais contratados.',
  },
  {
    id: 5,
    pergunta: 'Emitem certificado ao final?',
    resposta: 'Sim! Certificado digital com validação em blockchain, reconhecido pelas principais empresas de tecnologia do Brasil. Você também recebe um selo de conclusão para exibir no LinkedIn.',
  },
  {
    id: 6,
    pergunta: 'Posso parcelar a matrícula?',
    resposta: 'Sim. Aceitamos parcelamento em até 12x sem juros no cartão de crédito, além de boleto bancário e Pix. Entre em contato conosco para opções de bolsa e desconto para grupos.',
  },
]

export const diferenciais = [
  {
    icon: '🎯',
    titulo: 'Projetos reais',
    descricao: 'Cada módulo termina com um projeto que vai direto para o seu portfólio — sem exercícios artificiais.',
  },
  {
    icon: '👨‍🏫',
    titulo: 'Mentores do mercado',
    descricao: 'Nossos instrutores trabalham em empresas como Nubank, Mercado Livre e Google. Aprenda com quem vive isso.',
  },
  {
    icon: '🤝',
    titulo: 'Comunidade ativa',
    descricao: 'Discord exclusivo, study groups, hackathons mensais e networking com mais de 8 mil alunos.',
  },
  {
    icon: '♾️',
    titulo: 'Conteúdo atualizado',
    descricao: 'O mercado muda rápido. Nossas trilhas são revisadas trimestralmente para acompanhar as tendências.',
  },
  {
    icon: '📊',
    titulo: 'Suporte à carreira',
    descricao: 'Mock interviews, revisão de currículo, LinkedIn e acesso à bolsa de talentos com 200+ empresas parceiras.',
  },
  {
    icon: '🔄',
    titulo: 'Aprendizado flexível',
    descricao: 'Estude no seu ritmo. Aulas gravadas disponíveis 24/7, com suporte por chat em horário comercial.',
  },
]
