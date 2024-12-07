import fastify from 'fastify'
import { userRoutes } from './http/controllers/user/routes'
import { productRoutes } from './http/controllers/products/routes'

export const app = fastify()

app.register(userRoutes)
app.register(productRoutes)
