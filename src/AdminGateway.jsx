import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
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
      window.location.replace('/admin/catalogs')
    } catch (err) {
      setError(err?.message || 'Giriş sırasında beklenmeyen bir hata oluştu.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-slate-100">
      <form onSubmit={onSubmit} className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-slate-800 text-center border-b pb-4">Admin Giriş</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">E-posta</label>
            <input
              className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Şifre</label>
            <input
              className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error ? <p className="text-sm text-red-600 font-semibold">{error}</p> : null}
          <button
            className="w-full rounded-lg bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Giriş yapılıyor...' : 'Giriş yap'}
          </button>
        </div>
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
        if (mounted) window.location.replace('/login')
      } finally {
        if (mounted) setChecking(false)
      }
    })()
    return () => { mounted = false }
  }, [])

  if (checking) return <div className="p-10 text-center font-medium">Oturum kontrol ediliyor...</div>
  if (!sessionOk) return null

  return (
    <div className="max-w-7xl mx-auto py-6 px-4">
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="catalogs" element={<AdminCatalogsPage />} />
          <Route path="careers" element={<AdminCareersPage />} />
          <Route path="fairs" element={<AdminFairsPage />} />
          <Route path="journal" element={<AdminJournalPage />} />
          <Route path="applications" element={<AdminApplicationsPage />} />
          <Route path="partnerships" element={<AdminPartnershipsPage />} />
          <Route path="contacts" element={<AdminContactsPage />} />
          <Route index element={<Navigate to="catalogs" replace />} />
        </Route>
      </Routes>
    </div>
  )
}

export default function AdminGateway() {
  const location = useLocation()
  const isLoginPath = location.pathname.startsWith('/login')

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {isLoginPath ? (
          <Route path="*" element={<LoginView />} />
        ) : (
          <Route path="*" element={<AdminPanel />} />
        )}
      </Routes>
    </QueryClientProvider>
  )
}