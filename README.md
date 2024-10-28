# Gerenciador de Projetos - Back-End

Este documento descreve as funcionalidades e estrutura necessárias para o desenvolvimento do back-end de um sistema de gerenciamento de estoque de produtos, utilizando Node.js com TypeScript e aplicando o modelo DDD (Domain-Driven Design).

## Entidades

### Produto (Product)
A entidade **Produto** representa um item no estoque, com as seguintes propriedades:

- `id`: Identificação única do produto.
- `titulo`: Título do produto.
- `preco`: Preço do produto.
- `quantidadeInicial`: Quantidade inicial de produtos no estoque.
- `quantidadeAtual`: Quantidade atual de produtos no estoque (atualizada automaticamente com base nas vendas).
- `descricao`: Descrição do produto.
- `status`: Status do produto (Em estoque, Pouco estoque, Fora de estoque).

### Usuário (User) [opcional]
Se houver a necessidade de associar os produtos a um usuário, a entidade **Usuário** terá as seguintes propriedades:

- `id`: Identificação única do usuário.
- `nome`: Nome do usuário.
- `email`: Email do usuário.

## Casos de Uso (Use Cases)

[ ] Cadastrar Produto (CreateProductUseCase)
O usuário poderá cadastrar um novo produto informando:

   - [ ] Título do produto
   - [ ] Preço do produto 
   - [ ] Quantidade inicial do produto
   - [ ] Descrição do produto

Ao cadastrar o produto, a **quantidade atual** será igual à **quantidade inicial**, e o **status** do produto será calculado.

[ ] Editar Produto (EditProductUseCase)
O usuário poderá editar as informações de um produto, como:

- [ ] Título
- [ ] Preço
- [ ] Quantidade inicial
- [ ] Descrição

Se a **quantidade inicial** for atualizada, a **quantidade atual** será redefinida para o novo valor da quantidade inicial.

[ ] Listar Todos os Produtos (ListAllProductsUseCase)
O usuário poderá listar todos os produtos cadastrados, com os seguintes detalhes:

- [ ] Título
- [ ] Preço
- [ ] Quantidade atual
- [ ] Status (Em estoque, Pouco estoque, Fora de estoque)

[ ] Filtrar Produtos (FilterProductsUseCase)
O usuário poderá filtrar os produtos cadastrados de acordo com:

- [ ] **Título do produto**
- [ ] **Status do produto**: Em estoque, Pouco estoque, Fora de estoque

[ ] Simular Venda de Produtos (SimulateProductSaleUseCase)
Um script será criado para simular vendas aleatórias dos produtos. Este script deve:

- [ ] Atualizar a quantidade atual do produto após cada venda.
- [ ] Validar se o produto tem quantidade suficiente em estoque antes de realizar a venda.
- [ ] Não permitir vendas de produtos com estoque esgotado.
- [ ]Notificar o usuário caso o estoque esteja baixo ou esgotado.

[ ] Atualizar Estoque (UpdateStockUseCase)
O usuário poderá atualizar a **quantidade inicial** de um produto, o que resultará na redefinição da **quantidade atual** para o novo valor. Isso ocorre porque o estoque foi renovado.

[ ] Calcular Status do Produto (CalculateProductStatusUseCase)
Sempre que o estoque for atualizado ou uma venda for realizada, a aplicação calculará o **status do produto** baseado na **porcentagem de estoque restante**:

- [ ] Se a **quantidade atual** for maior que 50% da quantidade inicial, o status será **"Em estoque"**.
- [ ] Se a **quantidade atual** for menor que 50%, o status será **"Pouco estoque"**.
- [ ] Se a **quantidade atual** for igual a 0%, o status será **"Fora de estoque"**.

## Agregados

No contexto do DDD, um **agregado** é um grupo de entidades que são tratadas como uma única unidade. Neste caso, o **Produto** é o agregado principal, pois todas as ações relacionadas ao estoque e vendas dependem dessa entidade.

## Repositórios

Os **repositórios** são responsáveis por armazenar e recuperar as entidades. Exemplo de um repositório necessário:

- **ProductRepository**: Responsável por todas as operações de persistência relacionadas aos produtos, como salvar, atualizar, listar e buscar por filtros.

## Serviços de Domínio

Os **serviços de domínio** encapsulam a lógica de negócio que não pertence diretamente a uma entidade. Um exemplo seria o serviço responsável por calcular o status do produto ou validar se um produto pode ser vendido.

## Estrutura de Pastas

Sugestão de estrutura de pastas seguindo o padrão DDD:

