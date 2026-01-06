import '../App.css'

const About = () => {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section about-hero">
        <div className="container">
          <h1 className="hero-title">About Our Company</h1>
          <p className="hero-subtitle">
            We are dedicated to delivering innovative solutions that drive business growth.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2020, our company has been at the forefront of digital innovation. 
                We started with a simple mission: to help businesses leverage technology to achieve their goals.
              </p>
              <p>
                Today, we serve clients across various industries, providing tailored solutions 
                that deliver real results. Our team of experts is passionate about technology 
                and committed to excellence.
              </p>
            </div>
            
            <div className="image-placeholder">
              <div className="image-box">
                <p>Company Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="text-center">Our Values</h2>
          <p className="text-center section-subtitle">
            These principles guide everything we do
          </p>
          
          <div className="values-grid">
            <div className="card">
              <h3>Innovation</h3>
              <p>
                We constantly explore new technologies and approaches to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="card">
              <h3>Integrity</h3>
              <p>
                We believe in honesty, transparency, and doing what's right for our clients.
              </p>
            </div>
            
            <div className="card">
              <h3>Excellence</h3>
              <p>
                Synapse Spatial Solutions (S3Geo) is a cutting-edge geospatial engineering firm specializing in GIS, remote sensing, and climate analytics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About