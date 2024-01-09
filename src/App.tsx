import React from 'react'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import { Spinner } from './components/Spinner'
import { AuthProvider } from './lib/auth'
import { queryClient } from './lib/react-query'
import { AppRoutes } from './routes'
import { AppThemeProvider } from './providers/ThemeProvider'
function App() {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>
        <AppThemeProvider>
          <ToastContainer />
          <AuthProvider>
            <Router>
              <AppRoutes />
            </Router>
          </AuthProvider>
        </AppThemeProvider>
      </QueryClientProvider>
    </React.Suspense>
  )
}

export default App
