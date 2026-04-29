import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AdminGateway from './AdminGateway.jsx'
const isAdminPath = /^\/(admin|login)(\/|$)/.test(window.location.pathname)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isAdminPath ? <AdminGateway /> : <App />}
  </StrictMode>,
)
