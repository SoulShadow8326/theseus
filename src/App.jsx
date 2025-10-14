import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';
import Support from './pages/support';
import About from './pages/about';
import Marketplace from './pages/marketplace';
import Demo from './pages/demo';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			<Route path="/products" element={<Products />} />
			<Route path="/support" element={<Support />} />
		<Route path="/about" element={<About />} />
		<Route path="/marketplace" element={<Marketplace />} />
		<Route path="/demo" element={<Demo />} />
			</Routes>
		</BrowserRouter>
	);
}
