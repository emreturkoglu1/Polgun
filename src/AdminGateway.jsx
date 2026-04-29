import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { apiJson } from './lib/api'
import { AdminLayout } from './pages/admin/AdminLayout'
import { AdminCatalogsPage } from './pages/admin/AdminCatalogsPage'
import { AdminCareersPage } from './pages/admin/AdminCareersPage'
import { AdminFairsPage } from './pages/admin/AdminFairsPage'
import { AdminJournalPage } from './pages/admin/AdminJournalPage'
import { AdminApplicationsPage } from './pages/admin/AdminApplicationsPage'
import { AdminPartnershipsPage } from './pages/admin/AdminPartnershipsPage'
import { AdminContactsPage } from './pages/admin/AdminContactsPage'

const queryClient = new QueryClient()

function LoginView() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)
    try {
      await apiJson('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      })
      window.location.replace('/admin')
    } catch (err) {
      setError(err?.message || 'Giriş sırasında beklenmeyen bir hata oluştu.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#f3f4f6' }}>
      <form onSubmit={onSubmit} className="w-full max-w-md rounded-xl bg-white p-6 shadow">
        <h1 className="text-xl font-bold mb-4">Admin Giriş</h1>
        <label className="block text-sm mb-1">E-posta</label>
        <input
          className="w-full border rounded px-3 py-2 mb-3"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="block text-sm mb-1">Şifre</label>
        <input
          className="w-full border rounded px-3 py-2 mb-3"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error ? <p className="text-sm text-red-600 mb-3">{error}</p> : null}
        <button
          className="w-full rounded bg-blue-600 text-white py-2 disabled:opacity-60"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Giriş yapılıyor...' : 'Giriş yap'}
        </button>
      </form>
    </main>
  )
}

function AdminPanel() {
  const [checking, setChecking] = useState(true)
  const [sessionOk, setSessionOk] = useState(false)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const session = await apiJson('/api/auth/session')
        if (!mounted) return
        if (session?.authenticated === true) {
          setSessionOk(true)
        } else {
          window.location.replace('/login')
        }
      } catch {
        window.location.replace('/login')
      } finally {
        if (mounted) setChecking(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

  if (checking) return <div className="p-6">Oturum kontrol ediliyor...</div>
  if (!sessionOk) return null

  return (
    <main className="min-h-screen p-6" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto">
        <Routes>
          <Route element={<AdminLayout />}>
            <Route path="admin/catalogs" element={<AdminCatalogsPage />} />
            <Route path="admin/careers" element={<AdminCareersPage />} />
            <Route path="admin/fairs" element={<AdminFairsPage />} />
            <Route path="admin/journal" element={<AdminJournalPage />} />
            <Route path="admin/applications" element={<AdminApplicationsPage />} />
            <Route path="admin/partnerships" element={<AdminPartnershipsPage />} />
            <Route path="admin/contacts" element={<AdminContactsPage />} />
            <Route path="admin" element={<Navigate to="admin/catalogs" replace />} />
          </Route>
        </Routes>
      </div>
    </main>
  )
}

function LoginRoute() {
  return (
    <Routes>
      <Route path="login" element={<LoginView />} />
      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  )
}

export default function AdminGateway() {
  const isLoginPath = /^\/login(\/|$)/.test(window.location.pathname)
  const isAdminPath = /^\/admin(\/|$)/.test(window.location.pathname)

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {isLoginPath ? <LoginRoute /> : <AdminPanel />}
      </BrowserRouter>
    </QueryClientProvider>
  )
}
