import { render, screen, fireEvent } from '@tests/test.utils'
import { SearchTag } from './SearchTag'

describe('SearchTag Component', () => {
  const mockHandleClearSearch = vi.fn()
  const defaultProps = {
    currentSearch: 'cats',
    handleClearSearch: mockHandleClearSearch,
  }

  beforeEach(() => {
    mockHandleClearSearch.mockClear()
  })

  it('should render the search tag with the current search term', () => {
    render(<SearchTag {...defaultProps} />)

    const searchTagElement = screen.getByText(defaultProps.currentSearch)
    expect(searchTagElement).toBeInTheDocument()
  })

  it('should call handleClearSearch when the close button is clicked', () => {
    render(<SearchTag {...defaultProps} />)

    const closeButton = screen.getByLabelText('Remove search filter')
    fireEvent.click(closeButton)

    expect(mockHandleClearSearch).toHaveBeenCalled()
  })
})
