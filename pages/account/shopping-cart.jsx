import React, { useEffect } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import { connect } from 'react-redux';
import useEcomerce from '~/hooks/useEcomerce';
import ModuleEcomerceCartItems from '~/components/ecomerce/modules/ModuleEcomerceCartItems';
import Link from 'next/link';
import ModuleCartSummary from '~/components/ecomerce/modules/ModuleCartSummary';

const ShoppingCartScreen = ({ ecomerce }) => {
    const { products, getProducts } = useEcomerce();

    useEffect(() => {
        if (ecomerce.cartItems) {
            getProducts(ecomerce.cartItems, 'cart');
        }
    }, [ecomerce]);

    const breadCrumb = [
        {
            text: 'Домой',
            url: '/',
        },
        {
            text: 'Корзина',
        },
    ];

    // View
    let contentView;
    if (products) {
        if (products.length > 0) {
            contentView = (
                <>
                    <div className="ps-section__content">
                        <ModuleEcomerceCartItems cartItems={products} />
                        <div className="ps-section__cart-actions">
                            <Link href="/shop">
                                <a className="ps-btn">Назад в магазин</a>
                            </Link>
                        </div>
                    </div>
                    <div className="ps-section__footer">
                        <div className="row justify-space-between">
                            <div className="col-xl-8 col-lg-4 col-md-12 col-sm-12 col-12 ">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <figure>
                                            <figcaption>
                                                Купон на скидку
                                            </figcaption>
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Enter coupon here..."
                                                />
                                            </div>
                                            <div className="form-group">
                                                <button className="ps-btn ps-btn--outline">
                                                    Применить
                                                </button>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                                <ModuleCartSummary source={products} />
                                <Link href="/account/checkout">
                                    <a className="ps-btn ps-btn--fullwidth">
                                    Перейти к оформлению заказа
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else {
            contentView = (
                <>
                    <div className="ps-section__content">
                        <div className="alert alert-info">
                            <p className="mb-0">
                            Ваша корзина на данный момент пуста.
                            </p>
                        </div>

                        <div className="ps-section__cart-actions">
                            <Link href="/shop">
                                <a className="ps-btn">Назад в магазин</a>
                            </Link>
                        </div>
                    </div>
                </>
            );
        }
    } else {
    }

    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Shopping Cart">
                <div className="ps-page--simple">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <div className="ps-section--shopping ps-shopping-cart">
                        <div className="container">
                            <div className="ps-section__header">
                                <h1>Корзина</h1>
                            </div>
                            {contentView}
                        </div>
                    </div>
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default connect((state) => state)(ShoppingCartScreen);
