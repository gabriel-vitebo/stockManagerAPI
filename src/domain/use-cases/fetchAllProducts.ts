import { ProductRepository } from '../repositories/product-repository'

interface FetchAllProductUseCaseRequest {
  userId: string
}

interface ProductResponse {
  response: {
    title: string
    description: string
    price: string
    initialAmount: number
    currentQuantity: number
  }[]
}

export class FetchAllProductUseCase {
  constructor(private productRepository: ProductRepository) { }

  async execute({
    userId,
  }: FetchAllProductUseCaseRequest): Promise<ProductResponse> {
    const products = await this.productRepository.fetchAll(userId)

    const response = products.map((product) => ({
      title: product.title,
      description: product.description,
      price: product.price,
      initialAmount: Number(product.initialAmount),
      currentQuantity: Number(product.currentQuantity),
    }))

    return { response }
  }
}
