import React from 'react';

import BreadCrumb from '@/../../components/elements/BreadCrumb';
import Returns from '@/../../components/partials/account/Returns';
import PageContainer from '@/../../components/layouts/PageContainer';
import FooterDefault from '@/../../components/shared/footers/FooterDefault';
import Newletters from '@/../../components/partials/commons/Newletters';

const ReturnsPage = () => {
    const breadCrumb = [
        {
            text: 'Главная',
            url: '/',
        },
        {
            text: 'Возвраты',
        },
    ];
    
    return (
        <>
            <PageContainer
                footer={<FooterDefault />}
                title="Recent Viewed Products">
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <Returns />
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default ReturnsPage;
