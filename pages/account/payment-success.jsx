import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import Link from 'next/link';
import ModulePaymentOrderSummary from '~/components/partials/account/modules/ModulePaymentOrderSummary';

const PaymentSuccessPage = () => {
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
            text: 'Платеж успешен',
        },
    ];

    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Платеж">
                <div className="ps-page--simple">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <div className="ps-checkout ps-section--shopping">
                        <div className="container">
                            <div className="ps-section__header">
                                <h1>Платёж успешен</h1>
                            </div>
                            <div className="ps-section__content">
                                <div className="row">
                                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                        <div className="ps-block--payment-success">
                                            <div className="ps-block__content">
                                                <h3>
                                                    Спасибо! Ваш заказ
                                                    обрабатывается.
                                                </h3>
                                                <p>
                                                    Ваш заказ номер{' '}
                                                    <strong>123</strong>
                                                </p>
                                                <p>
                                                    На email будет отправлена
                                                    информация о вашей покупке,
                                                    если у вас есть вопросы о
                                                    вашем заказе, напишите нас
                                                    на{' '}
                                                    <a
                                                        href="mailto@contact@martfury.com"
                                                        className="ps-highlight">
                                                        <strong>
                                                            contact@martfury.com
                                                        </strong>
                                                    </a>
                                                </p>
                                            </div>
                                            <div className="ps-block__bottom">
                                                <Link href="/">
                                                    <a className="ps-btn">
                                                        <i className="icon-arrow-left mr-2"></i>
                                                        Назад в магазин
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
                                        <div className="ps-form__orders">
                                            <ModulePaymentOrderSummary />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default PaymentSuccessPage;
