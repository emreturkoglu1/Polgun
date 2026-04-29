// ============================================================
// FOOTER — Kurumsal, minimal, 4 kolonlu yapı
// ============================================================
import polgunLogo from '../assets/logoPolgun.png';

const FOOTER_LINKS = {
  'Ürünler': ['Su Kaydırakları', 'Splash Tower', 'Splash Zone', 'Animasyonlar'],
  'Kurumsal': ['Hakkımızda', 'Projeler', 'Sürdürülebilirlik', 'Kariyer', 'Basın'],
  'Destek': ['İletişim', 'Teknik Destek', 'Yedek Parça', 'Bakım Hizmetleri'],
}

export default function Footer({ setActivePage }) {
  return (
    <footer className="text-white" style={{ backgroundColor: 'var(--th-polgun-blue)' }}>

      {/* ── Link Kolonları ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 max-w-[var(--layout-max)] py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {/* Brand Kolon */}
          <div className="lg:col-span-2 flex flex-col gap-0 mt-0">
            <button onClick={() => setActivePage('home')} className="shrink-0 flex items-center">
              <img
                          src={polgunLogo}
                          alt="Polgün Waterparks"
                          loading="lazy"
                          className="h-75 w-auto object-contain"
                          style={{ filter: 'drop-shadow(-4px 8px 4px rgba(53, 53, 53, 0.5))' }}
                        />
            </button>
            
            {/* Sosyal İkonlar */}
            <div className="flex gap-4 mt-0">
              {[
                { name: 'Facebook', url: 'https://www.facebook.com/polgunwaterparks/?locale=tr_TR', icon: (
                  <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                )},
                { name: 'Instagram', url: 'https://www.instagram.com/polgunwaterparks/', icon: (
                  <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.798.3-1.47.717-2.122 1.37-.653.651-1.07 1.32-1.37 2.12-.266.787-.465 1.658-.525 2.935C.015 8.334 0 8.741 0 12c0 3.259.015 3.668.072 4.948.06 1.272.26 2.145.525 2.932.3.787.717 1.459 1.37 2.112.652.653 1.32 1.07 2.12 1.37.787.266 1.655.465 2.935.525 1.28.057 1.689.072 4.948.072 3.259 0 3.668-.015 4.948-.072 1.28-.06 2.147-.26 2.933-.525.787-.3 1.47-.717 2.122-1.37.653-.652 1.07-1.32 1.37-2.112.266-.787.465-1.66.525-2.935.057-1.28.072-1.689.072-4.948 0-3.259-.015-3.668-.072-4.948-.06-1.272-.26-2.14-.525-2.927-.3-.787-.717-1.459-1.37-2.112C21.94 1.705 21.27 1.288 20.48.988c-.784-.266-1.655-.465-2.932-.525C15.667.013 15.259 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.561.217.96.477 1.382.896.419.42.679.821.896 1.381.164.422.355 1.056.408 2.227.061 1.264.07 1.646.07 4.849 0 3.203-.009 3.585-.07 4.849-.054 1.171-.244 1.805-.408 2.227-.217.561-.477.96-.896 1.382-.42.419-.821.679-1.381.896-.422.164-1.056.355-2.227.408-1.264.061-1.646.07-4.849.07-3.203 0-3.585-.009-4.849-.07-1.171-.054-1.805-.244-2.227-.408-.561-.217-.96-.477-1.382-.896-.419-.42-.679-.821-.896-1.381-.164-.422-.355-1.056-.408-2.227-.061-1.264-.07-1.646-.07-4.849 0-3.203.009-3.585.07-4.849.054-1.171.244-1.805.408-2.227.217-.561.477-.96.896-1.382.42-.419.821-.679 1.381-.896.422-.164 1.056-.355 2.227-.408 1.264-.061 1.646-.07 4.849-.07zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                  </svg>
                )},
                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/polgün-waterparks-waterslides/?originalSubdomain=tr', icon: (
                  <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.736 0-9.646h3.554v1.364c.43-.665 1.199-1.61 2.925-1.61 2.135 0 3.735 1.39 3.735 4.374v5.518zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.951.77-1.71 1.954-1.71 1.185 0 1.915.759 1.915 1.71 0 .951-.73 1.71-1.954 1.71zm1.946 11.597H3.392V9.861h3.891v10.591zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )},
                { name: 'YouTube', url: 'https://www.youtube.com/@polgunwaterparks4024', icon: (
                  <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                )},
              ].map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center
                    text-white transition-all duration-300 hover:-translate-y-1"
                  style={{ 
                    backgroundColor: 'var(--th-primary)',
                      boxShadow: '-4px 5px 12px color-mix(in srgb, var(--th-polgun-antrasit) 30%, transparent)'
                  }}
                  title={social.name}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--th-polgun-antrasit)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--th-primary)'
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Kolonları */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold tracking-[0.15em] text-white uppercase mb-5">{title}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Alt Bar ── */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white">
            © 2026 Polgün Waterparks. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6">
            {['Gizlilik Politikası', 'Kullanım Koşulları', 'KVKK'].map((item) => (
              <a key={item} href="#" className="text-xs text-white hover:text-white/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
