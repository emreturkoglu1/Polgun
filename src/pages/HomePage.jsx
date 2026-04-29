// ============================================================
// HOMEPAGE — WWW tarzı büyük tipografi + Apple glass efect
// "Let's color the water" hero
// ============================================================
import { useState, useEffect } from 'react'

// ── Referans Logo İmportları ───────────────────────────────
import refAmara        from '../assets/references/amara-prestige-elite-logo.jpg'
import refCemi         from '../assets/references/cemi-logo.jpg'
import refCrystal      from '../assets/references/crystal-hotels-logo.jpg'
import refDelphin      from '../assets/references/delphin-logo.jpg'
import refIsaba        from '../assets/references/isaba-logo.jpg'
import refLimak        from '../assets/references/limak-logo.jpg'
import refNg           from '../assets/references/ng-hotels.jpg'
import refOtium        from '../assets/references/otium-logo.jpg'
import refPegasos      from '../assets/references/pegasos-logo.jpg'
import refPickalbatros from '../assets/references/pickalbatros-logo.jpg'
import refRixos        from '../assets/references/rixos-logo.jpg'
import refSelectum     from '../assets/references/selectum-logo.jpg'
import refSherwood     from '../assets/references/sherwood-logo.jpg'
import refTitanic      from '../assets/references/titanic-hotels-logo.jpg'
import refValamar      from '../assets/references/valamar-logo.jpg'
import refVoyage       from '../assets/references/voyage-logo.jpg'
import guralPremier    from '../assets/kategori/GüralPremierBelek.jpg'
import syHotel        from '../assets/kategori/SYHotel.png'
import frenzy         from '../assets/kategori/FrenzyWaterpark.png'
import curaCao        from '../assets/products/Kunuku-Aqua-Resort-CuraCao.png'
import aqualand1 from '../assets//products/AqualandTorremolInos-Spain.png'
import aqualand2 from '../assets//products/AqualandTorremolInos-Spain2.png'
import kaec from '../assets/products/KAEC-RixosJeddah-SaudiArabia.png'
import navatu from '../assets/products/navatu.png'
import syHotelAntalya from '../assets/hero/10.SYHotel.png'
import nickelodeon from '../assets/products/NickelodeonHotel-Antalya.png'
import seignosse from '../assets/hero/2.SeignosseAtlanticPark.png'
import rixosKaec from '../assets/hero/3.RixosKAEC.png'
import pantheon from '../assets/hero/4.PantheonWaterpark.png'
import theLandOfLegends from '../assets/hero/5.TheLandofLegends.png'
import sClub from '../assets/hero/6.SClubResortHotelAquaPark.png'
import kunuku from '../assets/hero/7.KunukuAquaResort.png'
import movenpick from '../assets/hero/9MövenpickResort.png'
import delphinPalace from '../assets/hero/11.DelphinPalace.png'
import nirvana from '../assets/hero/12.NirvanaCosmopolitan.png'
import maxeria from '../assets/hero/13.MaxeriaBlue.png'
import fantazia from '../assets/hero/14.FantaziaResortMarsaAlam.png'
import pickalbatros from '../assets/hero/15.PickalbatrosSungoClub.png'
import aquila from '../assets/hero/16.AquilaRithymnaBeach.png'
import ethno from '../assets/hero/17.EthnoHotels.png'


const REFS = [
  { src: refAmara,        alt: 'Amara Prestige Elite' },
  { src: refCemi,         alt: 'Cemi' },
  { src: refCrystal,      alt: 'Crystal Hotels' },
  { src: refDelphin,      alt: 'Delphin' },
  { src: refIsaba,        alt: 'İsaba' },
  { src: refLimak,        alt: 'Limak' },
  { src: refNg,           alt: 'NG Hotels' },
  { src: refOtium,        alt: 'Otium' },
  { src: refPegasos,      alt: 'Pegasos' },
  { src: refPickalbatros, alt: 'Pickalbatros' },
  { src: refRixos,        alt: 'Rixos' },
  { src: refSelectum,     alt: 'Selectum' },
  { src: refSherwood,     alt: 'Sherwood' },
  { src: refTitanic,      alt: 'Titanic Hotels' },
  { src: refValamar,      alt: 'Valamar' },
  { src: refVoyage,       alt: 'Voyage' },
]

// ── Glass Kart bileşeni ────────────────────────────────────
function GlassCard({ children, className = '', style = {} }) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${className}`}
      style={{
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.7)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08),inset 0 1px 0 rgba(255,255,255,0.9)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// ── Marquee — hover'da duran kayan şerit ──────────────────
function MarqueeStrip() {
  const [paused, setPaused] = useState(false)
  return (
    <div className="flex overflow-hidden">
      <div
        className="flex gap-5 shrink-0"
        style={{
          animation: 'marquee 32s linear infinite',
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {[...REFS, ...REFS].map((r, i) => (
          <div
            key={i}
            className="shrink-0 h-32 w-56 rounded-2xl flex items-center justify-center px-6 transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            onMouseEnter={(e) => {
              setPaused(true)
              e.currentTarget.style.background = 'rgba(255,255,255,0.14)'
              e.currentTarget.style.border = '1px solid rgba(255,255,255,0.25)'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              setPaused(false)
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
              e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <img
              src={r.src}
              alt={r.alt}
              loading="lazy"
              className="max-h-16 max-w-full object-contain transition-opacity duration-300"
              style={{ opacity: 0.9 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.9')}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
// Hero görselleri
const HERO_IMAGES = [
        { title: 'Frenzy Waterpark', location: 'Fransa', img: frenzy },
        { title: 'Seignosse Atlantic Park', location: 'Fransa', img: seignosse },
        { title: 'Rixos KAEC', location: 'Suudi Arabistan', img: rixosKaec },
        { title: 'Pantheon Waterpark', location: 'Yunanistan', img: pantheon },
        { title: 'The Land of Legends', location: 'Antalya, Türkiye', img: theLandOfLegends },
        { title: 'SClub Resort Hotel Aqua Park', location: 'Belgrad', img: sClub },
        { title: 'Kunuku Aqua Resort', location: 'Curaçao', img: kunuku },
        { title: 'Güral Premier', location: 'Antalya, Türkiye', img: guralPremier },
        { title: 'Mövenpick Resort', location: 'Antalya, Türkiye', img: movenpick },
        { title: 'SY Hotel', location: 'Antalya, Türkiye', img: syHotelAntalya },
        { title: 'Delphin Palace', location: 'Antalya, Türkiye', img: delphinPalace },
        { title: 'Nirvana Cosmopolitan', location: 'Antalya, Türkiye', img: nirvana },
        { title: 'Maxeria Blue', location: 'Aydın, Türkiye', img: maxeria },
        { title: 'Fantazia Resort Marsa Alam', location: 'Mısır', img: fantazia },
        { title: 'Pickalbatros Sungo Club', location: 'Fas', img: pickalbatros },
        { title: 'Aquila Rithymn a Beach', location: 'Yunanistan', img: aquila },
        { title: 'Ethno Hotels', location: 'Antalya, Türkiye', img: ethno },


]

// ── Carousel Görselleri ────────────────────────────────────
const CAROUSEL_IMAGES = [
  { src: curaCao,       alt: 'Kunuku Aqua Resort - Curaçao' },
  { src: aqualand1,     alt: 'Aqualand Torremolinos - İspanya' },
  { src: aqualand2,     alt: 'Aqualand Torremolinos - İspanya 2' },
  { src: frenzy,        alt: 'Frenzy Waterpark - Fransa' },
  { src: kaec,          alt: 'KAEC Rixos Jeddah - Suudi Arabistan' },
  { src: navatu,        alt: 'Navatu Su Parkı' },
  { src: syHotelAntalya, alt: 'SY Hotel Antalya' },
  { src: nickelodeon,   alt: 'Nickelodeon Hotel - Antalya' },
]

// ── Sayfa bileşeni ─────────────────────────────────────────
export default function HomePage({ setActivePage}) {
  const [heroImageIndex, setHeroImageIndex] = useState(0)
  const [carouselImageIndex, setCarouselImageIndex] = useState(0)

  // ── Otomatik resim değiştirme
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 1500) // Her 1.5 saniyede bir resim değişimi
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])


  return (
    <main style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: 'var(--th-bg)' }}
      >       

        {/* Büyük blur baloncuklar */}
        <div
          className="absolute -top-28 -left-28 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{
            background: 'var(--th-primary-light)',
            filter: 'blur(90px)',
            opacity: 0.9,
          }}
        />
        

        {/* İçerik grid */}
        <div className="relative z-10 w-full max-w-[var(--layout-max)] mx-auto px-6 lg:px-16 pt-28 pb-20
          grid lg:grid-cols-[0.8fr_1.2fr] gap-10 xl:gap-16 items-center">

          {/* ── Sol: Tipografi ── */}
          <div className="flex flex-col gap-8">

            <h1
              className="font-black leading-[1.05] tracking-tight"
              style={{ color: 'var(--th-polgun-antrasit)', fontSize: 'clamp(3.6rem,2vw,4.6rem)' }}
            >
              We don’t just build slides.
              <br />We create destinations.
            </h1>
            <h2
              className="font-black leading-[1.05] tracking-tight"
              style={{ color: 'var(--th-polgun-blue)', fontSize: 'clamp(1.6rem,3vw,3.6rem)' }}
            >
             Let's <span
                style={{
                  background: 'linear-gradient(90deg, #f83838, #f7923a, #f4f400, #56f856, #5CA3E1, #1565C0, #a344f1)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 8px 16px color-mix(in srgb, var(--th-primary) 25%, transparent)',
                  filter: 'drop-shadow(0 2px 4px color-mix(in srgb, var(--th-primary-darker) 30%, transparent))',
                }}
              >
                Color
              </span> the Water.             
            </h2>
          </div>

          {/* ── Sağ: Büyük proje görseli ── */}
          <div className="relative flex items-center justify-center">


            {/* Görsel çerçevesi */}
            <div
              className="relative w-full"
              style={{
                maxWidth: 'clamp(560px, 62vw, 1320px)',
                borderRadius: '2.5rem',
                padding: '12px',
                background: 'rgba(34,171,230,0.18)',
                border: '5px solid var(--th-primary)',
                boxShadow: '0 30px 90px var(--th-primary), inset 0 1px 0 var(--th-primary-light)',
              }}
            >
              <div
                className="rounded-[2.05rem]"
                style={{
                  padding: '8px',
                  background: 'rgba(255,255,255,0.92)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9)',
                }}
              >
                <div
                  className="relative overflow-hidden rounded-[1.75rem]"
                  style={{
                    aspectRatio: '3 / 2',
                    background: 'rgba(15,43,91,0.12)',
                  }}
                >
                  {HERO_IMAGES.map((img, idx) => (
                    <img
                      key={img.title}
                      src={img.img}
                      alt={img.title}
                      loading={idx === heroImageIndex ? 'eager' : 'lazy'}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                      style={{ opacity: idx === heroImageIndex ? 1 : 0 }}
                    />
                  ))}

                  {/* Hafif mavi glass overlay (yoğun beyazlığı kırmak için) */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(34,171,230,0.08) 0%, transparent 35%, transparent 65%, rgba(40,116,178,0.10) 100%)',
                    }}
                  />

                  {/* Sol-alt başlık overlay */}
                  <div
                    className="absolute left-6 bottom-6 z-20"
                    style={{
                      padding: '14px 16px',
                      borderRadius: '24px',
                      maxWidth: 'min(560px, calc(100% - 2rem))',
                      background:
                        'linear-gradient(180deg, rgba(32, 32, 32, 0.52) 0%, rgba(77, 77, 77, 0.22) 55%, rgba(79, 79, 79, 0.1) 100%)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.18)',
                      boxShadow: '0 18px 50px rgba(0,0,0,0.35)',
                    }}
                  >
                    <h2
                      className="text-md font-black text-white mb-1"
                      style={{ textShadow: '0 10px 26px rgba(0,0,0,0.65)' }}
                    >
                      {HERO_IMAGES[heroImageIndex].title}
                    </h2>
                    <p className="text-sm text-white/90" style={{ textShadow: '0 8px 18px rgba(0,0,0,0.55)' }}>
                      {HERO_IMAGES[heroImageIndex].location}
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          KATEGORİLER — 4 büyük gradient kart
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[11px] font-black tracking-[0.3em] uppercase mb-4 flex items-center gap-3"
                style={{ color: 'var(--th-primary)' }}>
                <span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--th-primary)' }} />
                Ürün Kategorileri
              </p>
              <h2 className="font-black leading-tight" style={{ color:'var(--th-text)', fontSize:'clamp(2rem,4vw,3.5rem)' }}>
                Su parkının her<br />köşesi için çözüm
              </h2>
            </div>
            <button
              onClick={() => setActivePage('products')}
              className="shrink-0 px-7 py-3.5 text-sm font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor:'var(--th-primary)', color:'#fff' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity='0.85'}
              onMouseLeave={(e) => e.currentTarget.style.opacity='1'}
            >
              Tüm Ürünler
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title:'Su Kaydırakları', sub:'Tüp, açık & thrill', img: guralPremier, g:'linear-gradient(to top,rgba(0,0,0,0.4),transparent)' },
              { title:'Dalga Havuzları',  sub:'Pnömatik & mekanik',  img: syHotel, g:'linear-gradient(to top,rgba(0,0,0,0.4),transparent)' },
              { title:'Aquatik Oyun',    sub:'Çocuk & aile',         img: frenzy, g:'linear-gradient(to top,rgba(0,0,0,0.4),transparent)' },
              { title:'Lazy River',      sub:'Sakin akış sistemleri', img: rixosKaec, g:'linear-gradient(to top,rgba(0,0,0,0.4),transparent)' },
            ].map((cat, i) => (
              <button
                key={i}
                onClick={() => setActivePage('products')}
                className="group relative h-72 rounded-2xl overflow-hidden text-left"
                style={{ 
                  backgroundImage: `${cat.g}, url(${cat.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: 'rgba(0,0,0,0.2)'
                }}
              >
                {/* Dekoratif dalgalar */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background:'linear-gradient(to top,rgba(0,0,0,0.4),transparent)' }} />
                <div className="absolute inset-0 p-7 flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                  </div>
                  <div>
                    <div className="text-white text-xs mb-2">{cat.sub}</div>
                    <div className="text-white font-black text-xl leading-tight">{cat.title}</div>
                    <div className="mt-4 flex items-center gap-2 text-white/60 text-xs font-semibold
                      group-hover:text-white group-hover:gap-3 transition-all duration-200">
                      İncele
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ÖZELLIK — Sol koyu glass panel + Sağ metin (Apple tarzı)
      ══════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ backgroundColor:'var(--th-surface)' }}>
        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden"
            style={{ boxShadow:'0 24px 80px rgba(0,0,0,0.10)' }}>

            {/* Sol — Carousel Panel */}
            <div className="relative min-h-[380px] flex items-end p-10 group"
              style={{ background:'linear-gradient(to top,rgba(0,0,0,0.4),transparent)' }}>
                {/* Carousel Görselleri */}
                <div className="absolute inset-0 overflow-hidden">
                  {CAROUSEL_IMAGES.map((img, idx) => (
                    <img 
                      key={idx}
                      src={img.src} 
                      alt={img.alt}
                      loading={idx === carouselImageIndex ? 'eager' : 'lazy'}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                      style={{ opacity: idx === carouselImageIndex ? 1 : 0 }}
                    />
                  ))}
                </div>
              
              <div className="relative z-10 w-full">
                <GlassCard className="p-5">
                  <p className="text-[10px] font-black tracking-[0.25em] uppercase mb-2 text-white">Mühendislik</p>
                  <h3 className="text-xl font-black text-white leading-tight mb-3" style={{  textShadow:'0 4px 12px rgba(97, 97, 97, 0.6)' }}>
                    Tasarımdan<br />Sahaya, Eksiksiz
                  </h3>
                  <div className="flex flex-wrap gap-2 --th-text-muted">
                    {['ISO Sertifikalı','GRP Üretim','3D Tasarım','Anahtar Teslim'].map((tag) => (
                      <span key={tag} className="text-[11px] font-semibold px-3 py-1 rounded-full"
                        style={{ background:'rgba(255,255,255,0.12)', color:'rgba(110, 110, 110, 0.8)', border:'1px solid rgba(255,255,255,0.15)', boxShadow:'0 2px 6px rgba(76, 76, 76, 0.1)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>

              {/* Carousel Navigasyon Noktaları */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                {CAROUSEL_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselImageIndex(idx)}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width: idx === carouselImageIndex ? 'clamp(40px, 3vw, 56px)' : 'clamp(12px, 1vw, 16px)',
                      height: 'clamp(12px, 1vw, 16px)',
                      backgroundColor: idx === carouselImageIndex ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)',
                      border: '1px solid rgba(255,255,255,0.6)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Sağ — Metin */}
            <div className="p-6 lg:p-8 flex flex-col justify-center" style={{ backgroundColor:'var(--th-surface)' }}>
              <p className="text-[11px] font-black tracking-[0.3em] uppercase mb-4 flex items-center gap-3"
                style={{ color:'var(--th-primary)' }}>
                <span className="inline-block w-6 h-px" style={{ backgroundColor:'var(--th-primary)' }} />
                Neden Polgün?
              </p>
              <h2 className="font-black leading-tight mb-6" style={{ color:'var(--th-text)', fontSize:'clamp(1.5rem,2.5vw,2.25rem)' }}>
                20+ yıllık deneyimle ikonik su parkı deneyimleri yaratıyoruz
              </h2>
              <p className="leading-relaxed mb-6 text-base" style={{ color:'color-mix(in srgb,var(--th-text-muted) 70%,transparent)' }}>
Polgün, su parkı projelerinde tasarım, mühendislik, üretim ve uygulama süreçlerini tek çatı altında yöneten güçlü bir çözüm ortağıdır. Yirmi yılı aşkın sektör tecrübemiz, yüksek üretim kapasitemiz ve uluslararası proje deneyimimizle, her ölçekte projeye güvenilir, yenilikçi ve sürdürülebilir çözümler sunuyoruz. Estetik, güvenlik, kalite ve operasyonel verimliliği bir araya getirerek, markalara ve yatırımcılara uzun vadeli değer katan özgün su parkı deneyimleri tasarlıyor ve hayata geçiriyoruz.              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { label:'Tam Hizmet', desc:'Tasarım & üretim & montaj' },
                  { label:'70+ Ülke',    desc:'Global deneyim' },
                  { label:'ISO Kalitesi',desc:'Sertifikalı üretim' },
                  { label:'Sürdürülebilir',desc:'Çevre dostu tasarım' },
                ].map((f) => (
                  <div key={f.label} className="flex items-start gap-3 p-3 rounded-2xl"
                    style={{ backgroundColor:'color-mix(in srgb,var(--th-border) 20%,transparent)' }}>
                    <span className="text-2xl">{f.icon}</span>
                    <div>
                      <div className="text-sm font-bold" style={{ color:'var(--th-text)' }}>{f.label}</div>
                      <div className="text-xs mt-0.5" style={{ color:'color-mix(in srgb,var(--th-text-muted) 55%,transparent)' }}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setActivePage('about')}
                className="self-start px-7 py-3 text-sm font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor:'var(--th-primary)', color:'#fff' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity='0.85'}
                onMouseLeave={(e) => e.currentTarget.style.opacity='1'}
              >
                Hakkımızda
              </button>
            </div>
          </div>
        </div>
      </section>

      

      {/* ══════════════════════════════════════════════════════
          REFERANSLAR — Kayan marquee, belirgin
      ══════════════════════════════════════════════════════ */}
        <section className="py-24 overflow-hidden" style={{ backgroundColor: 'var(--th-polgun-antrasit)' }}>
        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14 mb-14 text-center">
          <p className="text-[11px] font-black tracking-[0.35em] uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.7)' }}>
            Referanslarımız
          </p>
          <h2 className="font-black text-white leading-tight" style={{ fontSize: 'clamp(1.75rem,3vw,2.75rem)' }}>
            Dünyaca ünlü markalar<br />bize güveniyor
          </h2>
        </div>

        {/* Kayan şerit */}
        <div className="relative">
          {/* Sol silik geçiş */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right,var(--th-polgun-antrasit),transparent)' }} />
          {/* Sağ silik geçiş */}
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left,var(--th-polgun-antrasit),transparent)' }} />

          {/* Marquee container */}
          <MarqueeStrip />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA — Apple tarzı büyük gradient panel
      ══════════════════════════════════════════════════════ */}
      <section className="py-32" style={{ backgroundColor:'var(--th-bg)' }}>
        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
          <div className="relative rounded-3xl overflow-hidden px-12 py-20 text-center"
            style={{ background:'linear-gradient(135deg,var(--th-primary) 0%,var(--th-polgun-blue) 100%)' }}>
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 800 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <circle cx="100" cy="150" r="200" fill="white"/>
                <circle cx="700" cy="150" r="180" fill="white"/>
              </svg>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <p className="text-[11px] font-black tracking-[0.35em] uppercase mb-6 text-white/80">
                Projenizi Birlikte Tasarlayalım
              </p>
              <h2 className="font-black text-white leading-tight mb-8" style={{ fontSize:'clamp(2rem,4.5vw,3.75rem)' }}>
                Hayalinizdeki su parkını<br />hayata geçiriyoruz
              </h2>
              <p className="text-white/80 mb-12 max-w-lg mx-auto leading-relaxed">
                Dünyanın dört bir yanındaki su parklarında hayatı renklendiriyoruz. Sıradaki projeniz için bizimle iletişime geçin.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setActivePage('contact')}
                  className="px-10 py-4 font-bold text-sm tracking-wide rounded-full transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor:'#FFFFFF', color:'var(--th-primary-darker)', boxShadow:'0 0 40px rgba(0,0,0,0.2)' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity='0.9'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity='1'}
                >
                  Hemen Teklif Al
                </button>
                <button
                  onClick={() => setActivePage('projects')}
                  className="px-10 py-4 font-bold text-sm tracking-wide rounded-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background:'rgba(255,255,255,0.2)', backdropFilter:'blur(12px)', border:'2px solid rgba(255,255,255,0.4)', color:'rgba(255,255,255,0.95)' }}
                  onMouseEnter={(e) => e.currentTarget.style.background='rgba(255,255,255,0.3)'}
                  onMouseLeave={(e) => e.currentTarget.style.background='rgba(255,255,255,0.2)'}
                >
                  Projelerimizi İncele
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}