import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const StyledImage = styled.img<{ $loaded: boolean }>`
  display: ${({ $loaded }) => ($loaded ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const LoaderWrapper = styled.div<{ $loaded: boolean }>`
  display: ${({ $loaded }) => ($loaded ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;

  position: absolute;
  inset: 0;
`
