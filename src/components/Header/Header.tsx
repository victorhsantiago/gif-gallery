import { useState } from 'react'
import { SearchForm, SearchTag } from '@components/index'
import { HeaderContainer, TagRow, TopRow } from './Header.styled'
import { Link } from 'react-router-dom'

interface HeaderProps {
  onClearSearch: () => void
  onSearch: (query: string) => void
}

export function Header({ onClearSearch, onSearch }: HeaderProps) {
  const [searchTerm, setSearchTerm] = useState('')

  function handleSubmit(query: string) {
    onSearch(query)
    setSearchTerm(query)
  }

  function handleClearSearch() {
    onClearSearch()
    setSearchTerm('')
  }

  return (
    <HeaderContainer>
      <TopRow>
        <Link to="/">
          <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Giphy Gallery</h1>
        </Link>

        <SearchForm onSubmit={handleSubmit} />
      </TopRow>

      {searchTerm && (
        <TagRow>
          <SearchTag
            currentSearch={searchTerm}
            handleClearSearch={handleClearSearch}
          />
        </TagRow>
      )}
    </HeaderContainer>
  )
}
