import { render, screen } from '@tests/test.utils'
import { Card, CardProps } from './Card'

describe('Card Component', () => {
  const defaultProps: CardProps = {
    title: 'Sample Title',
    imageUrl: 'https://via.placeholder.com/150',
  }

  it('should render the card with title and image', () => {
    render(<Card {...defaultProps} />)

    const titleElement = screen.getByText(defaultProps.title)
    const imageElement = screen.getByAltText(defaultProps.title)

    expect(titleElement).toBeInTheDocument()
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', defaultProps.imageUrl)
  })
})
