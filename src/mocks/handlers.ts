import { rest } from 'msw'

export const handlers = [
  rest.get('https://dummyjson.com/products/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        products: [
          {
            title: 'iPhone 9',
            description: 'An apple mobile which is nothing like apple',
          },
        ],
      })
    )
  }),
]
