import { useState } from 'react';
import '../styles/App.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3 style={styles.formTitle}>Send us a Message</h3>
      
      <div style={styles.formGroup}>
        <label htmlFor="name" style={styles.label}>Name</label>
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
        <label htmlFor="email" style={styles.label}>Email</label>
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
        <label htmlFor="message" style={styles.label}>Message</label>
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

      <button type="submit" className="btn btn-primary" style={styles.submitButton}>
        Send Message
      </button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: 'var(--white)',
    padding: '3rem',
    borderRadius: '12px',
    boxShadow: 'var(--shadow)',
  },
  formTitle: {
    fontSize: '1.75rem',
    fontWeight: '700',
    marginBottom: '2rem',
    color: 'var(--dark-color)',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '500',
    color: 'var(--text-color)',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'var(--transition)',
    ':focus': {
      outline: 'none',
      borderColor: 'var(--primary-color)',
      boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)',
    },
  },
  textarea: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    transition: 'var(--transition)',
    resize: 'vertical',
    ':focus': {
      outline: 'none',
      borderColor: 'var(--primary-color)',
      boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)',
    },
  },
  submitButton: {
    width: '100%',
    padding: '16px',
    fontSize: '1rem',
  },
};

export default ContactForm;