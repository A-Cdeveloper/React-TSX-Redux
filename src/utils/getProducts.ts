const API = 'https://dummyjson.com'

export const getProducts = async () => {
  const response = await fetch(`${API}/products`)
  const data = await response.json()
  return data.products
}

export const getQuotas = async () => {
  const response = await fetch(`${API}/quotes`)
  const data = await response.json()
  return data.quotes
}
