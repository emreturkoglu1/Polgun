// ============================================================
// PRODUCTS PAGE — Gerçek görseller + CSS değişkenleri + glass efekt
// ============================================================
import { useState } from 'react'
import heroImage from '../assets/polgun-featured-projects-4.jpeg'

// ── Ürün Verisi ────────────────────────────────────────────
const PRODUCTS = [
	{
		category: 'Su Kaydırakları',
		title: 'AquaRush Pro Series',
		sub: 'Yüksek Hızlı Kapalı Tüp Kaydırak',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		specs: [
			{ label: 'Uzunluk', val: '120 m' },
			{ label: 'Kapasite', val: '360 kişi/saat' },
			{ label: 'Min. Yaş', val: '10+' },
			{ label: 'Min. Boy', val: '140 cm' },
		],
		img: heroImage,
		imgAlt: 'AquaRush su kaydırağı',
		badge: 'Çok Satılan',
	},
	{
		category: 'Splash Tower',
		title: 'OceanWave 2800',
		sub: 'Teknolojik Pnömatik Dalga Sistemi',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		specs: [
			{ label: 'Havuz Alan', val: '2800 m²' },
			{ label: 'Dalga Yük.', val: '1.5 m' },
			{ label: 'Kapasite', val: '1200 kişi' },
			{ label: 'Dalga Tipi', val: 'Progressif' },
		],
		img: heroImage,
		imgAlt: 'OceanWave dalga havuzu',
		badge: 'Yeni',
	},
	{
		category: 'Splash Zone',
		title: 'KidsSplash Universe',
		sub: 'Tema Entegreli Çocuk Su Oyun Alanı',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		specs: [
			{ label: 'Alan', val: '650 m²' },
			{ label: 'Yaş Grubu', val: '2–12' },
			{ label: 'Aktivite', val: '18 Adet' },
			{ label: 'Su Tük.', val: 'Düşük' },
		],
		img: heroImage,
		imgAlt: 'KidsSplash çocuk alanı',
		badge: null,
	},
	{
		category: 'Animasyonlar',
		title: 'DriftStream Classic',
		sub: 'Sakin Akış Nehir Sistemi',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		specs: [
			{ label: 'Devre', val: '320 m' },
			{ label: 'Genişlik', val: '4 m' },
			{ label: 'Akış Hızı', val: '0.8 m/s' },
			{ label: 'Kapasite', val: '480 kişi/saat' },
		],
		img: heroImage,
		imgAlt: 'DriftStream lazy river',
		badge: null,
	},
	
]

const CATEGORIES = [
	'Tümü',
	'Su Kaydırakları',
	'Splash Tower',
	'Splash Zone',
	'Animasyonlar',
]

// ── Glass Kart bileşeni ────────────────────────────────────
function GlassTag({ children }) {
	return (
		<span
			className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
			style={{
				background: 'rgba(255,255,255,0.18)',
				backdropFilter: 'blur(8px)',
				border: '1px solid rgba(255,255,255,0.2)',
				color: 'rgba(255,255,255,0.9)',
			}}
		>
			{children}
		</span>
	)
}

export default function ProductsPage({ setActivePage}) {
	const [activeFilter, setActiveFilter] = useState('Tümü')
		
	// Badge stilleri
	const BADGE_STYLE = {
		'Çok Satılan': { backgroundColor: 'var(--th-primary)', color: '#fff' },
		'Yeni': { backgroundColor: 'var(--th-polgun-blue)', color: '#fff' },
		'Premium': { backgroundColor: 'var(--th-polgun-antrasit)', color: '#fff' },
	}

	const filtered =
		activeFilter === 'Tümü'
			? PRODUCTS
			: PRODUCTS.filter((p) => p.category === activeFilter)

	return (
		<main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>
			{/* ── Page Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
				{/* Content */}
        <div className="max-w-7xl max-w-[var(--layout-max)]  mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
						
						<div>
							<p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
                Ürün Kataloğu
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
								Çözümlerimiz
							</h1>
							</div>
            <p className="text-white/50 text-lg leading-relaxed">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
							</p>
							<div className="flex gap-4 flex-wrap">
								<button
									onClick={() => setActivePage('contact')}
									className="px-8 py-4 font-bold text-white rounded-full transition-all duration-300 hover:-translate-y-1"
									style={{ backgroundColor: 'var(--th-polgun-antrasit)', boxShadow: `0 0 32px var(--th-polgun-antrasit)66` }}
									onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--th-text-muted)'}
									onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--th-polgun-antrasit)'}
								>
									Ürün Talebi
								</button>
								<button
									onClick={() => setActivePage('contact')}
									className="px-8 py-4 font-bold rounded-full transition-all duration-300 border-2"
									style={{ color: 'var(--th-polgun-antrasit)', borderColor: 'var(--th-polgun-antrasit)', backgroundColor: `var(--th-surface)0D`, backdropFilter: 'blur(8px)' }}
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = `var(--th-polgun-antrasit)26`;
										e.currentTarget.style.transform = 'translateY(-4px)';
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = `var(--th-surface)0D`;
										e.currentTarget.style.transform = 'translateY(0)';
									}}
								>
									Katalog İndir
								</button>
							</div>
						</div>
					</div>
				
			</section>

			{/* ── Filtre Şeridi ── */}
			<div
				className="top-[72px] z-30 border-b"
				style={{
					backgroundColor:
						'color-mix(in srgb,var(--th-bg) 95%,transparent)',
					backdropFilter: 'blur(12px)',
					borderColor:
						'color-mix(in srgb,var(--th-border) 10%,transparent)',
				}}
			>
				<div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
					<div className="flex gap-2 overflow-x-auto py-4 scrollbar-none">
						{CATEGORIES.map((cat) => (
							<button
								key={cat}
								onClick={() => setActiveFilter(cat)}
								className="shrink-0 px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200"
								style={
									activeFilter === cat
										? {
											backgroundColor: 'var(--th-primary)',
											color: '#fff',
											boxShadow:
												`0 4px 16px var(--th-primary)4D`,
									  }
									: { color: 'var(--th-text-muted)' }
							}
							onMouseEnter={(e) => {
								if (activeFilter !== cat)
									e.currentTarget.style.backgroundColor =
										`var(--th-primary-light)`
								}}
								onMouseLeave={(e) => {
									if (activeFilter !== cat)
										e.currentTarget.style.backgroundColor = 'transparent'
								}}
							>
								{cat}
							</button>
						))}
					</div>
				</div>
			</div>

			{/* ── Ürün Grid ── */}
			<section className="py-16 lg:py-24">
				<div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						{filtered.map((product, i) => (
							<article
								key={i}
								className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
								style={{
									backgroundColor: 'var(--th-surface)',
									border:
										'1px solid color-mix(in srgb,var(--th-border) 8%,transparent)',
									boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.boxShadow =
										'0 20px 60px rgba(0,0,0,0.1)')
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.boxShadow =
										'0 2px 16px rgba(0,0,0,0.04)')
								}
							>
								{/* Gerçek Görsel */}
								<div className="relative h-56 overflow-hidden">
									<img
										src={product.img}
										alt={product.imgAlt}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									{/* Gradient overlay */}
									<div
										className="absolute inset-0"
										style={{
											background:
												'linear-gradient(to top,rgba(0,0,0,0.3) 0%,transparent 60%)',
										}}
									/>
									{/* Badge'ler */}
									<div className="absolute top-4 left-4 flex gap-2">
										{product.badge && (
											<span
												className="text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full"
												style={BADGE_STYLE[product.badge]}
											>
												{product.badge}
											</span>
										)}
										<GlassTag>{product.category}</GlassTag>
									</div>
								</div>

								{/* İçerik */}
								<div className="p-8">
									<p
										className="text-[10px] font-black tracking-[0.2em] uppercase mb-2"
										style={{ color: 'var(--th-polgun-blue)' }}
									>
										{product.sub}
									</p>
									<h2
										className="text-xl font-black mb-3 transition-colors"
										style={{ color: 'var(--th-text)' }}
										onMouseEnter={(e) =>
											(e.currentTarget.style.color = 'var(--th-polgun-blue)')
										}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color = 'var(--th-text)')
										}
									>
										{product.title}
									</h2>
									<p
										className="text-sm leading-relaxed mb-6"
										style={{
											color:
												'color-mix(in srgb,var(--th-text-muted) 70%,transparent)',
										}}
									>
										{product.desc}
									</p>

									{/* Teknik Özellikler */}
									<div
										className="grid grid-cols-4 gap-px rounded-xl overflow-hidden mb-6"
										style={{
											backgroundColor:
												'color-mix(in srgb,var(--th-border) 8%,transparent)',
										}}
									>
										{product.specs.map((spec) => (
											<div
												key={spec.label}
												className="px-3 py-3"
												style={{ backgroundColor: 'var(--th-bg)' }}
											>
												<div
													className="text-[10px] font-semibold uppercase tracking-wider mb-1"
													style={{
														color:
															'color-mix(in srgb,var(--th-text-muted) 60%,transparent)',
													}}
												>
													{spec.label}
												</div>
												<div
													className="text-xs font-black"
													style={{ color: 'var(--th-text)' }}
												>
													{spec.val}
												</div>
											</div>
										))}
									</div>

									{/* CTA */}
									<div className="flex gap-3">
										<button
											onClick={() => setActivePage('contact')}
											className="flex-1 py-3 text-white text-sm font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5"
										style={{ backgroundColor: 'var(--th-polgun-blue)', boxShadow: `0 0 32px var(--th-polgun-blue)66` }}
										onMouseEnter={(e) =>
											(e.currentTarget.style.backgroundColor =
												'var(--th-primary)')
										}
										onMouseLeave={(e) =>
											(e.currentTarget.style.backgroundColor =
												'var(--th-polgun-blue)')
											}
										>
											Teklif Al
										</button>
										<button
											className="px-5 py-3 text-sm font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5"
											style={{
												border:
												`1px solid var(--th-polgun-blue)`,
											color: 'var(--th-polgun-blue)',
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.borderColor = 'var(--th-primary)';
											e.currentTarget.style.color = 'var(--th-primary)'
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.borderColor =
												`var(--th-polgun-blue)`
											e.currentTarget.style.color = 'var(--th-polgun-blue)'
											}}
										>
											Detaylar
										</button>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* ── Özel Proje CTA ── */}
			<section className="py-32" style={{ backgroundColor: 'var(--th-bg)' }}>
				<div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
					<div className="relative rounded-3xl overflow-hidden px-12 py-20" style={{ background: `linear-gradient(135deg,var(--th-primary) 0%,var(--th-polgun-blue) 100%)` }}>
						<div className="absolute inset-0 opacity-10">
							<svg
								viewBox="0 0 1400 300"
								className="w-full h-full"
								preserveAspectRatio="xMidYMid slice"
							>
								<circle cx="200" cy="150" r="250" fill="white" />
								<circle cx="1200" cy="150" r="200" fill="white" />
							</svg>
						</div>
						<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
							<div>
								<p
									className="text-[11px] font-black tracking-[0.3em] uppercase mb-3 text-white/50"
								>
									Özel Proje
								</p>
								<h2 className="text-3xl font-black text-white">
									Aradığınızı bulamadınız mı?
								</h2>
								<p className="text-white/40 mt-3 max-w-lg">
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
								</p>
							</div>
							<button
								onClick={() => setActivePage('contact')}
							className="shrink-0 px-10 py-4 text-sm font-bold rounded-full transition-all duration-300 hover:-translate-y-1"
							style={{
								backgroundColor: '#FFFFFF',
								color: 'var(--th-primary)',
								boxShadow: `0 0 40px var(--th-primary)33`,
								}}
								onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
								onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
							>
								Özel Çözüm Talep Et
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
