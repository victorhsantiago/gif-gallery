import { render, screen } from '@tests/test.utils'
import userEvent from '@testing-library/user-event'
import { useFetchGifs } from '@hooks/useGiphy'
import { Home } from './Home'
import { Mock } from 'vitest'

vi.mock('@hooks/useGiphy', () => ({
  useFetchGifs: vi.fn(),
}))

const mockGifs = [
  {
    id: '1',
    title: 'Sample Gif 1',
    images: {
      original: {
        webp: 'https://via.placeholder.com/150.webp',
      },
    },
  },
  {
    id: '2',
    title: 'Sample Gif 2',
    images: {
      original: {
        webp: 'https://via.placeholder.com/150.webp',
      },
    },
  },
]

describe('Home Component', () => {
  const mockFetchGifs = vi.fn()
  const mockSearch = vi.fn()

  beforeEach(() => {
    ;(useFetchGifs as Mock).mockReturnValue({
      gifsList: mockGifs,
      fetchGifs: mockFetchGifs,
      search: mockSearch,
    })

    const mockIntersectionObserver = vi.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      disconnect: () => null,
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

  it('should render the header and grid with gifs', () => {
    render(<Home />)

    const titleElement = screen.getByText('Giphy Gallery')
    expect(titleElement).toBeInTheDocument()

    const gifLinks = screen.getAllByRole('link')
    expect(gifLinks).toHaveLength(mockGifs.length)

    mockGifs.forEach((gif) => {
      const gifTitle = screen.getByText(gif.title)
      expect(gifTitle).toBeInTheDocument()
    })
  })

  it('should call fetchGifs on mount', () => {
    render(<Home />)
    expect(mockFetchGifs).toHaveBeenCalled()
  })

  it('should call search when a search term is submitted', async () => {
    render(<Home />)

    const searchInput = screen.getByPlaceholderText('Search GIFs...')
    const searchButton = screen.getByText('Search')

    await userEvent.type(searchInput, 'cats')
    await userEvent.click(searchButton)

    expect(mockSearch).toHaveBeenCalledWith('cats')
  })

  it('should call fetchGifs when the clear search button is clicked', async () => {
    render(<Home />)

    const searchInput = screen.getByPlaceholderText('Search GIFs...')
    const searchButton = screen.getByText('Search')

    await userEvent.type(searchInput, 'cats')
    await userEvent.click(searchButton)

    const clearButton = screen.getByLabelText('Remove search filter')
    await userEvent.click(clearButton)

    expect(mockFetchGifs).toHaveBeenCalled()
  })
})
