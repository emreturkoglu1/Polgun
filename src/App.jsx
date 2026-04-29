// ============================================================
// APP.JSX — Sayfa yönlendirme (state-based router)
// Sabit tema: Navy + Anthracite + Teal
// Sayfa-spesifik renk paletleri
// ============================================================
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import SplashTowerPage from './pages/SplashTower'
import { COLOR_PALETTES } from './constants/colorPalettes'

function clamp01(n) {
  return Math.min(1, Math.max(0, n))
}

function hexToRgb(hex) {
  const normalized = String(hex).replace('#', '').trim()
  const full = normalized.length === 3
    ? normalized.split('').map((c) => c + c).join('')
    : normalized

  const intVal = Number.parseInt(full, 16)
  if (Number.isNaN(intVal) || full.length !== 6) return null

  return {
    r: (intVal >> 16) & 255,
    g: (intVal >> 8) & 255,
    b: intVal & 255,
  }
}

function rgbToHex({ r, g, b }) {
  const to = (v) => v.toString(16).padStart(2, '0')
  return `#${to(r)}${to(g)}${to(b)}`
}

function mixHex(aHex, bHex, t) {
  const a = hexToRgb(aHex)
  const b = hexToRgb(bHex)
  if (!a || !b) return aHex

  const k = clamp01(t)
  return rgbToHex({
    r: Math.round(a.r + (b.r - a.r) * k),
    g: Math.round(a.g + (b.g - a.g) * k),
    b: Math.round(a.b + (b.b - a.b) * k),
  })
}

function shade(hex, amount) {
  // amount: [-1..1]  (negative: darken -> mix with black, positive: lighten -> mix with white)
  if (amount < 0) return mixHex(hex, '#000000', Math.abs(amount))
  return mixHex(hex, '#FFFFFF', amount)
}

const PAGES = {
  home: HomePage,
  products: ProductsPage,
  'splash-tower': SplashTowerPage,
  services: ServicesPage,
  projects: ProjectsPage,
  about: AboutPage,
  contact: ContactPage,
}

// Sayfa-spesifik renk paletleri
const PAGE_COLOR_PALETTES = {
  home: 1,         // Orijinal renk paleti
  products: 1,     // Soft Blue
  'splash-tower': 1,  // Default
  services: 1,     // Deep Navy
  projects: 1,     // Default
  about: 1,        // Default
  contact: 1,      // Default
}

export default function App() {
  const [activePage, setActivePage] = useState('home')
  const [colorPalette, setColorPalette] = useState(PAGE_COLOR_PALETTES.home)


  const PageComponent = PAGES[activePage] ?? HomePage
  const palette = COLOR_PALETTES[colorPalette] || COLOR_PALETTES[1]

  // Sayfaların çoğu `var(--th-*)` kullanıyor; index.css sabit değerlerini burada palette'e göre override ediyoruz.
  const themeVars = {
    '--th-primary': palette.primary,
    '--th-primary-darker': shade(palette.primary, -0.34),
    
    '--th-bg': palette.light,
  }

  return (
    <div className="min-h-screen flex flex-col" data-theme="A" style={themeVars}>
      <Navbar activePage={activePage} setActivePage={setActivePage} colorPalette={colorPalette} />
      <div className="flex-1">
        <PageComponent setActivePage={setActivePage} colorPalette={colorPalette} setColorPalette={setColorPalette} />
      </div>
      <Footer setActivePage={setActivePage} />
    </div>
  )
}
