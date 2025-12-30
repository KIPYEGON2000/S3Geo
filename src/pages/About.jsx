import '../styles/App.css'

const About = () => {
  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div className="container" style={styles.container}>
          <h1 style={styles.title}>About Our Company</h1>
          <p style={styles.subtitle}>
            We are dedicated to delivering innovative solutions that drive business growth.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={styles.contentSection}>
        <div className="container" style={styles.container}>
          <div style={styles.contentGrid}>
            <div style={styles.content}>
              <h2 style={styles.sectionTitle}>Our Story</h2>
              <p style={styles.text}>
                Founded in 2020, our company has been at the forefront of digital innovation. 
                We started with a simple mission: to help businesses leverage technology to achieve their goals.
              </p>
              <p style={styles.text}>
                Today, we serve clients across various industries, providing tailored solutions 
                that deliver real results. Our team of experts is passionate about technology 
                and committed to excellence.
              </p>
            </div>
            
            <div style={styles.imagePlaceholder}>
              <div style={styles.imageBox}>
                <p>Company Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={styles.valuesSection}>
        <div className="container" style={styles.container}>
          <h2 style={styles.sectionTitle}>Our Values</h2>
          <p style={styles.sectionSubtitle}>
            These principles guide everything we do
          </p>
          
          <div style={styles.valuesGrid}>
            <div style={styles.valueCard}>
              <h3 style={styles.valueTitle}>Innovation</h3>
              <p style={styles.valueText}>
                We constantly explore new technologies and approaches to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div style={styles.valueCard}>
              <h3 style={styles.valueTitle}>Integrity</h3>
              <p style={styles.valueText}>
                We believe in honesty, transparency, and doing what's right for our clients.
              </p>
            </div>
            
            <div style={styles.valueCard}>
              <h3 style={styles.valueTitle}>Excellence</h3>
              <p style={styles.valueText}>
                Synapse Spatial Solutions (S3Geo) is a cutting-edge geospatial engineering firm specializing in GIS, remote sensing, and climate analytics.

We leverage advanced spatial technologies to connect disparate data sources and illuminate critical patterns, helping businesses and organizations make informed decisions in an increasingly complex world.

Our expertise spans from automated mapping solutions to climate impact assessments, delivering actionable intelligence that drives sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
  },
  hero: {
    background: 'linear-gradient(135deg, #f0f9ff, #f5f3ff)',
    padding: '100px 0',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#1f2937',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#6b7280',
    maxWidth: '600px',
    margin: '0 auto',
  },
  contentSection: {
    padding: '80px 0',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '50px',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  content: {
    paddingRight: '40px',
    '@media (max-width: 768px)': {
      paddingRight: '0',
    },
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#1f2937',
  },
  text: {
    fontSize: '1.125rem',
    lineHeight: '1.6',
    color: '#6b7280',
    marginBottom: '20px',
  },
  imagePlaceholder: {
    display: 'flex',
    justifyContent: 'center',
  },
  imageBox: {
    width: '100%',
    maxWidth: '400px',
    height: '300px',
    backgroundColor: '#e5e7eb',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6b7280',
  },
  valuesSection: {
    backgroundColor: '#f9fafb',
    padding: '80px 0',
  },
  sectionSubtitle: {
    fontSize: '1.125rem',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: '50px',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  },
  valueCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  valueTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#1f2937',
  },
  valueText: {
    color: '#6b7280',
    lineHeight: '1.6',
  },
}

export default About