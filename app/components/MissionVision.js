'use client';

import React from 'react';
import data from '../../data/content.json';

const MissionVision = () => {
  const founder = data.team.members.find(member => member.designation.includes('Founder'));

  return (
    <div className="container-fluid py-5 bg-white" id="mission-vision">
      <div className="container py-5">
        <div className="row g-5">
          {/* Mission & Vision Content */}
          <div className="col-lg-7 wow fadeIn" data-wow-delay=".3s">
            <h5 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Mission & Vision</h5>
            <h1 className="mb-4">Powering Your Business With Next-Gen IT Solutions</h1>

            <div className="mb-4">
              <p className="lead fs-5 text-dark" style={{ lineHeight: '1.8' }}>{data.about.desc1}</p>
              <p className="text-muted small-text">{data.about.desc2}</p>
              <p className="text-muted small-text">{data.about.desc3}</p>
            </div>

            <div className="mt-5">
              <h5 className="text-secondary mb-3">Core Values</h5>
              <div className="row g-4">
                <div className="col-sm-6 text-dark">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-box me-3 bg-primary-light">
                      <i className="fas fa-rocket text-primary"></i>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Innovation</h6>
                      <span className="text-muted extra-small">Cutting-edge tech solutions.</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-box me-3 bg-primary-light">
                      <i className="fas fa-heart text-primary"></i>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Loyalty</h6>
                      <span className="text-muted extra-small">We grow when you grow.</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 text-dark">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-box me-3 bg-primary-light">
                      <i className="fas fa-gem text-primary"></i>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Excellence</h6>
                      <span className="text-muted extra-small">High-quality results.</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-box me-3 bg-primary-light">
                      <i className="fas fa-shield-alt text-primary"></i>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Transparency</h6>
                      <span className="text-muted extra-small">Honest partnerships.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 p-4 bg-primary text-white rounded-3 shadow vision-box">
              <h5 className="text-white mb-2 fs-5">Our Vision</h5>
              <p className="mb-0 italic small-text opacity-90">"To become a global leader in providing innovative IT solutions that empower businesses to thrive in the digital era through excellence, creativity, and trust."</p>
            </div>
          </div>

          {/* Founder Section */}
          <div className="col-lg-5 wow fadeIn" data-wow-delay=".5s">
            <div className="bg-light p-5 rounded-4 h-100 shadow-sm text-center">
              <h4 className="text-primary mb-4">Our Leadership</h4>
              <div className="founder-img-container mb-4 mx-auto">
                <div className="image-stack">
                  <div className="image-stack-item image-stack-item--bottom">
                    <div className="border-circle"></div>
                  </div>
                  <div className="image-stack-item image-stack-item--top">
                    <img
                      src={founder?.img || '/img/team/amirul.png'}
                      alt={founder?.name}
                      className="img-fluid rounded-circle shadow-lg border border-4 border-white"
                      style={{ width: '220px', height: '220px', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
              <h5 className="fw-bold mb-1 text-dark fs-4">{founder?.name}</h5>
              <p className="badge bg-primary text-white px-3 py-2 mb-4">Founder & CEO, Mands IT</p>

              <div className="founder-quote p-4 bg-white rounded-3 shadow-sm position-relative mt-2">
                <i className="fas fa-quote-left quote-icon"></i>
                <p className="mb-0 text-dark small-text italic" style={{ lineHeight: '1.6' }}>
                  "Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important. At MandsIT, we are your digital teachers guiding you to success."
                </p>
                <div className="mt-3 text-end fw-bold text-primary" style={{ fontSize: '0.9rem' }}>— {founder?.name}</div>
              </div>

              <div className="mt-4 pt-4">
                <h6 className="mb-3 text-dark fw-bold text-uppercase" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>Stay Connected</h6>
                <div className="d-flex justify-content-center gap-3">
                  <a href={founder?.social.facebook || "#"} className="social-btn"><i className="fab fa-facebook-f"></i></a>
                  <a href={founder?.social.linkedin || "#"} className="social-btn"><i className="fab fa-linkedin-in"></i></a>
                  <a href={founder?.social.twitter || "#"} className="social-btn"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-primary-light {
          background-color: rgba(var(--bs-primary-rgb), 0.1);
        }
        .icon-box {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
        }
        .small-text {
          font-size: 1rem;
        }
        .extra-small {
          font-size: 0.85rem;
        }
        .italic {
          font-style: italic;
        }
        .vision-box {
          background: linear-gradient(135deg, var(--bs-primary) 0%, #2c3e50 100%);
        }
        .quote-icon {
          position: absolute;
          top: -15px;
          left: 15px;
          font-size: 2.5rem;
          color: var(--bs-primary);
          opacity: 0.2;
        }
        .social-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: 1px solid #dee2e6;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6c757d;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .social-btn:hover {
          background-color: var(--bs-primary);
          color: #fff;
          border-color: var(--bs-primary);
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(var(--bs-primary-rgb), 0.3);
        }
        .image-stack {
          display: grid;
          position: relative;
          grid-template-columns: repeat(12, 1fr);
          align-items: center;
          width: 250px;
          margin: 0 auto;
        }
        .image-stack-item {
          grid-row: 1;
        }
        .image-stack-item--top {
          grid-column: 1 / span 12;
          z-index: 1;
        }
        .image-stack-item--bottom {
          grid-column: 2 / span 11;
          margin-top: 20px;
          margin-left: 20px;
        }
        .border-circle {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          border: 3px dashed var(--bs-primary);
          animation: rotate 15s linear infinite;
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 991px) {
           .image-stack {
              width: 220px;
           }
           .border-circle {
              width: 190px;
              height: 190px;
           }
           .image-stack-item--top img {
              width: 190px !important;
              height: 190px !important;
           }
        }
      `}</style>
    </div>
  );
};

export default MissionVision;
