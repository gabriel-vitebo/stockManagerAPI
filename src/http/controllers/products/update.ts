import { FastifyReply, FastifyRequest } from 'fastify'
import { prisma } from '../../../lib/prisma' // Supondo que você esteja usando o Prisma ou outra ORM
import { Prisma } from '@prisma/client'

export async function updateProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = request.params as { id: string }
  const updatedData = request.body as Prisma.ProductUpdateInput

  try {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: updatedData,
    })

    return reply.status(200).send({ success: true, product: updatedProduct })
  } catch (error) {
    console.error('Failed to update product:', error)
    return reply
      .status(500)
      .send({ success: false, error: 'Failed to update product' })
  }
}
