import { ProductType, ProductsType } from '../types/types'
import { Box } from '@mui/material'

import Product from './Product'

export const Products = ({ products }: ProductsType) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map((product: ProductType) => {
        return (
          <Product
            id={product.id}
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            brand={product.brand}
            category={product.category}
            thumbnail={product.thumbnail}
          />
        )
      })}
    </Box>
  )
}

export default Products
