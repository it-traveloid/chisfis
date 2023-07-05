import React from 'react';

import BreadCrumb from '@/../../components/elements/BreadCrumb';
import Orders from '@/../../components/partials/account/Orders';
import PageContainer from '@/../../components/layouts/PageContainer';
import FooterDefault from '@/../../components/shared/footers/FooterDefault';
import Newletters from '@/../../components/partials/commons/Newletters';

const OrdersPage = () => {
    const breadCrumb = [
        {
            text: 'Главная',
            url: '/',
        },
        {
            text: 'Последние заказы',
        },
    ];
    
    return (
        <>
            <PageContainer
                footer={<FooterDefault />}
                title="Recent Viewed Products">
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <Orders />
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default OrdersPage;
