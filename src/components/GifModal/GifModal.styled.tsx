import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  animation: ${fadeIn} 0.3s ease-out;
`

export const ModalContainer = styled.div`
  position: relative;
  width: 80%;
  max-width: 800px;
  max-height: 80%;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: var(--spacing-xs);
  overflow-y: auto;
  transition: height 0.3s;
  animation: ${fadeIn} 0.3s ease-out;

  & img {
    width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);

  & h2 {
    font-size: var(--font-size-lg);
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: var(--font-size-lg);
  cursor: pointer;
`
