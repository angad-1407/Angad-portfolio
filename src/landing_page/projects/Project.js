import React from 'react';
import Contact from '../contact/Contact';
import { Link } from 'react-router-dom';


function Projects() {
  const projects = [
    {
      id: 1,
      title: "AgriNova - Agriculture + Innovation",
      description: "A smart farming web application to assist farmers and agri-enthusiasts by integrating ML, DL and data-driven solutions.",
      technologies: ["Python", "Machine Learning", "Streamlit", "TensorFlow", "Netlify"],
      liveLink: "https://agrinova-ecspappfaiebprgcbjeynmi.streamlit.app/",
      image: `${process.env.PUBLIC_URL}/media/images/agrinova.png`
    },
    {
      id: 2,
      title: "PixelPlayground",
      description: "A collection of 3 front-end projects: Tic Tac Toe, Book List App, and Spotify Clone.",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify", "GitHub"],
      liveLink: "https://angad-1407.github.io/PixelPlayground/",
      image: `${process.env.PUBLIC_URL}/media/images/pixel-playground.png`
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern responsive portfolio with smooth animations, dark theme, and optimized performance.",
      technologies: ["React", "Bootstrap", "HTML", "JavaScript", "GitHub"],
      liveLink: "https://angad-1407.github.io/Angad-portfolio/",
      image: `${process.env.PUBLIC_URL}/media/images/portfolio-1.png`
    },
    {
      id: 4,
      title: "Skin Disease Classification",
      description: "Built initial dataset and used pretrained CNN-based model architecture. Currently working on improving accuracy and real-time predictions.",
      technologies: ["Python", "Deep Learning", "TensorFlow", "Computer Vision", "CNN"],
      liveLink: "#projects",
      image: `${process.env.PUBLIC_URL}/media/images/skin disease classification.png`
    }
  ];

  return (
    <div className="container-fluid bg-dark text-white py-5" style={{minHeight: '100vh', fontFamily: 'Segoe UI, system-ui' }}>
      <div className="container">
        {/* Header Section */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold mb-3" style={{ 
              fontFamily: 'Inter, sans-serif',
            }}>
              <span className="text-white">My</span>{' '}
              <span style={{
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 3s ease infinite'
              }}>
                Projects
              </span>
            </h1>
            <p className="lead text-light opacity-75" style={{ fontSize: '1.25rem' }}>
              Here are some of my recent works. Each project represents unique challenges and learning experiences.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row g-5"> {/* Increased gap from g-4 to g-5 */}
          {projects.map((project, index) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-6 mb-4"> {/* Added mb-4 for vertical spacing */}
              <div className="card h-100 border-0 project-card" style={{
                background: 'linear-gradient(135deg, #2d3436 0%, #2a2f2a 50%, #1a1f1a 100%)',
                border: '1px solid rgba(102, 126, 234, 0.3)',
                transform: 'translateY(0) scale(1)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                animation: `slideInUp 0.8s ease-out ${index * 0.2}s both`,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img 
                    src={project.image} 
                    className="card-img-top" 
                    alt={project.title}
                    style={{ 
                      height: '220px', 
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      width: '100%'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}></div>
                </div>
                
                <div className="card-body d-flex flex-column p-4">
                  {/* Project Title */}
                  <h4 className="card-title text-white fw-bold mb-3" style={{ 
                    fontSize: '1.4rem', 
                    minHeight: '3.5rem',
                    background: 'linear-gradient(45deg, #fff, #a8c0ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {project.title}
                  </h4>
                  
                  {/* Project Description */}
                  <p className="card-text text-light opacity-85 flex-grow-1 mb-3" style={{ 
                    fontSize: '1rem', 
                    lineHeight: '1.6' 
                  }}>
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="badge me-2 mb-2"
                        style={{ 
                          fontSize: '0.85rem',
                          padding: '0.5rem 0.75rem',
                          background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))',
                          border: '1px solid rgba(102, 126, 234, 0.4)',
                          color: '#a8c0ff',
                          borderRadius: '20px'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Live Demo Button */}
                  <div className="mt-auto">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn w-100 py-2"
                      style={{ 
                        fontSize: '1rem', 
                        fontWeight: '600',
                        background: 'linear-gradient(45deg, #667eea, #764ba2)',
                        border: 'none',
                        borderRadius: '10px',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      <i className="fas fa-external-link-alt me-2"></i>
                      View Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS for Enhanced Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
          }
          50% {
            opacity: 0.5;
            transform: translateY(-10px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .project-card:hover {
          transform: translateY(-15px) scale(1.03) !important;
          box-shadow: 
            0 25px 50px rgba(102, 126, 234, 0.2),
            0 0 0 1px rgba(102, 126, 234, 0.3) !important;
          border-color: rgba(102, 126, 234, 0.6) !important;
        }
        
        .project-card:hover .card-img-top {
          transform: scale(1.1);
        }
        
        .project-card:hover img + div {
          opacity: 1;
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }
        
        .badge {
          transition: all 0.3s ease;
        }
        
        .badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }
      `}</style>
    </div>
  );
}

export default Projects;