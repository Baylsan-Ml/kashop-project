import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { ThemeProvider, CssBaseline, Container } from '@mui/material'
import theme from './MainTheme.js'
import './i18n.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <ThemeProvider theme={theme}>
    <CssBaseline />
      <App /> 
  </ThemeProvider>
  </>
)
