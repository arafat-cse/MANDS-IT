"use client";
import data from '../../data/content.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Clients() {
  const settings = {
    dots: false, // Usually client logos don't need dots, but can be enabled if requested
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show more logos at once
    slidesToScroll: 1,
    autoplay: true, // Auto scroll for clients
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container-fluid py-5 my-5 bg-light">
      <div className="container">
        <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
          <h5 className="text-primary">{data.clients.subtitle}</h5>
          <h1 className="mb-3">Our Trusted Partners</h1>
          <p>{data.clients.desc}</p>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#6c757d', margin: '0 auto' }}></div>
        </div>
        <Slider {...settings} className="wow fadeIn" data-wow-delay=".5s">
          {data.clients.logos.map((client, index) => (
            <div key={index} className="text-center px-2"> {/* Added padding */}
              {client.img ? (
                <img src={client.img} alt={client.name} className="img-fluid mx-auto" style={{ maxHeight: '60px', filter: 'grayscale(100%)', opacity: '0.7' }} />
              ) : (
                <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#555' }} className="d-flex justify-content-center align-items-center h-100 py-3">
                  {client.name}
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
