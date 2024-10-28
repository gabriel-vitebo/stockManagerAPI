import { randomUUID } from 'node:crypto'

interface ProductProps {
  title: string
  price: string
  description: string
  initialAmount: number
  userId: string
}

export class Product {
  public id: string
  public userId: string
  public title: string
  public price: string
  public initialAmount: number
  public currentQuantity: number
  public description: string

  constructor(props: ProductProps, currentQuantity?: number, id?: string) {
    this.title = props.title
    this.price = props.price
    this.description = props.description
    this.initialAmount = props.initialAmount
    this.userId = props.userId
    this.currentQuantity = currentQuantity ?? props.initialAmount
    this.id = id ?? randomUUID()
  }
}
