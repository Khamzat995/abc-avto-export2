/* import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const FooterCopyright = ({ footerLogo, spaceBottomClass, colorClass }) => {
  return (
    <div
      className={`copyright ${spaceBottomClass ? spaceBottomClass : ""} ${
        colorClass ? colorClass : ""
      }`}
    >
      <div className="footer-logo">
        <Link to={process.env.PUBLIC_URL + "/"}>
          <img alt="" src={process.env.PUBLIC_URL + footerLogo} />
        </Link>
      </div>
      <p>
        © 2020{" "}
        <a href="//hasthemes.com" rel="noopener noreferrer" target="_blank">
          Flone
        </a>
        .<br /> All Rights Reserved
      </p>
    </div>
  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string
};

export default FooterCopyright;
 */

import PropTypes from "prop-types";
import React from "react";
/* import { Link } from "react-router-dom"; */
/* import { animateScroll } from "react-scroll"; */

const FooterCopyright = ({ spaceBottomClass, colorClass }) => {

  /* const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
 */
  return (
    <div
      className={`copyright ${spaceBottomClass ? spaceBottomClass : ""} ${colorClass ? colorClass : ""
        }`} /* onClick={() => scrollToTop()} */
    >
      <div className="footer-logo">
        <img alt="картинка" src={process.env.PUBLIC_URL + "/assets/img/logo/Logo_avto_2.webp"} />
      </div>
      <p>
        © 2022{" "}AVTO-EXPORT <br /> Все права защищены
      </p>
    </div>







  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string
};

export default FooterCopyright;
