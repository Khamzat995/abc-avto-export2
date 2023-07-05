import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
/* import { multilanguage } from "redux-multilanguage"; */

const MobileNavMenu = () => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>
            <p>Главная</p>
            {/*   {strings["home"]} */}
          </Link>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
            {/*  {strings["shop"]} */}
            <p>Магазин</p>
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
            {/*  {strings["collection"]} */}
            <p>Коллекция</p>
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>
            {/*  {strings["pages"]} */}
            <p>Страницы</p>
          </Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/cart"}>
                {/*  {strings["cart"]} */}
                <p>Корзина</p>
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/checkout"}>
                {/* {strings["checkout"]} */}
                <p>Ордер</p>
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
                {/* {strings["compare"]} */}
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
                {/* {strings["login_register"]} */}
                <p>Логин регистрация</p>
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/about"}>
                {/* {strings["about_us"]} */}
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
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
            {/* {strings["blog"]} */}
            <p>Блог</p>
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            {/*  {strings["contact_us"]} */}
            <p>Контакты</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object
};

export default (MobileNavMenu);
/* export default multilanguage(MobileNavMenu); */
