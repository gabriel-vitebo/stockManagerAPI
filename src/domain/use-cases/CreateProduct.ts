import { ProductRepository } from '../repositories/product-repository'

interface CreateProductUseCaseRequest {
  title: string
  description: string
  price: string
  initialAmount: number
  currentQuantity: number
}

interface CreateProductUseCaseResponse {
  response: {
    title: string
    description: string
    price: string
    initialAmount: number
    currentQuantity: number
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
  }: CreateProductUseCaseRequest): Promise<CreateProductUseCaseResponse> {
    await this.productRepository.create({
      userId: '615f0013-4866-4e78-968a-be5db2c6b033',
      title,
      price,
      description,
      initialAmount,
      currentQuantity,
    })

    return {
      response: {
        title,
        description,
        price,
        initialAmount,
        currentQuantity,
      },
    }
  }
}
