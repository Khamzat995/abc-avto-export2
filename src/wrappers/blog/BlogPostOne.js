import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogPost = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/blog/analitik_750.webp"}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>12 часов назад</li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  4 <i className="fa fa-comments-o" />
                </Link>
              </li>
            </ul>
          </div>
          <h3>Анализ рынка спецтехники до 2028 г.</h3>
          <p>
            Существенное повышение стоимости зафиксировано у 25 проанализированных
            брендов гусеничных экскаваторов. В около 31% объявлений цены стали
            указываться в долларах или евро (в середине 2022 — 12%). Кроме этого,
            в отдельных сегментах увеличилось количество позиций с пометкой «Цена
            по запросу». В частности, по этой причине в обзоре отсутствуют средние
            значения для корейских и американских брендов (новая техника) — данных
            для подсчёта, в отличие от осени прошлого года, оказалось недостаточно.{" "}
          </p>
          <blockquote>
            Рост до 66%. Как изменились цены на гусеничные экскаваторы?
          </blockquote>
          <p>
            Несмотря на то, что ряд крупных брендов заявил о временной остановке
            предприятий в России и/или приостановке поставок техники и запчастей
            (Caterpillar, Komatsu, Hitachi, John Deere, Metso Outotec, Tadano,
            Continental, Trimble и др.), на интернет-площадках на данный момент
            не наблюдается снижения количества предложений. Соотношение объявлений
            о продаже новой и б/у техники также осталось прежним: 57% / 43%.
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
                    process.env.PUBLIC_URL + "/assets/img/blog/istanbul-most.webp"
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
                    process.env.PUBLIC_URL + "/assets/img/blog/buklet_mini_1.webp"
                  }
                />
              </a>
            </div>
          </div>
        </div>
        <p>
          На сегодняшний день ценники успели переписать и японские, и китайские,
          и европейские бренды. Причём рост стоимости на отечественные машины
          оказался наиболее существенным (в среднем на 58%). Но отметим, что в
          случае указания конкретной цены в таких объявлениях, она зачастую была
          прописана в долларах. Модели из Японии стали стоить на 39% дороже,
          из Китая — на 40%.
        </p>
      </div>
      <div className="tag-share">
        <div className="dec-tag">
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard-two"}>
                бизнес,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard-free"}>
                коммерция,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                экономика
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
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
          {" "}
          <i className="fa fa-angle-left" /> предыдущий пост
        </Link>
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
          следующий пост <i className="fa fa-angle-right" />
        </Link>
      </div>
    </Fragment>
  );
};

export default BlogPost;
