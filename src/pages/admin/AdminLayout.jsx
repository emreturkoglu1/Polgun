import { NavLink, Outlet } from 'react-router-dom'
import { GhostButton } from '../../components/AdminUI'
import { apiJson } from '../../lib/api'

export function AdminLayout() {
  const linkClass = ({ isActive }) =>
    [
      'block rounded-lg px-3 py-2 text-sm',
      isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900',
    ].join(' ')

  const handleLogout = async () => {
    try {
      await apiJson('/api/auth/logout', { method: 'POST' })
    } catch {
      // ignore
    }
    window.location.replace('/login')
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[260px_1fr]">
      <aside className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
        <div className="mb-3">
          <div className="text-sm font-semibold text-slate-900">Admin</div>
          <div className="text-xs text-slate-600">Polgun CMS</div>
        </div>

        <nav className="grid gap-1">
          <NavLink to="catalogs" className={linkClass}>
            Kataloglar
          </NavLink>
          <NavLink to="fairs" className={linkClass}>
            Fuarlar
          </NavLink>
          <NavLink to="journal" className={linkClass}>
            Dergi
          </NavLink>
          <NavLink to="careers" className={linkClass}>
            İş İlanları
          </NavLink>
          <NavLink to="applications" className={linkClass}>
            İş Başvuruları
          </NavLink>
          <NavLink to="partnerships" className={linkClass}>
            Ortaklıklar
          </NavLink>
          <NavLink to="contacts" className={linkClass}>
            İletişimler
          </NavLink>
        </nav>

        <div className="mt-4">
          <GhostButton
            type="button"
            className="w-full"
            onClick={handleLogout}
          >
            Çıkış Yap
          </GhostButton>
        </div>
      </aside>

      <section className="min-w-0">
        <Outlet />
      </section>
    </div>
  )
}
