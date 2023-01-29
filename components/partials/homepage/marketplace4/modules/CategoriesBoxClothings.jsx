import React from 'react';
import Link from 'next/link';

const CategoriesBoxClothings = () => (
    <div className="ps-block--categories-box">
        <div className="ps-block__header">
            <h3>Одежда</h3>
            <ul>
                <li>
                    <Link href="/shop">
                        <a>Новые поступления</a>
                    </Link>
                </li>
                <li>
                    <Link href="/shop">
                        <a>Лучший продавец</a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="ps-block__content">
            <div className="ps-block__banner">
                <img src="/static/img/categories/clothing/large.jpg" alt="martfury" />
            </div>
            <div className="ps-block__item">
                <a className="ps-block__overlay"></a>
                <img src="/static/img/categories/clothing/1.jpg" alt="martfury" />
                <p>Для женщин</p>
                <span>2 товара</span>
            </div>
            <div className="ps-block__item">
                <a className="ps-block__overlay"></a>
                <img src="/static/img/categories/clothing/2.jpg" alt="martfury" />
                <p>Для мужчик</p>
                <span>2 товара</span>
            </div>
            <div className="ps-block__item">
                <a className="ps-block__overlay"></a>
                <img src="/static/img/categories/clothing/3.jpg" alt="martfury" />
                <p>Обувь</p>
                <span>4 товара</span>
            </div>
            <div className="ps-block__item">
                <a className="ps-block__overlay"></a>
                <img src="/static/img/categories/clothing/4.jpg" alt="martfury" />
                <p>Сумки</p>
                <span>5 Товаров</span>
            </div>
            <div className="ps-block__item">
                <a className="ps-block__overlay"></a>
                <img src="/static/img/categories/clothing/5.jpg" alt="martfury" />
                <p>Аксесуары</p>
                <span>10 Товаров</span>
            </div>
            <div className="ps-block__item">
                <a className="ps-block__overlay"></a>
                <img src="/static/img/categories/clothing/6.jpg" alt="martfury" />
                <p>Для детей</p>
                <span>2 Товара</span>
            </div>
            <div className="ps-block__item">
                <a className="ps-block__overlay"></a>
                <img src="/static/img/categories/clothing/7.jpg" alt="martfury" />
                <p>Солнечные очки</p>
                <span>3 Товара</span>
            </div>
        </div>
    </div>
);

export default CategoriesBoxClothings;
