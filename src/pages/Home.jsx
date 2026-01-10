import Hero from '../components/Hero'
import '../styles/App.css'

const Home = () => {
  return (
    <>
      <Hero />
      
      {/* Services Preview */}
      <section style={styles.section}>
        <div className="container" style={styles.container}>
          <h2 style={styles.sectionTitle}>Our Services</h2>
          <p style={styles.sectionSubtitle}>
            Comprehensive geospatial solutions tailored to your business and environmental needs.
          </p>
          
          <div style={styles.servicesGrid}>
            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>💻</div>
              <h3 style={styles.serviceTitle}>GIS Solutions</h3>
              <p style={styles.serviceDescription}>
                Advanced spatial analysis and mapping services for data-driven decision making.
              </p>
            </div>
            
            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>🛰️</div>
              <h3 style={styles.serviceTitle}>Remote Sensing</h3>
              <p style={styles.serviceDescription}>
                Satellite imagery analysis and earth observation for comprehensive environmental monitoring.
              </p>
            </div>
             <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>🔭</div>
              <h3 style={styles.serviceTitle}>Land Survey Services</h3>
              <p style={styles.serviceDescription}>
                Precise boundary surveys, topographic mapping, and cadastral assessments for land development and planning.
              </p>
            </div>
            
            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>🔧</div>
              <h3 style={styles.serviceTitle}>Business Intelligence</h3>
              <p style={styles.serviceDescription}>
                Location-based insights to optimize operations and identify market opportunities.
              </p>
            </div>
          </div>
          
          <div style={styles.center}>
            <a href="/#/services" style={styles.viewAllButton}>View All Services</a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div className="container" style={styles.container}>
          <h2 style={styles.ctaTitle}>Ready to Get Started?</h2>
          <p style={styles.ctaText}>
            Contact us today to discuss how we can help your business grow.
          </p>
          <a href="/#/contact" style={styles.ctaButton}>Contact Us</a>
        </div>
      </section>
    </>
  )
}

const styles = {
  section: {
    padding: '80px 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '15px',
    color: '#1f2937',
  },
  sectionSubtitle: {
    fontSize: '1.125rem',
    textAlign: 'center',
    color: '#6b7280',
    maxWidth: '600px',
    margin: '0 auto 50px',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginBottom: '40px',
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    textAlign: 'center',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    },
  },
  serviceIcon: {
    fontSize: '48px',
    marginBottom: '20px',
  },
  serviceTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#1f2937',
  },
  serviceDescription: {
    color: '#6b7280',
    lineHeight: '1.6',
  },
  center: {
    textAlign: 'center',
  },
  viewAllButton: {
    display: 'inline-block',
    padding: '12px 30px',
    backgroundColor: 'transparent',
    color: '#2563eb',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '16px',
    border: '2px solid #2563eb',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#2563eb',
      color: '#fff',
    },
  },
  ctaSection: {
    backgroundColor: '#2563eb',
    color: '#fff',
    padding: '80px 0',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  ctaText: {
    fontSize: '1.125rem',
    marginBottom: '30px',
    opacity: '0.9',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#fff',
  },
  ctaButton: {
    display: 'inline-block',
    padding: '15px 40px',
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
}

export default Home