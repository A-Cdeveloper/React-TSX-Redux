import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from './store'

import { getProducts } from '../utils/getProducts'

import { ProductType } from '../types/types'

export const fetchProducts = createAsyncThunk<ProductType[]>(
  'products/fetchProducts',
  async () => getProducts()
)

type ProductsState = {
  productsList: ProductType[]
}

////
const initialState: ProductsState = {
  productsList: [],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    deleteProduct(state, { payload }) {
      state.productsList = state.productsList.filter((el) => el.id !== payload)
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.productsList.push(...payload)
    })
  },
})

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState) => state.products
export const { deleteProduct } = productSlice.actions
export default productSlice.reducer
