import { Entity } from '../../core/entities/entity'
import { UniqueEntityId } from '../../core/entities/unique-entity-id'
import { Optional } from '../../core/types/optional'
import { CreateProduct } from '../use-cases/CreateProduct'

interface ProductProps {
  title: string
  price: string
  description: string
  initialAmount: number
  userId: UniqueEntityId
  createdAt: Date
  updatedAt?: Date
}

export class Product extends Entity<ProductProps> {
  static create(
    props: Optional<ProductProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const product = new Product(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )

    return product
  }
}
