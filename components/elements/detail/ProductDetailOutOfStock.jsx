import React from 'react';

import ThumbnailDefault from '@/components/elements/detail/thumbnail/ThumbnailDefault';
import ModuleDetailTopInformation from '@/components/elements/detail/modules/ModuleDetailTopInformation';
import ModuleProductDetailSpecification from '@/components/elements/detail/modules/ModuleProductDetailSpecification';
import ModuleProductDetailSharing from '@/components/elements/detail/modules/ModuleProductDetailSharing';
import ModuleDetailActionsMobile from '@/components/elements/detail/modules/ModuleDetailActionsMobile';
import DefaultDescription from '@/components/elements/detail/description/DefaultDescription';

const ProductDetailOutOfStock = ({ product }) => (
    <div className="ps-product--detail ps-product--fullwidth">
        <div className="ps-product__header">
            <ThumbnailDefault product={product} />
            <div className="ps-product__info">
                <ModuleDetailTopInformation product={product} />
                <div className="ps-product__desc">
                    <p>
                        Продавец:
                        <a className="mr-20" href="shop-default.html">
                            <strong> Globle Office</strong>
                        </a>
                        Наличие:
                        <a href="shop-default.html">
                            <strong className="ps-tag--out-stock">
                                {' '}
                                Нет в наличии
                            </strong>
                        </a>
                    </p>
                    <ul className="ps-list--dot">
                        <li>
                            {' '}
                            Ничем не ограниченный портативный активный стереодинамик
                        </li>
                        <li> Не ограниченный проводами и без каких либо привязок</li>
                        <li> 20 часов портативных возможностей</li>
                        <li>
                            {' '}
                            Двусторонний спиральный шнур со стереофоническим 
                                разъемом 3,5 мм в комплекте
                        </li>
                        <li> 3/4" купольные твитеры: 2шт и 4" низкочастотный динамик: 1шт</li>
                    </ul>
                </div>
                {/*<ModuleProductDetailDescription product={product} />*/}
                {/*<ModuleDetailShoppingActions product={product} />*/}
                <ModuleProductDetailSpecification />
                <ModuleProductDetailSharing />
                <ModuleDetailActionsMobile />
            </div>
        </div>
        <DefaultDescription />
    </div>
);

export default ProductDetailOutOfStock;
