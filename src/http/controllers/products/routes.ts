import { FastifyInstance } from 'fastify'
import { createProduct } from './create-product'
import { fetchAllProducts } from './fetchAllProducts'
import { updateProduct } from './update'
import { getProduct } from './getProduct'
import { deleteProduct } from './delete-product'

export async function productRoutes(app: FastifyInstance) {
  app.post('/products/new', createProduct)
  app.put('/products/update/:id', updateProduct)
  app.get('/products/:userId', fetchAllProducts)
  app.get('/products/details/:id', getProduct)
  app.delete('/products/delete/:id', deleteProduct)
}
