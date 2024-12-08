import { FastifyInstance } from 'fastify'
import { createProduct } from './create-product'
import { fetchAllProducts } from './fetchAllProducts'
import { updateProduct } from './update'

export async function productRoutes(app: FastifyInstance) {
  app.post('/products/new', createProduct)
  app.put('/products/update/:id', updateProduct)
  app.get('/products/:userId', fetchAllProducts)
}
