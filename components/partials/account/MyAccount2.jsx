import React, { Component } from 'react';

class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="ps-my-account-2">
                <div className="container">
                    <div className="ps-section__wrapper">
                        <div className="ps-section__left">
                            <form
                                className="ps-form--account ps-tab-root"
                                action="link.html"
                                method="get">
                                <ul className="ps-tab-list">
                                    <li className="active">
                                        <a href="#sign-in">Войти</a>
                                    </li>
                                    <li>
                                        <a href="#register">Регистрация</a>
                                    </li>
                                </ul>
                                <div className="ps-tabs">
                                    <div className="ps-tab active" id="sign-in">
                                        <div className="ps-form__content">
                                            <h5>Войти в аккаунт</h5>
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Username or email address"
                                                />
                                            </div>
                                            <div className="form-group form-forgot">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Password"
                                                />
                                                <a href="">Забыли паролль?</a>
                                            </div>
                                            <div className="form-group">
                                                <div className="ps-checkbox">
                                                    <input
                                                        className="form-control"
                                                        type="checkbox"
                                                        id="remember-me"
                                                        name="remember-me"
                                                    />
                                                    <label htmlFor="remember-me">
                                                        Запомнить меня
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group submit">
                                                <button className="ps-btn ps-btn--fullwidth">
                                                    Войти
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-tab" id="register">
                                        <div className="ps-form__content">
                                            <h5>Регистрация</h5>
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Username or email address"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <div className="ps-form__decs">
                                                <div className="ps-radio">
                                                    <input
                                                        className="form-control"
                                                        type="radio"
                                                        id="user-type-1"
                                                        name="user-type"
                                                    />
                                                    <label htmlFor="user-type-1">
                                                        Я покупатель
                                                    </label>
                                                </div>
                                                <div className="ps-radio">
                                                    <input
                                                        className="form-control"
                                                        type="radio"
                                                        id="user-type-2"
                                                        name="user-type"
                                                    />
                                                    <label htmlFor="user-type-2">
                                                        Я продавец
                                                    </label>
                                                </div>
                                                <p>
                                                Ваши персональные данные будут использоваться для поддержки вас
                                                    на этом веб-сайте, чтобы управлять
                                                    доступом к вашей учетной записи и для других целей
                                                    описанных в нашей <a href="#">политике конфиденциальности.</a>
                                                </p>
                                            </div>
                                            <div className="form-group submit">
                                                <button className="ps-btn ps-btn--fullwidth">
                                                    Регистрация
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="ps-section__right">
                            <figure className="ps-section__desc">
                                <figcaption>
Зарегистрируйтесь сегодня, и вы сможете:</figcaption>
                                <p>
                                Защита клиента MartFury защитит вас от клика до
                                    Доставки. Зарегистрируйтесь или войдите, и вы сможете:
                                </p>
                                <ul className="ps-list">
                                    <li>
                                        <i className="icon-credit-card"></i>
                                        <span>УСКОРИТЬ ОПЛАТУ</span>
                                    </li>
                                    <li>
                                        <i className="icon-clipboard-check"></i>
                                        <span>ЛЕГКО ОТСЛЕЖИВАТЬ ВАШ ЗАКАЗ</span>
                                    </li>
                                    <li>
                                        <i className="icon-bag2"></i>
                                        <span>ВИДЕТЬ СПИСКО ВСЕХ ВАШИХ ЗАКАЗОВ</span>
                                    </li>
                                </ul>
                            </figure>
                            <div className="ps-section__coupon">
                                <span>1500 рублей</span>
                                <aside>
                                    <h5>Маленький подарок для вашей первой покупки</h5>
                                    <p>
                                        Martfury даёт 1500 рублей как маленький подарок для вашей первой покупки.
                                        Добро пожаловать на Martfury!
                                    </p>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyAccount;
