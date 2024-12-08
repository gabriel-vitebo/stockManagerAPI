import { ProductRepository } from '../repositories/product-repository'

interface UpdateProductUseCaseRequest {
  id: string
  title?: string
  price?: string
  initialAmount?: number
  description?: string
}

interface UpdateProductUseCaseResponse {
  response: {
    title: string
    description: string
    price: string
    initialAmount: number
    currentQuantity: number
  }
}

export class UpdateProductUseCase {
  constructor(private productRepository: ProductRepository) { }

  async execute({
    id,
    title,
    price,
    initialAmount,
    description,
  }: UpdateProductUseCaseRequest): Promise<UpdateProductUseCaseResponse> {
    const currentProduct = await this.productRepository.getById(id)

    if (!currentProduct) {
      throw new Error('Product not found')
    }

    const updatedProduct = await this.productRepository.update({
      title: title ?? currentProduct.title,
      price: price ?? currentProduct.price,
      initialAmount: initialAmount ?? currentProduct.initialAmount,
      description: description ?? currentProduct.description,
      currentQuantity:
        initialAmount !== undefined
          ? initialAmount
          : currentProduct.currentQuantity,
      userId: currentProduct.userId,
    })

    return {
      response: {
        title: updatedProduct.title,
        description: updatedProduct.description,
        price: updatedProduct.price,
        initialAmount: Number(updatedProduct.initialAmount),
        currentQuantity: Number(updatedProduct.currentQuantity),
      },
    }
  }
}
