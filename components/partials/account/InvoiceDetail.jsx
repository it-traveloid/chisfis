import React, { Component } from 'react';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import TableNotifications from './modules/TableNotifications';
import Link from 'next/link';
import ProductCart from '../../elements/products/ProductCart';

class InvoiceDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const accountLinks = [
            {
                text: 'Информация об аккаунте',
                url: '/account/user-information',
                icon: 'icon-user',
            },
            {
                text: 'Уведомления',
                url: '/account/notifications',
                icon: 'icon-alarm-ringing',
            },
            {
                text: 'Счета',
                url: '/account/invoices',
                icon: 'icon-papers',
            },
            {
                text: 'Адрес',
                url: '/account/addresses',
                icon: 'icon-map-marker',
                active: true,
            },
            {
                text: 'Недавно просмотренный товар',
                url: '/account/recent-viewed-product',
                icon: 'icon-store',
            },
            {
                text: 'Список желаемого',
                url: '/account/wishlist',
                icon: 'icon-heart',
            },
        ];
        const invoiceProducts = [
            {
                id: '6',
                thumbnail: '/static/img/products/shop/5.jpg',
                title: 'Grand Slam Indoor Of Show Jumping Novel',
                vendor: "Robert's Store",
                sale: true,
                price: '32.99',
                salePrice: '41.00',
                rating: true,
                ratingCount: '4',
                badge: [
                    {
                        type: 'sale',
                        value: '-37%',
                    },
                ],
            },
            {
                id: '7',
                thumbnail: '/static/img/products/shop/6.jpg',
                title: 'Sound Intone I65 Earphone White Version',
                vendor: 'Youngshop',
                sale: true,
                price: '100.99',
                salePrice: '106.00',
                rating: true,
                ratingCount: '5',
                badge: [
                    {
                        type: 'sale',
                        value: '-5%',
                    },
                ],
            },
        ];
        return (
            <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ps-page__left">
                                <AccountMenuSidebar data={accountLinks} />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="ps-page__content">
                                <div className="ps-section--account-setting">
                                    <div className="ps-section__header">
                                        <h3>
                                            Счёт #500884010 -
                                            <strong>Доставлено</strong>
                                        </h3>
                                    </div>
                                    <div className="ps-section__content">
                                        <div className="row">
                                            <div className="col-md-4 col-12">
                                                <figure className="ps-block--invoice">
                                                    <figcaption>
                                                        Адрес
                                                    </figcaption>
                                                    <div className="ps-block__content">
                                                        <strong>
                                                            Вася Пупкин
                                                        </strong>
                                                        <p>
                                                            Адрес: 117133 Москва ул.Теплый Стан
                                                            д.23 корп.1 кв.68
                                                        </p>
                                                        <p>
                                                            Phone: +7(903) 123-45-67
                                                        </p>
                                                    </div>
                                                </figure>
                                            </div>
                                            <div className="col-md-4 col-12">
                                                <figure className="ps-block--invoice">
                                                    <figcaption>
                                                        Бесплатная отправка
                                                    </figcaption>
                                                    <div className="ps-block__content">
                                                        <p>
                                                            Бесплатная отправка: Бесплатно
                                                        </p>
                                                    </div>
                                                </figure>
                                            </div>
                                            <div className="col-md-4 col-12">
                                                <figure className="ps-block--invoice">
                                                    <figcaption>
                                                        Платеж
                                                    </figcaption>
                                                    <div className="ps-block__content">
                                                        <p>
                                                            Вид платежа: МИР
                                                        </p>
                                                    </div>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table ps-table--shopping-cart">
                                                <thead>
                                                    <tr>
                                                        <th>Товар</th>
                                                        <th>Цена</th>
                                                        <th>Количество</th>
                                                        <th>Всего</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {invoiceProducts.map(
                                                        product => (
                                                            <tr
                                                                key={
                                                                    product.id
                                                                }>
                                                                <td>
                                                                    <ProductCart
                                                                        product={
                                                                            product
                                                                        }
                                                                    />
                                                                </td>
                                                                <td className="price">
                                                                    $
                                                                    {
                                                                        product.price
                                                                    }
                                                                </td>

                                                                <td>1</td>
                                                                <td className="price">
                                                                    $
                                                                    {
                                                                        product.price
                                                                    }
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                        <Link href="/account/invoices">
                                            <a className="ps-btn ps-btn--sm ">
                                                Назад в Счета
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default InvoiceDetail;
