import React from 'react';

const OrderTracking = () => (
    <div className="ps-order-tracking">
        <div className="container">
            <div className="ps-section__header">
                <h3>Отслеживание заказа</h3>
                <p>
                Чтобы отследить ваш заказ, введите свой идентификатор заказа в поле ниже и нажмите кнопку
                    Кнопка «Отследить». Номер был вам отправлен в квитанции в письме подтверждающим заказ
                    , которое вы должны были получить.
                </p>
            </div>
            <div className="ps-section__content">
                <form className="ps-form--order-tracking" action="/" method="get">
                    <div className="form-group">
                        <label>Идентификатор заказа</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Found in your order confimation email"
                        />
                    </div>
                    <div className="form-group">
                        <label>Email платильщика</label>
                        <input className="form-control" type="text" placeholder="" />
                    </div>
                    <div className="form-group">
                        <button className="ps-btn ps-btn--fullwidth">Отследить Ваш заказ</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

export default OrderTracking;
