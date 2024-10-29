import { Product } from '../entities/Product'
import { ProductRepository } from '../repositories/product-repository'

interface CreateProductUseCaseRequest {
  userId: string
  title: string
  price: string
  initialAmount: number
  description: string
}

export class CreateProduct {
  constructor(private productRepository: ProductRepository) {}

  async execute({
    userId,
    title,
    price,
    initialAmount,
    description,
  }: CreateProductUseCaseRequest) {
    const product = new Product({
      title,
      price,
      description,
      initialAmount,
      userId,
    })

    await this.productRepository.create(product)

    return { product }
  }
}
