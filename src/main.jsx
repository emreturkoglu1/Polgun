import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App as AdminApp } from '../../frontend/src/App'
import { AuthProvider } from '../../frontend/src/lib/auth'
import '../../frontend/src/index.css'

const queryClient = new QueryClient()
const isAdminPath = /^\/(admin|login)(\/|$)/.test(window.location.pathname)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isAdminPath ? (
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <AdminApp />
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    ) : (
      <App />
    )}
  </StrictMode>,
)
