import React from 'react';
import { useRouter } from "next/router";

import BreadCrumb from '@/../../components/elements/BreadCrumb';
import Login from '@/../../components/partials/account/Login';
import Logged from '@/../../components/partials/account/Logged';
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
	
	    const { error } = useRouter().query;


    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Вход">
                <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
					 <Login error={error}/>
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default LoginPage;
