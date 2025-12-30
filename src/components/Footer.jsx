import '../styles/App.css'

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <div style={styles.section}>
            <h3 style={styles.heading}>Synapse Spatial Solutions</h3>
            <p style={styles.text}>
             Connecting Data, Illuminating Places.
            </p>
          </div>
          
          <div style={styles.section}>
            <h3 style={styles.heading}>Quick Links</h3>
            <a href="/" style={styles.link}>Home</a>
            <a href="/about" style={styles.link}>About</a>
            <a href="/services" style={styles.link}>Services</a>
            <a href="/contact" style={styles.link}>Contact</a>
          </div>
          
          <div style={styles.section}>
            <h3 style={styles.heading}>Contact Us</h3>
            <p style={styles.text}>online</p>
            <p style={styles.text}>Bomet</p>
            <p style={styles.text}>kipyegontooamos@gmail.com</p>
            <p style={styles.text}>(+254)708-808-737</p>
          </div>
        </div>
        
        <div style={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} S3Geo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#1f2937',
    color: '#fff',
    padding: '60px 0 30px',
    marginTop: 'auto',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginBottom: '40px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  heading: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  text: {
    color: '#d1d5db',
    fontSize: '14px',
    lineHeight: '1.5',
  },
  link: {
    color: '#d1d5db',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.3s ease',
    ':hover': {
      color: '#fff',
    },
  },
  copyright: {
    borderTop: '1px solid #374151',
    paddingTop: '20px',
    textAlign: 'center',
    color: '#9ca3af',
    fontSize: '14px',
  },
}

export default Footer