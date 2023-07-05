import React from 'react';
import Rating from '@/components/elements/Rating';

const ModuleStoreInformation = ({ store }) => {
    if (store) {
        return (
            <div className="ps-block--vendor">
                <div className="ps-block__thumbnail">
                    <img
                        src="/static/img/vendor/vendor-store.jpg"
                        alt="martfury"
                    />
                </div>
                <div className="ps-block__container">
                    <div className="ps-block__header">
                        <h4>{store.name}</h4>
                        <Rating />
                        <p>
                            <strong>85% Положительных</strong> (562 голосов)
                        </p>
                    </div>
                    <div className="ps-block__divider"></div>
                    <div className="ps-block__content">
                        <p>
                            <strong>Подробное</strong> описание магазина
                        </p>
                        <span className="ps-block__divider"></span>
                        <p>
                            <strong>Адрес</strong> {store.address}
                        </p>
						{
                        /* <figure>
                            <figcaption>Foloow us on social</figcaption>
                            <ul className="ps-list--social-color">
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
                                    <a className="linkedin" href="#">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="feed" href="#">
                                        <i className="fa fa-feed"></i>
                                    </a>
                                </li>
                            </ul>
                        </figure> */
						}
                    </div>
                    <div className="ps-block__footer">
                        <p>
                            Позвонить
                            <strong>{store.phone}</strong>
                        </p>
                        <p>или если вы хотите отправить письмо</p>
                        <a
                            className="ps-btn ps-btn--fullwidth"
                            href="#"
                            onClick={(e) => e.preventDefault()}>
                            Связаться с продавцом
                        </a>
                    </div>
                </div>
            </div>
        );
    } else {
        retu;
    }
};

export default ModuleStoreInformation;
