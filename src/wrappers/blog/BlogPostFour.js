import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogPostFour = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/blog/750_440tehno.webp"}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>6 часов назад</li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard-four"}>
                  10 <i className="fa fa-comments-o" />
                </Link>
              </li>
            </ul>
          </div>
          <h3>10 прорывных технологий 2022 года по версии журнала MIT</h3>
          <p>
            Каждый год редакция MIT Technology Review изучает последние
            разработки в направлениях от медицины до цифровых технологий и
            выбирает самые значимые открытия. В феврале издание опубликовало
            топ-10 инноваций, которые изменят нашу жизнь. Рассказываем, что
            ждет человечество завтра.{" "}
          </p>
          <blockquote>
            "Будущее без паролей",
            "Контроль за новыми версиями Covid и лекарство от него",
            "Долговечные батареи для возобновляемой энергии",
            "Искусственный интеллект для определения структуры белков",
            "Вакцина против малярии",
            "Экологичный крипторынок",
            "Применение термоядерных реакторов",
            "Синтетические данные для искусственного интеллекта",
            "Установки для удаления углекислого газа из атмосферы"
          </blockquote>
          <p>
            Редакция MIT выбрала 10 прорывных достижений вместе с экспертами,
            а за еще одно прорывное достижение предложила проголосовать самим
            читателям.{" "}
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
          Победителем оказалась технология «часов старения». Они отражают
          биологический возраст человека, который может сильно отличаться
          от хронологического. Их часовой механизм работает на основе
          генетического анализа. ДНК-маркеры позволяют отслеживать процесс
          старения в реальном времени и помогают понять, почему люди взрослеют
          с разной скоростью.
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
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-free"}>
          {" "}
          <i className="fa fa-angle-left" /> Предыдущий пост
        </Link>
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard-five"}>
          Следующий пост <i className="fa fa-angle-right" />
        </Link>
      </div>
    </Fragment>
  );
};

export default BlogPostFour;
