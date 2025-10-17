import React, { useState } from 'react'
import './orders.css'
import armImg from '../assets/arm.png'
import Nav from '../components/navbar'

export default function Orders() {
  const sample = [
    { id: 'ORD-1001', date: '2025-10-01', total: 99.00, items: [{sku:'A-001', qty:1, price:99}], status: 'Processing' },
    { id: 'ORD-1002', date: '2025-09-21', total: 198.00, items: [{sku:'A-001', qty:2, price:198}], status: 'Shipped' },
    { id: 'ORD-1003', date: '2025-08-15', total: 99.00, items: [{sku:'A-001', qty:1, price:99}], status: 'Delivered' }
  ]

  const [orders] = useState(sample)
  const [active, setActive] = useState(orders[0])

  return (
    <>
      <Nav />
      <div className="orders-page">
      <div className="orders-left">
        <h3>Orders</h3>
        <div className="orders-list">
          {orders.map(o => (
            <div key={o.id} className={`order-row ${active && active.id === o.id ? 'active' : ''}`} onClick={() => setActive(o)}>
              <div className="order-id">{o.id}</div>
              <div className="order-date">{o.date}</div>
              <div className="order-total">${o.total.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="orders-right">
        <h3><span className='ordrhead'>Order <span className='accent'>Details</span></span></h3>
        {active ? (
          <div className="order-detail">
            <div className="detail-row"><strong>Order:</strong> {active.id}</div>
            <div className="detail-row"><strong>Date:</strong> {active.date}</div>
            <div className="detail-row"><strong>Status:</strong> {active.status}</div>
            <div className="detail-row"><strong>Total:</strong> ${active.total.toFixed(2)}</div>
            <div className="detail-items">
              {active.items.map((it, i) => (
                <div className="detail-item" key={i}>
                  <img src={armImg} alt={it.sku} />
                  <div className="di-body">
                    <div className="di-sku">{it.sku}</div>
                    <div className="di-qty">Qty: {it.qty}</div>
                  </div>
                  <div className="di-price">${(it.price * it.qty).toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="no-active">Select an order to view details</div>
        )}
      </div>
      </div>
    </>
  )
}
