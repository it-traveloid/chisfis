import React from 'react';

import BreadCrumb from '@/../../components/elements/BreadCrumb';
import Login from '@/../../components/partials/account/Login';
import PageContainer from '@/../../components/layouts/PageContainer';
import FooterDefault from '@/../../components/shared/footers/FooterDefault';
import Newletters from '@/../../components/partials/commons/Newletters';

const LoginPage = () => {
    const breadCrumb = [
        {
            text: 'Главная',
            url: '/',
        },
        {
            text: 'Вход',
        },
    ];
    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Неправильное имя пользователя или пароль">
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={breadCrumb} />
					<p>Наверное имя пользователя (email) или пароль!
					</p>
                    <Login />
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default LoginPage;
