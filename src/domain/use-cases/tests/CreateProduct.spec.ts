import { expect, test } from 'vitest'
import { CreateProduct } from '../CreateProduct'

test('CreateProduct', () => {
  const createProduct = new CreateProduct()

  const product = createProduct.execute({
    userId: '1',
    title: 'Titulo do Produto',
    price: '100.00',
    description: 'Descrição do Produto',
    initialAmount: 100,
  })

  expect(product.product.title).toEqual('Titulo do Produto')
})
