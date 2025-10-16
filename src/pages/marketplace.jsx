import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Nav from '../components/navbar';
import './marketplace.css';
import armImg from '../assets/arm.png';

const products = [
  { title: 'A-001', price: '$49', desc: 'An arm with superhuman efficiency.', img: armImg },
  { title: 'Theseus Analytics', price: '$99', desc: 'Usage insights and dashboards', img: armImg },
  { title: 'Theseus Integrations', price: '$149', desc: 'Connect to your stack', img: armImg },
  { title: 'Theseus Core', price: '$49', desc: 'Core collaboration tools', img: armImg },
  { title: 'Theseus Analytics', price: '$99', desc: 'Usage insights and dashboards', img: armImg },
  { title: 'Theseus Integrations', price: '$149', desc: 'Connect to your stack', img: armImg },
  { title: 'Theseus Core', price: '$49', desc: 'Core collaboration tools', img: armImg },
  { title: 'Theseus Analytics', price: '$99', desc: 'Usage insights and dashboards', img: armImg },
  { title: 'Theseus Integrations', price: '$149', desc: 'Connect to your stack', img: armImg },
];

const Marketplace = () => {
  const [cart, setCart] = useState({})

  function addToCart(index) {
    setCart(prev => {
      const next = { ...prev }
      next[index] = (next[index] || 0) + 1
      return next
    })
  }

  function removeFromCart(index) {
    setCart(prev => {
      const next = { ...prev }
      if (!next[index]) return next
      next[index] = next[index] - 1
      if (next[index] <= 0) delete next[index]
      return next
    })
  }

  const cartCount = Object.values(cart).reduce((s, v) => s + v, 0)
  const navigate = useNavigate()

  return (
    <div className="marketplace-page">
      <Nav />
      <header className="market-hero">
        <div className="market-hero-inner">
          <div className="market-hero-top">
            <h1><span style={{ color: 'var(--pink)' }}>Marketplace</span></h1>
            <button className="cart-button" aria-label="Cart" onClick={() => cartCount > 0 && navigate('/checkout')} disabled={cartCount === 0}>Cart {cartCount > 0 ? `(${cartCount})` : ''}</button>
          </div>
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
                {cart[i] ? (
                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => addToCart(i)}>+</button>
                    <div className="qty-count">{cart[i]}</div>
                    <button className="qty-btn" onClick={() => removeFromCart(i)}>-</button>
                  </div>
                ) : (
                  <button className="add-cart" onClick={() => addToCart(i)}>Add to cart</button>
                )}
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Marketplace;
