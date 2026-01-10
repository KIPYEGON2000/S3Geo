import { useState } from 'react'
import '../styles/App.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setError('')

    try {
      // REPLACE THIS WITH YOUR FORMSPREE FORM ID
      const response = await fetch('https://formspree.io/f/xykkgnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Contact from ${formData.name}`,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(''), 5000)
      } else {
        setStatus('error')
        setError('Failed to send message. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setError('Network error. Please check your connection.')
    }
  }

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div className="container" style={styles.container}>
          <h1 style={styles.title}>Contact Us</h1>
          <p style={styles.subtitle}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section style={styles.contentSection}>
        <div className="container" style={styles.container}>
          <div style={styles.contentGrid}>
            {/* Contact Form */}
            <div style={styles.formContainer}>
              <h2 style={styles.formTitle}>Send us a Message</h2>
              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                  <label htmlFor="name" style={styles.label}>Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={styles.input}
                    placeholder="Your name"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="email" style={styles.label}>Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={styles.input}
                    placeholder="your@email.com"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="message" style={styles.label}>Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={styles.textarea}
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div style={styles.successMessage}>
                    ✅ Thank you! Your message has been sent. We'll get back to you soon.
                  </div>
                )}
                
                {status === 'error' && (
                  <div style={styles.errorMessage}>
                    ❌ {error || 'Failed to send. Please try again or email us directly.'}
                  </div>
                )}

                <button 
                  type="submit" 
                  style={{
                    ...styles.submitButton,
                    ...(status === 'sending' && { opacity: 0.7, cursor: 'not-allowed' })
                  }}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div style={styles.infoContainer}>
              <h2 style={styles.infoTitle}>Get in Touch</h2>
              
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>📍</div>
                <div>
                  <h3 style={styles.infoSubtitle}>Address</h3>
                  <p style={styles.infoText}>Online </p>
                  <p style={styles.infoText}>Nairobi, Kenya</p>
                </div>
              </div>

              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>📞</div>
                <div>
                  <h3 style={styles.infoSubtitle}>Phone</h3>
                  <p style={styles.infoText}>(+254) 708-808-737</p>
                </div>
              </div>

              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>✉️</div>
                <div>
                  <h3 style={styles.infoSubtitle}>Email</h3>
                  <p style={styles.infoText}>kipyegontooamos@gmail.com</p>
                </div>
              </div>
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
  },
  formContainer: {
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  formTitle: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#1f2937',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '8px',
    color: '#374151',
  },
  input: {
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'all 0.3s ease',
  },
  textarea: {
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '16px',
    resize: 'vertical',
    minHeight: '120px',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease',
  },
  submitButton: {
    padding: '15px 30px',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  successMessage: {
    padding: '12px 16px',
    backgroundColor: '#d1fae5',
    color: '#065f46',
    borderRadius: '8px',
    marginBottom: '15px',
    fontSize: '14px',
  },
  errorMessage: {
    padding: '12px 16px',
    backgroundColor: '#fee2e2',
    color: '#991b1b',
    borderRadius: '8px',
    marginBottom: '15px',
    fontSize: '14px',
  },
  infoContainer: {
    padding: '40px',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
  },
  infoTitle: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#1f2937',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    marginBottom: '30px',
  },
  infoIcon: {
    fontSize: '24px',
    width: '50px',
    height: '50px',
    backgroundColor: '#2563eb',
    color: '#fff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoSubtitle: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#1f2937',
  },
  infoText: {
    fontSize: '14px',
    color: '#6b7280',
    lineHeight: '1.5',
  },
}

// ADD THESE MEDIA QUERIES TO YOUR STYLES
// You can add this after your existing styles object
Object.assign(styles.contentGrid, {
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
  }
})

Object.assign(styles.input, {
  ':focus': {
    outline: 'none',
    borderColor: '#2563eb',
    boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)',
  }
})

Object.assign(styles.textarea, {
  ':focus': {
    outline: 'none',
    borderColor: '#2563eb',
    boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)',
  }
})

Object.assign(styles.submitButton, {
  ':hover': {
    backgroundColor: '#1d4ed8',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
  }
})

// Make sure this export statement is at the very end
export default Contact