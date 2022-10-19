import React from "react";
import { Link } from "react-router-dom";

const BlogSidebar = () => {
  return (
    <div className="sidebar-style">
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Поиск </h4>
        <div className="pro-sidebar-search mb-55 mt-25">
          <form className="pro-sidebar-search-form" action="#">
            <input type="text" placeholder="Найти здесь..." />
            <button>
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div>
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Свежие проекты </h4>
        <div className="sidebar-project-wrap mt-30">
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/blog-mini-4.webp"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Новинки</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
                  Hidromek model 2022
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-free"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/46mini_70.webp"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Бизнес</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-free"}>
                  Возможности и силы
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/45mini_70.webp"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Коммерция</span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
                  Темпы роста продаж
                </Link>
              </h4>
            </div>
          </div>
          <div className="single-sidebar-blog">
            <div className="sidebar-blog-img">
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/technology.webp"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="sidebar-blog-content">
              <span>Технологии </span>
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
                  Топ-10 технологий
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-widget mt-35">
        <h4 className="pro-sidebar-title">Категории</h4>
        <div className="sidebar-widget-list sidebar-widget-list--blog mt-20">
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Рынки <span>14</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Биржи <span>49</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Инвестиции <span>75</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue />{" "}
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  Инновации <span>52</span>{" "}
                </Link>
                <span className="checkmark" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-widget mt-50">
        <h4 className="pro-sidebar-title">Теги </h4>
        <div className="sidebar-widget-tag mt-25">
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                Caterpillar
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                Komatsu
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                Hitachi
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>John Deere</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                Metso Outotec
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                Tadano
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                Continental
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                Trimble
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
