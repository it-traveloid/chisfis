import React from 'react';
import BreadCrumb from '@/../../components/elements/BreadCrumb';
import Notifications from '@/../../components/partials/account/Notifications';
import PageContainer from '@/../../components/layouts/PageContainer';
import FooterDefault from '@/../../components/shared/footers/FooterDefault';
import Newletters from '@/../../components/partials/commons/Newletters';

const AccountNotificationsPage = () => {
    const breadCrumb = [
        {
            text: 'Главная',
            url: '/',
        },
        {
            text: 'Уведомления',
        },
    ];
    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Уведомления">
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <Notifications />
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default AccountNotificationsPage;
