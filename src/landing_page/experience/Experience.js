import React from 'react';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Machine Learning Intern",
      company: "Inten-Veda",
      period: "Jan 2024 - Feb 2024",
      description: [
        "Developed and deployed ML model for predictive analytics",
        "Developed customer suggestion system using Scikit-learn",
        "Implemented Unsupervised learning with clustering"
      ],
      technologies: ["Python", "Matplotlib", "Pandas", "Scikit-learn", "Machine Learning"],
      type: "work"
    },
    {
      id: 2,
      title: "Bachelor of Technology in AI-DS",
      company: "National Institute of Technology Delhi",
      period: "2023 - Present",
      description: [
        "Specialized in Artificial Intelligence and Machine Learning",
        "Current CGPA: 7.50/10.0 ",
        "Coursework: Data Structures & Algorithms, DBMS, python, machine learning, operating system",
        "Currently working on: Skin Disease Classification using CNN"
      ],
      technologies: ["Python", "C", "SQL", "Machine Learning", "Operating system", "DBMS", "DSA"],
      type: "education"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Certificate of internship - INTERNSVEDA",
      issuer: "InternsVeda Edutech Private Limited",
      date: "Feb-2025",
      link: "https://drive.google.com/file/d/13UOsvEIFsQb_OGNZRMZmHcipbkDzFKJg/view?usp=drive_link"
    },
    {
      id: 2,
      name: "STC On Signal Processing, Communication and VLSI Design",
      issuer: "Department of ECE, NIT Delhi",
      date: "April-2024",
      link: "https://drive.google.com/file/d/12XYYyzUaeEERwELeJUx_8BHH15y4x1qf/view?usp=sharing"
    },
    {
      id: 3,
      name: "Certificate of Training - INTERNSVEDA",
      issuer: "InternsVeda Edutech Private Limited",
      date: "Jan-2025",
      link: "https://drive.google.com/file/d/1enyhebES_2IUGFwS1YDZmhm7GhpwfHyE/view?usp=sharing"
    },
    {
      id: 4,
      name: "Certificate of Participatiion - Adobe Hackathon",
      issuer: "Unstop",
      date: "Jan-2025",
      link: "https://drive.google.com/file/d/1JagiNVAXwa3Zyb1lv0h3qOCKY0v9Ky4I/view?usp=drive_link"
    }
  ];

  return (
    <div className="container-fluid bg-dark text-white py-5" style={{minHeight: '100vh', fontFamily: 'Segoe UI, system-ui' }}>
      <div className="container">
        {/* Header Section */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-6 fw-bold mb-3" style={{ 
              fontFamily: 'Inter, sans-serif',
            }}>
              <span className="text-white">My</span>{' '}
              <span className="text-primary">
                Experience
              </span>
            </h1>
            <p className="lead text-light opacity-75" style={{ fontSize: '1.15rem' }}>
              My professional journey, education, and certifications
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="row">
          <div className="col-12 col-lg-8 mx-auto">
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className="timeline-item mb-5"
                  style={{
                    animation: `slideInLeft 0.8s ease ${index * 0.2}s both`
                  }}
                >
                  <div className="card border-0 experience-card" style={{
                    background: 'linear-gradient(135deg, #2d3436 0%, #2a2f2a 50%, #1a1f1a 100%)',
                    border: '1px solid rgba(13, 110, 253, 0.3)',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.4s ease'
                  }}>
                    {/* Card Header */}
                    <div className="card-header border-0 py-4" style={{
                      background: exp.type === 'work' 
                        ? 'rgba(13, 110, 253, 0.1)'
                        : 'rgba(25, 135, 84, 0.1)',
                      borderBottom: '1px solid rgba(13, 110, 253, 0.3)'
                    }}>
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <h4 className="text-white fw-bold mb-1">
                            {exp.title}
                          </h4>
                          <h5 className="text-light opacity-85 mb-1">{exp.company}</h5>
                          <span className="badge" style={{
                            background: exp.type === 'work' 
                              ? '#0d6efd'
                              : '#198754',
                            border: 'none',
                            borderRadius: '20px',
                            padding: '0.5rem 1rem',
                            fontSize: '0.8rem'
                          }}>
                            {exp.type === 'work' ? 'Work Experience' : 'Education'}
                          </span>
                        </div>
                        <span className="text-light opacity-75 fw-semibold" style={{ fontSize: '0.9rem' }}>
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="card-body py-4">
                      {/* Description Points */}
                      <ul className="list-unstyled mb-4">
                        {exp.description.map((point, pointIndex) => (
                          <li key={pointIndex} className="mb-2 d-flex align-items-start">
                            <i className="fas fa-chevron-right text-primary mt-1 me-3" style={{ fontSize: '0.8rem' }}></i>
                            <span className="text-light opacity-85" style={{ lineHeight: '1.6' }}>
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="mt-3">
                        <h6 className="text-light opacity-75 mb-2 fw-semibold">Technologies:</h6>
                        <div>
                          {exp.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="badge me-2 mb-2"
                              style={{ 
                                fontSize: '0.8rem',
                                padding: '0.4rem 0.8rem',
                                background: 'rgba(13, 110, 253, 0.1)',
                                border: '1px solid rgba(13, 110, 253, 0.4)',
                                color: '#6ea8fe',
                                borderRadius: '15px'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="text-center mb-4">
              <h2 className="text-white mb-3" style={{ 
                fontFamily: 'Inter, sans-serif',
                fontSize: '2.1rem'
              }}>
                Certifications
              </h2>
            </div>
            <div className="row g-4">
              {certifications.map((cert, index) => (
                <div key={cert.id} className="col-12 col-md-6 col-lg-3">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <div className="card border-0 h-100 certification-card" style={{
                      background: 'linear-gradient(135deg, #2d3436 0%, #2a2f2a 100%)',
                      border: '1px solid rgba(13, 110, 253, 0.3)',
                      borderRadius: '15px',
                      animation: `fadeInUp 0.6s ease ${index * 0.15}s both`,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}>
                      <div className="card-body text-center p-4">
                        <div className="mb-3" style={{
                          width: '60px',
                          height: '60px',
                          background: '#0d6efd',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto',
                          transition: 'all 0.3s ease'
                        }}>
                          <i className="fas fa-award text-white"></i>
                        </div>
                        <h5 className="text-white fw-bold mb-2">{cert.name}</h5>
                        <p className="text-light opacity-75 mb-2">{cert.issuer}</p>
                        <span className="badge" style={{
                          background: 'rgba(13, 110, 253, 0.2)',
                          border: '1px solid rgba(13, 110, 253, 0.5)',
                          color: '#6ea8fe',
                          borderRadius: '15px',
                          padding: '0.4rem 0.8rem'
                        }}>
                          {cert.date}
                        </span>
                        <div className="mt-3">
                          <small className="text-primary">
                            View Certificate <i className="fas fa-external-link-alt ms-1"></i>
                          </small>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .experience-card:hover {
          transform: translateY(-5px) !important;
          box-shadow: 
            0 15px 40px rgba(13, 110, 253, 0.2),
            0 0 0 1px rgba(13, 110, 253, 0.4) !important;
        }
        
        // .certification-card:hover {
        //   transform: translateY(-5px) scale(1.02) !important;
        //   box-shadow: 0 10px 30px rgba(13, 110, 253, 0.3) !important;
        //   border-color: rgba(13, 110, 253, 0.6) !important;
        // }
        
        // .certification-card:hover div[style*="background: #0d6efd"] {
        //   transform: scale(1.1);
        //   background: #0b5ed7 !important;
        // }
        
        .badge {
          transition: all 0.3s ease;
        }
        
        .badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(13, 110, 253, 0.3);
        }
      `}</style>
    </div>
  );
}

export default Experience;