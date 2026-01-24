import data from '../../data/content.json';

export default function Topbar() {
  return (
    <div className="container-fluid bg-dark py-2 d-none d-md-flex">
      <div className="container">
        <div className="d-flex justify-content-between topbar">
          <div className="top-info">
            <small className="me-3 text-white-50"><a href="#"><i className="fas fa-map-marker-alt me-2 text-secondary"></i></a>{data.topbar.address}</small>
            <small className="me-3 text-white-50"><a href="#"><i className="fas fa-envelope me-2 text-secondary"></i></a>{data.topbar.email}</small>
          </div>
          <div id="note" className="text-secondary d-none d-xl-flex"><small>{data.topbar.note}</small></div>
          <div className="top-link">    
            {data.topbar.social.map((social, index) => (
              <a
                key={index}
                href={social.url || "#"}
                className={`bg-light nav-fill btn btn-sm-square rounded-circle ${index === data.topbar.social.length - 1 ? 'me-0' : ''}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`${social.icon} text-primary`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
