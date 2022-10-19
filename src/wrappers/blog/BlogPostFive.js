import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogPostFive = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/blog/750_500w10.webp"}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>8 часов назад</li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
                  4 <i className="fa fa-comments-o" />
                </Link>
              </li>
            </ul>
          </div>
          <h3>HIDROMEK произвела фурор на выставке Hillhead 2022</h3>
          <p>
            Выставка Hillhead 2022 впервые приняла более 600 экспонентов.
            На стенде Hidromek были представлены экскаватор-погрузчик HMK
            102B Supra, три гусеничных экскаватора серии H4, колесные
            погрузчики HMK 635 WL и HMK 640 WL, а также различные
            демонстрационные машины.{" "}
          </p>
          <blockquote>
            Hidromek удивила посетителей выставки Hillhead 2022 инновационным ассортиментом
          </blockquote>
          <p>
            Экскаваторы Hidromek серии H4 отличаются высокой рабочей скоростью,
            производительностью и эффективностью благодаря новой конструкции
            гидравлической системы. Обеспечивая максимальную безопасность и
            долговечность, кабины серии спроектированы и построены в
            соответствии со стандартами ROPS roll-over protective structure,
            {" "}
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
          — конструкция, защищённая от переворачивания, и FOPS
          (falling-object protective structure — конструкция, защищённая от
          опрокидывания). Красные рукоятки и предупредительные таблички на
          машинах новой серии предназначены для повышения безопасности
          оператора до самого высокого уровня.
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
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
          {" "}
          <i className="fa fa-angle-left" /> Предыдущий пост
        </Link>
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-six"}>
          Следующий пост <i className="fa fa-angle-right" />
        </Link>
      </div>
    </Fragment>
  );
};

export default BlogPostFive;
