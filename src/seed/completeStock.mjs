import axios, { isAxiosError } from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

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

async function seedCurrentQuantity() {
  try {
    const products = await fetchProducts()

    // Verificar se os produtos foram retornados corretamente
    if (!products || products.length === 0) {
      console.error('Nenhum produto encontrado.')
      return
    }

    // Atualizar cada produto
    for (const product of products) {
      if (product.initialAmount !== undefined) {
        product.currentQuantity = product.initialAmount
        console.log(`Atualizando produto ${product.id}:`, product)
        await api.put(`/products/update/${product.id}`, product)
      } else {
        console.error(
          `Produto ${product.id} não possui initialAmount definido.`,
        )
      }
    }

    console.log('Seed completed successfully.')
  } catch (error) {
    console.error('Error seeding currentQuantity:', error)
  }
}

// Executar a seed
seedCurrentQuantity()
