import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const BlogPosts = () => {
  return (
    <Fragment>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard-free"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/750_440elektro.webp"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>8 часов назад</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard-free"}>
                    2 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-free"}>
                Tемпы роста объемов продаж
              </Link>
            </h4>
            <p>
              Какой из подходов выбрать для расчета зависит от целей,
              которые ставит перед собой команда аналитиков.
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-free"}>
                  Читать
                </Link>
              </div>
              <div className="blog-share">
                <span>Поделиться :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/750_440spec.webp"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>12 часов назад</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
                    2 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
                Возможности и движущие силы
              </Link>
            </h4>
            <p>
              Мировой банк проанализировал статистические показатели 41 страны,
              формирующей 96% мирового ВВП.
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
                  Читать
                </Link>
              </div>
              <div className="blog-share">
                <span>Поделиться :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard-one"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/750_440analitik.webp"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>12 часов назад</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard-one"}>
                    2 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-one"}>
                Анализ рынка спецтехники
              </Link>
            </h4>
            <p>
              На сегодняшний день ценники успели переписать американские, европейские,
              японские и китайские бренды.
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-one"}>
                  Читать
                </Link>
              </div>
              <div className="blog-share">
                <span>Поделиться :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/750_440tehno.webp"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>2 дня назад</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
                    14 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
                Топ-10 технологий
              </Link>
            </h4>
            <p>
              «Будущее уже наступило, просто оно еще неравномерно распределено»,
              писатель-фантаст Уильям Гибсон.
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
                  Читать
                </Link>
              </div>
              <div className="blog-share">
                <span>Поделиться :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/750_440w10.webp"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>1 день назад</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
                    5 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
                HIDROMEK произвела фурор
              </Link>
            </h4>
            <p>
              Компания Hidromek удивила посетителей выставки Hillhead 2022
              инновационным ассортиментом экскаваторов-погрузчиков
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
                  Читать
                </Link>
              </div>
              <div className="blog-share">
                <span>Поделиться :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard-six"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/750_440turc3.webp"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>1 час назад</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard-six"}>
                    4 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-six"}>
                За отдых в Турции придется платить налог
              </Link>
            </h4>
            <p>
              В Турции с 1 января 2023 года официально вступит в силу
              закон о налоге на проживание в отеле.
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-six"}>
                  Читать
                </Link>
              </div>
              <div className="blog-share">
                <span>Поделиться :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPosts;
