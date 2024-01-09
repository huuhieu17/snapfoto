import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { ThemeProvider } from '@mui/material'
import theme from './lib/theme.tsx'
import { Provider } from 'react-redux'
import { store } from '@/stores'
import "./i18n.ts";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>

  </React.StrictMode>,
)
