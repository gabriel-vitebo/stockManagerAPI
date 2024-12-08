import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { PrismaProductRepository } from '@/domain/repositories/prisma/prisma-product-repository'
import { CreateProductUseCase } from '@/domain/use-cases/CreateProduct'

export async function createProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createProductBodySchema = z.object({
    title: z.string(),
    description: z.string(),
    price: z.string(),
    initialAmount: z.number(),
    currentQuantity: z.number().optional(),
    userId: z.string(),
  })

  const { title, description, price, initialAmount, currentQuantity, userId } =
    createProductBodySchema.parse(request.body)

  try {
    const productRepository = new PrismaProductRepository()
    const registerUseCase = new CreateProductUseCase(productRepository)

    await registerUseCase.execute({
      title,
      description,
      price,
      initialAmount,
      currentQuantity,
      userId,
    })
  } catch (error) {
    return reply.status(409).send()
  }

  return reply.status(201).send()
}
