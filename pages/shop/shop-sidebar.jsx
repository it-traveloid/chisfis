import React from 'react';
import WidgetShopCategories from '@/../../components/shared/widgets/WidgetShopCategories';
import WidgetShopBrands from '@/../../components/shared/widgets/WidgetShopBrands';
import WidgetShopFilterByPriceRange from '@/../../components/shared/widgets/WidgetShopFilterByPriceRange';
import ShopItems from '@/../../components/partials/shop/ShopItems';
import ProductGroupByCarousel from '@/../../components/partials/product/ProductGroupByCarousel';
import BreadCrumb from '@/../../components/elements/BreadCrumb';
import ShopSidebarBanner from '@/../../components/partials/shop/ShopSidebarBanner';
import PageContainer from '@/../../components/layouts/PageContainer';
import FooterDefault from '@/../../components/shared/footers/FooterDefault';
import Newletters from '@/../../components/partials/commons/Newletters';

const ShopSidebarPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop Sidebar',
        },
    ];
    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Shop Sidebar">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="ps-page--shop" id="shop-sidebar">
                    <div className="container">
                        <div className="ps-layout--shop">
                            <div className="ps-layout__left">
                                <WidgetShopCategories />
                                <WidgetShopBrands />
                                <WidgetShopFilterByPriceRange />
                            </div>
                            <div className="ps-layout__right">
                                <div className="ps-page__header">
                                    <h1>Боковая панель магазина</h1>
                                    <ShopSidebarBanner />
                                </div>
                                <ProductGroupByCarousel
                                    collectionSlug="shop-best-seller-items"
                                    title="Best Sale Items"
                                />
                                <ShopItems columns={4} pageSize={12} />
                            </div>
                        </div>
                    </div>
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default ShopSidebarPage;
