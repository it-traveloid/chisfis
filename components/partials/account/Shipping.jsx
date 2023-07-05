import React from 'react';
import Link from 'next/link';
import ModulePaymentOrderSummary from '@/components/partials/account/modules/ModulePaymentOrderSummary';

const Shipping = () => {
    return (
        <div className="ps-checkout ps-section--shopping">
            <div className="container">
                <div className="ps-section__header">
                    <h1>Информация о доставке</h1>
                </div>
                <div className="ps-section__content">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="ps-block--shipping">
                                <div className="ps-block__panel">
                                    <figure>
                                        <small>Контакты</small>
                                        <p>test@mail.ru</p>
                                        <Link href="/account/checkout">
                                            <a>Изменить</a>
                                        </Link>
                                    </figure>
                                    <figure>
                                        <small>Доставка по адресу:</small>
                                        <p>117133 г.Москва ул. Теплый Стан д.23 корп.1 кв.68</p>
                                        <Link href="/account/checkout">
                                            <a>Изменить</a>
                                        </Link>
                                    </figure>
                                </div>
                                <h4>Тип доставки</h4>
                                <div className="ps-block__panel">
                                    <figure>
                                        <small>Почта ЕМС</small>
                                        <strong>1500 Руб</strong>
                                    </figure>
                                </div>
                                <div className="ps-block__footer">
                                    <Link href="/account/checkout">
                                        <a>
                                            <i className="icon-arrow-left mr-2"></i>
                                            Возврат к информации
                                        </a>
                                    </Link>
                                    <Link href="/account/payment">
                                        <a className="ps-btn">
                                            Перейти к оплате
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                            <div className="ps-form__orders">
                                <ModulePaymentOrderSummary shipping={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipping;
