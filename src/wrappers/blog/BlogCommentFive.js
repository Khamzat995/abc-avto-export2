import React, { Fragment } from "react";

const BlogCommentFive = () => {
  return (
    <Fragment>
      <div className="blog-comment-wrapper mt-55">
        <h4 className="blog-dec-title">Комментарии : 02</h4>
        <div className="single-comment-wrapper mt-35">
          <div className="blog-comment-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/blog/lico.webp"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4>Murat Yildiz  </h4>
            <span>2 часа назад </span>
            <p>
              Я 8 лет работал на гусеничном экскаваторе с коротким радиусом действия таким как HMK 145
              LC SR серии H4. Он обеспечивает для пользователя максимальную
              эффективность и производительность благодаря превосходной
              маневренности и простоте использования,{" "}
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
            <h4>Hasan Sahin  </h4>
            <span>1 час назад </span>
            <p>
              Думаю это достигается за счет высокопроизводительного двигателя,
              скорости движения и малого радиуса поворота. Я тоже не раз сталкивался
              с такой спецтехникой,{" "}
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

export default BlogCommentFive;
