import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { PrismaProductRepository } from '@/domain/repositories/prisma/prisma-product-repository'
import { DeleteProductUseCase } from '@/domain/use-cases/deleteProduct'

export async function deleteProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const deleteProductParamsSchema = z.object({
    id: z.string(),
  })

  const { id } = deleteProductParamsSchema.parse(request.params)

  try {
    const productRepository = new PrismaProductRepository()
    const deleteProductUseCase = new DeleteProductUseCase(productRepository)

    await deleteProductUseCase.execute({
      id,
    })
  } catch (error) {
    return reply.status(409).send()
  }

  return reply.status(200).send()
}
