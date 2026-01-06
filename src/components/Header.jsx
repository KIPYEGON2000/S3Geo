import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../App.css'
import logo from '../assets/company-logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          <Link to="/" className="logo">
            <img 
              src={logo}
              alt="S3GEO Logo" 
              className="logo-img"
            />
            <span className="logo-text">Synapse Spatial Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="mobile-nav">
            <Link to="/" className="mobile-link" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="mobile-link" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/services" className="mobile-link" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/contact" className="mobile-link" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header