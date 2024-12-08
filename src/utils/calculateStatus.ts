enum ProductStatus {
  OUT_OF_STOCK = 'OUT_OF_STOCK',
  LOW_STOCK = 'LOW_STOCK',
  IN_STOCK = 'IN_STOCK',
}

export function calculateStatus(
  initialAmount: number,
  currentQuantity: number,
): ProductStatus {
  if (currentQuantity === 0) {
    return ProductStatus.OUT_OF_STOCK
  }

  const percentage = (currentQuantity / initialAmount) * 100
  console.log(percentage)

  if (percentage === 0) {
    return ProductStatus.OUT_OF_STOCK
  } else if (percentage < 40) {
    return ProductStatus.LOW_STOCK
  } else {
    return ProductStatus.IN_STOCK
  }
}
