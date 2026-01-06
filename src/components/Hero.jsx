import '../styles/App.css'

const Hero = () => {
  return (
    <section style={styles.hero}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>S3GEO</h1>
          <h2>Connecting Data, Illuminating Places.</h2>
          <p style={styles.subtitle}>
            Transforming geospatial intelligence into actionable insights for business growth and climate resilience.
          </p>
          <div style={styles.buttons}>
            <a href="/contact" style={styles.primaryButton}>Get Started</a>
            <a href="/services" style={styles.secondaryButton}>Our Services</a>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
    color: '#fff',
    padding: '100px 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  content: {
    maxWidth: '700px',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    lineHeight: '1.2',
  },
  subtitle: {
    fontSize: '1.25rem',
    marginBottom: '30px',
    opacity: '0.9',
    lineHeight: '1.6',
    color:'white',
    
  },
  buttons: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  primaryButton: {
    display: 'inline-block',
    padding: '15px 30px',
    backgroundColor: '#fff',
    color: '#2563eb',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#f3f4f6',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    },
  },
  secondaryButton: {
    display: 'inline-block',
    padding: '15px 30px',
    backgroundColor: 'transparent',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '16px',
    border: '2px solid #fff',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: 'rgba(255,255,255,0.1)',
      transform: 'translateY(-2px)',
    },
  },
}

export default Hero