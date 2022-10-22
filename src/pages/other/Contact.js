import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import LocationMap from "../../components/contact/LocationMap";

const Contact = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>AVTO-EXPORT | Контакты</title>
        <meta
          name="description"
          content="Contact of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Главная</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Контакты
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="contact-map mb-10">
              <LocationMap latitude="40.98860" longitude="28.77964" />
            </div>
            <div className="custom-row-2">
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>+90 544 543 7677</p>
                      <p>+90 552 286 8989</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:urname@email.com">avto-export.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>42, Barbaros Cad. Cennet Mah.,</p>
                      <p>Küçükçekmece, İstanbul, Türkiye</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Подписаться</h3>
                    <ul>
                      <li>
                        <a href="https://wa.me/905522868989">
                          <i className="fa fa-whatsapp" />
                        </a>
                      </li>
                      <li>
                        <a href="https://t.me/istanbul_exp">
                          <i className="fa fa-telegram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://instagram.com/istanbul_expert/">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/channel/UCR58sPLCgfgkZ0BDs9TKeCQ">
                          <i className="fa fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="//twitter.com">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Связаться</h2>
                  </div>
                  <form className="contact-form-style">
                    <div className="row">
                      <div className="col-lg-6">
                        <input name="name" placeholder="Имя*" type="text" />
                      </div>
                      <div className="col-lg-6">
                        <input name="email" placeholder="Электронный адрес*" type="email" />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="subject"
                          placeholder="Тема*"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Ваше сообщение ...*"
                          defaultValue={""}
                        />
                        <button className="submit" type="submit">
                          ОТПРАВИТЬ
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-messege" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Contact.propTypes = {
  location: PropTypes.object
};

export default Contact;
