import { Entity } from '../../core/entities/entity'

interface ProductProps {
  title: string
  price: string
  description: string
  initialAmount: number
  userId: string
}

export class Product extends Entity<ProductProps> {}
