import { Product } from '../entities/Product'

export interface ProductRepository {
  create(product: Product): Promise<void>
}
