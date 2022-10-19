import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogPostFree = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/blog/750_elektro.webp"}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>8 часов назад</li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-free"}>
                  4 <i className="fa fa-comments-o" />
                </Link>
              </li>
            </ul>
          </div>
          <h3>Tемпы роста объемов продаж и доходов</h3>
          <p>
            Темп роста продаж (ТР) – важный показатель, указывающий не только на объем
            чистой прибыли компании, сколько на динамику ее развития. Существуют разные
            виды темпов роста. Какой из подходов выбрать для расчета зависит от целей,
            которые ставит перед собой команда аналитиков.{" "}
          </p>
          <blockquote>
            Важность знания темпа роста продаж!
          </blockquote>
          <p>
            После расчета темпа роста объемов продаж станет понятно, какое место занимает
            компания на рынке, стоит ли предпринимать усилия для корректировки положения
            или продолжать использовать те же инструменты, доказавшие свою эффективность.
            Из нашего материала вы узнаете, как правильно рассчитать ТР, что может
            влиять на его рост или падение и как их можно стимулировать.{" "}
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
          Можно ли спрогнозировать прибыль и развитие компании, если у вас не разработан
          долговременный план? Это вряд ли, так как существует ряд базовых данных,
          определяющих деятельность предприятия. Таковыми являются показатели количества
          выпускаемой продукции, расходы, связанные с закупками материалов и
          обслуживанием, активность операционных отделов. Если руководитель владеет
          информацией о колебаниях в данных факторах, то он может осуществлять
          финансовое управление, сохраняя баланс между задолженностями и вложениями.
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
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-two"}>
          {" "}
          <i className="fa fa-angle-left" /> Предыдущий пост
        </Link>
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
          Следующий пост <i className="fa fa-angle-right" />
        </Link>
      </div>
    </Fragment>
  );
};

export default BlogPostFree;
