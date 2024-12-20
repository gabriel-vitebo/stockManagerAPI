import { calculateStatus } from '@/utils/calculateStatus'
import { ProductRepository } from '../repositories/product-repository'

enum ProductStatus {
  OUT_OF_STOCK = 'OUT_OF_STOCK',
  LOW_STOCK = 'LOW_STOCK',
  IN_STOCK = 'IN_STOCK',
}

interface FetchAllProductUseCaseRequest {
  userId: string
}

interface ProductResponse {
  response: {
    id: string
    title: string
    description: string
    price: string
    initialAmount: number
    currentQuantity: number
    status: ProductStatus
  }[]
}

export class FetchAllProductUseCase {
  constructor(private productRepository: ProductRepository) { }

  async execute({
    userId,
  }: FetchAllProductUseCaseRequest): Promise<ProductResponse> {
    const products = await this.productRepository.fetchAll(userId)

    const response = products.map((product) => ({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      initialAmount: Number(product.initialAmount),
      currentQuantity: Number(product.currentQuantity),
      status: calculateStatus(
        Number(product.initialAmount),
        Number(product.currentQuantity),
      ),
    }))

    return { response }
  }
}
