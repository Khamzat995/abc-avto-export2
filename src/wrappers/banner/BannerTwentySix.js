import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BannerTwentySix = ({ spaceBottomClass }) => {
  return (
    <div className={`banner-area ${spaceBottomClass ? spaceBottomClass : ""}`}>
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-width-banner33-1">
            <div className="single-banner mb-30">
              <a href="product-details.html">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/banner/masla_2.webp"
                  }
                  alt=""
                />
              </a>
              <div className="banner-content-33-2 banner-content-33-2-position2">
                <h4>Масло трансмиссионное </h4>
                <h2>
                  Castrol <br />
                  скидка 10%
                </h2>
                <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                  Посмотреть
                </Link>
              </div>
            </div>
          </div>
          <div className="col-width-banner33-2">
            <div className="single-banner mb-30">
              <a href="product-details.html">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/banner/masla_1.webp"
                  }
                  alt=""
                />
              </a>
              <div className="banner-content-33-2 banner-content-33-2-position2">

                <h2>
                  Масло моторное <br />
                  NEXPRO
                </h2>

                <h4 className="salefix">ограниченное предложение </h4>
                <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                  Посмотреть
                </Link>
              </div>
            </div>
          </div>
          <div className="col-width-banner33-1">
            <div className="single-banner mb-30">
              <a href="product-details.html">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/banner/masla.webp"
                  }
                  alt=""
                />
              </a>
              <div className="banner-content-33-2 banner-content-33-2-position2">
                <h4>Масло трансмиссионное</h4>
                <h2>
                  CAT TDTO SAE30 <br />
                  скидка 10%
                </h2>
                <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                  Посмотреть
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BannerTwentySix.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default BannerTwentySix;
