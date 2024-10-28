import { Product } from '../entities/Product'

interface CreateProductUseCaseRequest {
  userId: string
  title: string
  price: string
  initialAmount: number
  description: string
}

export class CreateProduct {
  execute({
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

    return { product }
  }
}
