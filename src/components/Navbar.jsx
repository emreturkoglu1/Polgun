// ============================================================
// NAVBAR — WhiteWater West mimarisiyle birebir 4 mega-menü
// Servislerimiz / Projelerimiz / Ürünlerimiz / Hakkımızda /Ar-Ge
// ============================================================
import { useState, useEffect, useRef } from 'react'
import polgunLogo from '../assets/logoPolgun.png'

// ── Menü Yapısı (WWW ile birebir karşılıklı) ───────────────
const NAV_ITEMS = [
  {
    id: 'services',
    label: 'Servislerimiz',
    page: 'services',
    mega: true,
    sections: [
      {
        title: null,
        links: [
          { label: 'Planlama', desc: '', page: 'services' },
          { label: 'Tasarım',        desc: '',       page: 'services' },
          { label: 'Mühendislik',  desc: '',        page: 'services' },
          { label: 'Kurulum & Montaj',         desc: '',    page: 'services' },
          { label: 'Bakım & Onarım',    desc: '',  page: 'services' },
          { label: 'Yenileme',  desc: '', page: 'services' },
        ],
      },
    ],
  },
  {
    id: 'projects',
    label: 'Projelerimiz',
    page: 'projects',
    mega: false,
  },
  {
    id: 'fairs',
    label: 'Fuarlar',
    page: 'fairs',
    mega: false,
  },
  {
    id: 'products',
    label: 'Ürünlerimiz',
    page: 'products',
    mega: true,
    sections: [
      {
        title: 'Ürün Kategorileri',
        links: [
          { label: 'Su Kaydırakları',        desc: '', page: 'products' },
          { label: 'Splash Tower',  desc: '',           page: 'splash-tower' },
          { label: 'Splash Zone',               desc: '',        page: 'products' },
          { label: 'Animasyonlar',        desc: '',    page: 'products' },
          { label: 'Kataloglar', desc: '', page: 'catalogs' },
                ],
      },
      /*{
        title: 'Mekan Tipleri',
        links: [
          { label: 'Açık Hava Su Parkları',  desc: null, page: 'products' },
          { label: 'Kapalı Su Parkları',     desc: null, page: 'products' },
          { label: 'Eğlence & Tema Parkları',desc: null, page: 'products' },
          { label: 'Oteller & Tatil Köyleri',desc: null, page: 'products' },
          { label: 'Cruise Gemileri & Adalar',desc: null, page: 'products' },
          { label: 'Belediye & Kamu',        desc: null, page: 'products' },
          { label: 'Sörf & Spor Alanları',   desc: null, page: 'products' },
          { label: 'Zoo & Akvaryumlar',      desc: null, page: 'products' },
          { label: 'Özel & Rezidans',        desc: null, page: 'products' },
        ],
      },*/
    ],
  },
  {
    id: 'about',
    label: 'Hakkımızda',
    page: 'about',
    mega: true,
    sections: [
      {
        title: null,
        links: [
          { label: 'Ekibimiz',        desc: '',              page: 'about' },
          { label: 'Tarihçemiz',      desc: '',           page: 'about' },
          { label: 'Ödüller & Patent',desc: '',           page: 'about' },
          { label: 'Sürdürülebilirlik',desc: '',         page: 'about' },
          { label: 'Haberler & Etkinlikler', desc: '',   page: 'journal' },
          { label: 'Kariyer',         desc: '',               page: 'careers' },
          { label: 'Partnerlik',      desc: '',               page: 'partnership' },
        ],
      },
    ],
  },
  {
    id: 'arge',
    label: 'Ar-Ge',
    page: 'arge',
    mega: true,
    sections: [
      {
        title: null,
        links: [
          { label: 'Ekibimiz',        desc: '',              page: 'about' },
          { label: 'Tarihçemiz',      desc: '',           page: 'about' },
          { label: 'Ödüller & Patent',desc: '',           page: 'about' },
          { label: 'Sürdürülebilirlik',desc: '',         page: 'about' },
          { label: 'Haberler & Etkinlikler', desc: '',   page: 'about' },
          { label: 'Kariyer',         desc: '',               page: 'about' },
        ],
      },
    ],
  },
]

export default function Navbar({ activePage, setActivePage, colorPalette }) {
  const [scrolled, setScrolled]       = useState(false)
  const [openMenu, setOpenMenu]       = useState(null)   // mega açık menü id'si
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const closeTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (page) => {
    setActivePage(page)
    setMobileOpen(false)
    setOpenMenu(null)
    window.scrollTo({ top: 0 })
  }

  // hover ile açma — kısa gecikme ile kapanma (UX)
  const onEnter = (id) => {
    clearTimeout(closeTimer.current)
    setOpenMenu(id)
  }
  const onLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120)
  }

  // Navbar stil durumu
  const isHomepage = activePage === 'home'
  const isLightNavbar = isHomepage && !scrolled  // Glass effect maksimum
  const isDarkNavbar = !isLightNavbar              // Glass effect daha opak

  const glassOpacity = isLightNavbar ? 0.08 : 0.12
  const blurAmount = isLightNavbar ? '32px' : '16px'

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${glassOpacity})`,
        borderBottom: `1px solid color-mix(in srgb, var(--th-polgun-blue) ${scrolled ? 15 : 20}%, transparent)`,
        backdropFilter: `blur(${blurAmount})`,
        WebkitBackdropFilter: `blur(${blurAmount})`,
      }}
    >
      <nav className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14 flex items-center justify-between h-[72px]">

        {/* ══ Logo ══ */}
        <button onClick={() => handleNav('home')} className="shrink-0 flex items-center">
          {isLightNavbar ? (
            /* Glass navbar */
            <img
              src={polgunLogo}
              alt="Polgün Waterparks"
              className="h-60 object-contain"
              style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.5))' }}
            />
          ) : (
            /* Opaque navbar */
            <img
              src={polgunLogo}
              alt="Polgün Waterparks"
              className="h-60 object-contain"
              style={{ filter: 'drop-shadow(0 0 4px rgba(134, 134, 134, 0.5))' }}
            />
          )}
        </button>

        {/* ══ Desktop Nav ══ */}
        <ul className="hidden lg:flex items-center h-full">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.id}
              className="relative h-full flex items-center"
              onMouseEnter={() => item.mega && onEnter(item.id)}
              onMouseLeave={() => item.mega && onLeave()}
            >
              <button
                onClick={() => handleNav(item.page)}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold tracking-wide transition-colors`}
                style={isLightNavbar ? {
                  color: activePage === item.page ? 'var(--th-polgun-blue)' : 'var(--th-text)',
                  textShadow: '0 1px 2px rgba(255,255,255,0.5)',
                } : {
                  color: activePage === item.page ? 'var(--th-polgun-blue)' : 'var(--th-text)',
                }}
                onMouseEnter={(e) => {
                  if (isLightNavbar) e.currentTarget.style.color = 'var(--th-polgun-blue)'
                  else e.currentTarget.style.color = 'var(--th-polgun-blue)'
                }}
                onMouseLeave={(e) => {
                  if (isLightNavbar) e.currentTarget.style.color = activePage === item.page ? 'var(--th-polgun-blue)' : 'var(--th-text)'
                  else e.currentTarget.style.color = activePage === item.page ? 'var(--th-polgun-blue)' : 'var(--th-text)'
                }}
              >
                {item.label}
                {item.mega && (
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === item.id ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>

              {/* ── Mega Menü Paneli ── */}
              {item.mega && (
                <div
                  className={`absolute top-[72px] left-1/2 -translate-x-1/2
                    shadow-2xl shadow-black/10 rounded-2xl overflow-hidden
                    transition-all duration-200 origin-top
                    ${openMenu === item.id
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  style={{
                    minWidth: item.sections?.length > 1 ? '700px' : '520px',
                    backgroundColor: 'var(--th-surface)',
                    border: '1px solid color-mix(in srgb, var(--th-border) 8%, transparent)',
                  }}
                  onMouseEnter={() => onEnter(item.id)}
                  onMouseLeave={() => onLeave()}
                >
                  {/* Üst aksent çizgisi */}
                  <div className="h-0.5" style={{ background: 'linear-gradient(to right, var(--th-polgun-blue), color-mix(in srgb, var(--th-polgun-blue) 60%, transparent), transparent)' }} />

                  <div className={`p-3 ${item.sections?.length > 1 ? 'grid grid-cols-2 gap-3' : ''}`}>
                    {item.sections?.map((section, si) => (
                      <div key={si}>
                        {section.title && (
                          <p className="px-4 pt-3 pb-2 text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: 'var(--th-polgun-blue)' }}>
                            {section.title}
                          </p>
                        )}
                        <div className="flex flex-col">
                          {section.links.map((link) => (
                            <button
                              key={link.label}
                              onClick={() => handleNav(link.page)}
                              className="flex items-start gap-3 px-4 py-3 rounded-xl transition-colors text-left group"
                              style={{ '--hover-bg': 'var(--th-bg)' }}
                              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--th-bg)'}
                              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                              {/* Aksent bullet */}
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 transition-colors"
                                style={{ backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 30%, transparent)' }}
                              />
                              <div>
                                <span className="block text-sm font-semibold leading-snug transition-colors" style={{ color: 'var(--th-text)' }}>
                                  {link.label}
                                </span>
                                {link.desc && (
                                  <span className="block text-xs mt-0.5 leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 50%, transparent)' }}>
                                    {link.desc}
                                  </span>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Alt CTA şeridi */}
                  <div
                    className="border-t px-6 py-3.5 flex items-center justify-between"
                    style={{
                      borderColor: 'color-mix(in srgb, var(--th-border) 45%, transparent)',
                      backgroundColor: 'color-mix(in srgb, var(--th-bg) 70%, transparent)',
                    }}
                  >
                    <span className="text-xs" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 55%, transparent)' }}>
                      {item.id === 'products' && 'Tüm ürün ve mekan tiplerini keşfedin'}
                      {item.id === 'services' && 'Anahtar teslim proje süreçlerimizi inceleyin'}
                      {item.id === 'about' && "Polgün'ün 40 yıllık hikayesini keşfedin"}
                    </span>
                    <button
                      onClick={() => handleNav(item.page)}
                      className="text-xs font-bold flex items-center gap-1.5 transition-colors"
                      style={{
                        color: 'var(--th-polgun-blue)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--th-primary)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--th-polgun-blue)'
                      }}
                    >
                      Tümünü Gör
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* ══ Sağ: CTA ══ */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          {/* İletişim & Teklif Al */}
          <button
            onClick={() => handleNav('contact')}
            className={`text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200`}
            style={isLightNavbar ? {
              color: 'var(--th-text)',
              textShadow: '0 1px 2px rgba(255,255,255,0.5)',
            } : {
              color: 'var(--th-text)',
            }}
            
          >
            İletişim
          </button>
          <button
            onClick={() => handleNav('contact')}
            className="px-6 py-2.5 text-sm font-bold tracking-wide rounded-full hover:shadow-lg hover:-translate-y-px transition-all duration-200"
            style={isLightNavbar ? {
              backgroundColor: 'var(--th-primary)',
              color: 'var(--th-surface)',
              boxShadow: '0 4px 12px color-mix(in srgb, var(--th-primary) 30%, transparent)',
            } : {
              backgroundColor: 'var(--th-polgun-blue)',
              color: 'var(--th-surface)',
              boxShadow: '0 4px 12px color-mix(in srgb, var(--th-polgun-blue) 30%, transparent)',
            }}
            onMouseEnter={(e) => {
              if (isLightNavbar) {
                e.currentTarget.style.backgroundColor = 'var(--th-polgun-blue)'
              } else if (isDarkNavbar) {
                e.currentTarget.style.backgroundColor = 'var(--th-primary)'
                e.currentTarget.style.boxShadow = '0 6px 16px color-mix(in srgb, var(--th-polgun-blue) 38%, transparent)'
              }
            }}
            onMouseLeave={(e) => {
              if (isLightNavbar) {
                e.currentTarget.style.backgroundColor = 'var(--th-primary)'
              } else if (isDarkNavbar) {
                e.currentTarget.style.backgroundColor = 'var(--th-polgun-blue)'
                e.currentTarget.style.boxShadow = '0 4px 12px color-mix(in srgb, var(--th-primary) 30%, transparent)'
              }
            }}
          >
            Teklif Al
          </button>
        </div>

        {/* ══ Mobile Burger ══ */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 flex flex-col gap-[5px] justify-center"
          aria-label="Menü"
        >
          <span className={`block w-6 h-[2px] transition-all duration-200 ${isLightNavbar ? 'bg-[var(--th-text)]' : 'bg-[var(--th-text)]'} ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] transition-all duration-200
            ${isLightNavbar ? 'bg-[var(--th-text)]' : 'bg-[var(--th-text)]'}
            ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-[2px] transition-all duration-200
            ${isLightNavbar ? 'bg-[var(--th-text)]' : 'bg-[var(--th-text)]'}
            ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* ══ Mobile Menü Paneli ══ */}
      <div
        className={`lg:hidden border-t overflow-hidden transition-all duration-300
        ${mobileOpen ? 'max-h-[90vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}
        style={{
          backgroundColor: 'var(--th-surface)',
          borderColor: 'color-mix(in srgb, var(--th-border) 55%, transparent)',
        }}
      >
        <div className="px-5 py-4 flex flex-col">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.id}
              className="border-b last:border-0"
              style={{ borderColor: 'color-mix(in srgb, var(--th-border) 45%, transparent)' }}
            >
              {item.mega ? (
                <>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between py-4 text-sm font-bold"
                    style={{ color: 'var(--th-text)' }}
                  >
                    {item.label}
                    <svg
                      className="w-4 h-4 transition-transform duration-200"
                      style={{
                        color: 'var(--th-polgun-blue)',
                        transform: mobileExpanded === item.id ? 'rotateZ(180deg)' : 'rotateZ(0deg)',
                      }}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${mobileExpanded === item.id ? 'max-h-[600px] pb-3' : 'max-h-0'}`}>
                    {item.sections?.map((section, si) => (
                      <div key={si} className="mb-2">
                        {section.title && (
                          <p className="px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase"
                            style={{ color: 'var(--th-polgun-blue)' }}
                          >
                            {section.title}
                          </p>
                        )}
                        {section.links.map((link) => (
                          <button
                            key={link.label}
                            onClick={() => handleNav(link.page)}
                            className="w-full text-left px-4 py-2.5 text-sm rounded-lg transition-colors"
                            style={{
                              color: 'var(--th-text-muted)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = 'var(--th-polgun-blue)'
                              e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--th-polgun-blue) 6%, transparent)'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = 'var(--th-text-muted)'
                              e.currentTarget.style.backgroundColor = 'transparent'
                            }}
                          >
                            {link.label}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <button
                  onClick={() => handleNav(item.page)}
                  className="w-full text-left py-4 text-sm font-bold transition-colors"
                  style={{ color: 'var(--th-text)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--th-polgun-blue)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--th-text)'
                  }}
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}

          {/* Mobile CTA */}
          <div className="flex flex-col gap-3 pt-5 pb-2">
            <button
              onClick={() => handleNav('contact')}
              className="w-full py-3.5 text-white text-sm font-bold rounded-full transition-all duration-300"
              style={{
                backgroundColor: 'var(--th-polgun-blue)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--th-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--th-polgun-blue)'
              }}
            >
              Teklif Al
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="w-full py-3.5 text-sm font-semibold rounded-full transition-all duration-300 border-2"
              style={{
                borderColor: 'var(--th-polgun-blue)',
                color: 'var(--th-polgun-blue)',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--th-polgun-blue) 10%, transparent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              İletişim
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
