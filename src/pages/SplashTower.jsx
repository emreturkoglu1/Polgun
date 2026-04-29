// ============================================================
// SPLASH TOWER — 2 Tema kategorisi: Pirate & Underwater
// Tema kartları + Slider modal (otomatik + manuel kaydırma)
// ============================================================
import { useState, useEffect, useRef } from 'react'

import underwater1 from '../assets/hero/13.MaxeriaBlue.png'
import underwater2 from '../assets/splash/underwaterTheme/1002.jpg'
import underwater4 from '../assets/splash/underwaterTheme/1004.jpg'
import underwater5 from '../assets/splash/underwaterTheme/1005.jpg'
import underwater6 from '../assets/splash/underwaterTheme/1001.png'
import underwater7 from '../assets/splash/underwaterTheme/1002.png'
import underwater8 from '../assets/hero/12.NirvanaCosmopolitan.png'

import pirate1 from '../assets/splash/pirateTheme/1001.jpg'
import pirate2 from '../assets/splash/pirateTheme/1002.jpg'
import pirate3 from '../assets/kategori/SYHotel.png'
import pirate4 from '../assets/splash/pirateTheme/PirateTheme5.png'
import pirate5 from '../assets/splash/pirateTheme/PirateTheme6.png'
import pirate6 from '../assets/hero/10.SYHotel.png'
import pirate7 from '../assets/splash/pirateTheme/PirateTheme8.png'
import pirate8 from '../assets/splash/pirateTheme/PirateTheme9.png'
import pirate9 from '../assets/splash/pirateTheme/PirateTheme10.png'
import pirate10 from '../assets/splash/pirateTheme/PirateTheme11.png'

// ── Tema Verisi ────────────────────────────────────────────
const THEMES = [
  {
    id: 'pirate',
    name: 'Pirate Theme',
    location: 'Antalya, Türkiye',
    year: '2022',
    scope: ['8 Kaydırak', 'Infinity Pool', 'Çocuk Parkı'],
    desc: 'Korsan temalı su kaydırakları ve eğlence alanları',
    thumbnail: pirate1,
    slides: [
      { id: 1, title: 'Pirate Ship Ride', location: 'İstanbul', img: pirate1 },
      { id: 2, title: 'Skull Slide', location: 'Antalya', img: pirate2 },
      { id: 3, title: 'Treasure Hunt Pool', location: 'Varşova', img: pirate3 },
      { id: 4, title: 'Captain\'s Challenge', location: 'Dubai', img: pirate4 },
      { id: 5, title: 'Pirate Treasure', location: 'Bali', img: pirate5 },
      { id: 6, title: 'Shipwreck Adventure', location: 'Cancun', img: pirate6 },
      { id: 7, title: 'Island Escape', location: 'Miami', img: pirate7 },
      { id: 8, title: 'Pirate\'s Plunder', location: 'Sydney', img: pirate8 },
      { id: 9, title: 'Treasure Island', location: 'Varşova', img: pirate9 },
      { id: 10, title: 'Cursed Gold', location: 'Dubai', img: pirate10 },
    ],
  },
  {
    id: 'underwater',
    name: 'Underwater Theme',
    location: 'Antalya, Türkiye',
    year: '2022',
    scope: ['8 Kaydırak', 'Infinity Pool', 'Çocuk Parkı'],
    desc: 'Sualtı dünyası temalı yapılar ve deniz canlıları tasarımları',
    thumbnail: underwater1,
    slides: [
      { id: 1, title: 'Dolphin Wave Pool', location: 'İstanbul', img: underwater1 },
      { id: 2, title: 'Coral Reef Slides', location: 'Antalya', img: underwater2 },
      { id: 3, title: 'Deep Sea Explorer', location: 'Varşova', img: underwater5 },
      { id: 4, title: 'Submarine Ride', location: 'Dubai', img: underwater4 },
      { id: 5, title: 'Tropical Paradise', location: 'Bali', img: underwater6 },
      { id: 6, title: 'Aquatic Adventure', location: 'Sydney', img: underwater7 },
      { id: 7, title: 'Marine Life Encounter', location: 'Cancun', img: underwater8 },
    ],
  },
]

// ── Glass Etiket ───────────────────────────────────────────
function GlassTag({ children }) {
  return (
    <span
      className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
      style={{
        background: 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.2)',
        color: 'rgba(255,255,255,0.9)',
      }}
    >
      {children}
    </span>
  )
}

// ── Slider Modal Bileşeni ──────────────────────────────────
function SliderModal({ theme, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoplayInterval = useRef(null)

  // Otomatik geçiş: 2 saniye
  useEffect(() => {
    if (!isOpen) return

    autoplayInterval.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % theme.slides.length)
    }, 2000)

    return () => clearInterval(autoplayInterval.current)
  }, [isOpen, theme.slides.length])

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? theme.slides.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % theme.slides.length)
  }

  if (!isOpen) return null

  const currentSlide = theme.slides[currentIndex]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-none rounded-2xl overflow-hidden bg-black shadow-2xl"
        style={{ width: 'min(96vw, var(--layout-max))' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Slider Görsel ── */}
        <div className="relative bg-gray-900 h-[min(78vh,64vw)]">
          <img
            src={currentSlide.img}
            alt={currentSlide.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
          }} />

          {/* ── Bilgi ── */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            {/*<p className="text-xs font-bold tracking-widest uppercase mb-2 opacity-70">
              {currentSlide.location}
            </p>
            <h3 className="text-2xl font-black leading-tight">
              {currentSlide.title}
            </h3> */}
          </div>

          {/* ── Prev Buton ── */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition-all backdrop-blur-sm flex items-center justify-center"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* ── Next Buton ── */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition-all backdrop-blur-sm flex items-center justify-center"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* ── Gösterge Noktaları ── */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {theme.slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  backgroundColor: idx === currentIndex ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.4)',
                  width: idx === currentIndex ? '24px' : '8px',
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Kapatma Buton ── */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 transition-all backdrop-blur-sm flex items-center justify-center text-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* ── Sayfa Bilgisi ── */}
        <div className="px-6 py-3 bg-white/5 border-t border-white/10 flex items-center justify-between text-white text-sm">
          <span>{currentIndex + 1} / {theme.slides.length}</span>
        </div>
      </div>
    </div>
  )
}

export default function SplashTowerPage() {
  const [selectedTheme, setSelectedTheme] = useState(null)
  const [sliderOpen, setSliderOpen] = useState(false)


  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* ── Page Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)]  lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
                Splash<br />Tower
              </h1>
            <p className="text-white/50 text-lg leading-relaxed">
                Farklı temalar ile tasarlanmış su kaydırakları ve eğlence alanları
              </p>
            </div>
          </div>
        </div>
      </section>
      

      {/* ── Tema Kategorileri ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12 space-y-28">
          
          {/* PIRATE THEME */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Solda: Başlık + Yazı */}
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-5" style={{ color: 'var(--th-polgun-blue)' }}>Tema Kategorileri</p>
              <h2 className="text-4xl font-black leading-tight mb-8" style={{ color: 'var(--th-text)' }}>
                Pirate Theme
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                  Polgün’ün imza teması olan ve pek çok su parkı tarafından tercih edilen Korsan Tema çocukların korsanlarla dolu açık denizlerde yelken açmaları ve bu bu hayal dünyasında eğlenmeleri için tasarlanmıştır. Her boyutta ve istenen her renk seçeneğinde tamamen özelleştirilebilen Korsan Tema’da dev papağanlar, ikonik köpekbalığı, interaktif su oyunları, palmiye ağaçları ve korsan kafalı dev bir su kovası bulunuyor. Minik misafirlerin eğlendiği kadar yetişkinlerin de eğlendiğini gördüğünüzde su parkınız için Polgün Korsan Tema’sını tercih etmeniz kaçınılmaz olacaktır.              </p>
            </div>

            {/* Sağ kısım Projelerimiz stilinde*/}
            <article
              className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
              onClick={() => {
                setSelectedTheme(THEMES[0])
                setSliderOpen(true)
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 24px 72px rgba(0,0,0,0.18)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)'}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={THEMES[0].thumbnail}
                  alt={THEMES[0].name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
              }} />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  <GlassTag>{THEMES[0].slides.length} Proje</GlassTag>
                  <GlassTag>{THEMES[0].year}</GlassTag>
                </div>
                <h2 className="text-2xl font-black text-white mb-1 transition-colors group-hover:opacity-90">
                      {THEMES[0].name}
                    </h2>
                    <p className="text-sm text-white/50 mb-4">{THEMES[0].location}</p>
                    <div className="mt-4 flex items-center gap-2 text-white/60 text-xs font-semibold
                      group-hover:text-white group-hover:gap-3 transition-all duration-200">
                      İncele
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                
              </div>
            </article>
          </div>

          {/* UNDERWATER THEME */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Sol kısım Projelerimiz stilinde*/}
            <article
              className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
              onClick={() => {
                setSelectedTheme(THEMES[1])
                setSliderOpen(true)
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 24px 72px rgba(0,0,0,0.18)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)'}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={THEMES[1].thumbnail}
                  alt={THEMES[1].name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
              }} />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  <GlassTag>{THEMES[1].slides.length} Proje</GlassTag>
                  <GlassTag>{THEMES[1].year}</GlassTag>
                </div>
                <h2 className="text-2xl font-black text-white mb-1 transition-colors group-hover:opacity-90">
                      {THEMES[1].name}
                    </h2>
                    <p className="text-sm text-white/50 mb-4">{THEMES[1].location}</p>
                    <div className="mt-4 flex items-center gap-2 text-white/60 text-xs font-semibold
                      group-hover:text-white group-hover:gap-3 transition-all duration-200">
                      İncele
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
              </div>
            </article>

            {/* Sağda: Başlık + Yazı */}
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-5" style={{ color: 'var(--th-polgun-blue)' }}>Tema Kategorileri</p>
              <h2 className="text-4xl font-black leading-tight mb-8" style={{ color: 'var(--th-text)' }}>
                Underwater Theme
              </h2>
              <p className="leading-relaxed" style={{ color: 'color-mix(in srgb, var(--th-text-muted) 70%, transparent)' }}>
                  Okyanuslar, denizler ve su altı dünyası çocuklar için her zaman gizemli, heyecan verici ve büyülü bir dünya olmuştur. Çocukların sualtı dünyası ile ilgili cevaplanmayı bekleyen pek çok sorusu, aslında su altı dünyasını deneyimleyememelerinden kaynaklanmaktadır. Çocuklar göremediklerini hayal etmekten zevk alırlar ve su altı dünyası hayal ettikleri şekliyle görecekleri ve eğlenecekleri bir temadır. Sualtı dünyasında keşfedilmeyi bekleyen farklı türler ve rengarenk mercanlardan yola çıkılarak Polgün Sualtı Teması ile tasarlanan su parkı, çocukların hayal gücünü destekleyen, heyecanlandıran ve eğlenmelerini sağlayan renkli bir ortamdır. Su parkında kullanılan tüm renkler su altı dünyasında bulunan canlı türlerinden ve mercan renklerinden esinlenmiştir. Kullanılan animasyon ürünleri, temayı desteklemek için sevimli su altı canlıları karakterize edilerek tasarlanmıştır.              </p>
            </div>
          </div>

        </div>
      </section>
      

      {/* ── Slider Modal ── */}
      {selectedTheme && (
        <SliderModal
          theme={selectedTheme}
          isOpen={sliderOpen}
          onClose={() => setSliderOpen(false)}
        />
      )}
      

    </main>
  )
}
