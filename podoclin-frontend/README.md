# PodoClin — Front-end (Sprint 1)

Protótipo de front-end do app PodoClin: HTML + CSS + JavaScript puro, com
Bootstrap 5 para o grid/componentes base, mobile-first e responsivo.

## Telas incluídas (Sprint 1)

| Arquivo | História | Tarefa do Trello |
|---|---|---|
| `index.html` | RF.2.1 — Login | Tarefa 1 |
| `cadastro.html` | RF.2.1 + RNF.2.3 — Cadastro (dados criptografados) | Tarefa 2 |
| `agenda.html` | RF.1.3 — Agenda do podólogo (dia/semana/mês) | Tarefa 3 |
| `buscar-horarios.html` | RF.1.1 (início) — Busca de horários do cliente | Tarefa 4 |
| `dashboard.html` | Hub de navegação (apoio, não é história da sprint) | — |

Tudo é estático por enquanto — os pontos de integração com a API ficam
marcados com `// TODO` em `js/main.js`.

## 1. Tecnologias definidas

- **HTML5 + CSS3 + JavaScript (vanilla)**
- **Bootstrap 5.3** via CDN (grid, formulários, utilitários)
- Fontes via Google Fonts (Spectral para títulos, Inter para o corpo)
- Sem framework de build — abre direto no navegador ou com Live Server

## 2. Criar o repositório remoto no GitHub

1. Acesse [github.com/new](https://github.com/new).
2. **Repository name**: `podoclin-frontend`.
3. Deixe como **Public** ou **Private** (combine com o grupo).
4. **NÃO** marque "Add a README" nem `.gitignore` — já temos os nossos.
5. Clique em **Create repository**.
6. Copie a URL mostrada em "…or push an existing repository from the command line", algo como:
   ```
   https://github.com/<seu-usuario>/podoclin-frontend.git
   ```
7. Em **Settings → Collaborators**, adicione os outros membros do grupo.

## 3. Versionar o projeto localmente e conectar ao remoto

Dentro da pasta `podoclin-frontend/` (a mesma deste README):

```bash
# 1. Iniciar o repositório local
git init
git branch -M main

# 2. Primeiro commit
git add .
git commit -m "chore: estrutura inicial do front-end (HTML/CSS/JS + Bootstrap)"

# 3. Conectar ao repositório remoto do GitHub
git remote add origin https://github.com/<seu-usuario>/podoclin-frontend.git

# 4. Enviar para o GitHub
git push -u origin main
```

A partir daqui, `git push` sozinho já basta.

## 4. Fluxo de trabalho por tarefa (ligado ao Trello)

Para cada cartão do Trello, crie uma branch, trabalhe, e abra um Pull
Request antes de mesclar em `main` — assim o card fica rastreável ao commit.

```bash
git checkout -b feature/rf2.1-login
# ...edita index.html, css/style.css, js/main.js...
git add .
git commit -m "feat(RF.2.1): tela de login com validação e toggle de senha"
git push -u origin feature/rf2.1-login
```

Sugestão de branches para as 4 tarefas desta sprint:

| Branch | Card no Trello | Commit sugerido |
|---|---|---|
| `feature/rf2.1-login` | RF.2.1 — Login | `feat(RF.2.1): tela de login` |
| `feature/rf2.1-cadastro` | RF.2.1 — Cadastro | `feat(RF.2.1): tela de cadastro com termos LGPD` |
| `feature/rf1.3-agenda` | RF.1.3 — Agenda | `feat(RF.1.3): visão dia/semana/mês da agenda` |
| `feature/rf1.1-busca-horarios` | RF.1.1 — Busca de horários | `feat(RF.1.1): busca e seleção de horários disponíveis` |

No Trello, mova o cartão de **"Sprint Atual - A Fazer"** para **"Em Andamento"**
ao abrir a branch, e para **"Em Revisão/Teste"** ao abrir o Pull Request.
Depois do merge em `main`, mova para **"Concluído (Sprint)"** — batendo com o
Definition of Done da seção 8.1 do documento (código versionado + card movido).

## 5. Rodar localmente

Como não há build step, basta abrir `index.html` no navegador, ou, para
evitar problemas de CORS com fetch futuro, usar um servidor simples:

```bash
# Python
python3 -m http.server 5500

# ou VS Code: extensão "Live Server" -> botão "Go Live"
```

## 6. Estrutura de pastas

```
podoclin-frontend/
├── index.html              # Login (Tarefa 1)
├── cadastro.html            # Cadastro (Tarefa 2)
├── agenda.html               # Agenda do podólogo (Tarefa 3)
├── buscar-horarios.html      # Busca de horário do cliente (Tarefa 4)
├── dashboard.html            # Hub de navegação
├── css/
│   └── style.css             # Tokens de cor/tipografia + componentes
├── js/
│   └── main.js                # Interações e pontos de integração com API
├── assets/                    # Logo/ícones (adicionar conforme prototipagem)
├── .gitignore
└── README.md
```

## Próximos passos (Sprint 2+)

- Conectar `js/main.js` à API real (substituir os `// TODO`).
- Adicionar lembretes automáticos na tela de agenda (RF.1.2).
- Criar tela de prontuário do cliente (RF.3.1).
