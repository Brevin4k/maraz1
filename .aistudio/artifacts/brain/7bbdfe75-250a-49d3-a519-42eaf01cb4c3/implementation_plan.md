# Landing Page Mobile-First para Clínica Médica & Estética (Branco e Dourado)

Landing page responsiva de alto padrão para clínica médica/estética, desenhada prioritariamente para navegação mobile com rolagem vertical intuitiva, paleta luxuosa em tons de branco perolado e dourado nobre, conversão direta para WhatsApp, vídeo de apresentação, comparador interativo de antes e depois com slider de arrastar, apresentação do corpo clínico com CRM e galeria dos ambientes da clínica.

### User Review & Critical Decisions

> [!IMPORTANT]
> As perguntas interativas foram finalizadas com as opções recomendadas. Os detalhes abaixo orientam a arquitetura visual e funcional da página:

- **Especialidade e Posicionamento**: Foco em estética médica avançada, dermatologia e procedimentos de rejuvenescimento facial e corporal com requinte.
- **Antes e Depois Interativo**: Implementação de um comparador deslizante interativo (*before/after slider touch-friendly* com suporte a arrasto no celular) complementado por modal com zoom e detalhes do procedimento.
- **Painel de Customização Imediata**: Botão sutil de customização no topo/rodapé permitindo ao cliente testar e alterar o número do WhatsApp, trocar as fotos do hero, links de vídeo, antes/depois, profissionais e fotos do espaço sem precisar editar código.
- **Paleta Branco e Dourado**: Fundo off-white refinado (`#FAF9F6` e `#FFFFFF`), detalhes metálicos em dourado champanhe (`#D4AF37`, `#C5A059`, `#B8860B`) e contraste escuro cinematográfico no Hero inicial (`scrim` com gradiente escuro e iluminação âmbar).

---

### 1. Overview & Core Concept

- **O que faz**: Proporciona uma jornada mobile fluida para pacientes e clientes que chegam via anúncios ou redes sociais. Apresenta o médico ou responsável com destaque no Hero, direciona para o WhatsApp oficial com mensagem pré-preenchida, exibe o vídeo introdutório da clínica, demonstra casos reais com fotos de antes e depois verificadas, credencia a equipe com CRM visível e fotos de consultório, finalizando com a infraestrutura da clínica.
- **Público-Alvo**: Pacientes exigentes buscando tratamentos estéticos e médicos de alto padrão, valorizando autoridade médica (CRM), elegância, segurança e atendimento ágil via WhatsApp.
- **Proposta de Valor**: Elevação imediata de autoridade e confiança visual, eliminando barreiras de contato e convertendo visitas em consultas agendadas pelo WhatsApp.

---

### 2. User Experience & Visual Design

#### Fluxo do Usuário (Mobile Scroll Journey)
```
[ 1. Hero com Foto do Cliente + Filtro Dark + Botão WhatsApp Direto ]
                           ↓
[ 2. Seção de Vídeo Institucional / Apresentação da Clínica ]
                           ↓
[ 3. Casos Clínicos: Antes e Depois Interativo (Slider de Arrastar) ]
                           ↓
[ 4. Corpo Clínico: Foto do Profissional, CRM e Especialidade ]
                           ↓
[ 5. Espaço & Experiência: Galeria dos Ambientes da Clínica ]
                           ↓
[ 6. Rodapé Luxuoso + Botão Flutuante de WhatsApp (Zona do Polegar) ]
```

#### Identidade Visual & Tema
- **Direção Estética**: Luxo discreto (*quiet luxury* médico), transmitindo assepsia, sofisticação e acolhimento através de branco alabastro e dourado nobre.
- **Paleta de Cores**:
  - *Canvas Principal (60%)*: Branco Puro `#FFFFFF` e Off-White Alabastro `#FAF9F6`.
  - *Superfícies & Bordas (30%)*: Dourado Champanhe Claro `#F5EFEB`, Linhas Capilares `#E6DFD5` e Superfícies escuras cinematográficas no Hero (`#0D0D11` com overlay translúcido).
  - *Acentos de Ação (10%)*: Dourado Nobre (`#D4AF37`, `#C59B27`, degradê dourado metálico sutil) e Verde WhatsApp oficial (`#25D366`) para máximo contraste e taxa de clique.
- **Tipografia**:
  - *Títulos de Destaque*: Família serifada editorial requintada (`Cormorant Garamond` / `Playfair Display`), conferindo prestígio e autoridade médica.
  - *Corpo e Metadados*: Família geométrica legível (`Plus Jakarta Sans` ou `Outfit`), garantindo leitura clara em telas móveis mesmo sob luz solar.
- **Controles de Toque e Thumb-Zone**:
  - Alvos de toque com no mínimo $48 \times 48\text{px}$.
  - Botão flutuante de WhatsApp fixo no canto inferior direito respeitando o limite de altura da tela.
  - Comparador de antes e depois sensível ao toque (`touchmove` e `pointermove`) com divisor dourado suave e rótulos legíveis.

---

### 3. Key Product Decisions & Trade-Offs

- **Hero com Filtro Escuro e Foto do Cliente**:
  - *Abordagem*: Hero em tela cheia com a foto do profissional em alta resolução, sobreposta por uma camada de vinheta escura degradê (`bg-gradient-to-t from-black/85 via-black/50 to-black/30`) para destacar o nome, frase de autoridade e o botão principal "Fale Conosco" com ícone do WhatsApp.
  - *Justificativa*: Atende exatamente ao pedido do usuário ("foto do cliente... uma camada com um filtro meio escuro para dar aquele efeito, e uma mensagem assim: fale conosco direcionado para o WhatsApp").
- **Vídeo de Apresentação Otimizado**:
  - *Abordagem*: Player responsivo com moldura dourada e cantos arredondados, suportando reprodução de vídeo nativo HTML5 MP4 com poster profissional e fallback para vídeo do YouTube/Vimeo.
  - *Justificativa*: Garante que o vídeo toque imediatamente sem bugs no iOS Safari e Android Chrome.
- **Antes e Depois Interativo**:
  - *Abordagem*: Componente interativo com barra divisora vertical que o usuário arrasta para os lados com o dedo no celular, revelando o antes e o depois de forma dinâmica e impressionante. Inclui seletor de casos (Harmonização Facial, Rinomodelação, Bioestimuladores, Lábios, etc.).
  - *Justificativa*: Gera alto impacto visual e comprovação social imediata do resultado clínico.
- **Profissionais com CRM e Função**:
  - *Abordagem*: Cards verticais elegantes com foto do profissional em tons claros e moldura dourada, nome completo, CRM/RQE destacado em tipografia limpa, especialidade e mini-currículo.
  - *Justificativa*: Cumpre os requisitos éticos e legais da medicina/odontologia enquanto transmite credibilidade total.
- **Modo Editor / Customizador em Tempo Real**:
  - *Abordagem*: Um modal discreto acessível por botão de engrenagem permite que o desenvolvedor e o cliente insiram novos números de WhatsApp, troquem links de fotos, títulos e vídeos diretamente na tela, salvando no `localStorage`.
  - *Justificativa*: Facilita ao cliente final personalizar seus dados reais sem necessitar alterar arquivos de código.

---

### 4. Technical Architecture & Data Strategy

#### Diagrama de Arquitetura do Sistema
```
┌─────────────────────────────────────────────────────────────────┐
│                          App.tsx                                │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  Header / TopBar (Logo Dourada + Link Rápido WhatsApp)  │   │
│   └─────────────────────────────────────────────────────────┘   │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  HeroSection (Foto Cliente + Filtro Dark + CTA Fale     │   │
│   │  Conosco com Link Dinâmico WhatsApp)                    │   │
│   └─────────────────────────────────────────────────────────┘   │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  VideoSection (Player Institucional + Moldura Dourada)  │   │
│   └─────────────────────────────────────────────────────────┘   │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  BeforeAfterSection (Slider Arrastável Touch-Friendly)  │   │
│   └─────────────────────────────────────────────────────────┘   │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  TeamSection (Fotos dos Médicos, CRM/RQE e Especialidade│   │
│   └─────────────────────────────────────────────────────────┘   │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  ClinicGallerySection (Ambientes, Consultórios e Spa)   │   │
│   └─────────────────────────────────────────────────────────┘   │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  Footer + Floating WhatsApp FAB (Zona do Polegar)       │   │
│   └─────────────────────────────────────────────────────────┘   │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  LiveCustomizerModal (Edição de Fotos, Vídeo e WhatsApp)│   │
│   └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

#### Modelo de Dados e Estado Local (`clinicData`)
- `clientInfo`: Nome da clínica/doutor(a), subtítulo, telefone de WhatsApp formatado, mensagem padrão para WhatsApp.
- `heroImage`: URL da foto do profissional em destaque no Hero.
- `introVideo`: URL do vídeo institucional (MP4 / WebM / Embed) e poster do vídeo.
- `beforeAfterCases`: Lista de casos contendo ID, procedimento, imagem de antes, imagem de depois e tempo decorrido.
- `professionals`: Lista de especialistas com nome, foto, registro profissional (CRM/UF, RQE, CRO), cargo/função e mini-bio.
- `clinicPhotos`: Galeria dos espaços físicos (Recepção, Sala de Procedimentos VIP, Consultório Principal, Lounge).
