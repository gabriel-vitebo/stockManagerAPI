import { FastifyInstance } from 'fastify'
import { createProduct } from './create-product'

export async function productRoutes(app: FastifyInstance) {
  app.post('/newproduct', createProduct)
}
