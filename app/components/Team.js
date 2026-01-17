"use client";
import data from '../../data/content.json';
import Slider from "react-slick";
// css imported in layout.js

export default function Team() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container-fluid py-5 my-5">
      <div className="container chat-container pt-5">
        <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
          <h5 className="text-primary">{data.team.subtitle}</h5>
          <h1>{data.team.title}</h1>
        </div>
        <Slider {...settings} className="wow fadeIn" data-wow-delay=".5s">
          {data.team.members.map((member, index) => (
            <div key={index} className="px-3"> {/* Added padding for spacing between slides */}
              <div className="team-item bg-light pb-4">
                <div className="team-header"></div>
                <div className="team-img-container">
                  <img src={member.img} className="team-img" alt={member.name} />
                </div>
                <div className="text-center mt-3">
                  <h4 className="mb-0">{member.name}</h4>
                  <span className="text-secondary">{member.designation}</span>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <a className="team-social-icon" href={member.social.facebook}><i className="fab fa-facebook-f"></i></a>
                  <a className="team-social-icon" href={member.social.twitter}><i className="fab fa-twitter"></i></a>
                  <a className="team-social-icon" href={member.social.instagram}><i className="fab fa-instagram"></i></a>
                  <a className="team-social-icon" href={member.social.linkedin}><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
