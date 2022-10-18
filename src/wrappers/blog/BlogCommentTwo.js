import React, { Fragment } from "react";

const BlogCommentTwo = () => {
  return (
    <Fragment>
      <div className="blog-comment-wrapper mt-55">
        <h4 className="blog-dec-title">Kомментарии : 02</h4>
        <div className="single-comment-wrapper mt-35">
          <div className="blog-comment-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/blog/lico-8.webp"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4>Ahmet Stephen</h4>
            <span>1 день назад </span>
            <p>
              Сегодня рынку нужны новые решения — эффективные, экономически целесообразные
              и нацеленные на устойчивое развитие в долгосрочной перспективе, однако пока
              у участников нет даже «дорожной карты» подобных проектов,{" "}
            </p>
          </div>
        </div>
        <div className="single-comment-wrapper mt-50 ml-120">
          <div className="blog-comment-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/blog/lico1.webp"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4>Hasan Yildirim </h4>
            <span>14 часов назад </span>
            <p>
              Находясь в зависимости от дешевой рабочей силы, они не смогут организовывать
              бизнес-процессы в рамках требований новой цифровой экономики,{" "}
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

export default BlogCommentTwo;
