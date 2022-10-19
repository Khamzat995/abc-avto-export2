import React, { Fragment } from "react";

const BlogCommentFour = () => {
  return (
    <Fragment>
      <div className="blog-comment-wrapper mt-55">
        <h4 className="blog-dec-title">Комментарии : 02</h4>
        <div className="single-comment-wrapper mt-35">
          <div className="blog-comment-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/blog/lico-3.webp"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4>Mehmet Kaya </h4>
            <span>2 часа назад </span>
            <p>
              ИТ-компании уже сейчас предлагают альтернативные способы входа в
              приложения и сервисы. Владельцы Apple и других смартфонов вовсю
              используют систему распознавания лиц, а YouTube узнает юзера по
              электронной почте,{" "}
            </p>
          </div>
        </div>
        <div className="single-comment-wrapper mt-50 ml-120">
          <div className="blog-comment-img">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/blog/lico-5.webp"}
              alt=""
            />
          </div>
          <div className="blog-comment-content">
            <h4>Sultan Demir</h4>
            <span>1 час назад </span>
            <p>
              На Солнце постоянно происходят термоядерные реакции: ядра элементов
              сталкиваются друг с другом и выделяют огромное количество энергии.
              Если бы эти процессы получилось повторить на Земле, человечество
              получило бы практически безграничный энергоисточник.
              Эта заманчивая идея давно волнует изобретателей.,{" "}
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

export default BlogCommentFour;
