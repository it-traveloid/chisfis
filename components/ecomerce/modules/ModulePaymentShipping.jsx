import React from 'react';
import Link from 'next/link';

const ModulePaymentShipping = () => {
    return (
        <>
            <div className="ps-block__panel">
                <figure>
                    <small>Контакт</small>
                    <p>test@mail.ru</p>
                    <Link href="/account/checkout">
                        <a>Изменить</a>
                    </Link>
                </figure>
                <figure>
                    <small>Адрес доставки</small>
                    <p>117133 г.Москва ул.Теплый Стан дом 23 корпус 1 квартира 66 подъезд 1 этаж домофон 66 </p>
                    <Link href="/account/checkout">
                        <a>Изменить</a>
                    </Link>
                </figure>
            </div>
            <h4>Тип доставки</h4>
            <div className="ps-block__panel">
                <figure>
                    <small>Почта ЕМС России</small>
                    <strong>от 1400Руб.</strong>
                </figure>
            </div>
        </>
    );
};

export default ModulePaymentShipping;
