import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { ProductRepository } from '../product-repository'

export class PrismaProductRepository implements ProductRepository {
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
