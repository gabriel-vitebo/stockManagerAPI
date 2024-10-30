import { Product } from '../entities/Product'
import { ProductRepository } from '../repositories/product-repository'
import { UniqueEntityId } from '../../core/entities/unique-entity-id'

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
    const product = Product.create({
      title,
      price,
      description,
      initialAmount,
      userId: new UniqueEntityId(userId),
    })

    await this.productRepository.create(product)

    return { product }
  }
}
