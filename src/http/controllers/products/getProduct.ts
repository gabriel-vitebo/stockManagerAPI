import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { PrismaProductRepository } from '@/domain/repositories/prisma/prisma-product-repository'
import { GetProductUseCase } from '@/domain/use-cases/getProduct'

export async function getProduct(request: FastifyRequest, reply: FastifyReply) {
  const getProductParamsSchema = z.object({
    id: z.string(),
  })

  const { id } = getProductParamsSchema.parse(request.params)

  try {
    const productRepository = new PrismaProductRepository()
    const getProductUseCase = new GetProductUseCase(productRepository)

    const { response } = await getProductUseCase.execute({
      id,
    })

    return reply.status(200).send({
      response,
    })
  } catch (error) {
    return reply.status(409).send()
  }
}
