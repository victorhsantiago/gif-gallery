import React from 'react'
import { CardContainer, ImageWrapper, Title, TitleWrapper } from './StyledCard'
import { ImageWithLoader } from '@components/ImageWithLoader/ImageWithLoader'

export interface CardProps {
  title: string
  imageUrl: string
}

export const Card: React.FC<CardProps> = ({ title, imageUrl }) => {
  return (
    <CardContainer>
      <ImageWrapper>
        <ImageWithLoader src={imageUrl} alt={title} />
      </ImageWrapper>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
    </CardContainer>
  )
}
