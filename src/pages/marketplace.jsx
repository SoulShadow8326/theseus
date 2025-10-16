import React from 'react';
import Nav from '../components/navbar';
import './marketplace.css';
import armImg from '../assets/arm.png';

const products = [
  { title: 'A-001', price: '$49', desc: 'An arm with superhuman efficiency.', img: armImg },
  { title: 'Theseus Analytics', price: '$99/mo', desc: 'Usage insights and dashboards', img: armImg },
  { title: 'Theseus Integrations', price: '$149/mo', desc: 'Connect to your stack', img: armImg },
  { title: 'Theseus Core', price: '$49/mo', desc: 'Core collaboration tools', img: armImg },
  { title: 'Theseus Analytics', price: '$99/mo', desc: 'Usage insights and dashboards', img: armImg },
  { title: 'Theseus Integrations', price: '$149/mo', desc: 'Connect to your stack', img: armImg },
  { title: 'Theseus Core', price: '$49/mo', desc: 'Core collaboration tools', img: armImg },
  { title: 'Theseus Analytics', price: '$99/mo', desc: 'Usage insights and dashboards', img: armImg },
  { title: 'Theseus Integrations', price: '$149/mo', desc: 'Connect to your stack', img: armImg },
];

const Marketplace = () => {
  return (
    <div className="marketplace-page">
      <Nav />
      <header className="market-hero">
        <div className="market-hero-inner">
          <h1><span style={{ color: 'var(--pink)' }}>Marketplace</span></h1>
          <p>Discover the lineup sold at Theseus.</p>
        </div>
      </header>

      <main className="market-main">
        <section className="product-grid">
          {products.map((p, i) => (
            <article className="product-card" key={i}>
              <div className="product-media">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="product-body">
                <h3>{p.title}</h3>
                <p className="product-desc">{p.desc}</p>
                <div className="product-price">{p.price}</div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Marketplace;
