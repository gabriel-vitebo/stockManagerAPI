import { calculateStatus } from '@/utils/calculateStatus'
import { ProductRepository } from '../repositories/product-repository'

enum ProductStatus {
  OUT_OF_STOCK = 'OUT_OF_STOCK',
  LOW_STOCK = 'LOW_STOCK',
  IN_STOCK = 'IN_STOCK',
}

interface CreateProductUseCaseRequest {
  title: string
  description: string
  price: string
  initialAmount: number
  currentQuantity?: number
  userId: string
}

interface CreateProductUseCaseResponse {
  response: {
    title: string
    description: string
    price: string
    initialAmount: number
    currentQuantity: number
    status: ProductStatus
  }
}

export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) { }

  async execute({
    title,
    price,
    description,
    initialAmount,
    currentQuantity,
    userId,
  }: CreateProductUseCaseRequest): Promise<CreateProductUseCaseResponse> {
    const finalCurrentQuantity = currentQuantity ?? initialAmount

    const status = calculateStatus(initialAmount, finalCurrentQuantity)

    await this.productRepository.create({
      userId,
      title,
      price,
      description,
      initialAmount,
      currentQuantity: finalCurrentQuantity,
      status,
    })

    return {
      response: {
        title,
        description,
        price,
        initialAmount,
        currentQuantity: finalCurrentQuantity,
        status,
      },
    }
  }
}
