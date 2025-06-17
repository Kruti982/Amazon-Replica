import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.css";

const Slide = ({ title, products = [] }) => {
  const validProducts = Array.isArray(products) ? products : [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  if (!validProducts.length) {
    return (
      <div className="slide-container">
        <h2>{title}</h2>
        <p style={{ color: "gray", padding: "1rem" }}>No products available.</p>
      </div>
    );
  }

  return (
    <>
      <div className="slide" style={{ marginTop: "3rem" }}>
        <div className="slide-container">
          <div className="slide-header">
            <h3>{title}</h3>
            <button className="view_btn">View All</button>
          </div>
          <Slider {...settings}>
            {validProducts.map((e) => (
              <NavLink to={`/getproductsone/${e.id}`} key={e.id}>
                <div className="products_items">
                  <div className="product_img">
                    <img src={e.url} alt="product" />
                  </div>
                  <p className="products_name">{e.title?.shortTitle}</p>
                  <p className="products_offer" style={{ color: "#007185" }}>
                    {e.discount}
                  </p>
                  <p className="products_explore">{e.tagline}</p>
                </div>
              </NavLink>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Slide;
