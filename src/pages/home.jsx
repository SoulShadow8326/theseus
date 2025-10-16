import Nav from '../components/navbar';
import CircularGallery from '../components/CircularGallery';

export default function Home() {
	return (
		<div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', display: 'flex', flexDirection: 'column' }}>
			<div style={{ height: '120px' }}>
				<Nav/>
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
