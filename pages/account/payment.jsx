import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Payment from '~/components/partials/account/Payment';
import { connect } from 'react-redux';

import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';

const PaymentPage = () => {
    const breadCrumb = [
        {
            text: 'Домой',
            url: '/',
        },
        {
            text: 'Корзина',
            url: '/account/shopping-cart',
        },
        {
            text: 'Информация о оформлении заказа',
            url: '/account/checkout',
        },
        {
            text: 'Платеж',
        },
    ];

    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Платеж">
                <div className="ps-page--simple">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <Payment />
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default connect()(PaymentPage);
