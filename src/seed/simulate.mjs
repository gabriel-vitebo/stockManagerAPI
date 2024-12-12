import axios, { isAxiosError } from 'axios'
import { setTimeout } from 'timers/promises'

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

// Função para buscar produtos do back-end
async function fetchProducts() {
  try {
    const response = await api.get(
      '/products/0dc99b02-9d21-48cd-b5fe-8c79c8ac5e25',
    )
    return response.data.response
  } catch (error) {
    if (isAxiosError(error)) {
      console.error('Erro ao buscar produtos:', error.message)
    } else {
      console.error('Erro ao buscar produtos:', error)
    }
    return []
  }
}

// Função para verificar o estoque de um produto
async function fetchProductStock(productId) {
  try {
    const response = await api.get(`/products/details/${productId}`)
    const completeStatus = {
      status: response.data.response.status,
      currentQuantity: response.data.response.currentQuantity,
    }
    return completeStatus
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(
        `Erro ao verificar estoque do produto ${productId}:`,
        error.message,
      )
    } else {
      console.error(`Erro ao verificar estoque do produto ${productId}:`, error)
    }
    return 0
  }
}

// Função para vender um produto
async function sellProduct(productId, quantity) {
  try {
    await api.put(`products/update/${productId}`, {
      currentQuantity: quantity,
    })
    console.log(`Produto ${productId} vendido com quantidade: ${quantity}`)
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(`Erro ao vender produto ${productId}:`, error.message)
    } else {
      console.error(`Erro ao vender produto ${productId}:`, error)
    }
  }
}

// Função principal
async function simulateSales() {
  const startTime = Date.now()
  const duration = 60 * 1000 // 1 minuto em milissegundos

  while (Date.now() - startTime < duration) {
    const products = await fetchProducts()

    if (!Array.isArray(products) || products.length === 0) {
      console.log(
        'Nenhum produto encontrado ou dados inválidos. Encerrando simulação.',
      )
      break
    }

    // Selecionar de 1 a 5 produtos aleatoriamente
    const productSample = products
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.floor(Math.random() * 5) + 1)

    for (const product of productSample) {
      const stock = await fetchProductStock(product.id)

      if (stock.status === 'LOW_STOCK' || stock.status === 'IN_STOCK') {
        const quantityToSell = Math.min(
          stock.currentQuantity,
          Math.floor(Math.random() * 10) + 1,
        )
        await sellProduct(product.id, quantityToSell)
      } else {
        console.log(`Produto ${product.id} está fora de estoque.`)
      }
    }

    // Verificar se todos os produtos estão fora de estoque
    const allOutOfStock = await Promise.all(
      products.map(async (product) => {
        const stock = await fetchProductStock(product.id)
        return stock === 0
      }),
    )

    if (allOutOfStock.every(Boolean)) {
      console.log(
        'Todos os produtos estão fora de estoque. Encerrando simulação.',
      )
      break
    }

    // Pausa aleatória entre 1 a 10 segundos entre as vendas
    const randomPause = Math.floor(Math.random() * 10000) + 1000
    await setTimeout(randomPause)
  }
}

// Iniciar a simulação ao rodar o script
simulateSales().catch((error) => {
  console.error('Erro na simulação:', error.message)
  process.exit(1)
})
