import React from 'react';
import Nav from '../components/navbar';
import './marketplace.css';

const products = [
  { title: 'Theseus Core', price: '$49/mo', desc: 'Core collaboration tools', img: 'https://exunclan.com/_next/image?url=%2Flogo.png&w=384&q=75' },
  { title: 'Theseus Analytics', price: '$99/mo', desc: 'Usage insights and dashboards', img: 'https://exunclan.com/_next/image?url=%2Flogo.png&w=384&q=75' },
  { title: 'Theseus Integrations', price: '$149/mo', desc: 'Connect to your stack', img: 'https://exunclan.com/_next/image?url=%2Flogo.png&w=384&q=75' },
  { title: 'Theseus Core', price: '$49/mo', desc: 'Core collaboration tools', img: 'https://exunclan.com/_next/image?url=%2Flogo.png&w=384&q=75' },
  { title: 'Theseus Analytics', price: '$99/mo', desc: 'Usage insights and dashboards', img: 'https://exunclan.com/_next/image?url=%2Flogo.png&w=384&q=75' },
  { title: 'Theseus Integrations', price: '$149/mo', desc: 'Connect to your stack', img: 'https://exunclan.com/_next/image?url=%2Flogo.png&w=384&q=75' },
  { title: 'Theseus Core', price: '$49/mo', desc: 'Core collaboration tools', img: 'https://exunclan.com/_next/image?url=%2Flogo.png&w=384&q=75' },
  { title: 'Theseus Analytics', price: '$99/mo', desc: 'Usage insights and dashboards', img: 'https://exunclan.com/_next/image?url=%2Flogo.png&w=384&q=75' },
  { title: 'Theseus Integrations', price: '$149/mo', desc: 'Connect to your stack', img: 'https://exunclan.com/_next/image?url=%2Flogo.png&w=384&q=75' },
];

const Marketplace = () => {
  return (
    <div className="marketplace-page">
      <Nav />
      <header className="market-hero">
        <div className="market-hero-inner">
          <h1>Marketplace</h1>
          <p>Discover extensions and add-ons for Theseus.</p>
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
