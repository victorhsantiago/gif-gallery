import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles, lightTheme } from './GlobalStyles.tsx'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
