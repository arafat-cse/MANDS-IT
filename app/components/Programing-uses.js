"use client";
import data from '../../data/content.json';

export default function ProgrammingUses() {
  return (
    <div className="container-fluid py-5" id="programmingUses">
      <div className="container">
        <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
          <h5 className="text-primary">{data.programmingUses.subtitle}</h5>
          <h1>{data.programmingUses.title}</h1>
        </div>

        {data.programmingUses.categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-5 wow fadeIn" data-wow-delay={`${0.1 + (catIndex * 0.2)}s`}>
            <h3 className="mb-4 text-secondary border-bottom pb-2" style={{ display: 'inline-block' }}>
              {category.name}
            </h3>
            <div className="row g-4 justify-content-center justify-content-lg-start">
              {category.items.map((item, index) => (
                <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
                  <div className="tech-card text-center p-3 bg-light rounded shadow-sm h-100 d-flex flex-column align-items-center justify-content-center"
                    style={{ transition: '0.3s', border: '1px solid transparent' }}>
                    <div className="tech-icon mb-2" style={{ fontSize: '2.5rem', color: item.color }}>
                      <i className={item.icon}></i>
                    </div>
                    <h6 className="mb-0 text-dark" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{item.name}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .tech-card:hover {
          transform: translateY(-5px);
          border-color: var(--bs-primary) !important;
          background: #fff !important;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
        .tech-icon i {
          transition: 0.3s;
        }
        .tech-card:hover .tech-icon i {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
