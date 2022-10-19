import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogPostTwo = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/blog/750_spec.webp"}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>12 часов назад</li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
                  4 <i className="fa fa-comments-o" />
                </Link>
              </li>
            </ul>
          </div>
          <h3>Возможности и движущие силы</h3>
          <p>
            Мировой банк проанализировал статистические показатели 41 страны,
            формирующей 96% мирового ВВП. В выборку вошли США, Германия, Франция,
            Италия, Великобритания, Япония, Южная Корея, Турция, Нидерланды, Дания
            и др. По данным исследования, в тех секторах
            промышленного производства, где используются строительные машины,
            за последние 20 лет параметры производительности труда практически
            не изменились. Это глобальная проблема, однако в нас она
            проявляется особенно остро. {" "}
          </p>
          <blockquote>
            Как и 1000 лет назад, для того чтобы выкопать траншею, используется труд
            работников с лопатами, а не траншейный экскаватор.
          </blockquote>
          <p>
            Это наглядно иллюстрируют минимальные объемы сектора компактной техники,
            которая практически не продается в России (около 1600 единиц по итогам 2021
            года). Для сравнения, в Германии объемы данного сегмента составляют порядка
            28 000 единиц, и при этом страна заявляет о наличии проблемы низкой
            производительности труда.
          </p>
        </div>
      </div>
      <div className="dec-img-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <a href="https://istanbul-expert.com/">
                <img
                  alt=""
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/buklet_mini_1.webp"
                  }
                />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <a href="https://istanbul-expert.com/">
                <img
                  alt=""
                  src={
                    process.env.PUBLIC_URL + "/assets/img/blog/buklet_mini_3.webp"
                  }
                />
              </a>
            </div>
          </div>
        </div>
        <p>
          Одновременно с этим рынок дает большое поле для возможностей. Помимо уже
          упомянутой большой емкости секторов тяжелой и дорожной техники, есть реальные
          перспективы развития сегмента компактных машин. Он обладает огромным
          потенциалом, который не реализуется сегодня в силу того, что ранее был
          осуществлен ряд инициатив, спорных с точки зрения стратегического развития
          отрасли и промышленной индустрии в целом.
        </p>
      </div>
      <div className="tag-share">
        <div className="dec-tag">
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-one"}>
                аналитика,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-free"}>
                бизнес,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
                коммерция,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
                технологии,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
                новинки,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard-six"}>
                интересное
              </Link>
            </li>
          </ul>
        </div>
        <div className="blog-share">
          <span>поделиться :</span>
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
      <div className="next-previous-post">
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-one"}>
          {" "}
          <i className="fa fa-angle-left" /> Предыдущий пост
        </Link>
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-free"}>
          Следующий пост <i className="fa fa-angle-right" />
        </Link>
      </div>
    </Fragment>
  );
};

export default BlogPostTwo;
