import { Entity } from '../../core/entities/entity'
import { UniqueEntityId } from '../../core/entities/unique-entity-id'
import { Optional } from '../../core/types/optional'

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
  private updateDate() {
    this.props.updatedAt = new Date()
  }

  get title() {
    return this.props.title
  }

  get price() {
    return this.props.price
  }

  get description() {
    return this.props.description
  }

  get initialAmount() {
    return this.props.initialAmount
  }

  get userId() {
    return this.props.userId
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updateAt() {
    return this.props.updatedAt
  }

  set title(title: string) {
    this.props.title = title
    this.updateDate()
  }

  set price(price: string) {
    this.props.price = price
    this.updateDate()
  }

  set description(description: string) {
    this.props.description = description
    this.updateDate()
  }

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
