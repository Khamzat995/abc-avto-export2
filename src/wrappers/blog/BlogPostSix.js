import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogPostSix = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/blog/750_500turc3.webp"}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>8 часов назад</li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-six"}>
                  4 <i className="fa fa-comments-o" />
                </Link>
              </li>
            </ul>
          </div>
          <h3>За отдых в Турции придется платить налог</h3>
          <p>
            В Турции с 1 января 2023 года официально вступит в силу закон о
            налоге на проживание, сообщается на официальном сайте. Под действие
            налога на проживание в размере двух процентов попадают все объекты
            размещения: гостиницы, мотели, дачные поселки, пансионаты,
            апарт-отели, термальные комплексы, гостевые дома, кемпинги,
            автодома. Этим налогом будут облагаться как размещение (ночлег),
            так и остальные услуги, продающиеся вместе с ним: питание и
            напитки, пользование бассейном, термальным комплексом. {" "}
          </p>
          <blockquote>
            Исключение составят SPA-зоны и бассейны в случае обслуживания тех, кто не проживает в гостинице.
          </blockquote>
          <p>
            Известно только, что сумма отчислений отелей увеличится на два
            процента, при этом то, каким образом объекты размещения будут
            покрывать данный расход, с высокой долей вероятности останется их
            решением, рассказали представители туроператора TEZ TOUR.{" "}
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
                    process.env.PUBLIC_URL + "/assets/img/blog/buklet_mini_3.webp"
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
          Вице-президент АТОР и глава туроператора Space Travel Артур Мурадян
          считает, что цена будет заложена в предложение, налог будет взиматься
          с туриста просто при приобретении путевки. При самостоятельном
          бронировании путевки путешественник будет оплачивать налог сам.
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
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
          {" "}
          <i className="fa fa-angle-left" /> Предыдущий пост
        </Link>
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-one"}>
          Следующий пост <i className="fa fa-angle-right" />
        </Link>
      </div>
    </Fragment>
  );
};

export default BlogPostSix;
