# Sistema de Gerenciamento de Inspeção de Contêineres e Cargas

## Visão Geral

Este projeto é uma aplicação front-end para gerenciar inspeções de contêineres e cargas.
Ele é construído usando Vue 3 e inclui funcionalidades como filtragem,
paginação e pop-ups modais para detalhes das inspeções.

## Versão

Versão atual: **0.0.5**

## Funcionalidades

- **Lista de Inspeções**: Exibe uma lista de inspeções buscadas de uma API.
- **Filtro**: Permite filtrar inspeções por contêiner.
- **Paginação**: Suporta a exibição paginada dos resultados das inspeções.
- **Pop-up Modal**: Mostra informações detalhadas sobre uma inspeção em um pop-up modal.
- **Responsividade**: Ajustes na exibição dos componentes para dispositivos móveis e tablets.
- **Botão de Tema**: Alterna entre temas claro e escuro, com a preferência salva em cache.
- **Botão de Voltar**: Adicionado à página de detalhes para facilitar a navegação.
- **Novos Ícones**: Inclusão de ícones para navegação e ações, como setas e ícones de tema.

## Componentes

### Componentes Principais

1. **InspectionContainer.vue**
   - Exibe a lista de inspeções.
   - Integra funcionalidades de filtragem, paginação e pop-up modal.
   - Atualizado para melhorar a responsividade e inclusão do botão de tema.

2. **Pagination.vue**
   - Gerencia a lógica e a interface de paginação.

3. **Filter.vue**
   - Gerencia a lógica e a interface de filtragem.

4. **Modal.vue**
   - Exibe informações detalhadas sobre uma inspeção em um pop-up modal.
   - Melhorado para responsividade e integração de novos ícones.

5. **InspectionDetail.vue**
   - Exibe detalhes sobre uma inspeção específica.
   - Adiciona um botão estilizado para retornar à lista de inspeções.

### Módulos Utilitários

1. **pagination.js**
   - Contém funções para gerenciar a lógica de paginação.

2. **filter.js**
   - Contém funções para gerenciar a lógica de filtragem.

## Novidades na Versão 0.5.0

- **Responsividade**:
   - **InspectionContainer.vue** e **InspectionDetail.vue** foram atualizados para melhorar a visualização em dispositivos móveis e tablets.
   - Ajustes nos estilos para evitar overflow de texto e garantir que os cartões e detalhes se ajustem corretamente em telas menores.

- **Botão de Voltar**:
   - Adicionado à página de detalhes (`InspectionDetail.vue`), permitindo que o usuário retorne à lista de inspeções.

- **Botão de Tema**:
   - Implementado na aplicação para alternar entre temas claro e escuro. O estado do tema é salvo em cache para manter a preferência do usuário.

- **Pop-up Modal**:
   - Melhorias no design e responsividade do modal (`Modal.vue`), com ícones de modal ajustados para diferentes tamanhos de tela.

- **Novos Ícones**:
   - **faArrowLeft** e **faArrowRight**: Ícones de setas para navegação.
   - **faArrowRightArrowLeft**: Ícone de setas bidirecionais.
   - **faHouse**, **faUserSecret**, **faCog**, **faInfoCircle**: Ícones adicionados para navegação e ações.







