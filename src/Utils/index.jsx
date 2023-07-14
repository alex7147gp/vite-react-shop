



export const totalPrice = (products) => {
  let suma = 0
  products.forEach((product) => suma += product.price)

  return suma
}