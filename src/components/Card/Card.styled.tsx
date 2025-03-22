import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  cursor: pointer;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
`

export const ImageWrapper = styled.div`
  flex: 0 0 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    min-height: 100%;
    min-width: 100%;
  }
`

export const TitleWrapper = styled.div`
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  padding: var(--spacing-xs);
`

export const Title = styled.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
