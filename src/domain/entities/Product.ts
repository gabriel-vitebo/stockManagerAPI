import {randomUUID} from "node:crypto";

export class Product {
    id: string
    title: string
    price: number
    initialAmount: number
    currentQuantity: number
    description: string

    constructor(title: string, price: number, description: string, initialAmount: number, currentQuantity?: number, id?: string) {
        this.title = title
        this.price = price
        this.description = description
        this.initialAmount = initialAmount
        this.currentQuantity = currentQuantity ?? initialAmount
        this.id = id ?? randomUUID()
    }
}