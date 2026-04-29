// ============================================================
// ABOUT PAGE — Şirket tarihçesi, değerler, ekip, text-heavy
// ============================================================
import heroImage from '../assets/polgun-featured-projects-4.jpeg'

function ImgPlaceholder({ label = '', aspect = 'aspect-square', className = '' }) {
  return (
    <div
      className={`${aspect} ${className} flex flex-col items-center justify-center gap-2 rounded-2xl overflow-hidden`}
      style={{ backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 10%, transparent)' }}
    >
      <svg
        className="w-10 h-10"
        style={{ color: 'color-mix(in srgb, var(--th-polgun-blue) 30%, transparent)' }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-[10px] font-medium" style={{ color: 'color-mix(in srgb, var(--th-polgun-blue) 40%, transparent)' }}>{label}</span>
    </div>
  )
}

// ── Tarihçe Verisi ─────────────────────────────────────────
const TIMELINE = [
  {
    year: '2002',
    title: 'Kuruluş',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    year: '2005',
    title: 'İlk Uluslararası Proje',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    year: '2007',
    title: 'Ar-Ge Merkezi',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    year: '2015',
    title: 'Avrupa\'ya Açılış',
    desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    year: '2023',
    title: '200. Proje',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.',
  },
]

// ── Değerler ───────────────────────────────────────────────
const VALUES = [
  {
    title: 'Mühendislik Mükemmeliyeti',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    title: 'Sürdürülebilirlik',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
  },
  {
    title: 'Müşteri Odaklılık',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
  },
  {
    title: 'İnovasyon',
    desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
  },
]

// ── Ekip Üyeleri ───────────────────────────────────────────
const TEAM = [
  { name: 'Lorem Ipsum', role: 'CEO & Kurucu', initials: 'LI' },
  { name: 'Dolor Sit', role: 'Genel Müdür', initials: 'DS' },
  { name: 'Amet Consec', role: 'Baş Mühendis', initials: 'AC' },
  { name: 'Tura Pisc', role: 'Tasarım Direktörü', initials: 'TP' },
]

export default function AboutPage({ setActivePage}) {
  
  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* ── Page Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)]  lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
                Hakkımızda
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
                20 Yılı Aşkın<br />Waterpark<br />Deneyimi
              </h1>
            </div>
            <p className="text-white/50 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      {/* ── Misyon & Görsel ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-5" style={{ color: 'var(--th-polgun-blue)' }}>Misyonumuz</p>
              <h2 className="text-4xl font-black leading-tight mb-8" style={{ color: 'var(--th-text)' }}>
                Lorem ipsum dolor<br />sit amet consectetur
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <img src={heroImage} alt="Polgün Waterpark" className="w-full aspect-[4/3] rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      {/* ── Değerler Grid ── */}
      <section className="py-24" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>Temel Değerlerimiz</p>
            <h2 className="text-4xl font-black" style={{ color: 'var(--th-text)' }}>Bizi biz yapan ilkeler</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden" style={{ backgroundColor: 'color-mix(in srgb, var(--th-border) 8%, transparent)' }}>
            {VALUES.map((v, i) => (
              <div key={i}
                className="p-8 transition-colors"
                style={{ backgroundColor: 'var(--th-surface)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--th-bg)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--th-surface)'}
              >
                <div className="text-4xl mb-5">{v.icon}</div>
                <h3 className="text-base font-bold mb-3" style={{ color: 'var(--th-text)' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tarihçe Zaman Çizelgesi ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-5xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="text-center mb-20">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>Tarihçemiz</p>
            <h2 className="text-4xl font-black" style={{ color: 'var(--th-text)' }}>20 Yıllık Yolculuk</h2>
          </div>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px hidden sm:block" style={{ backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 20%, transparent)' }} />
            <div className="flex flex-col gap-12">
              {TIMELINE.map((item, i) => (
                <div key={i} className="flex gap-12 items-start">
                  <div className="hidden sm:flex flex-col items-center shrink-0 w-8 pt-1">
                    <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: 'var(--th-polgun-blue)', boxShadow: '0 0 0 4px color-mix(in srgb, var(--th-polgun-blue) 15%, transparent)' }} />
                  </div>
                  <div className="flex-1 pb-12 last:pb-0" style={{ borderBottom: '1px solid color-mix(in srgb, var(--th-border) 8%, transparent)' }}>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs font-black tracking-widest px-3 py-1.5 rounded-full" style={{ color: 'var(--th-polgun-blue)', backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 10%, transparent)' }}>
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold" style={{ color: 'var(--th-text)' }}>{item.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Satış Ekibi ── */}
      <section className="py-24" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--th-polgun-blue)' }}>Ekibimiz</p>
            <h2 className="text-4xl font-black" style={{ color: 'var(--th-text)' }}>Satış Ekibimiz</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-square rounded-2xl flex items-center justify-center mb-5 transition-colors"
                  style={{ backgroundColor: 'color-mix(in srgb, var(--th-polgun-blue) 10%, transparent)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--th-polgun-blue) 20%, transparent)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--th-polgun-blue) 10%, transparent)'}
                >
                  <span className="text-3xl font-black" style={{ color: 'color-mix(in srgb, var(--th-polgun-blue) 50%, transparent)' }}>{member.initials}</span>
                </div>
                <h3 className="font-bold transition-colors" style={{ color: 'var(--th-text)' }}>{member.name}</h3>
                <p className="text-sm mt-1" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 60%, transparent)' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* ── CTA ── */}
      <section className="py-32" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
          <div className="relative rounded-3xl overflow-hidden px-12 py-20 text-center" style={{ background: 'linear-gradient(135deg,var(--th-primary) 0%, var(--th-polgun-blue) 100%)' }}>
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 800 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <circle cx="100" cy="150" r="200" fill="white"/>
                <circle cx="700" cy="150" r="180" fill="white"/>
              </svg>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl font-black mb-6 text-white" style={{ fontSize: 'clamp(2rem,4.5vw,3.75rem)' }}>
                Projenizi birlikte hayata geçirelim
              </h2>
              <p className="mb-10 leading-relaxed text-white/50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <button
                onClick={() => setActivePage('contact')}
                className="px-10 py-4 text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: '#FFFFFF', color: 'var(--th-primary-darker)', boxShadow: '0 0 40px rgba(0,0,0,0.2)' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                İletişime Geç
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
