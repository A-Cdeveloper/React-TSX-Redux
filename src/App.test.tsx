import { render, screen } from '@testing-library/react'
import App from './App'

describe('App component render', () => {
  test('Headline render', () => {
    render(<App />)
    const headerElement = screen.getByRole('heading', { level: 2 })
    expect(headerElement).toBeInTheDocument()
  })
})
