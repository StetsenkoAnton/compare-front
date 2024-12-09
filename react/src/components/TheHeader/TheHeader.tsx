import React from 'react'
import { Link } from 'react-router-dom'
import './TheHeader.scss'

function TheHeader({ children }: { children: React.ReactNode }) {
    return (
      <header className="header">
          <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
          </nav>
          <div className="header">
              {children}
          </div>
      </header>
    )
}

export default TheHeader
