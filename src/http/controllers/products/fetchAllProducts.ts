import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { PrismaProductRepository } from '@/domain/repositories/prisma/prisma-product-repository'
import { FetchAllProductUseCase } from '@/domain/use-cases/fetchAllProducts'

export async function fetchAllProducts(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const fetchAllProductsParamsSchema = z.object({
    userId: z.string(),
  })

  const { userId } = fetchAllProductsParamsSchema.parse(request.params)
  console.log(userId)

  try {
    const productRepository = new PrismaProductRepository()
    const registerUseCase = new FetchAllProductUseCase(productRepository)

    const { response } = await registerUseCase.execute({
      userId,
    })

    return reply.status(201).send({
      response,
    })
  } catch (error) {
    return reply.status(409).send()
  }
}
