import { render, screen, fireEvent } from '@tests/test.utils'
import { SearchForm } from './SearchForm'

describe('SearchForm Component', () => {
  const mockOnSubmit = vi.fn()

  beforeEach(() => {
    mockOnSubmit.mockClear()
  })

  it('should render the search input and button', () => {
    render(<SearchForm onSubmit={mockOnSubmit} />)

    const searchInput = screen.getByPlaceholderText('Search GIFs...')
    const searchButton = screen.getByText('Search')

    expect(searchInput).toBeInTheDocument()
    expect(searchButton).toBeInTheDocument()
  })

  it('should call onSubmit with the search term when the form is submitted', () => {
    render(<SearchForm onSubmit={mockOnSubmit} />)

    const searchInput = screen.getByPlaceholderText('Search GIFs...')
    const searchButton = screen.getByText('Search')

    fireEvent.change(searchInput, { target: { value: 'cats' } })
    fireEvent.click(searchButton)

    expect(mockOnSubmit).toHaveBeenCalledWith('cats')
  })

  it('should clear the search input after form submission', () => {
    render(<SearchForm onSubmit={mockOnSubmit} />)

    const searchInput = screen.getByPlaceholderText('Search GIFs...')
    const searchButton = screen.getByText('Search')

    fireEvent.change(searchInput, { target: { value: 'cats' } })
    fireEvent.click(searchButton)

    expect(searchInput).toHaveValue('')
  })
})
