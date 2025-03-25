import { FormEvent, useState } from 'react'
import {
  SearchButton,
  SearchFormStyled,
  SearchInput,
} from './SearchForm.styled'

interface SearchFormProps {
  onSubmit: (query: string) => void
}

export function SearchForm({ onSubmit }: SearchFormProps) {
  const [searchTerm, setSearchTerm] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    onSubmit(searchTerm)
    setSearchTerm('')
  }

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Search GIFs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search GIFs"
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchFormStyled>
  )
}
