import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${spaceBottomClass ? spaceBottomClass : ""
        }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Кто мы</h5>
          <h1>Добро пожаловать в AVTO-EXPORT</h1>
          <p>
            Компания AVTO-EXPORT была создана в 2022 году для поставок дорожно-строительной техники
            известных брендов (Caterpillar, Komatsu, Hitachi, John Deere, Metso Outotec, Tadano,
            Continental, Trimble и др.) из Турции на российский, казахстанский и другие рынки стран СНГ.
            {" "}
            Для этого мы организуем тесное сотрудничество с рядом крупнейших мировых производителей дорожно-строительных машин в сфере
            поставок техники, запасных частей, дополнительного оборудования и расходных материалов к ним. Кроме того,
            AVTO-EXPORT сотрудничает с турецкими, казахстанскими, российскими и др. кампаниями работающими
            в сфере дорожно-ремонтных работ, а также с кампаниями занимающимися производством
            дорожных и строительных материалов.
            {" "}
          </p>
        </div>
      </div>
    </div >
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
