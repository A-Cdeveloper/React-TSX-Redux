import { useState, useEffect } from 'react'
import { ProductType } from '../types/types'

type ErrorType = {
  status: boolean
  errMessage: string
}

export const useGetProducts = () => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ErrorType>()

  useEffect(() => {
    setLoading(true)
    const getProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products')
        if (!response.ok) {
          setError({
            status: true,
            errMessage: 'Something was wrong',
          })
          return
        }
        const data = await response.json()
        setProducts(data.products)
      } catch (error) {
        setError({
          status: true,
          errMessage: `${error}`,
        })
      }
      setLoading(false)
    }

    getProducts()
  }, [])

  return {
    products,
    loading,
    error,
  }
}
