import React from 'react';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import { getWithActive } from '@/components/utils/account/AccountLinks.js';
import AccountProductListReturns from '@/components/partials/account/modules/AccountProductListReturns';

const Returns = () => {
    const accountLinks = getWithActive('Возвраты');

    const products = [
        {
            id: 1,
            title: 'Продукт',
            price: 200,
            date: '21-01-2023',
            state: 'В обработке'
        }
    ]

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
                                <h3>Возвраты</h3>
                            </div>
                            <div className="ps-section__content">
                                <AccountProductListReturns products={products}></AccountProductListReturns>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Returns;