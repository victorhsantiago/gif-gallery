import React from 'react'
import { StyledGrid } from './StyledGrid'

interface GridProps {
  children: React.ReactNode
}

export const Grid: React.FC<GridProps> = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>
}
