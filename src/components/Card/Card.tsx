import React from 'react'
import { CardContainer, ImageWrapper, Title, TitleWrapper } from './StyledCard'

export interface CardProps {
  title: string
  imageUrl: string
  onClick?: () => void
}

export const Card: React.FC<CardProps> = ({ title, imageUrl, onClick }) => {
  return (
    <CardContainer
      tabIndex={0}
      role="button"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onClick?.()
        }
      }}
    >
      <ImageWrapper>
        <img src={imageUrl} alt={title} />
      </ImageWrapper>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
    </CardContainer>
  )
}
