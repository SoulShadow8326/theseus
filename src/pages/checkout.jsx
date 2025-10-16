import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePaymentInputs } from 'react-payment-inputs'
import images from 'react-payment-inputs/images'
import './checkout.css'
import { ShoppingCart, CreditCard, MapPin, Check } from 'lucide-react'
import poster from '../assets/poster.png'
import armImg from '../assets/arm.png'

export default function Checkout() {
  const [step, setStep] = useState(0)

  const sample = [
    { title: 'A-001', price: 49, qty: 1, img: armImg }
  ]

  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const raw = localStorage.getItem('theseus_cart')
    try {
      if (raw) setCartItems(JSON.parse(raw))
      else setCartItems(sample)
    } catch (e) {
      setCartItems(sample)
    }
  }, [])

  function setQty(index, qty) {
    setCartItems(prev => {
      const next = [...prev]
      next[index] = { ...next[index], qty }
      return next
    })
  }

  const [card, setCard] = useState({ number: '', name: '', expiry: '', cvc: '', focused: '' })

  function formatCardNumber(v) {
    const d = String(v).replace(/\D/g, '').slice(0, 16)
    return d.replace(/(.{4})/g, '$1 ').trim()
  }

  function formatExpiry(v) {
    const d = String(v).replace(/\D/g, '').slice(0, 4)
    if (d.length <= 2) return d
    return d.slice(0, 2) + '/' + d.slice(2)
  }

  function handleInput(e) {
    const { name, value } = e.target
    setCard(prev => ({ ...prev, [name]: value }))
  }

  function handleFocus(e) {
    setCard(prev => ({ ...prev, focused: e.target.name }))
  }

  const { wrapperProps, getCardImageProps, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs()

  const [shipping, setShipping] = useState({ name: '', address: '', city: '', postal: '' })

  function handleShipping(e) {
    const { name, value } = e.target
    setShipping(prev => ({ ...prev, [name]: value }))
  }

  const total = cartItems.reduce((s, it) => s + (Number(it.price) * (it.qty || 1)), 0)

  const navigate = useNavigate()

  function next() {
    setStep(s => Math.min(3, s + 1))
  }

  function prev() {
    setStep(s => Math.max(0, s - 1))
  }

  function maskedCard() {
    const num = card.number.replace(/\s+/g, '')
    if (num.length < 4) return '**** **** **** ****'
    const last4 = num.slice(-4)
    return `**** **** **** ${last4}`
  }

  return (
    <div className="checkout-page">
      <div className="checkout-left">
        <img src={poster} alt="poster" className="checkout-poster" />
      </div>
      <div className="checkout-right">
        <div className="checkout-card">
          <h1 className="checkout-title">Checkout</h1>
          <div className="checkout-steps">
            {[{k:'Cart'},{k:'Card'},{k:'Shipping'},{k:'Confirm'}].map((s, idx) => (
              <React.Fragment key={s.k}>
                <div className={`step-item ${step === idx ? 'active' : step > idx ? 'complete' : ''}`}>
                  <div className="step-icon">{step > idx ? <Check /> : (idx===0 ? <ShoppingCart /> : idx===1 ? <CreditCard /> : idx===2 ? <MapPin /> : <Check />)}</div>
                </div>
                {idx < 3 && <div className="step-separator" />}
              </React.Fragment>
            ))}
          </div>

          {step === 0 && (
            <div className="step-content">
              <h2>Cart</h2>
              <div className="cart-list">
                {cartItems.map((it, idx) => (
                  <div className="cart-item" key={idx}>
                    <img src={it.img} alt={it.title} />
                    <div className="ci-body">
                      <div className="ci-title">{it.title}</div>
                      <div className="ci-price">${it.price.toFixed ? it.price.toFixed(2) : Number(it.price).toFixed(2)}</div>
                    </div>
                    <div className="ci-qty">
                      <button onClick={() => setQty(idx, Math.max(0, (it.qty || 1) - 1))}>-</button>
                      <div className="ci-count">{it.qty || 1}</div>
                      <button onClick={() => setQty(idx, (it.qty || 1) + 1)}>+</button>
                    </div>
                  </div>
                ))}
              </div>
                <div className="checkout-actions">
                  <button onClick={() => navigate('/marketplace')}>Back to marketplace</button>
                  <button onClick={next} className="primary">Continue to card</button>
                </div>
            </div>
          )}

          {step === 1 && (
            <div className="step-content">
              <h2>Card details</h2>
              <div className="card-row">
                <div className="card-preview">
                  <div className="credit-card">
                    <div className="card-top">
                      <div className="card-brand">
                        {(() => {
                          const desc = getCardImageProps({ images })
                          if (!desc) return null
                          if (React.isValidElement(desc)) return desc
                          if (typeof desc === 'object') {
                            if ('src' in desc) return <img {...desc} alt="brand" />
                            const { children, ...rest } = desc
                            return <svg {...rest}>{children}</svg>
                          }
                          return null
                        })()}
                      </div>
                    </div>
                    <div className="card-number-display">{card.number && card.number.trim() !== '' ? card.number : '**** **** **** ****'}</div>
                    <div className="card-bottom">
                      <div className="card-name">{card.name || 'CARDHOLDER NAME'}</div>
                      <div className="card-expiry">{card.expiry || 'MM/YY'}</div>
                    </div>
                  </div>
                </div>
                  <div className="card-form">
                  <label className="field-row"><span className="field-label">Card Number</span>
                    <input value={card.number} onChange={e => setCard(prev => ({ ...prev, number: formatCardNumber(e.target.value) }))} onFocus={e => setCard(prev => ({ ...prev, focused: 'number' }))} name="number" inputMode="numeric" maxLength={19} />
                  </label>
                  <label className="field-row"><span className="field-label">Card Name</span>
                    <input name="name" value={card.name} onChange={handleInput} onFocus={handleFocus} />
                  </label>
                  <div className="split">
                    <label className="field-row small"><span className="field-label">Expiry</span>
                      <input value={card.expiry} onChange={e => setCard(prev => ({ ...prev, expiry: formatExpiry(e.target.value) }))} onFocus={e => setCard(prev => ({ ...prev, focused: 'expiry' }))} name="expiry" inputMode="numeric" maxLength={5} />
                    </label>
                    <label className="field-row small"><span className="field-label">CVC</span>
                      <input value={card.cvc} onChange={e => setCard(prev => ({ ...prev, cvc: e.target.value.replace(/\D/g, '').slice(0,3) }))} onFocus={e => setCard(prev => ({ ...prev, focused: 'cvc' }))} name="cvc" inputMode="numeric" maxLength={3} />
                    </label>
                  </div>
                </div>
              </div>
              <div className="checkout-actions">
                <button onClick={prev}>Back</button>
                <button onClick={next} className="primary">Continue to shipping</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="step-content">
              <h2>Shipping</h2>
              <div className="shipping-form">
                <label>Full name
                  <input name="name" value={shipping.name} onChange={handleShipping} />
                </label>
                <label>Address
                  <input name="address" value={shipping.address} onChange={handleShipping} />
                </label>
                <label>City
                  <input name="city" value={shipping.city} onChange={handleShipping} />
                </label>
                <label>Postal Code
                  <input name="postal" value={shipping.postal} onChange={handleShipping} />
                </label>

              </div>
              <div className="checkout-actions">
                <button onClick={prev}>Back</button>
                <button onClick={next} className="primary">Review order</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="step-content">
              <h2>Confirm Order</h2>
              <p>Please review your order and details before confirming.</p>
              <div className="confirm-block">
                <div className="confirm-section">
                  <h4>Your items</h4>
                  {cartItems.map((it, idx) => (
                    <div key={idx} className="confirm-item">{it.title} x {it.qty || 1} — ${(Number(it.price) * (it.qty || 1)).toFixed(2)}</div>
                  ))}
                </div>
                <div className="confirm-section">
                  <h4>Shipping</h4>
                  <div>{shipping.name}</div>
                  <div>{shipping.address}</div>
                  <div>{shipping.city} {shipping.postal}</div>
                </div>
                <div className="confirm-section total">
                  <h4>Total</h4>
                  <div>${total.toFixed(2)}</div>
                </div>
              </div>
              <div className="checkout-actions">
                <button onClick={prev}>Back</button>
                <button className="primary">Confirm Order</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
