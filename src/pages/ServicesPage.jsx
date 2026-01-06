import '../styles/App.css'

const ServicesPage = () => {
  const services = [
     {
      icon: '💻',
      title: 'GIS Solutions',
      description: 'Advanced spatial analysis and mapping services for data-driven decision making.',
    },
    {
      icon: '🛰️',
      title: 'Remote Sensing',
      description: 'Satellite imagery analysis and earth observation for comprehensive environmental monitoring.',
    },
    {
      icon: '🔧',
      title: 'Business Intelligence',
      description: 'Location-based insights to optimize operations and identify market opportunities.',
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your online presence.',
    },
  ]

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div className="container" style={styles.container}>
          <h1 style={styles.title}>Our Services</h1>
          <p style={styles.subtitle}>
            Comprehensive solutions designed to meet your business needs and drive growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={styles.servicesSection}>
        <div className="container" style={styles.container}>
          <div style={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} style={styles.serviceCard}>
                <div style={styles.serviceIcon}>{service.icon}</div>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDescription}>{service.description}</p>
                <a href="/#/contact" style={styles.learnMore}>Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div className="container" style={styles.container}>
          <h2 style={styles.ctaTitle}>Need a Custom Solution?</h2>
          <p style={styles.ctaText}>
            Contact us to discuss how we can create a tailored solution for your business.
          </p>
          <a href="/#/contact" style={styles.ctaButton}>Get in Touch</a>
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
    background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
    color: '#fff',
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
  },
  subtitle: {
    fontSize: '1.25rem',
    opacity: '0.9',
    maxWidth: '600px',
    margin: '0 auto',
    color:'white'
  },
  servicesSection: {
    padding: '80px 0',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
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
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
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
    marginBottom: '20px',
  },
  learnMore: {
    color: '#2563eb',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '14px',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  ctaSection: {
    backgroundColor: '#f9fafb',
    padding: '80px 0',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#1f2937',
  },
  ctaText: {
    fontSize: '1.125rem',
    color: '#f9fafdff',
    marginBottom: '30px',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  ctaButton: {
    display: 'inline-block',
    padding: '15px 40px',
    backgroundColor: '#2563eb',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#1d4ed8',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
    },
  },
}

export default ServicesPage