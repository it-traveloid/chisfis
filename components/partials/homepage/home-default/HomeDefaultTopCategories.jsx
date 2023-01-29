import Link from 'next/link';

const HomeDefaultTopCategories = () => (
    <div className="ps-top-categories">
        <div className="ps-container">
            <h3>Лучшие категории месяца</h3>
            <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/categories/1.jpg" alt="martfury"/>
                        <p>Электроника</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/categories/2.jpg" alt="martfury"/>
                        <p>Одежда</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/categories/3.jpg" alt="martfury"/>
                        <p>Компьютеры</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/categories/4.jpg" alt="martfury"/>
                        <p>Дом и кухня</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/categories/5.jpg" alt="martfury"/>
                        <p>Красота и здоровье</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/categories/6.jpg" alt="martfury"/>
                        <p>Часы</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/categories/7.jpg" alt="martfury"/>
                        <p>Квадрокоптеры</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/categories/8.jpg" alt="martfury"/>
                        <p>Смартфоны</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HomeDefaultTopCategories;
