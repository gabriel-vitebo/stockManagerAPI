import { FastifyInstance } from 'fastify'
import { createProduct } from './create-product'
import { fetchAllProducts } from './fetchAllProducts'

export async function productRoutes(app: FastifyInstance) {
  app.post('/products/new', createProduct)
  app.get('/products/:userId', fetchAllProducts)
}
