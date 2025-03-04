import React from 'react';
import ThumbnailDefault from '@/components/elements/detail/thumbnail/ThumbnailDefault';
import DescriptionFullContent from '@/components/elements/detail/description/DescriptionFullContent';
import ModuleDetailShoppingActionsSidebar from '@/components/elements/detail/modules/ModuleDetailShoppingActionsSidebar';
import ModuleDetailTopInformation from '@/components/elements/detail/modules/ModuleDetailTopInformation';
import ModuleProductDetailDescription from '@/components/elements/detail/modules/ModuleProductDetailDescription';
import ModuleProductDetailSpecification from '@/components/elements/detail/modules/ModuleProductDetailSpecification';
import ModuleProductDetailSharing from '@/components/elements/detail/modules/ModuleProductDetailSharing';
import ModuleDetailActionsMobile from '@/components/elements/detail/modules/ModuleDetailActionsMobile';

const ProductDetailFullContent = ({ product }) => {
    let priceView;
    if (product) {
	    // console.log(product.rating)
		
        if (product.is_sale === true) {
            priceView = (
                <h4 className="ps-product__price sale">
                    <del className="mr-2">{product.sale_price} руб.</del> 
                    {product.price} руб.
                </h4>
            );
        } else {
            priceView = <h4 className="ps-product__price">{product.price} руб.</h4>;
        }
        return (
            <div className="ps-product--detail ps-product--full-content">
                <div className="ps-product__top">
                    <div className="ps-product__header">
                        <ThumbnailDefault product={product} vertical={false} />
                        <div className="ps-product__info">
                            <ModuleDetailTopInformation product={product} />
                            <ModuleProductDetailDescription product={product} />
                            <ModuleProductDetailSpecification  product={product} />
                            <ModuleProductDetailSharing  product={product} />
                            <ModuleDetailActionsMobile  product={product} />
                        </div>
                    </div>
                    <div className="ps-product__price-right">
                        {priceView}
                        <ModuleDetailShoppingActionsSidebar product={product} />
                    </div>
                </div>
                <DescriptionFullContent  product={product}/>
            </div>
        );
    }
};

export default ProductDetailFullContent;
