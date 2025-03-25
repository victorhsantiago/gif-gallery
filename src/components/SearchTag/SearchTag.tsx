import { CloseTagButton, SearchTagStyled } from './SearchTag.styled'

interface SearchTagProps {
  currentSearch: string
  handleClearSearch: () => void
}

export function SearchTag({
  currentSearch,
  handleClearSearch,
}: SearchTagProps) {
  return (
    <SearchTagStyled>
      {currentSearch}
      <CloseTagButton
        type="button"
        aria-label="Remove search filter"
        onClick={handleClearSearch}
      >
        &times;
      </CloseTagButton>
    </SearchTagStyled>
  )
}
