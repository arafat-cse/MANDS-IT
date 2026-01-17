import data from '../data/content.json';
import Team from './components/Team';
import Projects from './components/Projects';
import Clients from './components/Clients';

export default function Home() {
  return (
    <>
      {/* Carousel Start */}
      <div className="container-fluid px-0">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000" data-bs-pause="false">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            {data.carousel.map((item, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={item.img} className="img-fluid" alt="Slide" />
                <div className="carousel-caption">
                  <div className="container carousel-content">
                    <h6 className="text-secondary h4 animated fadeInUp">{item.subtitle}</h6>
                    <h1 className="text-white display-1 mb-4 animated fadeInRight">{item.title}</h1>
                    <p className="mb-4 text-white fs-5 animated fadeInDown">{item.desc}</p>
                    <a href="" className="me-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">Read More</button></a>
                    <a href="#contact" className="ms-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}

      {/* Fact Start */}
      <div className="container-fluid bg-secondary py-5">
        <div className="container">
          <div className="row">
            {data.facts.map((fact, index) => (
              <div key={index} className="col-lg-3 wow fadeIn" data-wow-delay={`${0.1 + (index * 0.2)}s`}>
                <div className="d-flex counter">
                  <h1 className="me-3 text-primary counter-value">{fact.count}</h1>
                  <h5 className="text-white mt-1">{fact.text}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Fact End */}

      {/* About Start */}
      <div className="container-fluid py-5 my-5" id="about">
        <div className="container pt-5">
          <div className="row g-5">
            <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
              <div className="h-100 position-relative">
                <img src={data.about.img1} className="img-fluid w-75 rounded" alt="" style={{ marginBottom: '25%' }} />
                <div className="position-absolute w-75" style={{ top: '25%', left: '25%' }}>
                  <img src={data.about.img2} className="img-fluid w-100 rounded" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
              <h5 className="text-primary">{data.about.subtitle}</h5>
              <h1 className="mb-4">{data.about.title}</h1>
              <p>{data.about.desc1}</p>
              <p className="mb-4">{data.about.desc2}</p>
              <a href="" className="btn btn-secondary rounded-pill px-5 py-3 text-white">More Details</a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Services Start */}
      <div className="container-fluid services py-5 mb-5" id="services">
        <div className="container">
          <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
            <h5 className="text-primary">{data.services.subtitle}</h5>
            <h1>{data.services.title}</h1>
          </div>
          <div className="row g-5 services-inner">
            {data.services.items.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay={`${0.3 + (index % 3) * 0.2}s`}>
                <div className="services-item bg-light">
                  <div className="p-4 text-center services-content">
                    <div className="services-content-icon">
                      <i className={`${item.icon} fa-7x mb-4 text-primary`}></i>
                      <h4 className="mb-3">{item.title}</h4>
                      <p className="mb-4">{item.desc}</p>
                      <a href="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Services End */}

      {/* Projects Start */}
      <Projects />
      {/* Projects End */}

      {/* Team Start */}
      <Team />
      {/* Team End */}

      {/* Our Clients Start */}
      <Clients />
      {/* Our Clients End */}

      {/* Blog Start */}
      <div className="container-fluid blog py-5 mb-5" id="blog">
        <div className="container">
          <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
            <h5 className="text-primary">{data.blog.subtitle}</h5>
            <h1>{data.blog.title}</h1>
          </div>
          <div className="row g-5 justify-content-center">
            {data.blog.items.map((item, index) => (
              <div key={index} className="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay={`${0.3 + (index * 0.2)}s`}>
                <div className="blog-item position-relative bg-light rounded">
                  <img src={item.img} className="img-fluid w-100 rounded-top" alt="" />
                  <span className="position-absolute px-4 py-3 bg-primary text-white rounded" style={{ top: '-28px', right: '20px' }}>{item.category}</span>
                  <div className="blog-btn d-flex justify-content-between position-relative px-3" style={{ marginTop: '-75px' }}>
                    <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
                      <a href="" className="btn text-white">Read More</a>
                    </div>
                    <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill ">
                      <div className="blog-icon-1">
                        <p className="text-white px-2">Share<i className="fa fa-arrow-right ms-3"></i></p>
                      </div>
                      <div className="blog-icon-2">
                        <a href="" className="btn me-1"><i className="fab fa-facebook-f text-white"></i></a>
                        <a href="" className="btn me-1"><i className="fab fa-twitter text-white"></i></a>
                        <a href="" className="btn me-1"><i className="fab fa-instagram text-white"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-content text-center position-relative px-3" style={{ marginTop: '-25px' }}>
                    <img src="img/admin.jpg" className="img-fluid rounded-circle border border-4 border-white mb-3" alt="" />
                    <h5 className="">By {item.author}</h5>
                    <span className="text-secondary">{item.date}</span>
                    <p className="py-2">{item.desc}</p>
                  </div>
                  <div className="blog-coment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                    <a href="" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>5324 Share</small></a>
                    <a href="" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>5 Comments</small></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Blog End */}

      {/* Contact Start */}
      <div className="container-fluid py-5 mb-5" id="contact">
        <div className="container">
          <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
            <h5 className="text-primary">{data.contact.subtitle}</h5>
            <h1 className="mb-3">{data.contact.title}</h1>
          </div>
          <div className="contact-detail position-relative p-4 p-md-5">
            <div className="row g-5 mb-5 justify-content-center">
              <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".3s">
                <div className="d-flex bg-light p-3 rounded">
                  <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{ width: '64px', height: '64px' }}>
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h4 className="text-primary">Address</h4>
                    <a href="https://goo.gl/maps/Zd4BCynmTb98ivUJ6" target="_blank" className="h5">{data.contact.address}</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".5s">
                <div className="d-flex bg-light p-3 rounded">
                  <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{ width: '64px', height: '64px' }}>
                    <i className="fa fa-phone text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h4 className="text-primary">Call Us</h4>
                    <a className="h5" href="tel:+0123456789" target="_blank">{data.contact.phone}</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".7s">
                <div className="d-flex bg-light p-3 rounded">
                  <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{ width: '64px', height: '64px' }}>
                    <i className="fa fa-envelope text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h4 className="text-primary">Email Us</h4>
                    <a className="h5" href="mailto:info@example.com" target="_blank">{data.contact.email}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-5">
              <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
                <div className="p-4 p-md-5 h-100 rounded contact-map">
                  <iframe className="rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.4710403339755!2d-73.82241512404069!3d40.685622471397615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26749046ee14f%3A0xea672968476d962c!2s123rd%20St%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1686493221834!5m2!1sen!2sbd" style={{ border: 0, minHeight: '300px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">
                <div className="p-4 p-md-5 rounded contact-form">
                  <h4 className="mb-4">Send us a message</h4>
                  <div className="mb-4">
                    <input type="text" className="form-control border-0 py-3" placeholder="Your Name" />
                  </div>
                  <div className="mb-4">
                    <input type="email" className="form-control border-0 py-3" placeholder="Your Email" />
                  </div>
                  <div className="mb-4">
                    <input type="text" className="form-control border-0 py-3" placeholder="Project" />
                  </div>
                  <div className="mb-4">
                    <textarea className="w-100 form-control border-0 py-3" rows="6" cols="10" placeholder="Message"></textarea>
                  </div>
                  <div className="text-start">
                    <button className="btn bg-primary text-white py-3 px-5" type="button">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
}
