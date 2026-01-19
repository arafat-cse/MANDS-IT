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
            <div key={index} className="px-3">
              <div className="team-item">
                <div className="team-header"></div>
                <div className="team-img-container">
                  <img src={member.img} className="team-img" alt={member.name} />
                </div>
                <div className="team-content pb-4">
                  <h4>{member.name}</h4>
                  <span className="team-designation">{member.designation}</span>
                  <div className="d-flex justify-content-center">
                    <a className="team-social-icon" href={member.social.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a className="team-social-icon" href={member.social.twitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a className="team-social-icon" href={member.social.instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a className="team-social-icon" href={member.social.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
