import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { PrismaProductRepository } from '@/domain/repositories/prisma/prisma-product-repository'
import { UpdateProductUseCase } from '@/domain/use-cases/updateProduct'

export async function updateProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const updateProductBodySchema = z.object({
    title: z.string(),
    description: z.string(),
    price: z.string(),
    initialAmount: z.number(),
  })

  const updateProductParamsSchema = z.object({
    id: z.string(),
  })

  const { title, description, price, initialAmount } =
    updateProductBodySchema.parse(request.body)

  const { id } = updateProductParamsSchema.parse(request.params)

  try {
    const productRepository = new PrismaProductRepository()
    const updateUseCase = new UpdateProductUseCase(productRepository)

    await updateUseCase.execute({
      id,
      title,
      description,
      price,
      initialAmount,
    })
  } catch (error) {
    console.error(error)
    return reply.status(409).send()
  }

  return reply.status(201).send()
}
