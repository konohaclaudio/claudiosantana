# Portfólio · Claudio Santana

Portfólio pessoal e currículo interativo de Claudio Santana — Analista de Sistemas e Desenvolvedor Full Stack & Android Developer baseado em Piraju-SP.

**[→ Acessar o portfólio](https://claudiojunior.dev.br)**

---

## Sobre

Site de apresentação pessoal com foco em captação de clientes e oportunidades de trabalho independente. Construído sem framework — HTML, CSS e JavaScript puros — com ênfase em performance, identidade visual forte e narrativa técnica honesta.

---

## Páginas

| Arquivo | Descrição |
|---|---|
| `index.html` | Portfólio principal — voltado para clientes e recrutadores |
| `curriculoporftolio.html` | Currículo técnico detalhado — foco em stack e arquitetura |

---

## Funcionalidades

- **Matrix rain** animado no hero com Canvas API (caracteres CLAUDIO + japoneses)
- **Efeito typewriter** no hero com frases rotativas de especialidades
- **Scramble hover** nos títulos do hero
- **fullPage.js** com navegação por seções (slides 01–12)
- **Owl Carousel** para expertise, serviços e projetos
- **Filtro de projetos** por categoria: Todos / Sistema / Site & Cardápio / Mobile
- **Cursor customizado** com lerp e efeito glow
- **Botão flutuante WhatsApp** para contato direto
- **Formulário de contato** via [FormSubmit.co](https://formsubmit.co) (sem backend)
- **Contador dinâmico** de anos de experiência (base 2019)
- **SEO estrutural** com meta description, keywords, Open Graph e Twitter Card
- **Favicon inline SVG** com iniciais CS (sem dependência de arquivo externo)
- **Download direto** do currículo em PDF

---

## Stack do Projeto

```
HTML5 · CSS3 · JavaScript ES2022+
fullPage.js · Owl Carousel · Bootstrap
Font Awesome · Google Fonts (Raleway, Roboto Mono, Poppins)
FormSubmit.co (formulário sem backend)
```

---

## Projetos em Destaque

Sistemas Full Stack entregues e em produção:

### Gabriel Imports
Sistema híbrido PDV + e-commerce. Caixa, estoque, agendamentos, loja online com pagamento via MercadoPago (Checkout Pro + Webhooks IPN).
`PHP 7.4+ · MySQL · Tailwind CSS · Chart.js · MVC manual · RBAC`

### Império Frutas & Cia
Catálogo com carrinho 100% client-side, 4 modalidades de venda, checkout via WhatsApp, painel admin completo, Repository Pattern, PDO atômico.
`PHP 8.2+ · MySQL 8 · JavaScript ES2022 · CSS3`

### Sabor & Arte Premium
Plataforma completa para pizzaria: delivery + salão presencial, Pizza Builder, PDV, mapa visual de mesas, comanda digital, impressão térmica, monitor de pedidos com Web Audio API, 6 temas visuais. 56 rotas · 14 controllers · 13 models.
`PHP 8.1+ · MySQL · JavaScript ES2020+ · Web Audio API`

### Omaha Tattoo
Agendamento com upload de foto de referência + notificação WhatsApp (CallMeBot), portfólio filtrável, artistas convidados, CMS, 5 temas, premium.js (cursor lerp, parallax, Canvas grain, IntersectionObserver), Repository Pattern com interfaces tipadas, segurança em camadas.
`PHP 8.1+ · MySQL · Tailwind CSS · JavaScript ES2022+`

### VO Mobile — Grupo Hinode
App de gestão para consultores de vendas, internacionalizado para a América do Sul. +110.000 downloads.
`Kotlin · Java · Android SDK`

---

## Arquitetura & Segurança (projetos PHP)

- MVC manual sem framework
- Repository Pattern com interfaces tipadas (`ICrudRepository`, `IReadableRepository`, `IWritableRepository`)
- Service Layer para lógica de negócio
- RBAC com 3 níveis de permissão
- CSRF com `random_bytes`
- Senhas com `bcrypt / password_hash`
- PDO Prepared Statements
- `session_regenerate_id` (session fixation prevention)
- MIME Type Validation com `finfo`
- XSS prevention com `htmlspecialchars`
- Cookies `HttpOnly + SameSite`

---

## Estrutura de Arquivos

```
/
├── index.html                 # Portfólio principal
├── curriculoporftolio.html    # Currículo técnico
├── curriculoclaudio.pdf       # CV para download
├── perfil.jpg                 # Foto de perfil
├── css/
│   ├── templatemo-style.css
│   ├── matrix.css
│   ├── responsive.css
│   └── ...
├── js/
│   ├── custom.js
│   ├── form.js
│   └── ...
└── images/
    └── mockup/
        ├── hinode.jpg
        ├── gabriel.jpg
        ├── imperio.jpg
        ├── omaha.jpg
        ├── sabor-arte.jpg
        └── titos.jpg
```

---

## Contato

| Canal | Link |
|---|---|
| Email | claudiosantana.devloper@gmail.com |
| WhatsApp | [(14) 99637-3527](https://wa.me/5514996373527) |
| LinkedIn | [Claudio Santana](https://www.linkedin.com/in/claudio-santana-silva-junior-a8aa76147/) |
| GitHub | [@konohaclaudio](https://github.com/konohaclaudio) |

---

© 2026 Claudio Santana. Todos os direitos reservados.
