
# ⏳ Chrono Trigger: Uma Viagem no Tempo com React ⏳

<a><img src="./assets/images/readme.png"></a>

### "Não é a força que importa, mas sim o coração que a comanda." - _Lucca Ashtear_

Saudações, viajante do tempo! Você acaba de abrir um portal para o projeto **Chrono Trigger**, uma homenagem interativa e moderna a um dos maiores RPGs de todos os tempos. Esta não é apenas uma aplicação, mas uma celebração da arte, da música e da nostalgia de Chrono Trigger, construída com as ferramentas mais eficientes da linha do tempo do desenvolvimento web.

O objetivo deste projeto é apresentar os heróis de Chrono Trigger de uma forma visualmente impactante, utilizando animações fluidas e uma interface limpa, servindo como um excelente exemplo de uma Single Page Application (SPA) moderna.

## 💻🔗📜 Site do Projeto
[Chrono Trigger](https://chrono-trigger-delta.vercel.app/)

<a><img src="./assets/images/Captura de tela.jpg"></a>

Como desenvolvedor sênior, analisei a arquitetura e as escolhas tecnológicas deste repositório. O projeto demonstra um domínio claro de conceitos modernos de frontend:

-   **Arquitetura de Componentes:** A estrutura é bem organizada, separando a aplicação em componentes reutilizáveis (`Card`, `Header`, `Footer`, etc.), o que é uma excelente prática para manutenibilidade e escalabilidade.
-   **Gerenciamento de Estilos:** A escolha do **Styled Components** para o CSS-in-JS é notável. Ela garante que os estilos sejam encapsulados e escopados, evitando conflitos de CSS e mantendo o código dos componentes limpo e coeso.
-   **Animações Declarativas:** O uso da biblioteca **Framer Motion** é um diferencial técnico significativo. Em vez de manipulações complexas de CSS ou do DOM, o projeto utiliza uma API declarativa para criar animações de UI sofisticadas e performáticas, elevando a experiência do usuário.
-   **Data-Driven UI:** A aplicação renderiza os personagens a partir de um arquivo de dados (`personagens.js`), uma abordagem que simula o consumo de uma API e facilita a adição de novos personagens sem a necessidade de alterar a lógica da UI.

## ✨ Funcionalidades (As "Techs" da Aplicação)

-   **Galeria de Personagens:** Apresenta os principais heróis da jornada em cards interativos.
-   **Animações Fluidas:** Cada card possui animações sutis de entrada e de hover, criadas com Framer Motion.
-   **Design Responsivo:** A interface se adapta graciosamente a diferentes tamanhos de tela, do desktop ao mobile.
-   **Interface Temática:** Todos os elementos visuais, da fonte ao background, foram cuidadosamente escolhidos para evocar a atmosfera do jogo.

## 🛠️ O "Epoch" (Stack Tecnológica)

Para construir nossa máquina do tempo, utilizamos as seguintes tecnologias de ponta:

| Tecnologia        | Finalidade                 | Análise                                                                                                   |
| :---------------- | :------------------------- | :-------------------------------------------------------------------------------------------------------- |
| **React** | Biblioteca principal da UI | A base para a criação de uma interface reativa e componentizada.                                          |
| **Vite** | Build Tool                 | Escolha moderna que oferece um ambiente de desenvolvimento extremamente rápido (HMR) e um build otimizado. |
| **Styled Components** | CSS-in-JS                  | Permite a criação de componentes com estilos encapsulados, facilitando a manutenção e a reutilização.   |
| **Framer Motion** | Biblioteca de Animação     | Adiciona animações complexas de forma declarativa e performática, crucial para a experiência do usuário.  |

## 🗺️ Mapa do Tempo (Estrutura do Projeto)

O projeto está organizado de forma lógica para facilitar a navegação e a manutenção:
<a><img src="./assets/images/readme.jpg"></a>

## 🚀 Abrindo um Portal Temporal (Como Rodar o Projeto)

Para executar este projeto em sua máquina local, você precisará ter o [Node.js](https://nodejs.org/) e o [Git](https://git-scm.com/) instalados.

1.  **Clone o repositório (Viaje para 1000 A.D.):**
    ```bash
    git clone [https://github.com/RPTecIADev/chrono-trigger.git](https://github.com/RPTecIADev/chrono-trigger.git)
    ```

2.  **Acesse o diretório do projeto:**
    ```bash
    cd chrono-trigger
    ```

3.  **Instale as dependências (Reúna sua party):**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento (Ative o portal!):**
    ```bash
    npm run dev
    ```

Após executar o último comando, um servidor local será iniciado. Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no seu terminal).

## 🔮 O Futuro (Possíveis Melhorias)

Como em toda linha do tempo, existem futuros alternativos e possibilidades de evolução:

-   [ ] **Páginas de Detalhes:** Criar uma rota para cada personagem, exibindo mais informações, stats e habilidades.
-   [ ] **Consumo de API:** Migrar os dados dos personagens para uma API externa (Node.js, Firebase, etc.).
-   [ ] **Adicionar mais conteúdo:** Incluir vilões, NPCs importantes ou até mesmo uma seção com a trilha sonora do jogo.
-   [ ] **Testes Unitários:** Implementar testes com Vitest/Jest para garantir a estabilidade dos componentes.
-   [ ] **Game ao-vivo:** Implementar um emulador rodando o jogo em pt-br.

---

## ✒️ Autor

**Rafael Rodrigues Pereira** - **Uma homenagem de um fã para outros fãs.** - [linkedin](https://www.linkedin.com/in/rafaelrpereira/)









