// ============================================================
// SERVICES PAGE — Gerçek görseller + CSS değişkenleri + glass efekt
// ============================================================
import heroImage from '../assets/polgun-featured-projects-4.jpeg'

// ── Hizmet Adımları ────────────────────────────────────────
const STEPS = [
	{
		number: '01',
		title: 'Müşteri Hizmetleri',
		sub: 'Customer Servıce',
		desc: 'Polgün, müşterilerine mümkün olan en iyi müşteri hizmetini sunmaya kararlıdır. Yatırımınızın değerinin bilincinde olarak, projenizle ilgili her ayrıntı önemlidir ve öncelikli olarak ele alınmaktadır. Bizim için müşteri hizmetleri, müşteri ihtiyaçlarını olabildiğince çabuk çözmek, yüz yüze hızlı bağlantı kurmak, her soruya 7/24 ulaşılabilir olmak ve iletişimimizin her adımında Türk misafirperverliği ile hizmet vermek demektir.',
		img: heroImage,
		imgAlt: 'Su parkı yenileme projesi',
	},
	{
		number: '02',
		title: 'Tasarım',
		sub: 'Desıgn',
		desc: 'Tasarımcılar, geliştiriciler ve 3D sanatçılardan oluşan ekibimiz, yeni nesil ürünleri, deneyimleri ve hizmetleri tasarlamak ve inşa etmek için büyüme, etki ve çeviklik arayışı içindedir. Bu, tasarım departmanının çok sayıda farklı yüksek kaliteli proje üretmesini sağlar. Polgün olarak dünyanın dört bir yanındaki müşterilere arzu edilen tasarımları sunmak istiyoruz. Uzun yıllar, işimizi büyütürken ve yeni pazarlara girerken, misafirlerinize daha iyi bir yolculuk deneyimi yaratma vizyonumuzu sunuyoruz.',
		img: heroImage,
		imgAlt: 'Su parkı üretim tesisi',
	},
	{
		number: '03',
		title: 'Planlama',
		sub: 'Plannıng',
		desc: 'Planlama, şirketimiz için temel bir değerdir çünkü tüm projelerin arkasındaki başarı, iyi yönetilen proje planlamasına dayanır. Polgün Proje Planlama bölümü, proje başlangıcından detaylı tasarıma kadar tüm görevleri kapsayan tüm proje aşamasından sorumludur. Projeyle ilgili risklerin analiz edildiği ve spesifik proje yürütme yaklaşımının tanımlandığı bu önemli aşamadadır. Yatırımınızın değeri planlama sürecimizde önceliğimizdir; bununla birlikte başarı, projenizin her aşamasında gelir.',
		img: heroImage,
		imgAlt: 'Su parkı tasarım çalışması',
	},
	{
		number: '04',
		title: 'Mühendislik',
		sub: 'Engıneerıng',
		desc: 'Polgün’ün bünyesindeki mühendis ve mimarlardan oluşan ekip, tüm yapının tasarlanmasından her türlü çevresel koşulun belirlenmesine kadar fonksiyonları yürüten projelerin çeşitli aşamalarının çekirdeğini oluşturur. Deneyim ve vizyon bizim için anahtar sözcüklerdir, mühendislik süreci projeyi bir vizyondan devasa bir gerçekliğe götürürken, güvenlik ve görsel gerçekleri sağlar. Bir projenin kendisi, tasarımcılar ve mühendisler tarafından, büyük ölçüde, projenin kurulacağı çevresel koşullar, bir su kaydırağının tam eğriliği için hesaplamalar ve güvenlik hususlarının analizleri açısından yönlendirilir.',
		img: heroImage,
		imgAlt: 'Su parkı montaj sahnesi',
	},
	{
		number: '05',
		title: 'Üretim',
		sub: 'Productıon',
		desc: 'Tesisimiz, Türkiye’de bulunan Muğla İlinde; tüm taleplerinize hızlı ve güvenilir bir şekilde cevap vermemizi sağlayan modern, entegre bir üretim tesisimiz var.Türkiye’de bulunan Muğla İlinde; tüm taleplerinize hızlı ve güvenilir bir şekilde cevap vermemizi sağlayan modern, entegre bir üretim tesisidir. Üretim tesisimiz, hem çelik konstrüksiyon hem de fiberglas imalatını işlememizi sağlayan verimli, yüksek teknolojili ekipmanlara sahiptir ki bu durum sektörümüzde çok nadir görülen bir durumdur. Tamamen otomatik üretim kontrol sistemi ve her bir bileşenin barkod tanımlaması sayesinde projelerimizi optimum sürelerde ve uygun bir sırada yönetebiliriz.',
		img: heroImage,
		imgAlt: 'Su parkı yenileme projesi',
	},
	{
		number: '06',
		title: 'Montaj',
		sub: 'Installatıon & Commıssıonıng',
		desc: 'Proje sahasına ulaşan ürünlerimiz montaj öncesi ilgili ekip tarafından son kontrollere tabi tutulur ve her proje için mühendislik departmanı tarafından hazırlanan montaj kılavuzuna göre ürünler monte edilir. Bu aşamada nakliye sırasında ürünlerin eksiksiz ve hasarsız olmasına özen gösteriyoruz. Montaj süresinin aşılmaması için nakliye sırasında hasar gören ürünleri acilen değiştirmek görevimizdir. Montaj süresinin aşılmaması için nakliye sırasında hasar gören ürünleri acilen değiştirmek görevimizdir. Anahtar teslimi sürecimiz montaj ve uygulama ekibimiz tarafından ancak testler yapıldıktan, doğru kullanım eğitimi alındıktan ve gerekli uyarı tabelalarının asılmasıyla tamamlanacaktır. Güvenliği sağlamak ana ilkelerimizden biri olup, uzun yıllardır firmamızda çalışan ve çeşitli ülkelere giderek montaj ve uygulama görevlerini yürüten profesyonel montaj ekibimizle projelerimizi yürütüyoruz.',
		img: heroImage,
		imgAlt: 'Su parkı yenileme projesi',
	},
	{
		number: '07',
		title: 'Satış Sonrası',
		sub: 'After-Sales Support',
		desc: 'Müşterilerimizin satış sonrası eğitim, yedek parça temini, teknik servis taleplerini karşılamak ve müşteri memnuniyetini en üst seviyede tutmak öncelikli amacımızdır. Her türlü su parkı, su kaydırağı, havuz sistemlerine, kaydırak yenileme işleminin yanı sıra, uzman ekibimiz ile periyodik ve yıllık bakım, parça değişimi ve yenileme hizmeti vermekteyiz. % 100 müşteri memnuniyeti ilkesinden hareketle amacımız, benzersiz satış sonrası hizmetimizle tüm ilişkilerimizde de güvenilirlik, gizlilik ve dürüstlük ilkelerine önem vermektir. Verimlilik ve sürekli iyileştirmeye dayalı bir kurum kültürü olarak, dünya çapındaki müşteri ve bayilerimize kaliteli, hızlı, esnek ve çözüm odaklı satış sonrası hizmet sunmakla her zaman bir adım öndeyiz.',
		img: heroImage,
		imgAlt: 'Park yönetim yazılımı ekranı',
	},
	{
		number: '08',
		title: 'Bakım & Yenileme',
		sub: 'Maıntenance & Renovatıon',
		desc: 'Dış gerçekler ve hava koşulları, su parkınızın bazı kısımlarında korozyona neden olabilir. Polgün’ün müşteri hizmetleri ekibi, hidrolik tesisat, elektrik tesisatı ve mekanik parçaları kontrol eder, değiştirilmesi veya yenilenmesi gereken parçaları değiştirir. Misafirleriniz için görsel görünüm önemli olduğundan, parlak renkler hiç şüphesiz caziptir, Polgün’ün bakım hizmeti su parkınızın parlak ve yepyeni görünmesini sağlar, yıllarca daha sorunsuz bir kullanım sağlar.',
		img: heroImage,
		imgAlt: 'Su parkı bakım ekibi',
	},
	
	
];

const WHY = [
	{  title: 'Tam Hizmet', desc: 'Tasarımdan montaja, bakımdan yazılıma — her adımda.' },
	{  title: '70+ Ülke', desc: 'Global proje deneyimi ve yerel uzmanlık.' },
	{  title: 'ISO 9001', desc: 'Sertifikalı üretim ve kalite süreçleri.' },
	{  title: 'Ömür Boyu', desc: 'Uzun vadeli teknik destek ve yedek parça garantisi.' },
];

// ── Glass Kart bileşeni ────────────────────────────────────
function GlassCard({ children, className = '', style = {} }) {
	return (
		<div
			className={`relative rounded-2xl overflow-hidden ${className}`}
			style={{
				background: 'rgba(255,255,255,0.08)',
				backdropFilter: 'blur(20px)',
				WebkitBackdropFilter: 'blur(20px)',
				border: '1px solid rgba(255,255,255,0.15)',
				boxShadow: '0 8px 32px rgba(0,0,0,0.2),inset 0 1px 0 rgba(255,255,255,0.1)',
				...style,
			}}
		>
			{children}
		</div>
	);
}

export default function ServicesPage({ setActivePage}) {
	
	return (
		<main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* ── Page Hero ── */}
      <section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 max-w-[var(--layout-max)] lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
                Servislerimiz
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
                Başından<br />Sonuna<br />Tam Destek
              </h1>
            </div>
            <p className="text-white/50 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
							<div className="flex gap-4 flex-wrap">
								<button
									onClick={() => setActivePage('contact')}
									className="px-8 py-4 font-bold text-white rounded-full transition-all duration-300 hover:-translate-y-1"
									style={{ backgroundColor: 'var(--th-polgun-antrasit)', boxShadow: `0 0 32px var(--th-polgun-antrasit)66` }}
									onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--th-text-muted)'}
									onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--th-polgun-antrasit)'}
								>
									Teklif Al
								</button>
								<button
									onClick={() => setActivePage('contact')}
									className="px-8 py-4 font-bold rounded-full transition-all duration-300 border-2"
									style={{ color: 'var(--th-polgun-antrasit)', borderColor: 'var(--th-polgun-antrasit)', backgroundColor: 'var(--th-primary)', backdropFilter: 'blur(8px)' }}
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = 'var(--th-polgun-antrasit)26';
										e.currentTarget.style.transform = 'translateY(-4px)';
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = 'var(--th-primary)';
										e.currentTarget.style.transform = 'translateY(0)';
									}}
								>
									Daha Fazla Bilgi
								</button>
							</div>
						</div>

					</div>
				
			</section>

			{/* ── Neden Polgün Band ── */}
			<section style={{ backgroundColor: 'var(--th-surface)', borderBottom: '1px solid color-mix(in srgb,var(--th-border) 8%,transparent)' }}>
				<div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: 'color-mix(in srgb,var(--th-border) 8%,transparent)' }}>
						{WHY.map((w) => (
							<div key={w.title} className="px-8 py-10" style={{ backgroundColor: 'var(--th-surface)' }}>
								<div className="text-3xl mb-4">{w.icon}</div>
								<h3 className="font-bold mb-2" style={{ color: 'var(--th-text)' }}>{w.title}</h3>
								<p className="text-sm" style={{ color: 'color-mix(in srgb,var(--th-text-muted) 65%,transparent)' }}>{w.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Adım Adım Hizmetler ── */}
			<section className="py-24 lg:py-32">
				<div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
					<div className="text-center mb-20">
						<p className="text-[11px] font-black tracking-[0.3em] uppercase mb-5 flex items-center justify-center gap-3" style={{ color: 'var(--th-polgun-blue)' }}>
							<span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--th-polgun-blue)' }} />
							Hizmet Sürecimiz
							<span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--th-polgun-blue)' }} />
						</p>
						<h2 className="font-black leading-tight" style={{ color: 'var(--th-text)', fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
							Başından sonuna<br />her adımda yanınızdayız
						</h2>
					</div>

					<div className="flex flex-col gap-28">
						{STEPS.map((step, i) => (
							<div
								key={i}
								className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
							>
								{/* Metin */}
								<div>
									<div className="flex items-center gap-4 mb-7">
										<span className="text-6xl font-black leading-none select-none"
											style={{ color: 'color-mix(in srgb,var(--th-polgun-blue) 15%,transparent)' }}>
											{step.number}
										</span>
										<div>
											<p className="text-[10px] font-black tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--th-primary)' }}>{step.sub}</p>
											<h2 className="font-black leading-tight" style={{ color: 'var(--th-text)', fontSize: 'clamp(1.5rem,2.5vw,2rem)' }}>{step.title}</h2>
										</div>
									</div>
									<p className="leading-relaxed mb-8" style={{ color: 'color-mix(in srgb,var(--th-text-muted) 70%,transparent)' }}>{step.desc}</p>
									
								</div>

								{/* Gerçek Görsel */}
								<div className="overflow-hidden rounded-2xl aspect-[4/3] relative group">
									<img
										src={step.img}
										alt={step.imgAlt}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									{/* Subtle overlay */}
									<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
										style={{ background: 'linear-gradient(to top,rgba(0,0,0,0.3),transparent)' }} />
									{/* Adım numarası */}
									<div className="absolute top-5 right-5">
										<GlassCard className="px-3 py-1.5">
											<span className="text-xs font-black text-white tracking-widest">{step.number}</span>
										</GlassCard>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

		{/* ── CTA ── */}
		<section className="py-32" style={{ backgroundColor: 'var(--th-bg)' }}>
			<div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
				<div className="relative rounded-3xl overflow-hidden px-12 py-20 text-center" style={{ background: 'linear-gradient(135deg,var(--th-primary) 0%,var(--th-polgun-blue) 100%)' }}>
					<div className="absolute inset-0 opacity-10">
						<svg viewBox="0 0 800 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
							<circle cx="100" cy="150" r="200" fill="white"/>
							<circle cx="700" cy="150" r="180" fill="white"/>
						</svg>
					</div>
					<div className="relative z-10 max-w-3xl mx-auto">
						<p className="text-[11px] font-black tracking-[0.35em] uppercase mb-6 text-white/50"></p>
						<h2 className="font-black text-white mb-8 leading-tight" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
							Hayalinizi birlikte<br />inşa edelim
						</h2>
						<p className="text-white/50 mb-12 max-w-lg mx-auto leading-relaxed">
							Proje büyüklüğü ne olursa olsun, ilk günden son güne kadar yanınızdayız.
						</p>
						<button
							onClick={() => setActivePage('contact')}
							className="px-10 py-4 text-white font-bold text-sm rounded-full transition-all duration-300 hover:-translate-y-1"
							style={{ backgroundColor: '#FFFFFF', color: 'var(--th-primary-darker)', boxShadow: '0 0 40px rgba(0,0,0,0.2)' }}
							onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
							onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
						>
							Hemen Teklif Al
						</button>
					</div>
				</div>
			</div>
		</section>
		</main>
	)
}
