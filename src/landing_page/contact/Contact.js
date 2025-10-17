import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container-fluid bg-dark text-white d-flex align-items-center" style={{minHeight: '100vh', fontFamily: 'Segoe UI, system-ui' }}>
      <div className="container py-5">
        {/* Header Section */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="text-white">Contact</span>{' '}
              <span className="text-primary">Me</span>
            </h1>
            <p className="lead text-light opacity-75 fs-5">
              Let's discuss your project and bring your ideas to life
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="row g-5">
              {/* Contact Form */}
              <div className="col-12 col-md-7">
                <div className="card border-0" style={{
                  background: 'linear-gradient(135deg, #2d3436 0%, #2a2f2a 100%)',
                  border: '1px solid rgba(13, 110, 253, 0.3)',
                  borderRadius: '15px'
                }}>
                  <div className="card-body p-4 p-md-5">
                    <h3 className="text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Send Message
                    </h3>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control custom-input"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Name"
                          />
                        </div>
                        
                        <div className="col-12">
                          <input
                            type="email"
                            className="form-control custom-input"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Your Email"
                          />
                        </div>
                        
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control custom-input"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder="Subject"
                          />
                        </div>
                        
                        <div className="col-12">
                          <textarea
                            className="form-control custom-input"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Your Message..."
                          ></textarea>
                        </div>
                        
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn w-100 py-3"
                            style={{
                              background: '#0d6efd',
                              border: 'none',
                              borderRadius: '8px',
                              color: 'white',
                              fontSize: '1.1rem',
                              fontWeight: '600'
                            }}
                          >
                            <i className="fas fa-paper-plane me-2"></i>
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Contact Info - Simple */}
              <div className="col-12 col-md-5">
                <div className="text-white">
                  {/* Contact Info - Simple Text */}
                  <div className="mb-5">
                    <div className="mb-4">
                      <i className="fas fa-envelope text-primary me-3 fs-5"></i>
                      <span className="fs-5">ahirangad66@gmail.com</span>
                    </div>
                    <div className="mb-4">
                      <i className="fas fa-phone text-primary me-3 fs-5"></i>
                      <span className="fs-5">+91-7627044818</span>
                    </div>
                    <div>
                      <i className="fas fa-map-marker-alt text-primary me-3 fs-5"></i>
                      <span className="fs-5">Bhilwara, India</span>
                    </div>
                  </div>

                  {/* Social Links - Simple */}
                  <div>
                    <div className="d-flex gap-3">
                      <a href="https://github.com/angad-1407" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/angad-aheer-895630317" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="https://x.com/Angad_Yadav3" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://www.instagram.com/angad_yadav.125/" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for placeholder styling */}
      <style jsx>{`
        .custom-input {
          background: #1a1f1a !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          color: white !important;
          border-radius: 8px !important;
          padding: 12px !important;
        }
        
        .custom-input::placeholder {
          color: rgba(255, 255, 255, 0.6) !important;
          opacity: 1 !important;
        }
        
        .custom-input:-ms-input-placeholder {
          color: rgba(255, 255, 255, 0.6) !important;
        }
        
        .custom-input::-ms-input-placeholder {
          color: rgba(255, 255, 255, 0.6) !important;
        }
        
        .custom-input:focus {
          background: #1a1f1a !important;
          border-color: #0d6efd !important;
          color: white !important;
          box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25) !important;
        }
        
        .btn:hover {
          background: #0b5ed7 !important;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}

export default Contact;