"use client";
import { useState } from 'react';
import data from '../../data/content.json';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 6;
  const projects = data.projects.items;
  const visibleProjects = showAll ? projects : projects.slice(0, initialCount);

  return (
    <div className="container-fluid py-5 my-5" id="projects">
      <div className="container pt-5">
        <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
          <h5 className="text-primary">{data.projects.subtitle}</h5>
          <h1>{data.projects.title}</h1>
        </div>
        <div className="row g-4">
          {visibleProjects.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay={`${0.1 * (index % 3)}s`}>
              <div className="project-item rounded overflow-hidden shadow-sm bg-white">
                <div className="project-img-container position-relative overflow-hidden">
                  <img src={item.img} className="img-fluid w-100" alt={item.title} style={{ transition: '0.5s' }} />
                  <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center"
                    style={{ background: 'rgba(38, 212, 140, 0.9)', opacity: 0, transition: '0.5s', zIndex: 1 }}>
                    <a href="https://bndoc.vercel.app/" target="_blank" rel="noopener noreferrer"
                      className="btn btn-light btn-lg-square rounded-circle mb-3 scale-in">
                      <i className="fa fa-link text-primary"></i>
                    </a>
                    <h4 className="text-white mb-0">{item.title}</h4>
                    <span className="text-white-50">{item.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > initialCount && (
          <div className="text-center mt-5 wow fadeInUp" data-wow-delay="0.1s">
            <button
              className="btn btn-primary rounded-pill px-5 py-3"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'See More'}
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .project-item:hover .project-overlay {
          opacity: 1 !important;
        }
        .project-item:hover img {
          transform: scale(1.1);
        }
        .scale-in {
          transform: scale(0);
          transition: 0.3s;
        }
        .project-item:hover .scale-in {
          transform: scale(1);
        }
      `}</style>
    </div>
  );
}
