import { ProductType } from '../types/types'
import { Box, Typography, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { useAppDispatch } from '../store/hooks'
import { deleteProduct } from '../store/productSlice'

export const Product = ({
  id,
  title,
  description,
  price,
  brand,
  category,
  thumbnail,
}: ProductType) => {
  const dispatch = useAppDispatch()

  const deleteProductHandler = (id: number) => {
    dispatch(deleteProduct(id))
  }

  return (
    <Box
      sx={{
        width: '23%',
        border: '1px solid #ccc',
        p: 2,
        m: 1,
        pb: 10,
        position: 'relative',
      }}
    >
      <IconButton onClick={() => deleteProductHandler(id)}>
        <CloseIcon />
      </IconButton>
      <Typography variant="body2">{category}</Typography>
      <Typography variant="body1">{brand}</Typography>
      <Typography variant="h3" fontWeight={700} my={1} fontSize={20}>
        {title}
      </Typography>
      <img
        src={thumbnail}
        alt={title}
        style={{ width: 'auto', maxWidth: '100%', height: '150px' }}
      />
      <Typography variant="body2" sx={{ my: 2 }}>
        {description}
      </Typography>
      <Typography
        variant="body1"
        component="h3"
        sx={{
          position: 'absolute',
          bottom: '10px',
          textAlign: 'center',
          width: '100%',
        }}
      >
        Price:{' '}
        <Typography sx={{ fontWeight: '700' }}>{price.toFixed(2)} $</Typography>
      </Typography>
    </Box>
  )
}

export default Product
