import React from 'react';

import BreadCrumb from '@/../../components/elements/BreadCrumb';
import EditAddress from '@/../../components/partials/account/EditAddress';
import FooterDefault from '@/../../components/shared/footers/FooterDefault';
import Newletters from '@/../../components/partials/commons/Newletters';
import PageContainer from '@/../../components/layouts/PageContainer';

const EditAddressPage = () => {
    const breadCrumb = [
        {
            text: 'Домой',
            url: '/',
        },
        {
            text: 'Изменить адрес',
        },
    ];
    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Изменить адрес">
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <EditAddress />
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default EditAddressPage;
