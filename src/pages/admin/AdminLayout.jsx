import { NavLink, Outlet } from 'react-router-dom'
import { GhostButton } from '../../components/AdminUI'
import { apiJson } from '../../lib/api'

export function AdminLayout() {
  // Aktif link stilini belirleyen yardımcı fonksiyon
  const linkClass = ({ isActive }) =>
    [
      'block rounded-lg px-3 py-2 text-sm transition-colors',
      isActive 
        ? 'bg-slate-900 text-white' 
        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900',
    ].join(' ')

  const handleLogout = async () => {
    try {
      await apiJson('/api/auth/logout', { method: 'POST' })
    } catch (err) {
      console.error('Logout failed', err)
    }
    window.location.replace('/login')
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[260px_1fr]">
      <aside className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm h-fit sticky top-6">
        <div className="mb-3 px-3 py-2">
          <div className="text-sm font-semibold text-slate-900">Admin Panel</div>
          <div className="text-xs text-slate-600">Polgun CMS v1.0</div>
        </div>

        <nav className="grid gap-1">
          <NavLink to="/admin/catalogs" className={linkClass}>
            Kataloglar
          </NavLink>
          <NavLink to="/admin/fairs" className={linkClass}>
            Fuarlar
          </NavLink>
          <NavLink to="/admin/journal" className={linkClass}>
            Dergi
          </NavLink>
          <NavLink to="/admin/careers" className={linkClass}>
            İş İlanları
          </NavLink>
          <NavLink to="/admin/applications" className={linkClass}>
            İş Başvuruları
          </NavLink>
          <NavLink to="/admin/partnerships" className={linkClass}>
            Ortaklıklar
          </NavLink>
          <NavLink to="/admin/contacts" className={linkClass}>
            İletişimler
          </NavLink>
        </nav>

        <div className="mt-4 pt-4 border-t border-slate-100">
          <GhostButton
            type="button"
            className="w-full justify-start"
            onClick={handleLogout}
          >
            Çıkış Yap
          </GhostButton>
        </div>
      </aside>

      <section className="min-w-0 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        {/* Alt sayfalar (AdminCatalogsPage vb.) burada render edilir */}
        <Outlet />
      </section>
    </div>
  )
}