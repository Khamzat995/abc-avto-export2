import React, { Fragment } from "react";

const BlogCommentSix = () => {
  return (
    <Fragment>
      <div className="blog-comment-wrapper mt-55" >
        <h4 className="blog-dec-title">Комментарии : 02</h4>
        <div className="single-comment-wrapper mt-35">
          <div className="blog-comment-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/blog/lico1.webp"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4>Murat Yildirim  </h4>
            <span>2 часа назад </span>
            <p>
              Друзья, в Турции есть не только красивая природа, чистое море и песочные
              пляжи, но и термальные источники, которые привлекают
              путешественников, желающих поправить своё здоровье при помощи
              целебной грязи и горячей минеральной воды,{" "}
            </p>
          </div>
        </div>
        <div className="single-comment-wrapper mt-50 ml-120">
          <div className="blog-comment-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/blog/lico-4.webp"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4>Ismail Aydin </h4>
            <span>1 час назад </span>
            <p>
              Да, могу на собственном примере показать что отдых в этих сказочных местах
              может выгнать даже хроническую болезнь. Известно, что раньше на
              данных турецких термальных источниках отдыхала сама Клеопатра,{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="blog-reply-wrapper mt-50">
        <h4 className="blog-dec-title">Оставить комментарий</h4>
        <form className="blog-form">
          <div className="row">
            <div className="col-md-6">
              <div className="leave-form">
                <input type="text" placeholder="Имя" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="leave-form">
                <input type="email" placeholder="Электронный адрес " />
              </div>
            </div>
            <div className="col-md-12">
              <div className="text-leave">
                <textarea placeholder="Сообщение..." defaultValue={""} />
                <input type="submit" defaultValue="SEND MESSAGE" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default BlogCommentSix;
