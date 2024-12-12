import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { ProductRepository } from '../product-repository'

export class PrismaProductRepository implements ProductRepository {
  async delete(id: string) {
    await prisma.product.delete({
      where: {
        id,
      },
    })
  }

  async getById(id: string) {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    })

    if (!product) {
      return null
    }

    return {
      ...product,
      initialAmount: product.initialAmount.toNumber(),
      currentQuantity: product.currentQuantity.toNumber(),
    }
  }

  async update(data: Prisma.ProductUncheckedCreateInput) {
    const product = await prisma.product.update({
      where: {
        id: data.id as string,
      },
      data,
    })

    return product
  }

  async create(data: Prisma.ProductUncheckedCreateInput) {
    await prisma.product.create({ data })
  }

  async fetchAll(userId: string) {
    const products = await prisma.product.findMany({
      where: {
        userId,
      },
    })

    return products
  }
}
