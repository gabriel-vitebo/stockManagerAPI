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
      userId: '23dfe3c4-a74d-4abb-903f-56ab4dd4aaf1',
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
