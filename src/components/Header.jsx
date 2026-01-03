import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../styles/App.css'
import logo from '../assets/company-logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        <div style={styles.navbar}>
          <Link to="/" style={styles.logo}>
            <img 
              src={logo}
              alt="Company Logo" 
              style={styles.logoImg}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150x50/2563eb/ffffff?text=LOGO'
              }}
            />
            <span style={styles.logoText}>Synapse Spatial Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <nav style={styles.desktopNav}>
            <Link to="/" style={styles.navLink}>Home</Link>
            <Link to="/about" style={styles.navLink}>About</Link>
            <Link to="/services" style={styles.navLink}>Services</Link>
            <Link to="/contact" style={styles.navLink}>Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            style={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav style={styles.mobileNav}>
            <Link to="/" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/services" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/contact" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        )}
      </div>
    </header>
  )
}

const styles = {
  header: {
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#1f2937',
  },
  logoImg: {
    height: '40px',
    marginRight: '10px',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  desktopNav: {
    display: 'flex',
    gap: '30px',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  navLink: {
    textDecoration: 'none',
    color: '#374151',
    fontWeight: '500',
    fontSize: '16px',
    padding: '8px 0',
    position: 'relative',
    transition: 'color 0.3s ease',
  },
  menuButton: {
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#374151',
    '@media (max-width: 768px)': {
      display: 'block',
    },
  },
  mobileNav: {
    display: 'none',
    flexDirection: 'column',
    gap: '15px',
    padding: '20px 0',
    borderTop: '1px solid #e5e7eb',
    '@media (max-width: 768px)': {
      display: 'flex',
    },
  },
  mobileLink: {
    textDecoration: 'none',
    color: '#374151',
    fontWeight: '500',
    fontSize: '16px',
    padding: '10px 0',
  },
}

// Add hover effects via JavaScript
Object.assign(styles.navLink, {
  ':hover': {
    color: '#2563eb',
  },
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 0,
    height: '2px',
    backgroundColor: '#2563eb',
    transition: 'width 0.3s ease',
  },
  ':hover::after': {
    width: '100%',
  },
})

export default Header