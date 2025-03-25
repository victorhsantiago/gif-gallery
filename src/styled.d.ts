import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    font: string
    breakpoints: {
      sm: string
      md: string
      lg: string
    }
    colors: {
      background: string
      surface: string
      accent: string
      primaryText: string
      secondaryText: string
    }
  }
}
