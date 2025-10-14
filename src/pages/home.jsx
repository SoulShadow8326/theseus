import Nav from '../components/navbar';
import CircularGallery from '../components/CircularGallery';

const items = [
	{ label: 'Home', href: '/' },
	{ label: 'Products', href: '/products' },
	{ label: 'Support', href: '/support' },
	{ label: 'Marketplace', href: '/marketplace' }
];

export default function Home() {
	return (
		<div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', display: 'flex', flexDirection: 'column' }}>
			<div style={{ height: '120px' }}>
				<Nav
					items={items}
					particleCount={15}
					particleDistances={[90, 10]}
					particleR={100}
					initialActiveIndex={0}
					animationTime={600}
					timeVariance={300}
					colors={[1, 2, 3, 1, 2, 3, 1, 4]}
				/>
			</div>
			<main style={{ display: 'grid', placeItems: 'center', paddingTop: '2rem' }}>
				<h1 style={{ fontSize: 'clamp(48px, 10vw, 140px)', margin: 0, fontWeight: 700, fontFamily: 'Satoshi, Helvetica, Arial, sans-serif' }}>Theseus</h1>
			</main>
			<div style={{ height: '600px', position: 'relative' }}>
				<CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
			</div>
		</div>
	);
}
