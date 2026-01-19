import data from '../../data/content.json';

export default function Projects() {
  return (
    <div className="container-fluid py-5 my-5" id="projects">
      <div className="container pt-5">
        <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
          <h5 className="text-primary">{data.projects.subtitle}</h5>
          <h1>{data.projects.title}</h1>
        </div>
        <div className="row g-5">
          {data.projects.items.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay={`${0.3 + (index * 0.2)}s`}>
              <div className="project-item">
                <div className="project-img-container">
                  <img src={item.img} className="img-fluid" alt={item.title} />
                  <div className="project-content-overlay">
                    <h4>{item.title}</h4>
                    <span className="text-white mb-3">{item.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
