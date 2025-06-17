import React from "react";
import Banner from "./Banner";
import "./Home.css";
import Productdata from "./Productdata";

const Maincomponent = () => {
  return (
    <>
      <section className="container">
        <div className="home_section">
          <div className="banner_part">
            <Banner />
          </div>
        </div>
        <div className="left_side">
          <Productdata title="Deals of the day" />
        </div>
        <div className="right_side">
          <h4>Festive latest Launches</h4>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg"
            alt="rightimg"
          />
          <a href="#">see more</a>
        </div>
        <div className="center_img">
          <img
            src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
            alt=""
          />
        </div>
        <Productdata title="Today's Deal" />
        <Productdata title="Upto 80% off" />
        <Productdata title="Best Sellers" />
      </section>
    </>
  );
};

export default Maincomponent;
