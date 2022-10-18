import React, { Fragment } from "react";

const BlogCommentOne = () => {
  return (
    <Fragment>
      <div className="blog-comment-wrapper mt-55">
        <h4 className="blog-dec-title">Комментарии: 02</h4>
        <div className="single-comment-wrapper mt-35">
          <div className="blog-comment-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/blog/lico-4.webp"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4>Yılmaz  Mehmet </h4>
            <span>10 часов назад </span>
            <p>
              Наши операторы предпочитают Volvo CE из-за комфорта, безотказности
              работы и надёжности машины, – отмечает Олег Орлов, – Когда мы получаем
              новую технику Volvo CE, из операторов, желающих на ней работать,
              выстраивается очередь,{" "}
            </p>
          </div>
        </div>
        <div className="single-comment-wrapper mt-50 ml-120">
          <div className="blog-comment-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/blog/lico-6.webp"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4>Demir Joxova</h4>
            <span>2 часа назад </span>
            <p>
              Согласен. Для этого нужна производительная и маневренная техника,
              способная работать в экстремальных условиях: в ограниченном пространстве
              и с минимальным расходом топлива,{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="blog-reply-wrapper mt-50">
        <h4 className="blog-dec-title">Oставить комментарий</h4>
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

export default BlogCommentOne;
