const DownloadApp = () => (
    <section className="ps-download-app">
        <div className="ps-container">
            <div className="ps-block--download-app">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                            <div className="ps-block__thumbnail">
                                <img src="/static/img/app.png" alt="martfury" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                            <div className="ps-block__content">
                                <h3>Скачайте наше приложение!</h3>
                                <p>
                                Покупки быстрее и проще с нашим приложением. Получить ссылку на
                                    скачивание приложения на свой телефон
                                </p>
                                <form
                                    className="ps-form--download-app"
                                    action="do_action"
                                    method="post">
                                    <div className="form-group--nest">
                                        <input
                                            className="form-control"
                                            type="Email"
                                            placeholder="Email Address"
                                        />
                                        <button className="ps-btn">Подписаться</button>
                                    </div>
                                </form>
                                <p className="download-link">
                                    <a href="#">
                                        <img src="/static/img/google-play.png" alt="martfury" />
                                    </a>
                                    <a href="#">
                                        <img src="/static/img/app-store.png" alt="martfury" />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default DownloadApp;
