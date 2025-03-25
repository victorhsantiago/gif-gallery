import styled from 'styled-components'

export const SearchFormStyled = styled.form`
  display: flex;
  align-items: center;
`

export const SearchInput = styled.input`
  padding: var(--spacing-sm);
  font-size: var(--font-size-md);
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primaryText};
`

export const SearchButton = styled.button`
  padding: var(--spacing-sm) var(--spacing-md);
  margin-left: var(--spacing-sm);
  font-size: var(--font-size-md);
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: var(--spacing-xs);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryText};
    color: ${({ theme }) => theme.colors.accent};
  }
`
