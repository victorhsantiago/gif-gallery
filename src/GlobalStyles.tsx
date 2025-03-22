import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  /* 1. Use a more-intuitive box-sizing model */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* 2. Remove default margin */
  * {
    margin: 0;
  }

  body {
    /* 3. Add accessible line-height */
    line-height: 1.5;
    /* 4. Improve text rendering */
    -webkit-font-smoothing: antialiased;
  }

  /* 5. Improve media defaults */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  /* 6. Inherit fonts for form controls */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* 7. Avoid text overflows */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  /* 8. Improve line wrapping */
  p {
    text-wrap: pretty;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-wrap: balance;
  }

  /*
    9. Create a root stacking context
  */
  #root,
  #__next {
    isolation: isolate;
  }

  #root {
    max-width: 1080px;
    margin: 0 auto;
  }

  :root {
    /* Spacing (REM) */
    --spacing-xxs: 0.25rem;
    --spacing-xs: 0.5rem;
    --spacing-sm: 0.75rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.25rem;
    --spacing-xl: 1.5rem;

    /* Font sizes (REM) */
    --font-size-sm: 0.875rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.25rem;

    /* Font weights */
    --font-weight-normal: 400;
    --font-weight-bold: 700;
  }

  * &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.font};
    font-optical-sizing: auto;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primaryText};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font};
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    color: inherit;
  }
`

const baseTheme = {
  font: "'Noto Sans', sans-serif",
}

export const lightTheme = {
  ...baseTheme,
  colors: {
    background: 'hsla(207, 80%, 92%, 1)',
    surface: 'hsla(223, 48%, 88%, 1)',
    accent: 'hsla(272, 33%, 60%, 1)',
    primaryText: 'hsla(301, 35%, 32%, 1)',
    secondaryText: 'hsla(294, 63%, 20%, 1)',
  },
}

export const darkTheme = {
  ...baseTheme,
  colors: {
    background: 'hsl(207, 24%, 15%)',
    surface: 'hsl(223, 34%, 20%)',
    accent: 'hsl(272, 33%, 60%)',
    primaryText: 'hsl(0, 0%, 100%)',
    secondaryText: 'hsl(0, 0%, 80%)',
  },
}
