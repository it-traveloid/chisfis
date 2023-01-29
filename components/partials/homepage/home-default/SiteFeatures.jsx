import React from 'react';

const SiteFeatures = () => (
    <div className="ps-site-features">
        <div className="ps-container">
            <div className="ps-block--site-features">
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-rocket"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>Бесплатная доставка</h4>
                        <p>Для всех заказов больше 7000 Руб</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-sync"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>Возврат 90 дней</h4>
                        <p>Если с покупкой возникнут проблемы</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-credit-card"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>Безопасная оплата</h4>
                        <p>100% Безопасная оплата</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-bubbles"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>24/7 Поддержка</h4>
                        <p>Индивидуальная Поддержка</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-gift"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>Подарочный сервис</h4>
                        <p>Служба поддержки подарков</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default SiteFeatures;
