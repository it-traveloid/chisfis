import React from 'react';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import { getWithActive } from '~/components/utils/account/AccountLinks.js';
import AccountProductList from '~/components/partials/account/modules/AccountProductList';

const RecentViewedProducts = () => {
    const accountLinks = getWithActive('Недавно просмотренные товары');

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
                                <h3>Недавно просмотренные товары</h3>
                            </div>
                            <div className="ps-section__content">
                                <AccountProductList></AccountProductList>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RecentViewedProducts;
