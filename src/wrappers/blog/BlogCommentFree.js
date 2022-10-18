import React, { Fragment } from "react";

const BlogCommentFree = () => {
  return (
    <Fragment>
      <div className="blog-comment-wrapper mt-55">
        <h4 className="blog-dec-title">Комментарии : 02</h4>
        <div className="single-comment-wrapper mt-35">
          <div className="blog-comment-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/blog/lico-9.webp"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4>Ibrahim Aydin </h4>
            <span>2 часа назад </span>
            <p>
              Данный показатель необходим для разработки стратегии предприятия и
              привлечения инвестиций, так как является фактором, свидетельствующим
              об эффективности производства,{" "}
            </p>
          </div>
        </div>
        <div className="single-comment-wrapper mt-50 ml-120">
          <div className="blog-comment-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/blog/lico-7.webp"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4>Sultan Özdemir </h4>
            <span>1 час назад </span>
            <p>
              Предварительная работа заключается в сборе данных по параметрам,
              необходимых для полноты картины, таких, как объемы продаж, доход,
              объемы производимой продукции, выручка и т.д.,{" "}
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

export default BlogCommentFree;
