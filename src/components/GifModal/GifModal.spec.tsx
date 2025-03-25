import { Mock } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@tests/test.utils'
import { useNavigate } from 'react-router-dom'
import { useFetchGifs } from '@hooks/useGiphy'
import { GifModal } from './GifModal'

vi.mock('@hooks/useGiphy', () => ({
  useFetchGifs: vi.fn(),
}))

vi.mock(import('react-router-dom'), async (importOriginal) => {
  const original = await importOriginal()

  return { ...original, useNavigate: vi.fn() }
})

const mockGif = {
  id: '1',
  title: 'Sample Gif',
  images: {
    original: {
      webp: 'https://via.placeholder.com/150.webp',
    },
  },
}

describe('GifModal Component', () => {
  const mockNavigate = vi.fn()

  beforeEach(() => {
    ;(useFetchGifs as Mock).mockReturnValue({
      fetchGif: vi.fn(),
      gif: mockGif,
    })
    ;(useNavigate as Mock).mockReturnValue(mockNavigate)
  })

  it('should render the modal with gif title and image', () => {
    render(<GifModal />)

    const titleElement = screen.getByText(mockGif.title)
    const imageElement = screen.getByAltText(mockGif.title)

    expect(titleElement).toBeInTheDocument()
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', mockGif.images.original.webp)
  })

  it('should close the modal when the close button is clicked', async () => {
    const { getByLabelText } = render(<GifModal />)

    const closeButton = getByLabelText('Close')
    await userEvent.click(closeButton)

    expect(mockNavigate).toHaveBeenCalledWith(-1)
  })
})
