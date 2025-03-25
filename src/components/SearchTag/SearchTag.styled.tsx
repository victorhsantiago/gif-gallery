import styled from 'styled-components'

export const SearchTagStyled = styled.span`
  display: inline-flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.accent};
  padding: var(--spacing-xs) var(--spacing-sm);
  gap: var(--spacing-xs);
  border-radius: var(--spacing-xs);
  font-size: var(--font-size-sm);
`

export const CloseTagButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: bold;
`
