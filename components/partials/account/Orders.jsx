import React from 'react';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import { getWithActive } from '~/components/utils/account/AccountLinks.js';
import AccountProductList from '~/components/partials/account/modules/AccountProductList';

const Returns = () => {
    const accountLinks = getWithActive('Последние заказы');
    const products = [
        {
            id: 1,
            title: 'Кроссовки',
            price: 200,
            date: '22-01-2023',
        },
        {
            id: 2,
            title: 'Кроссовки',
            price: 200,
            date: '22-01-2023',
        }
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
                        <section className="ps-section--account-setting">
                            <div className="ps-section__header">
                                <h3>Последние заказы</h3>
                            </div>
                            <div className="ps-section__content">
                                <AccountProductList products={products}></AccountProductList>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Returns;
