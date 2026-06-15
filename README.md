# ⚡ Escola Tech — Frontend

Landing page institucional para captação e matrícula de alunos, construída com React + Vite.

## Stack

| Tecnologia | Uso |
|---|---|
| React 18 | UI components |
| Vite 5 | Build tool & dev server |
| React Router DOM 6 | Roteamento |
| Axios | HTTP client (integração API) |
| CSS Modules | Estilização por componente |

## Estrutura

```
src/
├── assets/              # Imagens, fontes, ícones estáticos
├── components/
│   ├── Button/          # Botão reutilizável (primary, outline, ghost)
│   ├── Navbar/          # Header fixo com menu responsivo
│   ├── Hero/            # Seção hero com terminal animado
│   ├── CourseCard/      # Card de curso com barra de vagas
│   ├── DiffSection/     # Seção de diferenciais
│   ├── Testimonials/    # Depoimentos de alunos
│   ├── FAQ/             # Accordion de perguntas frequentes
│   └── Footer/          # Rodapé completo
├── pages/
│   ├── Home/            # Landing page principal
│   ├── Matricula/       # Formulário de matrícula
│   └── Sucesso/         # Confirmação com confetti
├── routes/
│   └── AppRoutes.jsx    # Configuração de rotas
├── services/
│   ├── api.js           # Axios instance + interceptors
│   └── mockData.js      # Dados mockados (cursos, depoimentos, FAQ)
├── hooks/
│   └── useMatricula.js  # Lógica do formulário + validações
└── styles/
    └── global.css       # Design tokens + reset CSS
```

## Instalação

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

## Integração com API Flask

Configure o backend Flask com o endpoint:

```
POST /api/matriculas
Content-Type: application/json

{
  "nome": "string",
  "email": "string",
  "telefone": "string",
  "curso": "string"
}
```

O proxy do Vite já está configurado em `vite.config.js` para redirecionar `/api/*` para `http://localhost:5000` em desenvolvimento.

Em produção, configure a variável de ambiente `VITE_API_URL` e ajuste o `baseURL` em `src/services/api.js`.

## Rotas

| Rota | Página |
|---|---|
| `/` | Home — landing page completa |
| `/matricula` | Formulário de matrícula |
| `/matricula?curso=Nome+do+Curso` | Formulário pré-preenchido |
| `/sucesso` | Confirmação de matrícula |

## Build

```bash
npm run build   
npm run preview 
```
