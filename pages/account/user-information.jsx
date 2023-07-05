import React from 'react';

import BreadCrumb from '@/../../components/elements/BreadCrumb';
import UserInformation from '@/../../components/partials/account/UserInformation';
import FooterDefault from '@/../../components/shared/footers/FooterDefault';
import PageContainer from '@/../../components/layouts/PageContainer';
import Newletters from '@/../../components/partials/commons/Newletters';

const UserInformationPage = () => {
    const breadCrumb = [
        {
            text: 'Главная',
            url: '/',
        },
        {
            text: 'Редактировать профиль',
        },
    ];

    return (
        <PageContainer footer={<FooterDefault />} title="Редактировать профиль">
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <UserInformation />
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
};

export default UserInformationPage;
