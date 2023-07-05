import React from 'react';

import BreadCrumb from '@/../../components/elements/BreadCrumb';
import Register from '@/../../components/partials/seller/Register';
import PageContainer from '@/../../components/layouts/PageContainer';
import FooterDefault from '@/../../components/shared/footers/FooterDefault';
import Newletters from '@/../../components/partials/commons/Newletters';

const RegisterPage = () => {
    const breadCrumb = [
        {
            text: 'Главная',
            url: '/',
        },
        {
            text: 'Зарегистрироваться (для продавца)',
        },
    ];

    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Регистрация">
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <Register />
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default RegisterPage;
