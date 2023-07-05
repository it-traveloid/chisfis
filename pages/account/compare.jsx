import React from 'react';
import BreadCrumb from '@/../../components/elements/BreadCrumb';
import Compare from '@/../../components/partials/account/Compare';
import FooterDefault from '@/../../components/shared/footers/FooterDefault';
import Newletters from '@/../../components/partials/commons/Newletters';
import PageContainer from '@/../../components/layouts/PageContainer';

const ComparePage = () => {
    const breadCrumb = [
        {
            text: 'Домой',
            url: '/',
        },
        {
            text: 'Сравнить',
        },
    ];
    return (
        <PageContainer footer={<FooterDefault />} title="Сравнить">
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Compare />
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
};

export default ComparePage;
