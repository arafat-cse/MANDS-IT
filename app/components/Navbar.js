"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import data from '../../data/content.json';

export default function Navbar() {
  const pathname = usePathname();

  const closeMenu = () => {
    if (typeof window !== 'undefined') {
      const navbarCollapse = document.getElementById('navbarCollapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bootstrap = window.bootstrap;
        if (bootstrap) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
          });
          bsCollapse.hide();
        }
      }
    }
  };

  return (
    <div className="container-fluid bg-primary sticky-top">
      <div className="container">
        <nav className="navbar navbar-dark navbar-expand-lg py-0">
          <Link href="/" className="navbar-brand d-flex align-items-center" onClick={closeMenu}>
            <img src={data.navbar.logo} alt="Logo" style={{ maxHeight: '50px', marginRight: '10px' }} />
            {/* <h1 className="text-white fw-bold d-block m-0">Mands<span className="text-secondary">It</span> </h1> */}
          </Link>
          <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
            <div className="navbar-nav ms-auto mx-xl-auto p-0">
              {data.navbar.links.map((link, index) => {
                const isActive = pathname === link.url;
                return (
                  <Link
                    key={index}
                    href={link.url}
                    className={`nav-item nav-link ${isActive ? 'active text-secondary' : ''}`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="d-none d-xl-flex flex-shirink-0">
            <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
              <a href="" className="position-relative animated tada infinite">
                <i className="fa fa-phone-alt text-white fa-2x"></i>
                <div className="position-absolute" style={{ top: '-7px', left: '20px' }}>
                  <span><i className="fa fa-comment-dots text-secondary"></i></span>
                </div>
              </a>
            </div>
            <div className="d-flex flex-column pe-4 border-end">
              <span className="text-white-50">Have any questions?</span>
              <span className="text-secondary">Call: {data.navbar.phone}</span>
            </div>
            <div className="d-flex align-items-center justify-content-center ms-4 ">
              <a href="#"><i className="bi bi-search text-white fa-2x"></i> </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
