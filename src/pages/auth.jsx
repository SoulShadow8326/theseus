import React, { useState } from 'react'
import './auth.css'
import poster from '../assets/poster.png'

export default function Auth() {
  const [mode, setMode] = useState('signin')

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-card">
          {mode === 'signin' ? (
            <>
              <h1 className="auth-title">Welcome Back</h1>
              <p className="auth-sub">Sign in to continue to Theseus</p>
              <form className="auth-form">
                <label className="auth-label">
                  Email
                  <input className="auth-input" type="email" name="email" required />
                </label>
                <label className="auth-label">
                  Password
                  <input className="auth-input" type="password" name="password" required />
                </label>
                <button className="auth-button" type="submit">Sign in</button>
              </form>
              <div className="auth-footer">
                <a className="auth-link">Forgot password?</a>
                <a className="auth-link" onClick={() => setMode('create')}>Create account</a>
              </div>
            </>
          ) : (
            <>
              <h1 className="auth-title">Create a new Theseus Account</h1>
              <p className="auth-sub">Join Theseus to access the demo and marketplace</p>
              <form className="auth-form">
                <label className="auth-label">
                  Full name
                  <input className="auth-input" type="text" name="name" required />
                </label>
                <label className="auth-label">
                  Email
                  <input className="auth-input" type="email" name="email" required />
                </label>
                <label className="auth-label">
                  Password
                  <input className="auth-input" type="password" name="password" required />
                </label>
                <button className="auth-button" type="submit">Create account</button>
              </form>
              <div className="auth-footer">
                <a className="auth-link" onClick={() => setMode('signin')}>Back to sign in</a>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="auth-right">
        <img src={poster} alt="poster" className="auth-poster" />
      </div>
    </div>
  )
}
