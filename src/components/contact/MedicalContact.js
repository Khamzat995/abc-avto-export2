import React from "react";

const MedicalContact = () => {
  return (
    <div
      className="medical-contact-area bg-img"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/img/bg/baner-smail.webp"
          })`
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-5">
            <div className="medical-contact-text">
              <h3>Звонок бесплатный </h3>
              <h2>Горячая линия</h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-7">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-2">
                <div className="medical-shape-img">
                  <div class="pulse">
                    <i class="fa fa-phone"></i>
                    {/*   <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/icon-img/medical-contact-shape.png"
                      }
                      alt=""
                    /> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-10">
                <div className="medical-contact-number-wrap">
                  <div className="medical-contact-img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/icon-img/medical-contact.png"
                      }
                      alt=""
                    />
                  </div>
                  <div className="medical-contact-number">
                    <h2>+90 544 543 7677</h2>
                    <h2>+90 552 286 8989</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalContact;
