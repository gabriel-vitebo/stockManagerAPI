import { calculateStatus } from '@/utils/calculateStatus'
import { ProductRepository } from '../repositories/product-repository'

enum ProductStatus {
  OUT_OF_STOCK = 'OUT_OF_STOCK',
  LOW_STOCK = 'LOW_STOCK',
  IN_STOCK = 'IN_STOCK',
}

interface GetProductUseCaseRequest {
  id: string
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
  }
}

export class GetProductUseCase {
  constructor(private productRepository: ProductRepository) { }

  async execute({ id }: GetProductUseCaseRequest): Promise<ProductResponse> {
    const product = await this.productRepository.getById(id)

    if (!product) {
      throw new Error('Product not found')
    }

    const response = {
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
    }

    return { response }
  }
}
