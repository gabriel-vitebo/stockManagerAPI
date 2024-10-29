import { expect, test } from 'vitest'
import { CreateProduct } from '../CreateProduct'
import { ProductRepository } from '../../repositories/product-repository'
import { Product } from '../../entities/Product'

const fakeProductRepository: ProductRepository = {
  create: async (product: Product) => {},
}

test('CreateProduct', async () => {
  const createProduct = new CreateProduct(fakeProductRepository)

  const product = await createProduct.execute({
    userId: '1',
    title: 'Titulo do Produto',
    price: '100.00',
    description: 'Descrição do Produto',
    initialAmount: 100,
  })

  expect(product.product.title).toEqual('Titulo do Produto')
})
