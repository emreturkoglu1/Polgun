import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

// Layout Bileşenleri
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Sayfalar (Public)
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import SplashTowerPage from './pages/SplashTower'

// Admin Gateway (Admin ve Login yönetimini bu yapıyor)
import AdminGateway from './AdminGateway'

import { COLOR_PALETTES } from './constants/colorPalettes'

// Renk yardımcı fonksiyonu (Shade)
function shade(hex, amount) {
  const mixHex = (aHex, bHex, t) => {
    const hexToRgb = (h) => {
      let normalized = String(h).replace('#', '').trim()
      if (normalized.length === 3) normalized = normalized.split('').map(c => c+c).join('')
      const intVal = parseInt(normalized, 16)
      return { r: (intVal >> 16) & 255, g: (intVal >> 8) & 255, b: intVal & 255 }
    }
    const a = hexToRgb(aHex); const b = hexToRgb(bHex)
    const k = Math.min(1, Math.max(0, t))
    const toHex = (v) => v.toString(16).padStart(2, '0')
    return `#${toHex(Math.round(a.r + (b.r - a.r) * k))}${toHex(Math.round(a.g + (b.g - a.g) * k))}${toHex(Math.round(a.b + (b.b - a.b) * k))}`
  }
  if (amount < 0) return mixHex(hex, '#000000', Math.abs(amount))
  return mixHex(hex, '#FFFFFF', amount)
}

export default function App() {
  const location = useLocation()
  const [colorPalette, setColorPalette] = useState(1)

  // URL'den aktif sayfayı belirle (Navbar aktif linki için)
  const pathParts = location.pathname.split('/').filter(Boolean)
  const activePage = pathParts[0] || 'home'

  const palette = COLOR_PALETTES[colorPalette] || COLOR_PALETTES[1]

  const themeVars = {
    '--th-primary': palette.primary,
    '--th-primary-darker': shade(palette.primary, -0.34),
    '--th-bg': palette.light,
  }

  // Admin veya Login yollarındaysak Navbar ve Footer'ı gizle
  const isAdminArea = location.pathname.startsWith('/admin') || location.pathname.startsWith('/login')

  return (
    <div className="min-h-screen flex flex-col" data-theme="A" style={themeVars}>
      {/* Admin alanında değilsek Navbar göster */}
      {!isAdminArea && (
        <Navbar 
          activePage={activePage} 
          colorPalette={colorPalette} 
        />
      )}
      
      <div className="flex-1">
        <Routes>
          {/* Public Sayfalar */}
          <Route path="/" element={<HomePage setColorPalette={setColorPalette} />} />
          <Route path="/products" element={<ProductsPage setColorPalette={setColorPalette} />} />
          <Route path="/splash-tower" element={<SplashTowerPage setColorPalette={setColorPalette} />} />
          <Route path="/services" element={<ServicesPage setColorPalette={setColorPalette} />} />
          <Route path="/projects" element={<ProjectsPage setColorPalette={setColorPalette} />} />
          <Route path="/about" element={<AboutPage setColorPalette={setColorPalette} />} />
          <Route path="/contact" element={<ContactPage setColorPalette={setColorPalette} />} />
          
          {/* Admin & Login (Wildcard '*' önemli) */}
          <Route path="/login/*" element={<AdminGateway />} />
          <Route path="/admin/*" element={<AdminGateway />} />

          {/* Tanımsız yolları ana sayfaya yönlendir */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* Admin alanında değilsek Footer göster */}
      {!isAdminArea && <Footer />}
    </div>
  )
}