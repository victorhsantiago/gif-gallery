import { render, screen, fireEvent } from '@tests/test.utils'
import { Header } from './Header'

describe('Header Component', () => {
  const mockOnClearSearch = vi.fn()
  const mockOnSearch = vi.fn()

  beforeEach(() => {
    mockOnClearSearch.mockClear()
    mockOnSearch.mockClear()
  })

  it('should render the header with title and search form', () => {
    render(<Header onClearSearch={mockOnClearSearch} onSearch={mockOnSearch} />)

    const titleElement = screen.getByText('Giphy Gallery')
    const searchInput = screen.getByPlaceholderText('Search GIFs...')
    const searchButton = screen.getByText('Search')

    expect(titleElement).toBeInTheDocument()
    expect(searchInput).toBeInTheDocument()
    expect(searchButton).toBeInTheDocument()
  })

  it('should call onSearch with the search term when the form is submitted', () => {
    render(<Header onClearSearch={mockOnClearSearch} onSearch={mockOnSearch} />)

    const searchInput = screen.getByPlaceholderText('Search GIFs...')
    const searchButton = screen.getByText('Search')

    fireEvent.change(searchInput, { target: { value: 'cats' } })
    fireEvent.click(searchButton)

    expect(mockOnSearch).toHaveBeenCalledWith('cats')
  })

  it('should display the search tag when a search term is submitted', () => {
    render(<Header onClearSearch={mockOnClearSearch} onSearch={mockOnSearch} />)

    const searchInput = screen.getByPlaceholderText('Search GIFs...')
    const searchButton = screen.getByText('Search')

    fireEvent.change(searchInput, { target: { value: 'cats' } })
    fireEvent.click(searchButton)

    const searchTag = screen.getByText('cats')
    expect(searchTag).toBeInTheDocument()
  })

  it('should call onClearSearch and remove the search tag when the clear button is clicked', () => {
    render(<Header onClearSearch={mockOnClearSearch} onSearch={mockOnSearch} />)

    const searchInput = screen.getByPlaceholderText('Search GIFs...')
    const searchButton = screen.getByText('Search')

    fireEvent.change(searchInput, { target: { value: 'cats' } })
    fireEvent.click(searchButton)

    const clearButton = screen.getByLabelText('Remove search filter')
    fireEvent.click(clearButton)

    expect(mockOnClearSearch).toHaveBeenCalled()
    expect(screen.queryByText('cats')).not.toBeInTheDocument()
  })
})
