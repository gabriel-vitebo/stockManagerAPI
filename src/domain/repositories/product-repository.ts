import { Prisma, Product } from '@prisma/client'

export interface ProductRepository {
  create(data: Prisma.ProductUncheckedCreateInput): Promise<void>
  getById(id: string): Promise<{
    id: string
    title: string
    price: string
    description: string
    initialAmount: number
    currentQuantity: number
    createdAt: Date
    userId: string
  } | null>
  fetchAll(userId: string): Promise<Product[]>
  update(data: Prisma.ProductUncheckedCreateInput): Promise<Product>
  delete(id: string): Promise<void>
}
