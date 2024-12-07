import { Prisma, Product } from '@prisma/client'

export interface ProductRepository {
  create(data: Prisma.ProductUncheckedCreateInput): Promise<void>
  fetchAll(userId: string): Promise<Product[]>
}
