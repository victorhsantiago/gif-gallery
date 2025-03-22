import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`

const Dot = styled.div`
  width: var(--spacing-sm);
  height: var(--spacing-sm);
  margin: 0 6px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.accent};
  animation: ${bounce} 1.4s infinite ease-in-out both;

  &:nth-child(1) {
    animation-delay: -0.32s;
  }
  &:nth-child(2) {
    animation-delay: -0.16s;
  }
  &:nth-child(3) {
    animation-delay: 0;
  }
`

export function Loading() {
  return (
    <LoaderWrapper role="status" aria-label="Loading">
      <Dot />
      <Dot />
      <Dot />
    </LoaderWrapper>
  )
}
