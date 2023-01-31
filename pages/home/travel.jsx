import React from 'react';
// import OrganicBanner from '~/components/partials/homepage/organic/OrganicBanner';
// import OrganicSiteFeatures from '~/components/partials/homepage/organic/OrganicSiteFeatures';
// import OrganicTopCategories from '~/components/partials/homepage/organic/OrganicTopCategories';
// import OrganicPromotions from '~/components/partials/homepage/organic/OrganicPromotions';
// import ProductGroupDealHot from '~/components/partials/product/ProductGroupDealHot';
// import OrganicNewArrivals from '~/components/partials/homepage/organic/OrganicNewArrivals';
// import OrganicClientSay from '~/components/partials/homepage/organic/OrganicClientSay';
// import OrganicBlog from '~/components/partials/homepage/organic/OrganicBlog';

import PageContainer from '~/components/layouts/PageContainer';
import HeaderOrganic from '~/components/shared/headers/HeaderOrganic';
import HeaderMobileOrganic from '~/components/shared/headers/HeaderMobileOrganic';
import FooterSecond from '~/components/shared/footers/FooterSecond';

import SectionHero from "~/components/travel/components/SectionHero/SectionHero";
import SectionSliderNewCategories from "~/components/travel/components/SectionSliderNewCategories/SectionSliderNewCategories";
import BgGlassmorphism from "~/components/travel/components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "~/components/travel/components/BackgroundSection/BackgroundSection";
import SectionGridFeaturePlaces from "~/components/travel/containers/PageHome/SectionGridFeaturePlaces";
import SectionOurFeatures from "~/components/travel/components/SectionOurFeatures/SectionOurFeatures";
import SectionVideos from '~/components/travel/containers/PageHome/SectionVideos';
import SectionHowItWork from "~/components/travel/components/SectionHowItWork/SectionHowItWork";
import SectionClientSay from "~/components/travel/components/SectionClientSay/SectionClientSay";
import { TaxonomyType } from "../../data/types";



import SectionBecomeAnAuthor from "~/components/travel/components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionGridCategoryBox from "~/components/travel/components/SectionGridCategoryBox/SectionGridCategoryBox";
import SectionSubscribe2 from "~/components/travel/components/SectionSubscribe2/SectionSubscribe2";

const HomeOrganicPage = () => {

    const headers = (
        <>
            <HeaderOrganic />
            <HeaderMobileOrganic />
        </>
    );
    const footer = <FooterSecond classes="ps-footer--organic" />;
    return (
        <PageContainer
            header={headers}
            footer={footer}
            title="Homepage Travel">

            <div className="nc-PageHome relative overflow-hidden">
                {/* GLASSMOPHIN */}
                <BgGlassmorphism />

                <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                    {/* SECTION HERO */}
                    <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />

                    {/* SECTION 1 */}
                    <SectionSliderNewCategories
                        categories={DEMO_CATS}
                        uniqueClassName="PageHome_s1"
                    />

                    {/* SECTION2 */}
                    <SectionOurFeatures />

                    {/* SECTION */}
                    <div className="relative py-16">
                        <BackgroundSection />
                        <SectionGridFeaturePlaces />
                    </div>

                    {/* SECTION */}
                    <SectionHowItWork />

                    {/* SECTION 1 */}
                    {/* <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionSliderNewCategories
            categories={DEMO_CATS_2}
            categoryCardType="card4"
            itemPerRow={4}
            heading="Suggestions for discovery"
            subHeading="Popular places to stay that Chisfis recommends for you"
            sliderStyle="style2"
            uniqueClassName="PageHome_s2"
          />
        </div> */}

                    {/* SECTION */}
                    <SectionSubscribe2 />

                    {/* SECTION */}
                    {/* <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div> */}

                    {/* SECTION */}
                    {/* <SectionGridCategoryBox /> */}

                    {/* SECTION */}
                    <div className="relative py-16">
                        <BackgroundSection />
                        {/* <SectionBecomeAnAuthor /> */}
                    </div>

                    {/* SECTION 1 */}
                    {/* <SectionSliderNewCategories
                        heading="Explore by types of stays"
                        subHeading="Explore houses based on 10 types of stays"
                        categoryCardType="card5"
                        itemPerRow={5}
                        uniqueClassName="PageHome_s3"
                    /> */}

                    {/* SECTION */}
                    <SectionVideos />

                    {/* SECTION */}
                    <div className="relative py-16">
                        <BackgroundSection />
                        <SectionClientSay uniqueClassName="PageHome_" />
                    </div>
                </div>
            </div>

            {/* <OrganicBanner />
            <OrganicSiteFeatures />
            <OrganicTopCategories />
            <OrganicPromotions />
            <ProductGroupDealHot collectionSlug="organic-products" />
            <OrganicNewArrivals collectionSlug="organic-products" />
            <OrganicClientSay />
            <OrganicBlog /> */}

        </PageContainer>
    );
};

export default HomeOrganicPage;
