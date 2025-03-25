import { render, screen, fireEvent } from '@tests/test.utils'
import { ImageWithLoader } from './ImageWithLoader'

describe('ImageWithLoader Component', () => {
  const defaultProps = {
    src: 'https://via.placeholder.com/150',
    alt: 'Sample Image',
  }

  it('should render the loading component initially', () => {
    render(<ImageWithLoader {...defaultProps} />)

    const loadingElement = screen.getByRole('status', { name: 'Loading' })
    expect(loadingElement).toBeInTheDocument()
  })

  it('should render the image with the correct src and alt attributes', () => {
    render(<ImageWithLoader {...defaultProps} />)

    const imageElement = screen.getByAltText(defaultProps.alt)
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', defaultProps.src)
  })

  it('should hide the loading component and display the image when it is loaded', () => {
    render(<ImageWithLoader {...defaultProps} />)

    const imageElement = screen.getByAltText(defaultProps.alt)
    fireEvent.load(imageElement)

    const loadingElement = screen.queryByRole('status', { name: 'Loading' })
    expect(loadingElement).not.toBeInTheDocument()
    expect(imageElement).toBeVisible()
  })
})
