import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
/* import { multilanguage } from "redux-multilanguage"; */
/*  */
const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  /*  const strings = {} */
  return (
    <div
      className={` ${sidebarMenu
        ? "sidebar-menu"
        : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
        } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              <p>Главная</p>
              {/*   {strings["home"]} */}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
              <p>Mагазин</p>
              {/*   {strings[""]} */}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              {/* {strings["collection"]} */}
              <p>Kоллекция</p>
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {/* {strings["pages"]} */}
              <div className="page-string"><p>Cтраницы</p>
                {sidebarMenu ? (
                  <span>
                    <i className="fa fa-angle-right"></i>
                  </span>
                ) : (
                  <i className="fa fa-angle-down" />
                )}</div>


            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/cart"}>
                  {/*  {strings["cart"]} */}
                  <p>Kорзина</p>
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/checkout"}>
                  {/* {strings["checkout"]} */}
                  <p>Счета</p>
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/wishlist"}>
                  {/*  {strings["wishlist"]} */}
                  <p>Избранное</p>
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/compare"}>
                  {/*   {strings["compare"]} */}
                  <p>Сравнения</p>
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/my-account"}>
                  {/*   {strings["my_account"]} */}
                  <p>Мой аккаунт</p>
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/login-register"}>
                  {/*   {strings["login_register"]} */}
                  <p>Логин регистрация</p>
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/about"}>
                  {/*  {strings["about_us"]} */}
                  <p>О нас</p>
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/contact"}>
                  {/* {strings["contact_us"]} */}
                  <p>Контакты</p>
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/not-found"}>
                  {/* {strings["404_page"]} */}
                  <p>404 ошибка</p>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
              {/* {strings["blog"]} */}
              <p>Блог</p>
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {/* {strings["contact_us"]} */}
              <p>Контакты</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object
};

export default (NavMenu);
/* export default multilanguage(NavMenu); */
