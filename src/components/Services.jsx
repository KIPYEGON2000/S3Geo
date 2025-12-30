import '../styles/App.css';

const Services = () => {
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
    
  ];

  return (
    <section className="section-padding" style={styles.servicesSection}>
      <div className="container">
        <div className="text-center" style={styles.sectionHeader}>
          <h2>Our Services</h2>
          <p style={styles.sectionSubtitle}>
           Comprehensive geospatial solutions tailored to your business and environmental needs
          </p>
        </div>

        <div className="grid grid-cols-3" style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className="card" style={styles.serviceCard}>
              <div style={styles.serviceIcon}>{service.icon}</div>
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <p style={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  servicesSection: {
    backgroundColor: 'var(--light-color)',
  },
  sectionHeader: {
    marginBottom: '3rem',
  },
  sectionSubtitle: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  servicesGrid: {
    display: 'grid',
    gap: '2rem',
  },
  serviceCard: {
    textAlign: 'center',
    padding: '2rem',
  },
  serviceIcon: {
    fontSize: '3rem',
    marginBottom: '1.5rem',
  },
  serviceTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: 'var(--dark-color)',
  },
  serviceDescription: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
  },
};

export default Services;