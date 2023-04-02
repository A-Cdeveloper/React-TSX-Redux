import { useEffect } from 'react'
import { Typography, Container } from '@mui/material'
import Products from './components/Products'

import { useAppDispatch, useAppSelector } from './store/hooks'
import { fetchProducts, selectProducts } from './store/productSlice'

const App = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(selectProducts)

  console.log(products.productsList)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <Container sx={{ textAlign: 'center', p: 4 }}>
      <>
        <Typography
          variant="h1"
          component="h2"
          color="secondary"
          sx={{ pb: 2 }}
        >
          Products
        </Typography>
        <Products products={products.productsList.slice(0, 20)} />

        <Typography
          variant="h1"
          component="h2"
          color="secondary"
          sx={{ pb: 2, mt: 4 }}
        >
          Quotes
        </Typography>
      </>
    </Container>
  )
}

export default App
