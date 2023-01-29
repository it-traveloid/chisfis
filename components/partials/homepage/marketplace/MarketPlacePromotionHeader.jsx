import React from 'react';

const MarketPlacePromotionHeader = () => (
    <div
        className="ps-block--promotion-header bg--cover"
        style={{
            backgroundImage: `url(/static/img/promotions/header-promotion.jpg)`,
        }}>
        <div className="container">
            <div className="ps-block__left">
                <h3>20%</h3>
                <figure>
                    <p>Скидка</p>
                    <h4>Для книг марта</h4>
                </figure>
            </div>
            <div className="ps-block__center">
                <p>
                    Ввести промо код<span>Распродажа2023</span>
                </p>
            </div>
            <a className="ps-btn ps-btn--sm" href="#">
                В магазин
            </a>
        </div>
    </div>
);

export default MarketPlacePromotionHeader;
