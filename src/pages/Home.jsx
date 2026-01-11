import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Monitor, Satellite, Compass, BarChart } from 'lucide-react'
import Hero from '../components/Hero'
import '../styles/App.css'

// Import images correctly
import dashbImage from '../assets/dashb.png'
import productImage from '../assets/product.png'
import cropImage from '../assets/crop.jpg'

const Home = () => {
  return (
    <>
      <Hero />
      
      {/* Featured Projects Section */}
      <FeaturedProjects />
      
      {/* Services Preview */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Our Services</h2>
          <p style={styles.sectionSubtitle}>
            Comprehensive geospatial solutions tailored to your business and environmental needs.
          </p>
          
          <div style={styles.servicesGrid}>
            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>
                <Monitor size={40} color="#0A4D68" />
              </div>
              <h3 style={styles.serviceTitle}>GIS Solutions</h3>
              <p style={styles.serviceDescription}>
                Advanced spatial analysis and mapping services for data-driven decision making.
              </p>
            </div>
            
            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>
                <Satellite size={40} color="#0A4D68" />
              </div>
              <h3 style={styles.serviceTitle}>Remote Sensing</h3>
              <p style={styles.serviceDescription}>
                Satellite imagery analysis and earth observation for comprehensive environmental monitoring.
              </p>
            </div>
            
            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>
                <Compass size={40} color="#0A4D68" />
              </div>
              <h3 style={styles.serviceTitle}>Land Survey Services</h3>
              <p style={styles.serviceDescription}>
                Precise boundary surveys, topographic mapping, and cadastral assessments.
              </p>
            </div>
            
            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>
                <BarChart size={40} color="#0A4D68" />
              </div>
              <h3 style={styles.serviceTitle}>Business Intelligence</h3>
              <p style={styles.serviceDescription}>
                Location-based insights to optimize operations and identify market opportunities.
              </p>
            </div>
          </div>
          
          <div style={styles.center}>
            <a href="/services" style={styles.viewAllButton}>View All Services</a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <h2 style={styles.ctaTitle}>Ready to Transform Your Business with Geospatial Intelligence?</h2>
          <p style={styles.ctaText}>
            Get actionable insights from location data. Contact us today for a free consultation.
          </p>
          <div style={styles.ctaButtons}>
            <a href="/#/contact" style={styles.ctaButtonPrimary}>Start Your Project</a>
           
          </div>
        </div>
      </section>
    </>
  )
}

// Featured Projects Component
const FeaturedProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState({})
  const carouselRef = useRef(null)

  const projects = [
     {
      title: 'GIS Mapping Automation',
      description: 'Automated GIS map generation system producing 20 maps per minute for loss reduction analysis.',
      image: productImage,
      tags: ['Python', 'Matplotlib', 'GIS', 'Automation'],
      link: 'https://geo-dashboad-8.onrender.com/',
      impact: '98% reduction in map generation time',
    },
    {
      
      title: 'Service Management Dashboard',
      description: 'Comprehensive web application for managing users, services, and operations with real-time monitoring and analytics.',
      image: dashbImage,
      tags: ['React', 'Node.js', 'MongoDB', 'Real-time Analytics'],
      link: 'https://geo-dashboad-8.onrender.com/',
      impact: 'Streamlined operations management for 500+ users',
    },
   
    {
      title: 'Climate Data Analytics',
      description: 'Interactive platform for analyzing climate patterns and environmental data for sustainable decision-making.',
      image: cropImage,
      tags: ['Data Visualization', 'Climate Science', 'Geospatial'],
      link: '#',
      impact: 'Supporting climate resilience strategies',
    },
  ]

  // Handle image loading
  const handleImageLoad = (index) => {
    setImagesLoaded(prev => ({ ...prev, [index]: true }))
  }

  const handleImageError = (index) => {
    console.error(`Failed to load image for project: ${projects[index].title}`)
    setImagesLoaded(prev => ({ ...prev, [index]: false }))
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, projects.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section style={featuredStyles.section}>
      <div style={featuredStyles.container}>
        {/* Section Header */}
        <div style={featuredStyles.header}>
          <div style={featuredStyles.badge}>PORTFOLIO SHOWCASE</div>
          <h2 style={featuredStyles.title}>See What We've Built</h2>
          <p style={featuredStyles.description}>
            Real solutions delivering measurable impact across geospatial intelligence, 
            web development, and data analytics.
          </p>
        </div>

        {/* Carousel */}
        <div style={featuredStyles.carouselWrapper}>
          <div 
            style={featuredStyles.carousel} 
            ref={carouselRef}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div style={{
              display: 'flex',
              transition: 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${projects.length * 100}%`
            }}>
              {projects.map((project, index) => (
                <div key={index} style={featuredStyles.slide}>
                  <div style={featuredStyles.slideContent}>
                    {/* Image Side */}
                    <div style={featuredStyles.imageSection}>
                      {!imagesLoaded[index] && (
                        <div style={featuredStyles.imagePlaceholder}>
                          <div style={featuredStyles.placeholderContent}>
                            <svg style={{ width: '80px', height: '80px', margin: '0 auto 16px' }} fill="#0891b2" viewBox="0 0 20 20">
                              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                            </svg>
                            <p style={{ fontSize: '18px', fontWeight: '600', color: '#0891b2', marginBottom: '8px' }}>Project Preview</p>
                            <p style={{ color: '#4b5563', fontSize: '14px' }}>{project.title}</p>
                          </div>
                        </div>
                      )}
                      <img 
                        src={project.image}
                        alt={project.title}
                        style={{
                          ...featuredStyles.image,
                          display: imagesLoaded[index] ? 'block' : 'none'
                        }}
                        loading="lazy"
                        onLoad={() => handleImageLoad(index)}
                        onError={() => handleImageError(index)}
                      />
                    </div>

                    {/* Content Side */}
                    <div style={featuredStyles.textSection}>
                      <div style={featuredStyles.featuredBadge}>
                        <span style={featuredStyles.badgeDot}></span>
                        Featured Project
                      </div>
                      
                      <h3 style={featuredStyles.projectTitle}>{project.title}</h3>
                      
                      <p style={featuredStyles.projectDesc}>{project.description}</p>

                      <div style={featuredStyles.impactBadge}>
                        <span style={{ marginRight: '8px' }}>💡</span>
                        <span style={featuredStyles.impactText}>{project.impact}</span>
                      </div>

                      <div style={featuredStyles.tagsContainer}>
                        {project.tags.map((tag, i) => (
                          <span key={i} style={featuredStyles.tag}>{tag}</span>
                        ))}
                      </div>

                      {project.link !== '#' && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={featuredStyles.ctaButton}
                          onMouseEnter={() => setIsAutoPlaying(false)}
                        >
                          <ExternalLink size={20} />
                          <span style={{ marginLeft: '8px' }}>View Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              style={featuredStyles.navButton}
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              style={{...featuredStyles.navButton, right: '16px'}}
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Progress Bar */}
          <div style={featuredStyles.progressContainer}>
            <div style={featuredStyles.progressBar}>
              <div style={{
                width: `${((currentSlide + 1) / projects.length) * 100}%`,
                height: '100%',
                backgroundColor: '#06b6d4',
                transition: 'width 500ms ease'
              }} />
            </div>
          </div>

          {/* Dots */}
          <div style={featuredStyles.dotsContainer}>
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  ...featuredStyles.dot,
                  backgroundColor: currentSlide === index ? '#06b6d4' : '#e5e7eb'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div style={featuredStyles.viewAllContainer}>
          <a href="/portfolio" style={featuredStyles.viewAllLink}>
            View All Projects
            <ChevronRight size={20} style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </div>
    </section>
  )
}

// Main Styles
const styles = {
  section: {
    padding: '80px 0',
    backgroundColor: '#ffffff',
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
    color: '#0A4D68',
    lineHeight: '1.2',
  },
  sectionSubtitle: {
    fontSize: '1.125rem',
    textAlign: 'center',
    color: '#6b7280',
    maxWidth: '600px',
    margin: '0 auto 50px',
    lineHeight: '1.6',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    marginBottom: '40px',
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    border: '1px solid #f1f5f9',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1)',
      borderColor: '#cffafe',
    }
  },
  serviceIcon: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80px',
  },
  serviceTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#0A4D68',
  },
  serviceDescription: {
    color: '#64748b',
    lineHeight: '1.6',
    fontSize: '0.95rem',
  },
  center: {
    textAlign: 'center',
    marginTop: '40px',
  },
  viewAllButton: {
    display: 'inline-block',
    padding: '12px 30px',
    backgroundColor: 'transparent',
    color: '#06b6d4',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '16px',
    border: '2px solid #06b6d4',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#06b6d4',
      color: 'white',
      borderColor: '#06b6d4',
    }
  },
  ctaSection: {
    background: 'linear-gradient(135deg, #0A4D68 0%, #088395 100%)',
    color: '#ffffff',
    padding: '80px 0',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    lineHeight: '1.2',
  },
  ctaText: {
    fontSize: '1.125rem',
    marginBottom: '40px',
    opacity: '0.9',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '1.6',
    color: '#f5f508',
  },
  ctaButtons: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  ctaButtonPrimary: {
    display: 'inline-block',
    padding: '15px 40px',
    backgroundColor: '#ffffff',
    color: '#0A4D68',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    }
  },
  ctaButtonSecondary: {
    display: 'inline-block',
    padding: '15px 40px',
    backgroundColor: 'transparent',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '16px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
    }
  },
}

// Featured Projects Styles
const featuredStyles = {
  section: {
    padding: '80px 0',
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '48px',
  },
  badge: {
    display: 'inline-block',
    padding: '8px 16px',
    backgroundColor: '#e0f2fe',
    color: '#0369a1',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '16px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#0A4D68',
    marginBottom: '16px',
    lineHeight: '1.2',
  },
  description: {
    fontSize: '1.125rem',
    color: '#64748b',
    maxWidth: '768px',
    margin: '0 auto',
    lineHeight: '1.75',
  },
  carouselWrapper: {
    position: 'relative',
    marginBottom: '40px',
  },
  carousel: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '24px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    backgroundColor: 'white',
  },
  slide: {
    minWidth: '100%',
    flexShrink: 0,
    width: '100%',
  },
  slideContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    minHeight: '500px',
  },
  imageSection: {
    position: 'relative',
    overflow: 'hidden',
    borderRight: '1px solid #f1f5f9',
    backgroundColor: '#f8fafc',
    minHeight: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    display: 'block',
    padding: '40px',
  },
  imagePlaceholder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #e0f2fe, #cffafe)',
  },
  placeholderContent: {
    textAlign: 'center',
    padding: '20px',
  },
  textSection: {
    padding: '48px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  featuredBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '6px 12px',
    backgroundColor: '#f0f9ff',
    color: '#0369a1',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '20px',
    width: 'fit-content',
  },
  badgeDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#0369a1',
    borderRadius: '50%',
    marginRight: '8px',
  },
  projectTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#0A4D68',
    marginBottom: '16px',
    lineHeight: '1.2',
  },
  projectDesc: {
    fontSize: '1.125rem',
    color: '#475569',
    marginBottom: '24px',
    lineHeight: '1.75',
  },
  impactBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #ecfeff, #e0f2fe)',
    borderLeft: '4px solid #06b6d4',
    padding: '16px',
    marginBottom: '24px',
    borderRadius: '8px',
  },
  impactText: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#0A4D68',
    margin: 0,
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '32px',
  },
  tag: {
    padding: '6px 12px',
    backgroundColor: '#f8fafc',
    color: '#475569',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500',
    border: '1px solid #e2e8f0',
  },
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#06b6d4',
    color: 'white',
    padding: '14px 28px',
    borderRadius: '8px',
    fontWeight: '600',
    textDecoration: 'none',
    width: 'fit-content',
    transition: 'all 0.3s ease',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#0891b2',
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 20px rgba(6, 182, 212, 0.3)',
    }
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    left: '16px',
    transform: 'translateY(-50%)',
    backgroundColor: 'white',
    color: '#0A4D68',
    border: 'none',
    padding: '12px',
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    '&:hover': {
      backgroundColor: '#f1f5f9',
      transform: 'translateY(-50%) scale(1.1)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    }
  },
  progressContainer: {
    marginTop: '20px',
  },
  progressBar: {
    height: '4px',
    backgroundColor: '#e5e7eb',
    borderRadius: '2px',
    overflow: 'hidden',
  },
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    marginTop: '24px',
  },
  dot: {
    width: '12px',
    height: '12px',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: 0,
  },
  viewAllContainer: {
    textAlign: 'center',
    marginTop: '40px',
  },
  viewAllLink: {
    display: 'inline-flex',
    alignItems: 'center',
    color: '#06b6d4',
    fontWeight: '600',
    fontSize: '1.125rem',
    textDecoration: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    border: '2px solid #e0f2fe',
    backgroundColor: '#f0f9ff',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#e0f2fe',
      borderColor: '#06b6d4',
      transform: 'translateY(-2px)',
    }
  },
}

// Add responsive styles
Object.assign(styles.serviceCard, {
  '@media (max-width: 1024px)': {
    padding: '20px',
  },
  '@media (max-width: 768px)': {
    padding: '15px',
  }
})

Object.assign(featuredStyles.slideContent, {
  '@media (max-width: 1024px)': {
    gridTemplateColumns: '1fr',
    minHeight: 'auto',
  }
})

Object.assign(featuredStyles.imageSection, {
  '@media (max-width: 1024px)': {
    minHeight: '300px',
    borderRight: 'none',
    borderBottom: '1px solid #f1f5f9',
  }
})

Object.assign(featuredStyles.image, {
  '@media (max-width: 768px)': {
    padding: '20px',
  }
})

Object.assign(featuredStyles.textSection, {
  '@media (max-width: 768px)': {
    padding: '24px',
  }
})

Object.assign(featuredStyles.projectTitle, {
  '@media (max-width: 768px)': {
    fontSize: '1.5rem',
  }
})

Object.assign(featuredStyles.projectDesc, {
  '@media (max-width: 768px)': {
    fontSize: '1rem',
  }
})

export default Home