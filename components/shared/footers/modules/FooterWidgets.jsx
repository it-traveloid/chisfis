import React from 'react';
import Link from 'next/link';

const FooterWidgets = () => (
    <div className="ps-footer__widgets">
        <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">Контакты:</h4>
            <div className="widget_content">
                <p>АО "Национальный Туризм" <br />
Национальный провайдер внутреннего туризма</p>
                <h3>+7 495 7773350</h3>
                <p>115035, Москва, ул. Балчуг, 1, отель Балчуг <br />
                    <a href="mailto:info@аорт.рф">info@аорт.рф</a>
                </p>
                <ul className="ps-list--social">
                    <li>
                        <a className="facebook" href="#">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a className="twitter" href="#">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a className="google-plus" href="#">
                            <i className="fa fa-google-plus"></i>
                        </a>
                    </li>
                    <li>
                        <a className="instagram" href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Ссылки</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/blank">
                        <a>Руководство</a>
                    </Link>
                </li>

                <li>
                    <Link href="/page/blank">
                        <a>Наблюдательный <br />Совет</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Товары для туристов</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Лизинг автодомов</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/faqs">
                        <a>Услуги туристам</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/faqs">
                        <a>Регионам РФ</a>
                    </Link>
                </li>               
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Пользователю</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/about-us">
                        <a>Личный кабинет</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Платежи и расчеты</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Поддержка 24/7</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/contact-us">
                        <a>Бонусы и скидки</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/contact-us">
                        <a>Акции и подарки</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/contact-us">
                        <a>Частые вопросы</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Продавцу</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/about-us">
                        <a>Пресса</a>
                    </Link>
                </li>
                <li>
                    <Link href="/account/checkout">
                        <a>Заказ</a>
                    </Link>
                </li>
                <li>
                    <Link href="/account/user-information">
                        <a>Мой аккаунт</a>
                    </Link>
                </li>
                <li>
                    <Link href="/shop">
                        <a>Магазин</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Категории</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/about-us">
                        <a>Поиск билетов Авиа</a>
                    </Link>
                </li>
                <li>
                    <Link href="/account/checkout">
                        <a>Поиск билетов ЖД</a>
                    </Link>
                </li>
                <li>
                    <Link href="/account/user-information">
                        <a>Бронирование номеров</a>
                    </Link>
                </li>
                <li>
                    <Link href="/shop">
                        <a>Развлечения, шоу</a>
                    </Link>
                </li>
                <li>
                    <Link href="/shop">
                        <a>Соискателям работы</a>
                    </Link>
                </li>
                <li>
                    <Link href="/shop">
                        <a>Работодателям</a>
                    </Link>
                </li>
            </ul>
        </aside>
    </div>
);

export default FooterWidgets;
