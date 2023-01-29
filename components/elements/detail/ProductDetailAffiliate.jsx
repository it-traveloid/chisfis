import React from 'react';
import ThumbnailDefault from '~/components/elements/detail/thumbnail/ThumbnailDefault';
import ModuleDetailTopInformation from '~/components/elements/detail/modules/ModuleDetailTopInformation';
import ModuleProductDetailDescription from '~/components/elements/detail/modules/ModuleProductDetailDescription';
import ModuleProductDetailSpecification from '~/components/elements/detail/modules/ModuleProductDetailSpecification';
import ModuleProductDetailSharing from '~/components/elements/detail/modules/ModuleProductDetailSharing';
import ModuleDetailActionsMobile from '~/components/elements/detail/modules/ModuleDetailActionsMobile';
import DefaultDescription from '~/components/elements/detail/description/DefaultDescription';

const ProductDetailAffiliate = ({ product }) => {
    return (
        <div className="ps-product--detail ps-product--fullwidth">
            <div className="ps-product__header">
                <ThumbnailDefault product={product} />
                <div className="ps-product__info">
                    <ModuleDetailTopInformation product={product} />
                    <ModuleProductDetailDescription product={product} />
                    <div className="ps-product__shopping">
                        <a
                            className="ps-btn"
                            href="https://www.ozon.ru/product/c5-tactical-goggles-zashchitnye-ochki-dlya-strelby-4-smennye-linzy-763402999/?advert=eYtKgUPfRyBxAeUM4HXvTSxh8i3yl5cNzppgWR6iNeaHrh5ulxWp-Lc5AqnhC29f6eqSTc6tM2uUZe6LYfoYq26MUhYEt1zJb7UoCdMKWwFCswxPlFdHsCoJHG4dljct-fU7awM2Rb9P1EVv9tasr5esfeGP4ADZPtllsAaLy7iITDbE9k3lerFkNCKn01miMSyCjlQ_QXxRXVGO-K7e23R-A9UePyQhMHStIRrIQHX_wxt2xdeHyl0Ncw1jpqNwiLtjrvhu-bmGF-uQ5umzMDu1IBYL-LofWJc9r4_sgOLVfVYjPGpFbW5BhrYW0ZNcRZHttBWPfHlBvYgCOn-Q3euRSViBzqKKZcE98KP9LQEghzb_tLi2BBfGGZUg59sBF-3NWs7nCAmykJpCyzcC3kwCwccZ1CIvLMAdlmDKO0-V8n5etzg6MV6scxc2gTE5_U9hBIxn2lC30Dklffib8HqvqypxTCcoyMCxHFObTF6_Ph3qH8x_krWuVoTmcmD2MDeIEDgJLWAiqRb8CVOFq5WjlUqhWxnYWE7WWRaj8VoBqzkQRbsg41r6OMafuL5dT_Uwyr-pRQtv9JPnY_htqW58I6i2F8g_o6X1nGSEcb9QMp21JZlDx6TRYLJf53Yext-p_zyo1-QQ0KuXpwXYl5QS8yhY0mnfwLyDOigCQA0M68nszh28dj4UDDUKFDYaUELMamWLcy7x1lgBuMxaeKvHaE5sRfAByoaX_7f45nLdxxCPExWY8uGumm-Vqe1m8KM7tdLw5sAjNVzWR9XSow&avtc=1&avte=2&avts=1673523047&keywords=%D0%B2%D0%BE%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5+%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B5%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%BD%D1%8B%D0%B5+%D0%BE%D1%87%D0%BA%D0%B8+%D0%BF%D0%BE%D0%BB%D1%8F%D1%80%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F+%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%B0&sh=M8Ze5CVCsg"
                            target="_blank">
                            Покупка на Ozon
                        </a>
                        <div className="ps-product__actions">
                            <a href="#">
                                <i className="icon-heart"></i>
                            </a>
                            <a href="#">
                                <i className="icon-chart-bars"></i>
                            </a>
                        </div>
                    </div>
                    <ModuleProductDetailSpecification />
                    <ModuleProductDetailSharing />
                    <ModuleDetailActionsMobile />
                </div>
            </div>
            <DefaultDescription />
        </div>
    );
};

export default ProductDetailAffiliate;
