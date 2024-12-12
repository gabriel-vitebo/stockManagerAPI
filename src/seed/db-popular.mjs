import axios, { isAxiosError } from 'axios'
import { productsDefault } from '../utils/products.mjs'

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

const userId = '0dc99b02-9d21-48cd-b5fe-8c79c8ac5e25'

async function addProduct(product) {
  try {
    const response = await api.post('/products/new', product)
    return response.data
  } catch (error) {
    if (isAxiosError(error)) {
      console.error('Erro ao adicionar produto:', error.message)
    } else {
      console.error('Erro ao adicionar produto:', error)
    }
    return null
  }
}

async function seedProducts() {
  for (const product of productsDefault) {
    product.userId = userId
    const result = await addProduct(product)
    if (result) {
      console.log(`Produto ${product.id} adicionado com sucesso.`)
    }
  }

  console.log('Seed completed successfully.')
}

// Executar a seed
seedProducts()
