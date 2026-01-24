import data from '../../data/content.json';

export default function Footer() {
  return (
    <div className="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
      <div className="container pt-5 pb-4">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <a href="/">
              <h1 className="text-white fw-bold d-block">Mands<span className="text-secondary">It</span> </h1>
            </a>
            <p className="mt-4 text-light">{data.footer.desc}</p>
            <div className="d-flex hightech-link">
              {data.topbar.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url || "#"}
                  className={`btn-light nav-fill btn btn-square rounded-circle ${index === data.topbar.social.length - 1 ? 'me-0' : 'me-2'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`${social.icon} text-primary`}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="#" className="h3 text-secondary">Short Link</a>
            <div className="mt-4 d-flex flex-column short-link">
              {data.footer.links.map((link, index) => (
                <a key={index} href={link.url} className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>{link.name}</a>
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="#" className="h3 text-secondary">Help Link</a>
            <div className="mt-4 d-flex flex-column help-link">
              <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Terms Of use</a>
              <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Privacy Policy</a>
              <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Helps</a>
              <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>FQAs</a>
              <a href="#contact" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Contact</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="#contact" className="h3 text-secondary">Contact Us</a>
            <div className="text-white mt-4 d-flex flex-column contact-link">
              <a href="#" className="pb-3 text-light border-bottom border-primary"><i className="fas fa-map-marker-alt text-secondary me-2"></i> {data.footer.contact.address}</a>
              <a href="#" className="py-3 text-light border-bottom border-primary"><i className="fas fa-phone-alt text-secondary me-2"></i> {data.footer.contact.phone}</a>
              <a href="#" className="py-3 text-light border-bottom border-primary"><i className="fas fa-envelope text-secondary me-2"></i> {data.footer.contact.email}</a>
            </div>
          </div>
        </div>
        <hr className="text-light mt-5 mb-4" />
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <span className="text-light"><a href="#" className="text-secondary"><i className="fas fa-copyright text-secondary me-2"></i>{new Date().getFullYear()} </a>, All right reserved.</span>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <span className="text-light">Designed By <a href="https://mandsit.bd" className="text-secondary">Mands It</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}
